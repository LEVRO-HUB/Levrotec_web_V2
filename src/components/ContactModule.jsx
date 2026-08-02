import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiChevronLeft, FiChevronRight, FiCheckCircle, FiPhone, FiMessageCircle } from 'react-icons/fi'
import { CALL_HOST } from '../data/team.js'
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, buildNotifyMailto } from '../data/contact.js'
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
    const mailto = buildNotifyMailto('New Call Booking Request — Levrotec', [
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

function MessageForm() {
  const [form, setForm] = useState({ fullName: '', email: '', phone: '', message: '', nda: '', consent: false })
  const [submitted, setSubmitted] = useState(false)

  const update = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: value }))
  }

  const canSubmit = form.fullName.trim() && form.email.trim() && form.message.trim() && form.consent

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    const mailto = buildNotifyMailto('New Website Enquiry — Levrotec', [
      `Name: ${form.fullName}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || 'Not provided'}`,
      `Needs NDA: ${form.nda === 'yes' ? 'Yes' : form.nda === 'no' ? 'No' : 'Not specified'}`,
      '',
      'Message:',
      form.message,
    ])
    window.location.href = mailto
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="scheduler-confirmed">
        <FiCheckCircle className="confirmed-icon" />
        <h3>Message sent!</h3>
        <p>Thanks for reaching out, {form.fullName.split(' ')[0] || 'there'}. We've opened an email to our team with your message — send it to confirm, and we'll get back to you within one business day.</p>
        <button
          type="button"
          className="btn btn-outline btn-sm"
          onClick={() => { setSubmitted(false); setForm({ fullName: '', email: '', phone: '', message: '', nda: '', consent: false }) }}
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
        <label htmlFor="fullName">Full Name*</label>
        <input id="fullName" type="text" required value={form.fullName} onChange={update('fullName')} placeholder="Jane Doe" />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Email*</label>
          <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="jane@company.com" />
        </div>
        <div className="field">
          <label htmlFor="phone">Phone Number</label>
          <input id="phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="+1 (555) 000-0000" />
        </div>
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

      <label className="checkbox-option">
        <input type="checkbox" checked={form.consent} onChange={update('consent')} required />
        <span>I agree to the <Link to="/privacy-policy" target="_blank">Privacy Policy</Link> and consent to being contacted by Levrotec.*</span>
      </label>

      <button type="submit" className="btn btn-primary submit-btn" disabled={!canSubmit}>
        Submit
      </button>
    </form>
  )
}

export default function ContactModule() {
  const [mode, setMode] = useState('call')

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
