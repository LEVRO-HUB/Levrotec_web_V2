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
