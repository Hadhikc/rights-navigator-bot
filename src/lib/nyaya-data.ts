export type Citation = {
  source: string;
  reference: string;
  excerpt: string;
};

export type CannedAnswer = {
  match: string[];
  answer: string;
  citations: Citation[];
};

export const suggestions = [
  "What are my rights if I'm arrested?",
  "How do I file an RTI application?",
  "Explain Article 21 — Right to Life",
  "A shop refused a refund. What can I do?",
];

export const recentChats = [
  { id: "arrest", title: "Arrest & detention rights", when: "Today" },
  { id: "rti", title: "Filing an RTI application", when: "Yesterday" },
  { id: "article-21", title: "Article 21 — Right to Life", when: "3 days ago" },
];

export const languages = [
  { code: "en", label: "English", native: "English" },
  { code: "hi", label: "Hindi", native: "हिन्दी" },
  { code: "ta", label: "Tamil", native: "தமிழ்" },
];

export const rightsLibrary = [
  {
    article: "Article 14",
    title: "Equality before law",
    summary:
      "The State shall not deny any person equality before the law or equal protection of the laws within India.",
    tag: "Fundamental right",
  },
  {
    article: "Article 19",
    title: "Freedom of speech & expression",
    summary:
      "Six freedoms including speech, assembly, association, movement, residence and profession — subject to reasonable restrictions.",
    tag: "Fundamental right",
  },
  {
    article: "Article 21",
    title: "Right to life & personal liberty",
    summary:
      "No person shall be deprived of life or personal liberty except according to a procedure established by law.",
    tag: "Fundamental right",
  },
  {
    article: "Article 22",
    title: "Protection on arrest & detention",
    summary:
      "Right to be informed of grounds of arrest, to consult a lawyer of your choice, and to be produced before a magistrate within 24 hours.",
    tag: "Fundamental right",
  },
  {
    article: "RTI Act, 2005",
    title: "Right to Information",
    summary:
      "Any citizen may request information from a public authority; a reply is due within 30 days for a ₹10 fee.",
    tag: "Statute",
  },
  {
    article: "CPA, 2019",
    title: "Consumer protection",
    summary:
      "File a complaint with the District Commission for defective goods, deficient services or unfair trade practices.",
    tag: "Statute",
  },
];

export const legalAid = [
  {
    name: "National Legal Services Authority (NALSA)",
    scope: "Pan-India",
    phone: "15100",
    note: "Free legal aid helpline for all citizens.",
  },
  {
    name: "State Legal Services Authority",
    scope: "State capital",
    phone: "1800-XXX-XXXX",
    note: "Handles state-level free representation and Lok Adalats.",
  },
  {
    name: "District Legal Services Authority",
    scope: "Your district court complex",
    phone: "Walk-in",
    note: "Nearest point for a free panel lawyer and legal literacy camps.",
  },
  {
    name: "Taluk Legal Services Committee",
    scope: "Taluk / sub-division",
    phone: "Walk-in",
    note: "Village-level mediation and paralegal volunteers.",
  },
];

const fallback: CannedAnswer = {
  match: [],
  answer:
    "I can answer this from verified Indian legal text. Here's the short version, with the exact provision cited below so you can verify every line yourself.\n\nTell me your state and what already happened, and I'll turn this into a step-by-step action plan — including a draft complaint you can send.",
  citations: [
    {
      source: "Constitution of India",
      reference: "Part III — Fundamental Rights",
      excerpt:
        "Articles 12–35 guarantee enforceable rights against the State, with Article 32 as the constitutional remedy.",
    },
  ],
};

export const cannedAnswers: CannedAnswer[] = [
  {
    match: ["arrest", "detain", "police", "custody"],
    answer:
      "If you are arrested in India, four protections apply immediately:\n\n1. **You must be told why.** The grounds of arrest have to be communicated to you.\n2. **You may call a lawyer.** You have the right to consult and be defended by a legal practitioner of your choice.\n3. **24 hours, no more.** You must be produced before the nearest magistrate within 24 hours, excluding travel time.\n4. **You may stay silent.** No one can compel you to be a witness against yourself.\n\nIf any of these are denied, that is grounds for immediate relief — and free legal aid is available to you at no cost.",
    citations: [
      {
        source: "Constitution of India",
        reference: "Article 22(1) & 22(2)",
        excerpt:
          "No person who is arrested shall be detained in custody without being informed of the grounds for such arrest nor shall he be denied the right to consult, and to be defended by, a legal practitioner of his choice.",
      },
      {
        source: "Constitution of India",
        reference: "Article 20(3)",
        excerpt:
          "No person accused of any offence shall be compelled to be a witness against himself.",
      },
    ],
  },
  {
    match: ["rti", "information", "public authority"],
    answer:
      "Filing an RTI is deliberately simple — no format is prescribed.\n\n1. Write your question on plain paper addressed to the **Public Information Officer** of the relevant department.\n2. Pay **₹10** by IPO, DD, court fee stamp or online at rtionline.gov.in. Below-poverty-line applicants pay nothing.\n3. You do **not** have to give a reason for wanting the information.\n4. A reply is due in **30 days** — or **48 hours** if it concerns life and liberty.\n5. No reply? File a **first appeal** to the appellate authority within 30 days, then a second appeal to the Information Commission.",
    citations: [
      {
        source: "Right to Information Act, 2005",
        reference: "Section 6(2)",
        excerpt:
          "An applicant making request for information shall not be required to give any reason for requesting the information.",
      },
      {
        source: "Right to Information Act, 2005",
        reference: "Section 7(1)",
        excerpt:
          "The Central or State Public Information Officer shall, as expeditiously as possible, and in any case within thirty days of the receipt of the request, provide the information.",
      },
    ],
  },
  {
    match: ["article 21", "right to life", "liberty"],
    answer:
      "Article 21 is one sentence long, but it is the widest right in the Constitution.\n\n> No person shall be deprived of his life or personal liberty except according to procedure established by law.\n\nCourts have read into it the right to live with **dignity**, to **livelihood**, to **clean air and water**, to a **speedy trial**, to **privacy**, to **health care**, and to **shelter**. It protects every person on Indian soil — citizen or not — and any procedure that takes it away must be fair, just and reasonable.",
    citations: [
      {
        source: "Constitution of India",
        reference: "Article 21",
        excerpt:
          "No person shall be deprived of his life or personal liberty except according to procedure established by law.",
      },
    ],
  },
  {
    match: ["refund", "consumer", "shop", "defective", "product"],
    answer:
      "A refusal to refund a defective product is a **deficiency in service** or a **defect in goods** — both actionable.\n\n1. Send a written notice to the seller giving 15 days to fix it. Keep proof of delivery.\n2. If ignored, file with the **District Consumer Disputes Redressal Commission** where you live or where the seller operates.\n3. Filing is online at edaakhil.nic.in, and claims up to ₹5 lakh carry **no court fee**.\n4. You can claim the refund, compensation for loss, and litigation costs.\n\nI can draft that 15-day notice for you right now.",
    citations: [
      {
        source: "Consumer Protection Act, 2019",
        reference: "Section 2(11) & 2(10)",
        excerpt:
          "'Deficiency' means any fault, imperfection, shortcoming or inadequacy in the quality, nature and manner of performance which is required to be maintained.",
      },
      {
        source: "Consumer Protection Act, 2019",
        reference: "Section 34(1)",
        excerpt:
          "The District Commission shall have jurisdiction to entertain complaints where the value of the goods or services paid as consideration does not exceed fifty lakh rupees.",
      },
    ],
  },
];

export function answerFor(question: string): CannedAnswer {
  const q = question.toLowerCase();
  return cannedAnswers.find((a) => a.match.some((m) => q.includes(m))) ?? fallback;
}
