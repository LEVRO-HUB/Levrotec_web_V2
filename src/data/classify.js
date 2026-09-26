// Classifies an incoming website message as "Enquiry", "Job Application" or
// "Other" from its text. It only labels — nothing is deleted or altered. The
// label goes into the email subject as a "[Category]" prefix so a single mail
// rule (e.g. Gmail: subject contains "[Job Application]" → label) separates them.
//
// Scoring: each matched phrase adds its weight to that category. A category
// wins only with a clear signal (score >= MIN_SCORE) AND a clear lead over the
// other (>= MARGIN). Anything weaker, or a near tie, is "Other" — never a guess.

export const CATEGORY = { ENQUIRY: 'Enquiry', JOB: 'Job Application', OTHER: 'Other' }

const MIN_SCORE = 3
const MARGIN = 2

// [pattern, weight] — 3 = unmistakable on its own, 1 = supporting evidence.
const JOB_SIGNALS = [
  [/\b(resume|résumé|curriculum vitae|cv)\b/, 3],
  [/\bcover letter\b/, 3],
  [/\b(apply|applying|applied|application)\s+(for|to)\b/, 3],
  [/\b(job|jobs|career|careers)\s+(opening|openings|opportunity|opportunities|vacanc(y|ies))\b/, 3],
  [/\b(vacanc(y|ies)|internships?)\b/, 3],
  [/\blooking for (a |an )?(job|internship|opportunit(y|ies)|role|position|work)\b/, 3],
  [/\b(notice period|current ctc|expected ctc|expected salary|current salary)\b/, 3],
  [/\b(open|available) (position|positions|role|roles)\b/, 2],
  [/\b(fresher|freshers|candidate|graduate|recent graduate)\b/, 1],
  [/\b(my|his|her) (skills|experience|background|profile|portfolio|qualification|qualifications)\b/, 1],
  [/\b\d+\+? years? of experience\b/, 1],
  [/\b(hire me|consider me|join (your|the) team|join levrotec|work (at|with) levrotec)\b/, 2],
  [/\b(job|jobs|hiring)\b/, 1],
]

const ENQUIRY_SIGNALS = [
  [/\b(quote|quotation|pricing|price|prices|cost|estimate|budget|proposal|rfp)\b/, 3],
  [/\b(partnership|partner with|collaborat(e|ion)|reseller|vendor)\b/, 3],
  [/\b(our|my) (company|business|startup|project|product|website|platform|app|organisation|organization|institution|college|school|university|team|clients?)\b/, 2],
  [/\bwe (need|want|are looking for|require|would like)\b/, 2],
  [/\b(i|we) (need|want|require) (a|an|to build|to develop|help)\b/, 2],
  [/\b(build|develop|develops|development|design|redesign|migrate|migration|integrat(e|ion)|automate|automation)\b/, 1],
  [/\b(services?|saas|mvp|devops|consulting|consultancy|digital marketing|software|solution|solutions)\b/, 1],
  [/\b(demo|consultation|requirements?|scope|timeline|deliverables?|nda|invoice|contract|sla|support)\b/, 2],
  [/\b(zaptude|tabilo|case stud(y|ies))\b/, 1],
]

const score = (text, signals) => signals.reduce((sum, [re, w]) => sum + (re.test(text) ? w : 0), 0)

/**
 * @param {string} text  subject and/or body text
 * @param {{ jobHint?: boolean }} [opts]  jobHint: the sender came from a careers
 *   "Apply now" link — a strong (but still scored) job signal.
 */
export function classifyMessage(text, { jobHint = false } = {}) {
  const t = String(text || '').toLowerCase()
  const job = score(t, JOB_SIGNALS) + (jobHint ? 3 : 0)
  const enquiry = score(t, ENQUIRY_SIGNALS)

  if (job >= MIN_SCORE && job - enquiry >= MARGIN) return CATEGORY.JOB
  if (enquiry >= MIN_SCORE && enquiry - job >= MARGIN) return CATEGORY.ENQUIRY
  return CATEGORY.OTHER
}

export const subjectFor = (category, base) => `[${category}] ${base}`
