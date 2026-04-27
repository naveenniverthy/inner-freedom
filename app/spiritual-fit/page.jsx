"use client";

import { useMemo, useState } from "react";

const dimensions = [
  "jnana",
  "bhakti",
  "dhyana",
  "yoga",
  "karma",
  "structure",
  "intensity",
  "tradition"
];

const dimensionLabels = {
  jnana: "Clarity",
  bhakti: "Devotion",
  dhyana: "Meditation",
  yoga: "Yoga",
  karma: "Service",
  structure: "Structure",
  intensity: "Depth",
  tradition: "Tradition"
};

const reflectiveNotes = {
  jnana:
    "Your answers point toward clarity, inquiry, and study. A path with strong teaching and patient reflection may support you well now.",
  bhakti:
    "Your answers point toward devotion, surrender, and sacred atmosphere. A warm devotional community may nourish your heart.",
  dhyana:
    "Your answers point toward silence, meditation, and direct inner steadiness. A contemplative setting may be especially helpful.",
  yoga:
    "Your answers point toward embodied practice, breath, and discipline. A yoga-based path may give you a practical doorway.",
  karma:
    "Your answers point toward service and contribution. A path that joins inner growth with meaningful work may fit your nature.",
  structure:
    "Your answers point toward a need for clear guidance and rhythm. A structured institution may help you stay steady.",
  intensity:
    "Your answers point toward deep transformation and readiness for commitment. Stronger retreat or ashram settings may suit you.",
  tradition:
    "Your answers point toward lineage, scripture, and traditional forms. A classical institution may feel grounding."
};

const emptyScores = {
  jnana: 0,
  bhakti: 0,
  dhyana: 0,
  yoga: 0,
  karma: 0,
  structure: 0,
  intensity: 0,
  tradition: 0
};

function scores(values) {
  return { ...emptyScores, ...values };
}

const questions = [
  {
    id: "current_need",
    prompt: "What brings you here right now?",
    selectionMode: "multi",
    maxSelections: 2,
    helperText: "Choose up to two.",
    options: [
      ["Something feels missing in life", scores({ jnana: 2, dhyana: 1 })],
      ["I feel stressed or restless", scores({ dhyana: 2, yoga: 1 })],
      ["I want clarity about life and self", scores({ jnana: 3 })],
      ["I want discipline and structure", scores({ structure: 3, yoga: 1 })],
      ["I want devotion or connection to God", scores({ bhakti: 3, tradition: 1 })],
      ["I want deeper meditation experience", scores({ dhyana: 3, intensity: 1 })],
      ["I want to dedicate my life more fully", scores({ intensity: 3, tradition: 1, karma: 1 })]
    ]
  },
  {
    id: "path_expectation",
    prompt: "What do you expect from a spiritual path?",
    options: [
      ["Peace and emotional stability", scores({ dhyana: 2 })],
      ["Better focus and discipline", scores({ structure: 2, yoga: 1 })],
      ["Understanding and clarity", scores({ jnana: 3 })],
      ["Devotion and surrender", scores({ bhakti: 3, tradition: 1 })],
      ["Direct inner experience", scores({ dhyana: 2, intensity: 1 })],
      ["A complete way of living", scores({ intensity: 2, structure: 1, tradition: 1 })]
    ]
  },
  {
    id: "natural_temperament",
    prompt: "What feels most natural to you?",
    selectionMode: "multi",
    maxSelections: 2,
    helperText: "Choose up to two.",
    options: [
      ["Thinking and inquiry", scores({ jnana: 3 })],
      ["Prayer and devotion", scores({ bhakti: 3 })],
      ["Silence and meditation", scores({ dhyana: 3 })],
      ["Physical practice like yoga or breathwork", scores({ yoga: 3 })],
      ["Helping and service", scores({ karma: 3 })]
    ]
  },
  {
    id: "activity_draw",
    prompt: "Which activity draws you most?",
    options: [
      ["Listening to teachings", scores({ jnana: 2, structure: 1 })],
      ["Chanting or bhajans", scores({ bhakti: 3, tradition: 1 })],
      ["Sitting quietly in meditation", scores({ dhyana: 3 })],
      ["Yoga or pranayama", scores({ yoga: 3 })],
      ["Volunteering or service", scores({ karma: 3 })]
    ]
  },
  {
    id: "time_commitment",
    prompt: "How much time can you realistically commit?",
    options: [
      ["10-15 minutes daily", scores({ structure: 1 })],
      ["30-60 minutes daily", scores({ structure: 2 })],
      ["1-2 hours daily", scores({ structure: 2, intensity: 1 })],
      ["Weekend programs", scores({ structure: 1, intensity: 1 })],
      ["Residential retreats", scores({ intensity: 2, dhyana: 1 })],
      ["Long-term immersion", scores({ intensity: 3, tradition: 1 })]
    ]
  },
  {
    id: "depth",
    prompt: "What level of depth are you seeking?",
    options: [
      ["Just exploring", scores({ structure: 1 })],
      ["Basic understanding", scores({ jnana: 1, structure: 1 })],
      ["Regular practice", scores({ structure: 2 })],
      ["Deep transformation", scores({ intensity: 2, dhyana: 1 })],
      ["Complete life commitment", scores({ intensity: 3, tradition: 1 })]
    ]
  },
  {
    id: "life_situation",
    prompt: "Your current life situation:",
    options: [
      ["Busy professional", scores({ structure: 1, dhyana: 1 })],
      ["Student", scores({ jnana: 1, structure: 1 })],
      ["Family responsibilities", scores({ structure: 1, bhakti: 1 })],
      ["Semi-retired", scores({ jnana: 1, dhyana: 1, intensity: 1 })],
      ["Ready for full-time spiritual life", scores({ intensity: 3, tradition: 1 })]
    ]
  },
  {
    id: "lifestyle_fit",
    prompt: "What fits your lifestyle best?",
    options: [
      ["Flexible and self-paced", scores({ jnana: 1 })],
      ["Weekly structure", scores({ structure: 2 })],
      ["Daily discipline", scores({ structure: 3 })],
      ["Occasional retreats", scores({ intensity: 1, dhyana: 1 })],
      ["Ashram-style living", scores({ tradition: 2, intensity: 2 })]
    ]
  },
  {
    id: "learning_style",
    prompt: "How do you learn best?",
    selectionMode: "multi",
    maxSelections: 2,
    helperText: "Choose up to two.",
    options: [
      ["Structured teaching step by step", scores({ structure: 2, jnana: 1 })],
      ["Experience-based learning", scores({ dhyana: 1, yoga: 1 })],
      ["Devotional environment", scores({ bhakti: 2, tradition: 1 })],
      ["Self-study", scores({ jnana: 2 })],
      ["Community learning", scores({ karma: 1, structure: 1 })]
    ]
  },
  {
    id: "guidance_preference",
    prompt: "What kind of guidance do you prefer?",
    options: [
      ["Clear teacher explaining concepts", scores({ jnana: 2, structure: 2 })],
      ["Minimal guidance and self-exploration", scores({ dhyana: 1, jnana: 1 })],
      ["Guru-centered path", scores({ bhakti: 1, tradition: 2, intensity: 1 })],
      ["Group or community-based", scores({ karma: 1, structure: 1 })],
      ["Mixed approach", scores({ structure: 1, dhyana: 1, jnana: 1 })]
    ]
  },
  {
    id: "tradition_comfort",
    prompt: "What is your comfort with tradition?",
    options: [
      ["Very traditional, with scriptures and Sanskrit", scores({ tradition: 3, jnana: 1 })],
      ["Balanced traditional-modern", scores({ tradition: 1, structure: 1 })],
      ["Modern presentation", scores({ dhyana: 1, yoga: 1 })],
      ["Not sure", scores({ structure: 1 })]
    ]
  },
  {
    id: "environment",
    prompt: "What environment attracts you?",
    options: [
      ["Quiet ashram", scores({ dhyana: 1, tradition: 2, intensity: 1 })],
      ["Meditation center", scores({ dhyana: 3 })],
      ["Temple or devotional setting", scores({ bhakti: 3, tradition: 2 })],
      ["Urban center", scores({ structure: 1 })],
      ["Nature retreat", scores({ dhyana: 2, intensity: 1 })]
    ]
  },
  {
    id: "resonance",
    prompt: "Which statement resonates most?",
    options: [
      ["I want relief from problems", scores({ dhyana: 1 })],
      ["I want better habits", scores({ structure: 2 })],
      ["I want understanding", scores({ jnana: 2 })],
      ["I want truth, even if uncomfortable", scores({ jnana: 2, intensity: 2 })]
    ]
  },
  {
    id: "problems",
    prompt: "How do you relate to your problems?",
    options: [
      ["I want them solved", scores({ structure: 1 })],
      ["I want to manage them better", scores({ dhyana: 1, yoga: 1 })],
      ["I want to understand them", scores({ jnana: 2 })],
      ["I question the nature of the problem itself", scores({ jnana: 3, intensity: 1 })]
    ]
  },
  {
    id: "appeal",
    prompt: "Which appeals most?",
    selectionMode: "multi",
    maxSelections: 2,
    helperText: "Choose up to two.",
    options: [
      ["Study and reflection", scores({ jnana: 3 })],
      ["Devotion and prayer", scores({ bhakti: 3 })],
      ["Meditation and silence", scores({ dhyana: 3 })],
      ["Yoga and breathwork", scores({ yoga: 3 })],
      ["Service", scores({ karma: 3 })]
    ]
  },
  {
    id: "openness",
    prompt: "What are you open to?",
    selectionMode: "multi",
    allOptionIndex: 4,
    options: [
      ["Light daily practice", scores({ structure: 1 })],
      ["Discipline and routine", scores({ structure: 3 })],
      ["Silence and retreat", scores({ dhyana: 2, intensity: 1 })],
      ["Scriptural study", scores({ jnana: 2, tradition: 2 })],
      ["All of the above", scores({ jnana: 1, bhakti: 1, dhyana: 1, yoga: 1, karma: 1, structure: 1, intensity: 1, tradition: 1 })]
    ]
  },
  {
    id: "residential",
    prompt: "Are you open to residential programs?",
    options: [
      ["Yes", scores({ intensity: 2, tradition: 1 })],
      ["No", scores({ structure: 1 })],
      ["Maybe later", scores({ structure: 1, intensity: 1 })]
    ]
  },
  {
    id: "guru_centered",
    prompt: "Are you comfortable with a Guru-centered path?",
    options: [
      ["Yes", scores({ bhakti: 1, tradition: 2, intensity: 1 })],
      ["No", scores({ jnana: 1 })],
      ["Not sure", scores({ structure: 1 })]
    ]
  }
];

const institutions = [
  institution("arsha-vidya-gurukulam", "Arsha Vidya Gurukulam", "Traditional residential Vedanta study with a strong teacher-led method.", "Serious Vedanta seekers", null, [10, 3, 3, 2, 2, 10, 8, 10], ["vedanta", "traditional", "ashram", "residential"]),
  institution("dayananda-ashram-rishikesh", "Dayananda Ashram, Rishikesh", "A Rishikesh ashram rooted in Vedanta, Sanskrit, chanting, and disciplined study.", "Vedanta and ashram life", null, [10, 4, 4, 3, 3, 9, 8, 10], ["vedanta", "traditional", "ashram", "residential"]),
  institution("chinmaya-mission", "Chinmaya Mission", "Structured Vedanta and Gita study offered in a householder-friendly format.", "Householder-friendly Vedanta study", null, [9, 6, 3, 2, 5, 9, 6, 8], ["vedanta", "community", "traditional-modern"]),
  institution("sandeepany-sadhanalaya", "Sandeepany Sadhanalaya", "A committed Vedanta training environment with a clear curriculum and discipline.", "Structured Vedanta training", null, [9, 6, 3, 2, 5, 10, 8, 8], ["vedanta", "structured", "residential"]),
  institution("ramakrishna-mission", "Ramakrishna Mission", "A broad spiritual order joining Vedanta, devotion, education, and service.", "Seva, education, and broad spirituality", null, [8, 7, 5, 3, 10, 8, 7, 8], ["vedanta", "service", "community", "traditional"]),
  institution("divine-life-society", "Divine Life Society / Sivananda Ashram", "An integral ashram path blending Vedanta, yoga, devotion, meditation, and service.", "Integral spiritual life", null, [8, 7, 7, 8, 6, 8, 8, 9], ["yoga", "vedanta", "ashram", "traditional"]),
  institution("sivananda-yoga-vedanta", "Sivananda Yoga Vedanta Centers", "A yoga and Vedanta lifestyle path with asana, pranayama, chanting, and study.", "Yoga and Vedanta lifestyle", null, [7, 6, 6, 9, 4, 8, 7, 7], ["yoga", "vedanta", "structured"]),
  institution("vipassana-dhamma", "Vipassana / Dhamma.org", "Ten-day silent meditation courses with a clear discipline and minimal ritual.", "Silent meditation discipline", null, [3, 0, 10, 1, 2, 9, 10, 5], ["meditation", "silent", "retreat", "residential"], "The silence and schedule can be intense. Start only when you can follow the full course discipline."),
  institution("sri-ramanasramam", "Sri Ramanasramam", "A quiet, tradition-rich space for self-inquiry, silence, and devotion to Ramana Maharshi.", "Self-inquiry and silence", null, [10, 5, 9, 1, 2, 4, 8, 9], ["self-inquiry", "meditation", "traditional", "ashram"]),
  institution("isha-foundation", "Isha Foundation", "A modern yoga institution focused on inner experience, practice, and large-scale programs.", "Modern yoga and inner experience", null, [4, 6, 8, 9, 6, 7, 7, 5], ["yoga", "modern", "guru-centered", "community"]),
  institution("art-of-living", "Art of Living", "Breathwork, stress relief, satsang, and community programs for daily life.", "Stress relief, breathwork, and community", null, [3, 5, 7, 8, 6, 8, 5, 4], ["breathwork", "community", "modern"]),
  institution("amma-math", "Mata Amritanandamayi Math", "A devotional and service-oriented institution centered on compassion and seva.", "Devotion and seva", null, [5, 10, 5, 3, 9, 7, 7, 8], ["bhakti", "service", "guru-centered", "traditional"]),
  institution("iskcon", "ISKCON", "Krishna bhakti through chanting, worship, scripture, community, and disciplined practice.", "Bhakti, chanting, and Krishna devotion", null, [4, 10, 4, 1, 6, 8, 7, 9], ["bhakti", "chanting", "traditional", "guru-centered"]),
  institution("brahma-kumaris", "Brahma Kumaris", "Meditation and values-based living taught through centers and daily classes.", "Meditation and values-based living", null, [4, 4, 8, 1, 5, 8, 6, 4], ["meditation", "values", "structured"]),
  institution("osho-international", "Osho International", "Modern, experimental meditation methods with a less traditional presentation.", "Modern experimental meditation", null, [4, 2, 8, 5, 1, 5, 6, 1], ["meditation", "modern", "experimental"]),
  institution("parmarth-niketan", "Parmarth Niketan", "A Rishikesh ashram with Ganga worship, yoga, satsang, and retreat programs.", "Rishikesh ashram experience", null, [6, 8, 6, 7, 6, 7, 6, 8], ["ashram", "bhakti", "yoga", "traditional"]),
  institution("bihar-school-of-yoga", "Bihar School of Yoga", "A rigorous yogic training tradition with strong practice, theory, and discipline.", "Serious yogic training", null, [5, 4, 8, 10, 4, 9, 9, 8], ["yoga", "structured", "traditional", "residential"]),
  institution("kaivalyadhama", "Kaivalyadhama", "Classical yoga, therapy, and research with a disciplined teaching style.", "Yoga therapy and research", null, [5, 2, 6, 10, 3, 9, 7, 7], ["yoga", "research", "therapy", "structured"]),
  institution("krishnamacharya-yoga-mandiram", "Krishnamacharya Yoga Mandiram", "Personalized classical yoga rooted in breath, adaptation, and careful guidance.", "Personalized classical yoga", null, [5, 3, 5, 10, 3, 9, 6, 7], ["yoga", "classical", "structured"]),
  institution("iyengar-yoga-pune", "Iyengar Yoga Institute, Pune", "Precise asana training with strong attention to alignment and discipline.", "Precise asana discipline", null, [3, 2, 4, 10, 2, 10, 7, 6], ["yoga", "asana", "structured"]),
  institution("ashtanga-yoga-mysore", "Ashtanga Yoga Institute, Mysore", "A demanding asana tradition for strong physical discipline and steady practice.", "Strong physical discipline", null, [2, 2, 4, 10, 1, 8, 8, 5], ["yoga", "asana", "intense"]),
  institution("yogoda-satsanga", "Yogoda Satsanga Society", "Kriya Yoga meditation with devotional structure and long-term practice support.", "Kriya yoga meditation", null, [6, 6, 9, 4, 4, 9, 7, 7], ["meditation", "kriya", "guru-centered", "structured"]),
  institution("swami-rama-sadhaka-grama", "Swami Rama Sadhaka Grama", "Himalayan meditation training with a strong retreat and practice orientation.", "Himalayan meditation path", null, [6, 4, 9, 7, 3, 8, 8, 7], ["meditation", "yoga", "retreat", "residential"]),
  institution("sadhana-mandir", "Sadhana Mandir Ashram", "A quiet Himalayan ashram for meditation retreats and contemplative practice.", "Meditation retreats", null, [6, 4, 9, 6, 3, 7, 8, 7], ["meditation", "retreat", "ashram"]),
  institution("anandashram-kanhangad", "Anandashram, Kanhangad", "A devotional ashram centered on nama japa, simplicity, and remembrance of God.", "Nama japa and devotion", null, [4, 10, 7, 1, 4, 5, 7, 8], ["bhakti", "japa", "ashram", "traditional"]),
  institution("sri-aurobindo-ashram", "Sri Aurobindo Ashram", "Integral yoga, philosophy, and quiet practice in a contemplative community.", "Integral yoga and philosophy", null, [8, 5, 7, 2, 5, 6, 8, 6], ["integral-yoga", "philosophy", "community"]),
  institution("auroville", "Auroville", "A community experiment focused on human unity, work, ecology, and service.", "Community experiment and service", null, [5, 3, 5, 3, 8, 4, 6, 2], ["community", "service", "modern"]),
  institution("theosophical-society-adyar", "Theosophical Society, Adyar", "Comparative spiritual study in a reflective and intellectually open setting.", "Comparative spiritual study", null, [7, 2, 4, 1, 3, 5, 4, 3], ["study", "comparative", "modern"]),
  institution("vedanta-society", "Vedanta Society / Ramakrishna Order", "Vedanta teaching for modern seekers through study, worship, and contemplation.", "Vedanta for modern seekers", null, [9, 5, 5, 2, 5, 8, 6, 7], ["vedanta", "study", "community"]),
  institution("omkarananda-ashram", "Omkarananda Ashram", "Traditional Rishikesh study and practice with Vedanta, Sanskrit, and devotion.", "Traditional Rishikesh study", null, [7, 6, 5, 5, 5, 7, 6, 8], ["vedanta", "ashram", "traditional"]),
  institution("geeta-bhawan", "Geeta Bhawan, Rishikesh", "A devotional Gita environment with satsang, scripture, and pilgrimage atmosphere.", "Devotional Gita environment", null, [6, 8, 4, 3, 4, 5, 5, 8], ["bhakti", "gita", "traditional"]),
  institution("krishnamurti-foundation-india", "Krishnamurti Foundation India", "Inquiry into thought, conditioning, freedom, and observation without heavy ritual.", "Inquiry without heavy tradition", null, [8, 1, 7, 1, 3, 4, 6, 2], ["inquiry", "modern", "nontraditional"]),
  institution("tushita-meditation-centre", "Tushita Meditation Centre", "Tibetan Buddhist meditation and introductory retreats in a structured setting.", "Tibetan Buddhist meditation", null, [5, 4, 9, 1, 3, 8, 7, 7], ["buddhist", "meditation", "retreat"]),
  institution("root-institute", "Root Institute, Bodh Gaya", "Buddhist practice, meditation courses, and service near Bodh Gaya.", "Buddhist practice and service", null, [5, 5, 8, 1, 5, 8, 7, 7], ["buddhist", "meditation", "service"]),
  institution("namdroling-monastery", "Namdroling Monastery", "A Tibetan Buddhist monastic environment with devotion, ritual, and study.", "Tibetan Buddhist monastic path", null, [4, 8, 8, 1, 4, 8, 8, 10], ["buddhist", "monastic", "traditional", "residential"]),
  institution("mahabodhi-society", "Mahabodhi Society", "Buddhist devotion, study, pilgrimage, and service-oriented activity.", "Buddhist devotion and study", null, [5, 6, 7, 1, 5, 6, 6, 8], ["buddhist", "devotion", "study"]),
  institution("jain-vishva-bharati", "Jain Vishva Bharati", "Jain philosophy, ethics, meditation, and disciplined inner development.", "Jain philosophy and meditation", null, [6, 4, 7, 5, 5, 8, 7, 8], ["jain", "meditation", "study", "traditional"]),
  institution("preksha-meditation", "Preksha Meditation Centers", "Jain meditation practice focused on awareness, discipline, and inner refinement.", "Jain meditation practice", null, [4, 3, 9, 4, 3, 8, 6, 7], ["jain", "meditation", "structured"]),
  institution("swadhyaya-parivar", "Swadhyaya Parivar", "Devotional study and social upliftment through community practice and service.", "Devotion and social upliftment", null, [5, 8, 3, 1, 8, 6, 6, 8], ["bhakti", "service", "community"]),
  institution("baps-swaminarayan", "BAPS Swaminarayan", "Devotion, discipline, worship, service, and community within a traditional lineage.", "Devotion, discipline, and community", null, [5, 10, 4, 1, 8, 9, 7, 10], ["bhakti", "community", "guru-centered", "traditional"]),
  institution("patanjali-yogpeeth", "Patanjali Yogpeeth", "Yoga, pranayama, health education, and large-scale practice programs.", "Yoga, pranayama, and health", null, [3, 3, 5, 10, 5, 8, 5, 6], ["yoga", "pranayama", "health"]),
  institution("gurudev-siddha-peeth", "Gurudev Siddha Peeth", "Guru-centered meditation and devotional practice in the Siddha Yoga stream.", "Guru-centered meditation", null, [5, 8, 8, 2, 4, 7, 7, 7], ["meditation", "bhakti", "guru-centered"]),
  institution("ekam-oneness", "Ekam / Oneness", "Modern experiential spirituality focused on states, transformation, and connection.", "Modern experiential spirituality", null, [3, 5, 8, 2, 3, 6, 6, 2], ["modern", "experiential", "meditation"]),
  institution("sringeri-sharada-peetham", "Sringeri Sharada Peetham", "A classical Advaita lineage with strong scripture, tradition, and monastic depth.", "Traditional Advaita lineage", null, [10, 7, 4, 1, 4, 8, 9, 10], ["advaita", "traditional", "lineage", "guru-centered"]),
  institution("kanchi-kamakoti-peetham", "Kanchi Kamakoti Peetham", "Traditional dharma, worship, Sanskrit learning, and Vedanta lineage.", "Traditional dharma and Vedanta", null, [9, 8, 4, 1, 5, 8, 8, 10], ["vedanta", "traditional", "lineage", "guru-centered"]),
  institution("traditional-vaishnava-study", "Traditional Vaishnava Study Centers", "Bhakti and scripture study in classical Vaishnava settings.", "Bhakti and scripture study", null, [7, 10, 4, 1, 5, 8, 8, 10], ["bhakti", "scripture", "traditional", "guru-centered"]),
  institution("srivaishnava-srirangam", "Srivaishnava / Srirangam Study Centers", "Vishishtadvaita, temple culture, scripture, and devotional study.", "Vishishtadvaita and devotion", null, [7, 10, 4, 1, 5, 8, 8, 10], ["bhakti", "scripture", "traditional", "guru-centered"]),
  institution("advaita-ashrama", "Advaita Ashrama, Kolkata / Mayavati", "Advaita study, publications, and contemplative life in the Ramakrishna tradition.", "Advaita study in Ramakrishna tradition", null, [9, 4, 6, 1, 5, 7, 7, 8], ["advaita", "study", "traditional"]),
  institution("ramana-maharshi-foundation", "Ramana Maharshi Foundation / Centers", "Self-inquiry and Ramana-centered study for householders and local seekers.", "Self-inquiry for householders", null, [10, 4, 9, 1, 2, 5, 7, 7], ["self-inquiry", "meditation", "study"]),
  institution("local-sanskrit-vedanta-circles", "Local Sanskrit / Vedanta Study Circles", "A gentle local entry into Sanskrit, Vedanta, chanting, and steady study.", "Gentle entry into study", null, [8, 5, 3, 1, 4, 7, 4, 7], ["vedanta", "study", "local"])
];

function institution(id, name, shortDescription, bestFor, website, scoreList, tags, cautionNote = "") {
  return {
    id,
    name,
    shortDescription,
    bestFor,
    website,
    scores: Object.fromEntries(dimensions.map((dimension, index) => [dimension, scoreList[index]])),
    tags,
    cautionNote
  };
}

function addScores(total, addition) {
  return dimensions.reduce(
    (next, dimension) => ({
      ...next,
      [dimension]: total[dimension] + (addition[dimension] || 0)
    }),
    {}
  );
}

function scaleScores(scoreSet, weight) {
  return dimensions.reduce(
    (next, dimension) => ({
      ...next,
      [dimension]: (scoreSet[dimension] || 0) * weight
    }),
    {}
  );
}

function magnitude(vector) {
  return Math.sqrt(
    dimensions.reduce((sum, dimension) => sum + vector[dimension] * vector[dimension], 0)
  );
}

function dotProduct(first, second) {
  return dimensions.reduce(
    (sum, dimension) => sum + first[dimension] * second[dimension],
    0
  );
}

function answerLabel(question, selectedIndex) {
  if (Array.isArray(selectedIndex)) {
    return selectedIndex.map((index) => question.options[index]?.[0] || "");
  }
  if (selectedIndex === undefined) return "";
  return question.options[selectedIndex]?.[0] || "";
}

function calculateResults(answers) {
  const userVector = questions.reduce((total, question, index) => {
    const selectedAnswer = answers[index];

    if (Array.isArray(selectedAnswer)) {
      return selectedAnswer.reduce((multiTotal, selectedIndex, selectedPosition) => {
        const selectedScores = question.options[selectedIndex]?.[1] || emptyScores;
        const weight =
          question.maxSelections === 2 && selectedPosition === 1 ? 0.6 : 1;
        return addScores(multiTotal, scaleScores(selectedScores, weight));
      }, total);
    }

    const selectedScores = question.options[selectedAnswer]?.[1] || emptyScores;
    return addScores(total, selectedScores);
  }, emptyScores);

  const userMagnitude = magnitude(userVector) || 1;
  const strongestDimension = [...dimensions].sort(
    (a, b) => userVector[b] - userVector[a]
  )[0];

  const residentialAnswer = answerLabel(questions[16], answers[16]);
  const guruAnswer = answerLabel(questions[17], answers[17]);
  const traditionAnswer = answerLabel(questions[10], answers[10]);
  const depthAnswer = answerLabel(questions[5], answers[5]);

  const matches = institutions
    .map((item) => {
      const baseSimilarity =
        dotProduct(userVector, item.scores) / (userMagnitude * magnitude(item.scores));
      let adjusted = baseSimilarity;
      const adjustments = [];

      if (residentialAnswer === "No" && item.scores.intensity >= 8) {
        adjusted *= 0.88;
        adjustments.push("reduced for high residential or retreat intensity");
      }

      if (guruAnswer === "No" && item.tags.includes("guru-centered")) {
        adjusted *= 0.82;
        adjustments.push("reduced because it is more Guru-centered");
      }

      if (traditionAnswer === "Modern presentation" && item.scores.tradition >= 8) {
        adjusted *= 0.92;
        adjustments.push("reduced because it is tradition-heavy");
      }

      if (depthAnswer === "Just exploring" && item.scores.intensity >= 8) {
        adjusted *= 0.9;
        adjustments.push("reduced because it may be intense for early exploration");
      }

      return {
        ...item,
        match: Math.max(0, Math.min(99, Math.round(adjusted * 100))),
        adjustments
      };
    })
    .sort((a, b) => b.match - a.match);

  return {
    userVector,
    strongestDimension,
    dominantProfile: dimensionLabels[strongestDimension],
    reflectiveNote: reflectiveNotes[strongestDimension],
    topMatches: matches.slice(0, 3),
    nextMatches: matches.slice(3, 5),
    createdAt: new Date()
  };
}

function topDimensionsForInstitution(userVector, institutionScores) {
  return dimensions
    .map((dimension) => ({
      dimension,
      value: userVector[dimension] * institutionScores[dimension]
    }))
    .sort((a, b) => b.value - a.value)
    .slice(0, 3)
    .map((item) => dimensionLabels[item.dimension]);
}

function bestFirstStep(institutionItem) {
  if (institutionItem.tags.includes("retreat")) {
    return "Read the program expectations carefully and begin with a shorter retreat if available.";
  }
  if (institutionItem.tags.includes("vedanta") || institutionItem.tags.includes("study")) {
    return "Begin with an introductory talk, local study group, or short text-based course.";
  }
  if (institutionItem.tags.includes("yoga")) {
    return "Start with a beginner-friendly class and notice whether the discipline feels sustainable.";
  }
  if (institutionItem.tags.includes("bhakti")) {
    return "Attend a satsang, chanting session, or temple program before making a larger commitment.";
  }
  if (institutionItem.tags.includes("service")) {
    return "Try a small volunteer opportunity and observe whether service deepens your steadiness.";
  }
  return "Explore a public introduction first, then speak with a teacher or coordinator.";
}

function whyItFits(result, institutionItem) {
  const strongest = topDimensionsForInstitution(result.userVector, institutionItem.scores);
  return `It aligns with your ${strongest.join(", ").toLowerCase()} inclination and is best for ${institutionItem.bestFor.toLowerCase()}.`;
}

function escapePdfText(text) {
  return String(text)
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function wrapText(text, maxLength = 88) {
  const words = String(text).replace(/\s+/g, " ").trim().split(" ");
  const lines = [];
  let current = "";

  words.forEach((word) => {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxLength && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  });

  if (current) lines.push(current);
  return lines;
}

function createPdf(result) {
  const margin = 54;
  const pageHeight = 792;
  const bottomMargin = 76;
  const pages = [[]];
  let y = 742;

  function currentPage() {
    return pages[pages.length - 1];
  }

  function addLine(text, options = {}) {
    const size = options.size || 11;
    const leading = options.leading || size + 6;

    if (y < bottomMargin) {
      pages.push([]);
      y = 742;
    }

    currentPage().push({ text, x: margin, y, size, bold: options.bold });
    y -= leading;
  }

  function addWrapped(text, options = {}) {
    wrapText(text, options.maxLength || 88).forEach((line) => addLine(line, options));
  }

  addLine("Moksha Keys", { size: 20, bold: true, leading: 24 });
  addLine("Spiritual Institution Fit Assessment", { size: 13, leading: 18 });
  addLine("mokshakeys.com", { size: 10, leading: 30 });
  addLine(`Assessment date: ${result.createdAt.toLocaleDateString()}`, { size: 11, leading: 18 });
  addLine(`Dominant profile: ${result.dominantProfile}`, { size: 13, bold: true, leading: 22 });
  addWrapped(result.reflectiveNote, { size: 11, leading: 16 });
  y -= 10;
  addLine("Top 3 recommendations", { size: 15, bold: true, leading: 24 });

  result.topMatches.forEach((match, index) => {
    addLine(`${index + 1}. ${match.name} - ${match.match}% match`, {
      size: 13,
      bold: true,
      leading: 20
    });
    addWrapped(`Why it fits: ${whyItFits(result, match)}`, { size: 10, leading: 15 });
    addWrapped(`Best first step: ${bestFirstStep(match)}`, { size: 10, leading: 17 });
    y -= 6;
  });

  addLine("Also worth exploring", { size: 15, bold: true, leading: 22 });
  result.nextMatches.forEach((match) => {
    addWrapped(`${match.name} - ${match.match}% match. Best for ${match.bestFor}.`, {
      size: 10,
      leading: 15
    });
  });

  y -= 8;
  addWrapped(
    "Footer: This assessment is not a judgment of spiritual maturity. It is only a reflective guide based on your current needs and preferences.",
    { size: 9, leading: 14 }
  );
  addWrapped("Created by Moksha Keys | Five Keys to Inner Freedom", {
    size: 9,
    leading: 14
  });

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    `<< /Type /Pages /Kids [${pages.map((_, index) => `${3 + index * 2} 0 R`).join(" ")}] /Count ${pages.length} >>`
  ];

  pages.forEach((pageLines, index) => {
    const pageObjectNumber = 3 + index * 2;
    const contentObjectNumber = pageObjectNumber + 1;
    const content = [
      "BT",
      ...pageLines.map((line) => {
        const font = line.bold ? "F2" : "F1";
        return `/${font} ${line.size} Tf 1 0 0 1 ${line.x} ${line.y} Tm (${escapePdfText(line.text)}) Tj`;
      }),
      "ET"
    ].join("\n");

    objects.push(
      `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 ${3 + pages.length * 2} 0 R /F2 ${4 + pages.length * 2} 0 R >> >> /Contents ${contentObjectNumber} 0 R >>`,
      `<< /Length ${content.length} >>\nstream\n${content}\nendstream`
    );
  });

  objects.push(
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>"
  );

  let pdf = "%PDF-1.4\n";
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });

  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  return new Blob([pdf], { type: "application/pdf" });
}

function downloadReport(result) {
  const blob = createPdf(result);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "moksha-keys-spiritual-fit-assessment.pdf";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function hasAnswer(answer) {
  if (Array.isArray(answer)) return answer.length > 0;
  return answer !== undefined;
}

export default function SpiritualFitPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectionMessage, setSelectionMessage] = useState("");
  const [result, setResult] = useState(null);
  const currentQuestion = questions[step];
  const selectedAnswer = answers[step];
  const isMultiSelect = currentQuestion.selectionMode === "multi";
  const selectedAnswers = Array.isArray(selectedAnswer) ? selectedAnswer : [];
  const completedCount = questions.filter((_, index) => hasAnswer(answers[index])).length;
  const progress = Math.round((completedCount / questions.length) * 100);

  const isComplete = useMemo(
    () => questions.every((_, index) => hasAnswer(answers[index])),
    [answers]
  );

  function selectAnswer(optionIndex) {
    setSelectionMessage("");

    if (!isMultiSelect) {
      setAnswers((current) => ({ ...current, [step]: optionIndex }));
      return;
    }

    setAnswers((current) => {
      const currentSelections = Array.isArray(current[step]) ? current[step] : [];
      const alreadySelected = currentSelections.includes(optionIndex);

      if (alreadySelected) {
        return {
          ...current,
          [step]: currentSelections.filter((selected) => selected !== optionIndex)
        };
      }

      if (currentQuestion.allOptionIndex === optionIndex) {
        return { ...current, [step]: [optionIndex] };
      }

      const withoutAllOption =
        currentQuestion.allOptionIndex === undefined
          ? currentSelections
          : currentSelections.filter(
              (selected) => selected !== currentQuestion.allOptionIndex
            );

      if (
        currentQuestion.maxSelections &&
        withoutAllOption.length >= currentQuestion.maxSelections
      ) {
        setSelectionMessage("You can choose up to two for this question.");
        return current;
      }

      return { ...current, [step]: [...withoutAllOption, optionIndex] };
    });
  }

  function goNext() {
    if (step < questions.length - 1) {
      setSelectionMessage("");
      setStep((current) => current + 1);
    }
  }

  function goBack() {
    if (step > 0) {
      setSelectionMessage("");
      setStep((current) => current - 1);
    }
  }

  function finishAssessment() {
    if (!isComplete) return;
    setResult(calculateResults(answers));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function restartAssessment() {
    setStep(0);
    setAnswers({});
    setResult(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="mx-auto grid w-full max-w-5xl gap-6 py-8 sm:py-12">
      <section className="surface px-5 py-8 sm:px-8 sm:py-10 lg:px-10">
        <p className="eyebrow">Spiritual Fit</p>
        <div className="mt-4 grid gap-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <h1 className="section-title">Spiritual Institution Fit Assessment</h1>
            <p className="mt-5 max-w-reading text-lg leading-8 text-ink-900/68">
              Find which spiritual institutions in India may fit your current
              stage, temperament, and spiritual need.
            </p>
          </div>
          <p className="rounded-[1.5rem] border border-sage-700/10 bg-white/60 px-5 py-4 text-sm leading-7 text-ink-900/62">
            This assessment is only for those who wish to explore institutions,
            ashrams, or structured spiritual communities. The core teaching of
            Moksha Keys is the Five Keys to inner freedom. Freedom itself does
            not depend on belonging to any institution.
          </p>
          <p className="rounded-[1.5rem] border border-sage-700/10 bg-white/60 px-5 py-4 text-sm leading-7 text-ink-900/62">
            This assessment is not a judgment of your spiritual level. It is a
            reflective guide to help you see which institutions may support you
            at this stage of life.
          </p>
        </div>
      </section>

      {result ? (
        <ResultsView result={result} onRestart={restartAssessment} />
      ) : (
        <section className="surface px-5 py-6 sm:px-8 sm:py-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="eyebrow">Question {step + 1} of {questions.length}</p>
              <h2 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em] text-ink-900 sm:text-3xl">
                {currentQuestion.prompt}
              </h2>
              {currentQuestion.helperText ? (
                <p className="mt-2 text-sm leading-7 text-ink-900/58">
                  {currentQuestion.helperText}
                </p>
              ) : null}
            </div>
            <div className="rounded-full border border-sage-700/10 bg-white/70 px-4 py-2 text-sm text-ink-900/62">
              {progress}% complete
            </div>
          </div>

          <div className="mt-6 h-2 overflow-hidden rounded-full bg-sage-100">
            <div
              className="h-full rounded-full bg-sage-700 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <fieldset className="mt-7 grid gap-3">
            <legend className="sr-only">{currentQuestion.prompt}</legend>
            {currentQuestion.options.map(([label], optionIndex) => {
              const selected = isMultiSelect
                ? selectedAnswers.includes(optionIndex)
                : selectedAnswer === optionIndex;

              return (
                <label
                  key={label}
                  className={`cursor-pointer rounded-[1.25rem] border px-4 py-4 transition sm:px-5 ${
                    selected
                      ? "border-sage-500/35 bg-sage-100/70"
                      : "border-sage-700/10 bg-white/65 hover:bg-white"
                  }`}
                >
                  <input
                    type={isMultiSelect ? "checkbox" : "radio"}
                    name={currentQuestion.id}
                    checked={selected}
                    onChange={() => selectAnswer(optionIndex)}
                    className="sr-only"
                  />
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 flex-none items-center justify-center rounded-full bg-sand-100 text-xs font-semibold text-sage-700">
                      {String.fromCharCode(65 + optionIndex)}
                    </span>
                    <span className="text-base leading-7 text-ink-900/72">
                      {label}
                    </span>
                  </span>
                </label>
              );
            })}
          </fieldset>
          {selectionMessage ? (
            <p className="mt-4 rounded-[1rem] bg-sand-100 px-4 py-3 text-sm leading-7 text-ink-900/64">
              {selectionMessage}
            </p>
          ) : null}

          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={goBack}
              disabled={step === 0}
              className="btn-secondary"
            >
              Previous
            </button>
            {step < questions.length - 1 ? (
              <button
                type="button"
                onClick={goNext}
                disabled={!hasAnswer(selectedAnswer)}
                className="btn-primary"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={finishAssessment}
                disabled={!isComplete}
                className="btn-primary"
              >
                See My Results
              </button>
            )}
          </div>
        </section>
      )}
    </div>
  );
}

function ResultsView({ result, onRestart }) {
  return (
    <div className="grid gap-6">
      <section className="surface px-5 py-7 sm:px-8 sm:py-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="eyebrow">Your Spiritual Fit Profile</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-ink-900 sm:text-4xl">
              {result.dominantProfile}
            </h2>
            <p className="mt-4 max-w-reading text-base leading-8 text-ink-900/68">
              {result.reflectiveNote}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <button
              type="button"
              onClick={() => downloadReport(result)}
              className="btn-primary"
            >
              Download My Assessment Report
            </button>
            <button type="button" onClick={onRestart} className="btn-secondary">
              Restart Assessment
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-4">
        <div className="px-1">
          <p className="eyebrow">Top 3 Recommendations</p>
        </div>
        {result.topMatches.map((match, index) => (
          <article key={match.id} className="surface px-5 py-6 sm:px-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-sage-500">
                  Rank {index + 1}
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-ink-900">
                  {match.name}
                </h3>
                <p className="mt-2 text-sm leading-7 text-ink-900/62">
                  {match.shortDescription}
                </p>
              </div>
              <div className="rounded-full bg-sage-700 px-4 py-2 text-sm font-semibold text-sand-50">
                {match.match}% match
              </div>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <ResultDetail title="Best for" body={match.bestFor} />
              <ResultDetail title="Why it fits" body={whyItFits(result, match)} />
              <ResultDetail title="Best first step" body={bestFirstStep(match)} />
            </div>
            <p className="mt-5 rounded-[1.25rem] bg-sand-100 px-4 py-3 text-sm leading-7 text-ink-900/62">
              Gentle caution:{" "}
              {match.cautionNote ||
                "Visit slowly, ask practical questions, and check whether the environment supports steadiness rather than pressure."}
            </p>
          </article>
        ))}
      </section>

      <section className="surface px-5 py-6 sm:px-7">
        <p className="eyebrow">Also worth exploring</p>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {result.nextMatches.map((match) => (
            <article
              key={match.id}
              className="rounded-[1.25rem] border border-sage-700/10 bg-white/65 px-4 py-4"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-semibold text-ink-900">{match.name}</h3>
                <span className="rounded-full bg-sand-100 px-3 py-1 text-xs font-semibold text-sage-700">
                  {match.match}%
                </span>
              </div>
              <p className="mt-2 text-sm leading-7 text-ink-900/62">
                {match.bestFor}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

function ResultDetail({ title, body }) {
  return (
    <div className="rounded-[1.25rem] border border-sage-700/10 bg-white/65 px-4 py-4">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage-500">
        {title}
      </p>
      <p className="mt-2 text-sm leading-7 text-ink-900/66">{body}</p>
    </div>
  );
}
