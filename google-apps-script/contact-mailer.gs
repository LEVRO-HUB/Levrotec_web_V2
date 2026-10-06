/**
 * Levrotec website mailer — Google Apps Script web app.
 *
 * Receives form submissions from the website (ContactModule) and emails them
 * to the team immediately. Optionally logs each one to a Google Sheet.
 *
 * SETUP (once, from a Levrotec Google account):
 *   1. https://script.google.com  ->  New project  ->  paste this file as Code.gs
 *   2. Deploy  ->  New deployment  ->  type "Web app"
 *        Execute as:      Me
 *        Who has access:  Anyone
 *   3. Authorise when asked, then copy the Web app URL (ends in /exec)
 *   4. Paste that URL into FORM_ENDPOINT in src/data/contact.js and redeploy the site
 *
 * After editing this script later: Deploy -> Manage deployments -> Edit -> Version: New version.
 */

// Everyone who should receive website submissions.
const RECIPIENTS = [
  'cj.levro@gmail.com',
  'ackerman.levro@gmail.com',
  'mathivanan.levro@gmail.com',
  'tharundev.levro@gmail.com',
  'hariharan.levro@gmail.com',
];

// Optional: ID of a Google Sheet to log every submission to (leave '' to skip).
const SHEET_ID = '';

const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;
const ALLOWED_ATTACHMENT = /\.(pdf|doc|docx)$/i;

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const subject = String(data.subject || '').slice(0, 200);
    const body = String(data.body || '').slice(0, 10000);
    if (!subject || !body) throw new Error('Missing subject or body');

    const options = { name: 'Levrotec Website' };
    const replyTo = String(data.replyTo || '').trim();
    if (/^[^\s@,;]+@[^\s@,;]+\.[^\s@,;]+$/.test(replyTo)) options.replyTo = replyTo;

    const att = data.attachment;
    if (att && att.data && ALLOWED_ATTACHMENT.test(String(att.name || ''))) {
      const bytes = Utilities.base64Decode(att.data);
      if (bytes.length > MAX_ATTACHMENT_BYTES) throw new Error('Attachment too large');
      options.attachments = [Utilities.newBlob(bytes, att.type || 'application/octet-stream', String(att.name).slice(0, 120))];
    }

    MailApp.sendEmail(RECIPIENTS.join(','), subject, body, options);

    if (SHEET_ID) {
      SpreadsheetApp.openById(SHEET_ID).getSheets()[0]
        .appendRow([new Date(), subject, replyTo, body, options.attachments ? att.name : '']);
    }
    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err && err.message || err) });
  }
}

// Lets you open the /exec URL in a browser to confirm the deployment is live.
function doGet() {
  return json({ ok: true, service: 'levrotec-contact-mailer' });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
