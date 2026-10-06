export const PHONE_DISPLAY = '+91 733 883 1885'
export const PHONE_TEL = 'tel:+917338831885'
export const WHATSAPP_URL = 'https://wa.me/917338831885'
export const LINKEDIN_URL = 'https://www.linkedin.com/company/levrotec/people/?facetNetwork=F'

// Every form submission is addressed to all co-founders simultaneously —
// there's no backend mailer yet, so ContactModule opens a pre-filled
// mailto: with every address in the "to" line.
export const NOTIFY_EMAILS = [
  'cj.levro@gmail.com',
  'ackerman.levro@gmail.com',
  'mathivanan.levro@gmail.com',
  'tharundev.levro@gmail.com',
  'hariharan.levro@gmail.com',
]

export function buildNotifyMailto(subject, bodyLines) {
  const to = NOTIFY_EMAILS.join(',')
  const params = new URLSearchParams({
    subject,
    body: bodyLines.join('\n'),
  })
  return `mailto:${to}?${params.toString().replace(/\+/g, '%20')}`
}

// Web-app URL of the Google Apps Script mailer (see google-apps-script/contact-mailer.gs).
// When set, every form submission is emailed to the team directly on Submit.
// While it is empty, forms fall back to opening a pre-filled email draft.
export const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxSkI0TXI9U2SnHkwosTd0ZEVVuT1Mq7_SrW9mryl0s1Sl-mWzM9lxOOffuyXFXKJqg/exec'

/**
 * Sends a form submission to the team. Resolves to 'sent' when the mailer
 * delivered it, or 'draft' when no endpoint is configured and a mail draft
 * was opened instead. Throws if the mailer could not send.
 */
export async function sendNotification({ subject, bodyLines, replyTo, attachment }) {
  if (!FORM_ENDPOINT) {
    window.location.href = buildNotifyMailto(subject, bodyLines)
    return 'draft'
  }
  // text/plain keeps this a "simple" request, which Apps Script web apps accept without a CORS preflight.
  const res = await fetch(FORM_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify({ subject, body: bodyLines.join('\n'), replyTo, attachment }),
  })
  const data = await res.json().catch(() => null)
  if (!res.ok || !data?.ok) throw new Error(data?.error || 'Send failed')
  return 'sent'
}
