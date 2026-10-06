import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiCheckCircle, FiPhone, FiMessageCircle } from 'react-icons/fi'
import { CALL_HOST } from '../data/team.js'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, buildNotifyMailto } from '../data/contact.js'
import { CATEGORY, subjectFor } from '../data/classify.js'
import './ContactModule.css'

const WEEKDAY_LABELS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const TIME_SLOTS = ['9:00 AM', '10:30 AM', '12:00 PM', '2:00 PM', '3:30 PM', '5:00 PM']

function buildCalendarCells(cursor) {
  const year = cursor.getFullYear()
  const month = cursor.getMonth()
  const startWeekday = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells = Array(startWeekday).fill(null)
  for (let d = 1; d <= daysInMonth; d += 1) cells.push(new Date(year, month, d))
  return cells
}

function isAvailable(date) {
  if (!date) return false
  const today = new Date()
  today.setHours(0, 0, 0, 0)
  const day = date.getDay()
  return date >= today && day !== 0 && day !== 6
}

function sameDate(a, b) {
  return a && b && a.toDateString() === b.toDateString()
}

function CallScheduler() {
  const today = useMemo(() => new Date(), [])
  const [cursor, setCursor] = useState(new Date(today.getFullYear(), today.getMonth(), 1))
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [requester, setRequester] = useState({ name: '', email: '' })
  const [confirmed, setConfirmed] = useState(false)

  const updateRequester = (key) => (e) => setRequester((r) => ({ ...r, [key]: e.target.value }))

  const canConfirm = selectedDate && selectedTime && requester.name.trim() && requester.email.trim()

  const handleConfirm = () => {
    if (!canConfirm) return
    const mailto = buildNotifyMailto(subjectFor(CATEGORY.ENQUIRY, 'New Call Booking Request — Levrotec'), [
      `Requested by: ${requester.name} (${requester.email})`,
      `Host: ${CALL_HOST.name} — ${CALL_HOST.role}`,
      `Requested date: ${selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}`,
      `Requested time: ${selectedTime}`,
    ])
    window.location.href = mailto
    setConfirmed(true)
  }

  const cells = useMemo(() => buildCalendarCells(cursor), [cursor])
  const monthLabel = cursor.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  const minCursor = new Date(today.getFullYear(), today.getMonth(), 1)

  const goMonth = (delta) => {
    const next = new Date(cursor.getFullYear(), cursor.getMonth() + delta, 1)
    if (next < minCursor) return
    setCursor(next)
    setSelectedDate(null)
    setSelectedTime(null)
  }

  if (confirmed) {
    return (
      <div className="scheduler-confirmed">
        <FiCheckCircle className="confirmed-icon" />
        <h3>You're booked!</h3>
        <p>
          Your call with <strong>{CALL_HOST.name}</strong> is set for{' '}
          <strong>{selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</strong> at{' '}
          <strong>{selectedTime}</strong>.
        </p>
        <p className="scheduler-confirmed-note">We've opened an email to our team with your request — send it to confirm, or we'll follow up directly.</p>
        <button
          type="button"
          className="btn btn-outline btn-sm"
          onClick={() => { setConfirmed(false); setSelectedDate(null); setSelectedTime(null); setRequester({ name: '', email: '' }) }}
        >
          Book another time
        </button>
      </div>
    )
  }

  return (
    <>
      <div className="scheduler-host">
        <div className="scheduler-avatar" aria-hidden="true">{CALL_HOST.initials}</div>
        <div>
          <p className="scheduler-host-name">{CALL_HOST.name}</p>
          <p className="scheduler-host-role">{CALL_HOST.role}</p>
        </div>
      </div>

      <p className="scheduler-intro">
        Pick a date that works for you, and let's talk about your project — no pressure, no scripts.
      </p>

      <div className="calendar">
        <div className="calendar-nav">
          <button type="button" onClick={() => goMonth(-1)} aria-label="Previous month" disabled={cursor.getMonth() === minCursor.getMonth() && cursor.getFullYear() === minCursor.getFullYear()}>
            <FiChevronLeft />
          </button>
          <span>{monthLabel}</span>
          <button type="button" onClick={() => goMonth(1)} aria-label="Next month">
            <FiChevronRight />
          </button>
        </div>

        <div className="calendar-weekdays">
          {WEEKDAY_LABELS.map((w) => <span key={w}>{w}</span>)}
        </div>

        <div className="calendar-grid">
          {cells.map((date, i) => {
            const available = isAvailable(date)
            const selected = sameDate(date, selectedDate)
            return (
              <button
                type="button"
                key={i}
                disabled={!available}
                className={`calendar-cell ${!date ? 'is-empty' : ''} ${available ? 'is-available' : ''} ${selected ? 'is-selected' : ''}`}
                onClick={() => { setSelectedDate(date); setSelectedTime(null) }}
              >
                {date ? date.getDate() : ''}
              </button>
            )
          })}
        </div>
      </div>

      {selectedDate && (
        <div className="time-slots">
          <p className="time-slots-label">
            Available times — {selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
          </p>
          <div className="time-slots-grid">
            {TIME_SLOTS.map((slot) => (
              <button
                type="button"
                key={slot}
                className={`time-slot ${selectedTime === slot ? 'is-selected' : ''}`}
                onClick={() => setSelectedTime(slot)}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedDate && selectedTime && (
        <div className="field-row requester-fields">
          <div className="field">
            <label htmlFor="requesterName">Your Name*</label>
            <input id="requesterName" type="text" value={requester.name} onChange={updateRequester('name')} placeholder="Jane Doe" />
          </div>
          <div className="field">
            <label htmlFor="requesterEmail">Your Email*</label>
            <input id="requesterEmail" type="email" value={requester.email} onChange={updateRequester('email')} placeholder="jane@company.com" />
          </div>
        </div>
      )}

      <button
        type="button"
        className="btn btn-primary confirm-btn"
        disabled={!canConfirm}
        onClick={handleConfirm}
      >
        Confirm Booking
      </button>
    </>
  )
}

// The sender picks the purpose up front, so every submission is explicitly
// typed (no guessing from the message text). `category` reuses the existing
// "[Category]" subject prefix that mail rules already filter on.
const PURPOSES = {
  job: {
    label: 'Job Application',
    type: 'JOB APPLICATION',
    heading: 'NEW LEVROTEC APPLICATION',
    category: CATEGORY.JOB,
    subject: 'New Job Application — Levrotec',
  },
  enquiry: {
    label: 'General Enquiry',
    type: 'GENERAL ENQUIRY',
    heading: 'NEW LEVROTEC CONTACT',
    category: CATEGORY.ENQUIRY,
    subject: 'New Website Enquiry — Levrotec',
  },
}

const DIVIDER = '--------------------------------'
const orNotProvided = (value) => value.trim() || 'Not provided'

function MessageForm() {
  // Careers "Apply now" links arrive as /contact?topic=job&role=<title>.
  const [params] = useSearchParams()
  const jobHint = params.get('topic') === 'job'
  const emptyForm = {
    fullName: '', email: '', phone: '', company: '',
    position: (jobHint && params.get('role')) || '', experience: '', resumeLink: '',
    message: '', nda: '', consent: false,
  }
  const [purpose, setPurpose] = useState(jobHint ? 'job' : null)
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const update = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: value }))
  }

  const isJob = purpose === 'job'
  const canSubmit = purpose && form.fullName.trim() && form.email.trim() && form.consent
    && (isJob ? form.position.trim() : form.message.trim())

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    const { type, heading, category, subject } = PURPOSES[purpose]
    const details = isJob
      ? [
          `Position: ${form.position}`,
          `Experience: ${orNotProvided(form.experience)}`,
          `Resume: ${form.resumeLink.trim() || 'To be attached to this email'}`,
        ]
      : [
          `Company: ${orNotProvided(form.company)}`,
          `Needs NDA: ${form.nda === 'yes' ? 'Yes' : form.nda === 'no' ? 'No' : 'Not specified'}`,
        ]
    const mailto = buildNotifyMailto(subjectFor(category, subject), [
      DIVIDER,
      heading,
      `Type: ${type}`,
      DIVIDER,
      '',
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Phone: ${orNotProvided(form.phone)}`,
      ...details,
      '',
      'Message:',
      orNotProvided(form.message),
    ])
    window.location.href = mailto
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="scheduler-confirmed">
        <FiCheckCircle className="confirmed-icon" />
        <h3>{isJob ? 'Application ready!' : 'Message sent!'}</h3>
        {isJob ? (
          <p>Thanks for applying, {form.fullName.split(' ')[0] || 'there'}. We've opened an email to our team with your application — attach your resume and send it to confirm.</p>
        ) : (
          <p>Thanks for reaching out, {form.fullName.split(' ')[0] || 'there'}. We've opened an email to our team with your message — send it to confirm, and we'll get back to you within one business day.</p>
        )}
        <button
          type="button"
          className="btn btn-outline btn-sm"
          onClick={() => { setSubmitted(false); setForm(emptyForm) }}
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form className="message-form" onSubmit={handleSubmit}>
      <h3 className="message-form-title">Write to Us</h3>

      <div className="field">
        <span className="field-legend" id="purposeLegend">What can we help you with?*</span>
        <div className="purpose-options" role="radiogroup" aria-labelledby="purposeLegend">
          {Object.entries(PURPOSES).map(([key, { label }]) => (
            <button
              type="button"
              key={key}
              role="radio"
              aria-checked={purpose === key}
              className={`purpose-option ${purpose === key ? 'is-selected' : ''}`}
              onClick={() => setPurpose(key)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {purpose && (
        <div className="message-form purpose-fields" key={purpose}>
          <div className="field">
            <label htmlFor="fullName">Full Name*</label>
            <input id="fullName" type="text" required value={form.fullName} onChange={update('fullName')} placeholder="Jane Doe" />
          </div>

          <div className="field-row">
            <div className="field">
              <label htmlFor="email">Email*</label>
              <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder={isJob ? 'jane@email.com' : 'jane@company.com'} />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone Number</label>
              <input id="phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="+1 (555) 000-0000" />
            </div>
          </div>

          {isJob ? (
            <>
              <div className="field-row">
                <div className="field">
                  <label htmlFor="position">Position*</label>
                  <input id="position" type="text" required value={form.position} onChange={update('position')} placeholder="e.g. Frontend Engineer" />
                </div>
                <div className="field">
                  <label htmlFor="experience">Experience</label>
                  <input id="experience" type="text" value={form.experience} onChange={update('experience')} placeholder="e.g. Fresher, 1 year" />
                </div>
              </div>

              <div className="field">
                <label htmlFor="resumeLink">Resume / Portfolio Link</label>
                <input id="resumeLink" type="text" value={form.resumeLink} onChange={update('resumeLink')} placeholder="Drive, LinkedIn or portfolio URL" />
                <span className="field-hint">No link? Attach your resume to the email that opens when you submit.</span>
              </div>

              <div className="field">
                <label htmlFor="message">Anything you'd like us to know?</label>
                <textarea id="message" rows={4} value={form.message} onChange={update('message')} placeholder="A short note about your skills, projects, or why this role..." />
              </div>
            </>
          ) : (
            <>
              <div className="field">
                <label htmlFor="company">Company / Organisation</label>
                <input id="company" type="text" value={form.company} onChange={update('company')} placeholder="ABC Hotels" />
              </div>

              <div className="field">
                <label htmlFor="message">How can we help you?*</label>
                <textarea id="message" required rows={4} value={form.message} onChange={update('message')} placeholder="Tell us a bit about your project or idea..." />
              </div>

              <div className="field">
                <span className="field-legend">Do you need our NDA?</span>
                <div className="radio-group">
                  <label className="radio-option">
                    <input type="radio" name="nda" value="yes" checked={form.nda === 'yes'} onChange={update('nda')} />
                    Yes
                  </label>
                  <label className="radio-option">
                    <input type="radio" name="nda" value="no" checked={form.nda === 'no'} onChange={update('nda')} />
                    No
                  </label>
                </div>
              </div>
            </>
          )}

          <label className="checkbox-option">
            <input type="checkbox" checked={form.consent} onChange={update('consent')} required />
            <span>I agree to the <Link to="/privacy-policy" target="_blank">Privacy Policy</Link> and consent to being contacted by Levrotec.*</span>
          </label>

          <button type="submit" className="btn btn-primary submit-btn" disabled={!canSubmit}>
            {isJob ? 'Submit Application' : 'Submit'}
          </button>
        </div>
      )}
    </form>
  )
}

export default function ContactModule() {
  // Careers "Apply now" links (?topic=job) open straight on the form, not the call scheduler.
  const [params] = useSearchParams()
  const [mode, setMode] = useState(params.get('topic') === 'job' ? 'message' : 'call')

  return (
    <div className="contact-module card glass">
      <div className="contact-module-panel">
        {mode === 'call' ? <CallScheduler /> : <MessageForm />}
      </div>

      <div className="contact-module-switch">
        {mode === 'call' ? (
          <button type="button" className="btn btn-text" onClick={() => setMode('message')}>
            Send a message <FiArrowRight className="arrow" />
          </button>
        ) : (
          <button type="button" className="btn btn-text" onClick={() => setMode('call')}>
            Book a call <FiArrowRight className="arrow" />
          </button>
        )}
      </div>

      <div className="contact-module-quickline">
        <a href={PHONE_TEL}><FiPhone /> {PHONE_DISPLAY}</a>
        <a href={WHATSAPP_URL} target="_blank" rel="noreferrer"><FiMessageCircle /> Chat on WhatsApp</a>
      </div>
    </div>
  )
}
