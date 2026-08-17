import { events } from "../data/weddingData.js";

function pad2(n) {
  return String(n).padStart(2, "0");
}

function toICSDate(date) {
  return (
    date.getUTCFullYear() +
    pad2(date.getUTCMonth() + 1) +
    pad2(date.getUTCDate()) +
    "T" +
    pad2(date.getUTCHours()) +
    pad2(date.getUTCMinutes()) +
    "00Z"
  );
}

export function downloadICS(eventKey) {
  const ev = events[eventKey];
  if (!ev) return;

  const start = toICSDate(new Date(ev.icsStart));
  const end = toICSDate(new Date(ev.icsEnd));

  const isIOS = /iP(hone|ad|od)/.test(navigator.userAgent);
  const isAndroid = /Android/.test(navigator.userAgent);

  if (isAndroid) {
    // Google Calendar's own link format opens directly into the Calendar
    // app on Android with the event pre-filled — no file download at all.
    const gcalUrl =
      "https://calendar.google.com/calendar/render?action=TEMPLATE" +
      "&text=" + encodeURIComponent(ev.title + " — Charishma & Vinay Kumar") +
      "&dates=" + start + "/" + end +
      "&details=" + encodeURIComponent(ev.quote) +
      "&location=" + encodeURIComponent(ev.venue);
    window.location.href = gcalUrl;
    return;
  }

  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Charishma-Vinay-Wedding//EN",
    "BEGIN:VEVENT",
    "UID:" + eventKey + "-charishma-vinay@wedding",
    "DTSTAMP:" + toICSDate(new Date()),
    "DTSTART:" + start,
    "DTEND:" + end,
    "SUMMARY:" + ev.title + " — Charishma & Vinay Kumar",
    "LOCATION:" + ev.venue,
    "DESCRIPTION:" + ev.quote,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");

  if (isIOS) {
    // iOS Safari opens the native "Add to Calendar" sheet directly when it
    // navigates to a text/calendar data URI — no download step needed.
    window.location.href = "data:text/calendar;charset=utf-8," + encodeURIComponent(ics);
    return;
  }

  // Desktop fallback: download the .ics file for the user to open in
  // whatever calendar app they use.
  const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = eventKey + "-charishma-vinay.ics";
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 4000);
}