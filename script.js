```javascript
"use strict";

// Zodiac sign data and astrology-inspired interpretations.
const signs = [
  {
    name: "Capricorn", symbol: "♑",
    dates: "December 22 – January 19",
    element: "Earth", modality: "Cardinal",
    description: "Associated with patience, responsibility, and long-term thinking. This archetype invites you to build steadily while leaving room for joy.",
    strengths: "Persistence, practical wisdom, and turning big ambitions into manageable steps.",
    reminder: "Progress does not need to be perfect to be meaningful. Rest is part of building something that lasts."
  },
  {
    name: "Aquarius", symbol: "♒",
    dates: "January 20 – February 18",
    element: "Air", modality: "Fixed",
    description: "Associated with originality, independent thought, and community-minded ideas. Make room for fresh perspectives.",
    strengths: "Curiosity, inventive thinking, and seeing possibilities beyond the usual path.",
    reminder: "You can honor your individuality and still let others support you."
  },
  {
    name: "Pisces", symbol: "♓",
    dates: "February 19 – March 20",
    element: "Water", modality: "Mutable",
    description: "Associated with imagination, sensitivity, and compassion. Listen to your inner world while staying grounded.",
    strengths: "Empathy, imagination, and noticing emotional details that others may miss.",
    reminder: "Compassion includes you, too. Boundaries can protect your softness."
  },
  {
    name: "Aries", symbol: "♈",
    dates: "March 21 – April 19",
    element: "Fire", modality: "Cardinal",
    description: "Associated with initiative, courage, and directness. Begin boldly while making space to pause and listen.",
    strengths: "Enthusiasm, decisive action, and willingness to take the first step.",
    reminder: "You do not have to do everything at once. Thoughtful pacing makes courage sustainable."
  },
  {
    name: "Taurus", symbol: "♉",
    dates: "April 20 – May 20",
    element: "Earth", modality: "Fixed",
    description: "Associated with steadiness, sensory appreciation, and loyalty. Nurture what matters without becoming stuck in familiar patterns.",
    strengths: "Dependability, patience, and making everyday moments feel rich and grounding.",
    reminder: "Comfort can restore you, and change can nourish you too."
  },
  {
    name: "Gemini", symbol: "♊",
    dates: "May 21 – June 20",
    element: "Air", modality: "Mutable",
    description: "Associated with communication, adaptability, and curiosity. Follow questions while giving your attention room to settle.",
    strengths: "Quick learning, playful communication, and connecting ideas or people.",
    reminder: "You do not need to explore every possibility today. Choosing one thing can create freedom."
  },
  {
    name: "Cancer", symbol: "♋",
    dates: "June 21 – July 22",
    element: "Water", modality: "Cardinal",
    description: "Associated with care, memory, and emotional awareness. Make room for feeling while tending to your own needs.",
    strengths: "Loyalty, emotional attentiveness, and creating a sense of welcome for others.",
    reminder: "You can care deeply without carrying everything. Ask for the support you offer others."
  },
  {
    name: "Leo", symbol: "♌",
    dates: "July 23 – August 22",
    element: "Fire", modality: "Fixed",
    description: "Associated with warmth, creative expression, and generosity. Share your light without needing constant applause.",
    strengths: "Creative confidence, generosity, and encouraging others to shine.",
    reminder: "Your worth does not depend on being impressive. You are allowed to be a beginner."
  },
  {
    name: "Virgo", symbol: "♍",
    dates: "August 23 – September 22",
    element: "Earth", modality: "Mutable",
    description: "Associated with discernment, craft, and practical care. Improve what matters without expecting perfection.",
    strengths: "Careful observation, thoughtful problem-solving, and showing care through useful actions.",
    reminder: "Not everything needs fixing. Sometimes being present is more helpful than finding a solution."
  },
  {
    name: "Libra", symbol: "♎",
    dates: "September 23 – October 22",
    element: "Air", modality: "Cardinal",
    description: "Associated with fairness, beauty, and partnership. Seek harmony without setting aside your own preferences.",
    strengths: "Diplomacy, aesthetic sensitivity, and seeing more than one side of a question.",
    reminder: "Your own needs belong in the conversation. Peace should not require you to disappear."
  },
  {
    name: "Scorpio", symbol: "♏",
    dates: "October 23 – November 21",
    element: "Water", modality: "Fixed",
    description: "Associated with depth, focus, and transformation. Be honest about what is changing and what deserves your trust.",
    strengths: "Determination, emotional depth, and investigating what lies beneath the surface.",
    reminder: "You do not have to solve every mystery before moving forward."
  },
  {
    name: "Sagittarius", symbol: "♐",
    dates: "November 22 – December 21",
    element: "Fire", modality: "Mutable",
    description: "Associated with exploration, optimism, and the search for meaning. Stay adventurous while honoring real-life details.",
    strengths: "Open-mindedness, humor, and finding learning in unfamiliar experiences.",
    reminder: "Choosing a direction does not erase the many things you may discover along the way."
  }
];

const focusOptions = {
  growth: {
    title: "PERSONAL GROWTH",
    reading: "Choose a pace you can sustain. Review your commitments and make room for both ambition and recovery.",
    intention: "Choose one meaningful goal and define a small, kind next step you can take this week."
  },
  love: {
    title: "LOVE & CONNECTION",
    reading: "Practice clear conversations. Ask for what you need, listen generously, and respect each other's boundaries.",
    intention: "Reflect on how you give affection, receive care, and communicate your needs."
  },
  career: {
    title: "CAREER & PURPOSE",
    reading: "Identify one skill to strengthen and one realistic next step. Use real-world information for important career decisions.",
    intention: "Consider what meaningful work looks like to you now. Progress can come through learning and collaboration."
  },
  creativity: {
    title: "CREATIVITY & COURAGE",
    reading: "Make a small first version before judging the result. Let experimentation teach you more than perfectionism.",
    intention: "Give your curiosity somewhere to go. Try a new project or playful experiment."
  },
  wellbeing: {
    title: "REST & WELLBEING",
    reading: "Choose a supportive habit that feels realistic. For health concerns, rely on qualified healthcare professionals.",
    intention: "Notice what replenishes you and what leaves you stretched thin. Your energy deserves care."
  }
};

const form = document.getElementById("birth-form");
const dateInput = document.getElementById("birth-date");
const yearSelect = document.getElementById("birth-year");
const errorMessage = document.getElementById("error-message");
const results = document.getElementById("results");
const emptyState = document.getElementById("empty-state");

// Populate year choices automatically.
function initializeYears() {
  const currentYear = new Date().getFullYear();

  for (let year = currentYear - 2; year <= currentYear + 10; year++) {
    const option = document.createElement("option");
    option.value = year;
    option.textContent = year;

    if (year === currentYear) {
      option.selected = true;
    }

    yearSelect.appendChild(option);
  }

  document.getElementById("footer-year").textContent = currentYear;

  const today = new Date();
  dateInput.max = [
    today.getFullYear(),
    String(today.getMonth() + 1).padStart(2, "0"),
    String(today.getDate()).padStart(2, "0")
  ].join("-");
}

// Validate the date instead of relying only on the input field.
function isValidDate(year, month, day) {
  const date = new Date(year, month - 1, day);

  return date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day;
}

// Calculate the conventional Western tropical Sun sign.
// For boundary dates, a precise chart requires more detailed calculations.
function getSunSign(dateString) {
  const parts = dateString.split("-").map(Number);

  if (parts.length !== 3 || !isValidDate(parts[0], parts[1], parts[2])) {
    return null;
  }

  const month = parts[1];
  const day = parts[2];

  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return signs[0];
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return signs[1];
  if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) return signs[2];
  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return signs[3];
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return signs[4];
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return signs[5];
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return signs[6];
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return signs[7];
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return signs[8];
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return signs[9];
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return signs[10];

  return signs[11];
}

function formatBirthSummary(name, dateString, time, place, year) {
  const date = new Date(dateString + "T12:00:00");
  const readableDate = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(date);

  const details = [];

  if (name.trim()) details.push(name.trim());
  details.push("Born " + readableDate);
  if (time) details.push("Time " + time);
  if (place.trim()) details.push("Place " + place.trim());
  details.push("Reading year " + year);

  return details.join(" · ");
}

function displayReading(event) {
  event.preventDefault();
  errorMessage.textContent = "";

  const dateString = dateInput.value;
  const sign = dateString ? getSunSign(dateString) : null;

  if (!sign) {
    errorMessage.textContent = "Please enter a valid birthday.";
    dateInput.focus();
    return;
  }

  const now = new Date();
  const selectedYear = Number(yearSelect.value);

  if (dateString > [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-")) {
    errorMessage.textContent = "Your birthday cannot be in the future.";
    dateInput.focus();
    return;
  }

  const name = document.getElementById("full-name").value;
  const time = document.getElementById("birth-time").value;
  const place = document.getElementById("birth-place").value;
  const focusKey = document.getElementById("focus").value;
  const focus = focusOptions[focusKey] || focusOptions.growth;

  document.getElementById("result-year").textContent = "YEAR " + selectedYear;
  document.getElementById("sign-symbol").textContent = sign.symbol;
  document.getElementById("sign-name").textContent = sign.name;
  document.getElementById("sign-dates").textContent = sign.dates;
  document.getElementById("sign-element").textContent = sign.element;
  document.getElementById("sign-modality").textContent = sign.modality;
  document.getElementById("sign-description").textContent = sign.description;

  const yearTitles = [
    "A year to clarify your intentions",
    "A season of thoughtful beginnings",
    "A chapter for steady growth",
    "A year to explore new possibilities"
  ];

  document.getElementById("year-title").textContent =
    yearTitles[(selectedYear + sign.name.length) % yearTitles.length];

  document.getElementById("year-reading").textContent =
    selectedYear + " can be a useful prompt to reflect on your priorities, " +
    "relationships, and personal growth. " + sign.name +
    "'s traditional symbolism offers a lens for reflection, not a prediction " +
    "of what must happen.";

  document.getElementById("focus-title").textContent = focus.title;
  document.getElementById("focus-reading").textContent = focus.reading;
  document.getElementById("strengths").textContent = sign.strengths;
  document.getElementById("reminder").textContent = sign.reminder;
  document.getElementById("intention").textContent = focus.intention;

  document.getElementById("summary").textContent =
    formatBirthSummary(name, dateString, time, place, selectedYear);

  emptyState.hidden = true;
  results.hidden = false;

  results.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start"
  });
}

form.addEventListener("submit", displayReading);

document.getElementById("print-button").addEventListener("click", function () {
  window.print();
});

initializeYears();
```