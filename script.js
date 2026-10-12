
"use strict";

/* =========================================
   CELESTIA ASTROLOGY — BIRTH READING
   Works with the Celestia HTML element IDs
========================================= */

const signs = [
  {
    name: "Capricorn",
    symbol: "♑",
    dates: "December 22 – January 19",
    element: "Earth",
    modality: "Cardinal",
    personality: "You may value responsibility, steady progress, and practical goals. You often appreciate knowing where you are heading and what steps will get you there.",
    strengths: "Persistence, patience, loyalty, planning, and practical problem-solving.",
    challenges: "You may put too much pressure on yourself, focus heavily on achievements, or find it difficult to rest.",
    love: "Trust, consistency, and actions that match words may matter deeply to you. Honest communication helps relationships grow.",
    career: "You may enjoy structured goals, leadership, planning, or work where effort creates visible progress.",
    advice: "Remember that your value is not measured only by what you achieve. Give yourself permission to rest and enjoy the present."
  },
  {
    name: "Aquarius",
    symbol: "♒",
    dates: "January 20 – February 18",
    element: "Air",
    modality: "Fixed",
    personality: "You may be drawn to original ideas, independence, and looking at situations from a different perspective. You may appreciate freedom to explore your interests.",
    strengths: "Original thinking, curiosity, independence, innovation, and a sense of fairness.",
    challenges: "You may sometimes seem emotionally distant, resist restrictions, or become attached to your own ideas.",
    love: "Friendship, mutual respect, and room to be yourself may be important in a relationship.",
    career: "You may enjoy technology, research, creative problem-solving, social projects, or unconventional ideas.",
    advice: "Your individuality can coexist with emotional closeness. Let trusted people understand what you feel, not only what you think."
  },
  {
    name: "Pisces",
    symbol: "♓",
    dates: "February 19 – March 20",
    element: "Water",
    modality: "Mutable",
    personality: "You may connect with imagination, compassion, and emotional nuance. Creative activities and meaningful connections may feel especially rewarding.",
    strengths: "Empathy, imagination, intuition as a personal impression, adaptability, and creativity.",
    challenges: "You may sometimes take on others' worries, avoid difficult conversations, or need help establishing boundaries.",
    love: "Kindness, emotional safety, and feeling understood may be important to you. Clear boundaries help keep affection healthy.",
    career: "You may enjoy creative work, communication, helping professions, or projects that allow imagination and empathy.",
    advice: "Your needs matter as much as other people's needs. Make room for practical plans alongside your dreams."
  },
  {
    name: "Aries",
    symbol: "♈",
    dates: "March 21 – April 19",
    element: "Fire",
    modality: "Cardinal",
    personality: "You may be attracted to new challenges, direct communication, and opportunities to take initiative. Getting started may energize you.",
    strengths: "Courage, enthusiasm, initiative, decisiveness, and willingness to try.",
    challenges: "You may sometimes act before considering every detail, become impatient, or take on too much at once.",
    love: "Honesty, excitement, and showing affection openly may appeal to you. Listening is just as valuable as speaking directly.",
    career: "You may enjoy dynamic environments, launching projects, competition, entrepreneurship, or roles that reward initiative.",
    advice: "You do not need to rush to prove yourself. Pausing to plan can make your boldest ideas more successful."
  },
  {
    name: "Taurus",
    symbol: "♉",
    dates: "April 20 – May 20",
    element: "Earth",
    modality: "Fixed",
    personality: "You may appreciate stability, comfort, dependable relationships, and things built to last. You may prefer steady progress over unnecessary disruption.",
    strengths: "Reliability, patience, persistence, loyalty, and appreciation of beauty.",
    challenges: "You may sometimes resist change, hold on to familiar routines, or find it difficult to let go of a decision.",
    love: "Reliability, affection, trust, and spending meaningful time together may matter to you.",
    career: "You may enjoy practical projects, finance, design, crafts, organization, or work with clear long-term value.",
    advice: "Stability is useful, but you can change direction when your needs change. Growth does not mean losing what makes you feel grounded."
  },
  {
    name: "Gemini",
    symbol: "♊",
    dates: "May 21 – June 20",
    element: "Air",
    modality: "Mutable",
    personality: "You may enjoy learning, exchanging ideas, asking questions, and exploring different interests. Variety and conversation may help keep you engaged.",
    strengths: "Communication, curiosity, adaptability, quick learning, and connecting ideas.",
    challenges: "You may sometimes become distracted, overthink choices, or spread your attention across too many interests.",
    love: "Conversation, humor, curiosity, and mental connection may help you feel close to someone.",
    career: "You may enjoy writing, teaching, media, communication, sales, research, or work involving varied tasks.",
    advice: "Curiosity opens doors, but giving one worthwhile goal sustained attention can help turn ideas into results."
  },
  {
    name: "Cancer",
    symbol: "♋",
    dates: "June 21 – July 22",
    element: "Water",
    modality: "Cardinal",
    personality: "You may value emotional connection, familiarity, and making people feel cared for. A comfortable environment may help you feel settled.",
    strengths: "Loyalty, empathy, attentiveness, protectiveness, and remembering what matters to others.",
    challenges: "You may sometimes take things personally, withdraw when hurt, or give more care than you receive.",
    love: "Emotional security, consideration, and dependable affection may be important to you.",
    career: "You may enjoy supportive teams, education, hospitality, creative work, or roles where care and organization are useful.",
    advice: "Caring for others does not mean carrying every problem. State your needs and allow other people to support you."
  },
  {
    name: "Leo",
    symbol: "♌",
    dates: "July 23 – August 22",
    element: "Fire",
    modality: "Fixed",
    personality: "You may enjoy creative expression, warmth, generosity, and opportunities to share your talents. Appreciation can feel meaningful when it is genuine.",
    strengths: "Creativity, confidence, generosity, enthusiasm, and encouraging others.",
    challenges: "You may sometimes take criticism personally, feel pressure to impress, or find it hard to ask for reassurance.",
    love: "Warmth, affection, loyalty, and feeling appreciated may be especially meaningful to you.",
    career: "You may enjoy creative projects, presenting, leadership, entertainment, design, or work where you can inspire others.",
    advice: "You do not have to perform to deserve appreciation. Let yourself learn, make mistakes, and be authentic."
  },
  {
    name: "Virgo",
    symbol: "♍",
    dates: "August 23 – September 22",
    element: "Earth",
    modality: "Mutable",
    personality: "You may appreciate useful details, thoughtful planning, and opportunities to improve how things work. Helping in practical ways may feel rewarding.",
    strengths: "Observation, organization, reliability, careful thinking, and practical support.",
    challenges: "You may sometimes overanalyze, focus on flaws, or expect yourself to meet impossibly high standards.",
    love: "Consistency, thoughtful gestures, and being able to depend on each other may matter more than grand displays.",
    career: "You may enjoy analysis, editing, research, organization, health-related services, or detail-oriented projects.",
    advice: "Progress is not the same as perfection. Recognize what is already working before deciding what needs improvement."
  },
  {
    name: "Libra",
    symbol: "♎",
    dates: "September 23 – October 22",
    element: "Air",
    modality: "Cardinal",
    personality: "You may value fairness, cooperation, beauty, and relationships in which people listen to one another. You may naturally consider several sides of an issue.",
    strengths: "Diplomacy, perspective-taking, aesthetic appreciation, cooperation, and negotiation.",
    challenges: "You may sometimes delay decisions, avoid necessary disagreements, or prioritize other people's approval.",
    love: "Mutual respect, thoughtful communication, and a sense of partnership may be important to you.",
    career: "You may enjoy design, mediation, communication, teamwork, client relationships, or collaborative projects.",
    advice: "Harmony should include your voice, too. You can be considerate of others while expressing your own preferences clearly."
  },
  {
    name: "Scorpio",
    symbol: "♏",
    dates: "October 23 – November 21",
    element: "Water",
    modality: "Fixed",
    personality: "You may be interested in meaningful conversations, emotional depth, and understanding what lies beneath the surface. Trust may take time to develop.",
    strengths: "Determination, focus, loyalty, persistence, and willingness to investigate difficult questions.",
    challenges: "You may sometimes hold on to hurt, become guarded, or find uncertainty uncomfortable.",
    love: "Trust, honesty, emotional depth, and loyalty may be important to you. Healthy openness can strengthen closeness.",
    career: "You may enjoy research, investigation, strategy, analysis, or work requiring sustained concentration.",
    advice: "Protecting your boundaries is healthy, but you do not have to face every uncertainty alone. Allow trust to develop gradually."
  },
  {
    name: "Sagittarius",
    symbol: "♐",
    dates: "November 22 – December 21",
    element: "Fire",
    modality: "Mutable",
    personality: "You may enjoy exploration, learning, new experiences, and questions about meaning. A sense of possibility may motivate you.",
    strengths: "Optimism, openness, humor, adaptability, and enthusiasm for learning.",
    challenges: "You may sometimes become restless, overlook details, or commit to more than your schedule allows.",
    love: "Honesty, shared adventures, humor, and respecting each other's independence may matter to you.",
    career: "You may enjoy education, travel-related work, communication, entrepreneurship, or roles involving learning and variety.",
    advice: "Keep exploring, but give your most meaningful goals enough consistency to grow."
  }
];

const focusOptions = {
  growth: {
    title: "PERSONAL GROWTH",
    reading: "Choose a realistic goal and break it into manageable steps. Notice which habits support you and which commitments leave too little room for rest.",
    intention: "Write down one thing you want to learn and one small action you can take this week."
  },
  love: {
    title: "LOVE & CONNECTION",
    reading: "Make space for honest conversations, mutual respect, and clear boundaries. A healthy relationship depends on the choices and communication of both people.",
    intention: "Reflect on what helps you feel valued and how you can communicate that need kindly."
  },
  career: {
    title: "CAREER & PURPOSE",
    reading: "Consider which skills you want to build and what kind of work feels meaningful. Compare opportunities using practical information, not horoscope predictions alone.",
    intention: "Choose one skill to strengthen and identify a concrete next step toward a career goal."
  },
  creativity: {
    title: "CREATIVITY & COURAGE",
    reading: "Give yourself permission to experiment before expecting a perfect result. Small projects can help you discover what you enjoy and where you want to improve.",
    intention: "Set aside time for one creative idea without judging the first attempt."
  },
  wellbeing: {
    title: "REST & WELLBEING",
    reading: "Consider which everyday routines help you feel supported, rested, and organized. For medical or mental health concerns, seek qualified professional advice.",
    intention: "Choose one manageable act of self-care and make space for it in your routine."
  }
};

const $ = id => document.getElementById(id);

function getSunSign(dateString) {
  if (!dateString) return null;

  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  if (
    !year || !month || !day ||
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) return null;

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
  const date = new Date(`${dateString}T12:00:00`);
  const readableDate = new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(date);

  const details = [];
  if (name) details.push(name);
  details.push(`Born ${readableDate}`);
  if (time) details.push(`Birth time ${time}`);
  if (place) details.push(`Birthplace ${place}`);
  details.push(`Reading year ${year}`);

  return details.join(" · ");
}

function showError(message) {
  const error = $("form-error");
  if (!error) {
    alert(message);
    return;
  }
  error.textContent = message;
  error.hidden = false;
}

function displayReading(event) {
  event.preventDefault();

  const error = $("form-error");
  if (error) {
    error.textContent = "";
    error.hidden = true;
  }

  const dateInput = $("birth-date");
  const dateString = dateInput.value;
  const sign = getSunSign(dateString);

  if (!sign) {
    showError("Please enter a valid date of birth.");
    dateInput.focus();
    return;
  }

  const now = new Date();
  const todayString = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ].join("-");

  if (dateString > todayString) {
    showError("Your date of birth cannot be in the future.");
    dateInput.focus();
    return;
  }

  const yearSelect = $("reading-year");
  const selectedYear = Number(yearSelect.value) || now.getFullYear();
  const name = $("full-name").value.trim();
  const time = $("birth-time").value;
  const place = $("birth-place").value.trim();
  const focusKey = $("reading-focus").value;
  const focus = focusOptions[focusKey] || focusOptions.growth;

  // Main zodiac details
  $("year-pill").textContent = `YEAR ${selectedYear}`;
  $("zodiac-glyph").textContent = sign.symbol;
  $("zodiac-name").textContent = sign.name;
  $("zodiac-date-range").textContent = sign.dates;
  $("zodiac-element").textContent = sign.element;
  $("zodiac-modality").textContent = sign.modality;
  $("zodiac-description").textContent = sign.personality;

  // Year-ahead reflective reading
  const yearTitles = [
    "A year to clarify your intentions",
    "A season of thoughtful beginnings",
    "A chapter for steady growth",
    "A year to explore new possibilities"
  ];

  $("year-title").textContent =
    yearTitles[(selectedYear + sign.name.length) % yearTitles.length];

  $("year-intro").textContent =
    `${name ? `${name}, ` : ""}${selectedYear} can be an opportunity to reflect on your priorities, relationships, and personal growth. In traditional astrology, ${sign.name} is associated with themes of ${sign.element.toLowerCase()} energy and ${sign.modality.toLowerCase()} qualities. This is a reflection prompt, not a prediction.`;

  $("focus-icon").textContent = focusKey === "love" ? "♡" :
    focusKey === "career" ? "✦" :
    focusKey === "wellbeing" ? "☾" :
    focusKey === "creativity" ? "☼" : "✧";

  $("focus-label").textContent = focus.title;
  $("focus-text").textContent = focus.reading;
  $("strengths-text").textContent = sign.strengths;
  $("reminder-text").textContent = sign.challenges;
  $("intention-text").textContent = focus.intention;

  // Additional personal sections, if you add these IDs to your HTML
  const optionalFields = {
    "personality-text": sign.personality,
    "love-text": sign.love,
    "career-text": sign.career,
    "advice-text": sign.advice
  };

  Object.entries(optionalFields).forEach(([id, value]) => {
    const element = $(id);
    if (element) element.textContent = value;
  });

  $("birth-summary-text").textContent =
    formatBirthSummary(name, dateString, time, place, selectedYear);

  $("empty-state").hidden = true;
  $("reading-results").hidden = false;

  $("your-reading").scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? "auto"
      : "smooth",
    block: "start"
  });
}

function initializePage() {
  const yearSelect = $("reading-year");
  const now = new Date();
  const currentYear = now.getFullYear();

  // Populate the year dropdown only if it is empty.
  if (yearSelect && yearSelect.options.length === 0) {
    for (let year = currentYear - 2; year <= currentYear + 10; year++) {
      const option = document.createElement("option");
      option.value = String(year);
      option.textContent = String(year);
      if (year === currentYear) option.selected = true;
      yearSelect.appendChild(option);
    }
  }

  const dateInput = $("birth-date");
  if (dateInput) {
    dateInput.max = [
      currentYear,
      String(now.getMonth() + 1).padStart(2, "0"),
      String(now.getDate()).padStart(2, "0")
    ].join("-");
  }

  const footerYear = $("footer-year");
  if (footerYear) footerYear.textContent = String(currentYear);

  const form = $("birth-form");
  if (form) {
    form.addEventListener("submit", displayReading);
  } else {
    console.error(
      'Celestia: Form with id="birth-form" was not found. Check your index.html.'
    );
  }

  const printButton = $("print-button");
  if (printButton) {
    printButton.addEventListener("click", () => window.print());
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePage);
} else {
  initializePage();
}
