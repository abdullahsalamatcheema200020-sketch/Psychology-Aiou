window.STUDY_DATA = {
  semester: {
    title: "AIOU BS Psychology Semester 1",
    totalCourses: 6,
    localBooks: 5,
    internalGuides: 1,
    assessment: "Each course in the program follows the AIOU pattern of online workshop, two LMS assignments, one online quiz, and the final examination."
  },
  revisionSuggestions: [
    "Start with Psychology Units 1 to 3 if you want strong theory for assignments.",
    "Practice Quantitative Reasoning Units 7 to 9 repeatedly because they are highly question-rich.",
    "Revise Environmental Science Units 2, 4, 5, and 9 for definitions, cycles, and applied examples.",
    "Use Functional English Units 1 to 5 to improve grammar for all written assignments.",
    "Keep Pakistan Studies for compact daily revision because it is a 2-credit course with broad themes.",
    "Read Islamic Studies Units 1 to 6 first, then revise civilization and future issues near exams."
  ],
  courses: [
    {
      id: "env",
      code: "9389",
      title: "Basics of Environmental Science",
      credits: "3 (3+0)",
      kind: "pdf",
      file: "books/9389-environmental-science.pdf",
      cover: "assets/covers/9389-environmental-science.jpg",
      summary: "A nine-unit foundation course covering environment basics, physical and biological systems, climatology, aquatic and land ecosystems, environmental chemistry, environmental physics, and conservation.",
      assessmentFocus: ["Short definitions", "Process explanation", "Applied environmental examples"],
      assignmentTips: [
        "Use clear definitions before expanding any answer.",
        "Add examples from Pakistan where possible.",
        "For ecosystem answers, connect causes, effects, and conservation steps."
      ],
      units: [
        {
          title: "Unit 1 - Introduction to Environmental Science",
          notes: [
            "Environmental science is multidisciplinary and connects biology, chemistry, geography, and society.",
            "The environment can be natural, social, and built.",
            "Biotic and abiotic components must be studied together to understand environmental issues."
          ],
          prompts: [
            "Define environmentalism and explain why societies need it.",
            "Differentiate natural and built environment with examples."
          ]
        },
        {
          title: "Unit 2 - Physical Components of Natural Environment",
          notes: [
            "Lithosphere, hydrosphere, atmosphere, and biosphere interact continuously.",
            "Altitude, slope, and landform shape climate and vegetation.",
            "Water, carbon, and nitrogen cycles keep matter moving through Earth systems."
          ],
          prompts: [
            "Explain the role of solar energy in the water cycle.",
            "List the major steps in the nitrogen cycle."
          ]
        },
        {
          title: "Unit 3 - Biological Components of Natural Environment",
          notes: [
            "Biotic components include plants, animals, and microorganisms.",
            "Bioenergetics explains how living organisms obtain and use energy.",
            "Ecological interactions include mutualism, commensalism, and parasitism."
          ],
          prompts: [
            "Define mimicry and give one example.",
            "Why are microorganisms essential for nutrient cycling?"
          ]
        },
        {
          title: "Unit 4 - Basics of Climatology",
          notes: [
            "Weather is short-term atmospheric change, while climate is a long-term pattern.",
            "The atmosphere has multiple layers with different functions.",
            "Greenhouse gases are natural but become dangerous when excessively increased."
          ],
          prompts: [
            "Differentiate meteorology and climatology.",
            "Write three impacts of climate change on life and ecosystems."
          ]
        },
        {
          title: "Unit 5 - Aqueous Ecosystems",
          notes: [
            "Aquatic ecosystems include marine and freshwater systems.",
            "Light zones in oceans influence biodiversity and ecological productivity.",
            "Threats include pollution, habitat destruction, and eutrophication."
          ],
          prompts: [
            "Describe the abyssal zone in brief.",
            "Explain eutrophication and why it is harmful."
          ]
        },
        {
          title: "Unit 6 - Land Ecosystems",
          notes: [
            "Terrestrial ecosystems include forests, grasslands, deserts, tundra, and shrublands.",
            "Rainforests are highly biodiverse, while deserts and tundra need special adaptation.",
            "Climate strongly shapes species distribution and vegetation patterns."
          ],
          prompts: [
            "Name two types of grasslands and their features.",
            "List layers of a tropical rainforest."
          ]
        },
        {
          title: "Unit 7 - Environmental Chemistry",
          notes: [
            "Environmental chemistry studies chemical processes in air, water, and soil.",
            "Common pollutants include SOx, NOx, particulate matter, and toxic metals.",
            "Green chemistry promotes safer and more sustainable chemical practices."
          ],
          prompts: [
            "Name three green alternatives to hazardous chemicals.",
            "How do heavy metals affect human health?"
          ]
        },
        {
          title: "Unit 8 - Environmental Physics",
          notes: [
            "Environmental physics applies thermodynamics and related physical laws to Earth systems.",
            "Earth's rotation influences wind patterns and large-scale movement through the Coriolis effect.",
            "Energy transformations explain ecosystem efficiency and loss across trophic levels."
          ],
          prompts: [
            "Describe the three internal layers of Earth.",
            "How does thermoregulation work in warm-blooded animals?"
          ]
        },
        {
          title: "Unit 9 - Environmental Conservation",
          notes: [
            "Conservation means protecting, restoring, and managing natural resources wisely.",
            "In-situ and ex-situ conservation both support biodiversity protection.",
            "Sustainable agriculture, forestry, and fisheries reduce long-term environmental damage."
          ],
          prompts: [
            "Differentiate endangered and threatened species.",
            "List three conservation measures that can be practiced locally."
          ]
        }
      ],
      quiz: [
        {
          question: "Which cycle explains the movement of water through evaporation, condensation, and precipitation?",
          options: ["Nitrogen cycle", "Hydrological cycle", "Carbon cycle", "Rock cycle"],
          answer: 1,
          explanation: "The hydrological cycle describes how water moves through the atmosphere, surface, and ground."
        },
        {
          question: "Which gas is most associated with the greenhouse effect in basic climate discussions?",
          options: ["Carbon dioxide", "Helium", "Hydrogen", "Neon"],
          answer: 0,
          explanation: "Carbon dioxide is one of the major greenhouse gases commonly discussed in climate change."
        },
        {
          question: "Which conservation approach protects species inside their natural habitat?",
          options: ["Ex-situ conservation", "Industrial conservation", "In-situ conservation", "Chemical conservation"],
          answer: 2,
          explanation: "In-situ conservation protects organisms where they naturally live."
        },
        {
          question: "Environmental chemistry mainly studies chemical processes in: ",
          options: ["Only oceans", "Only factories", "Air, water, and soil", "Only the atmosphere"],
          answer: 2,
          explanation: "Environmental chemistry covers chemical behavior in air, water, and soil systems."
        }
      ]
    },
    {
      id: "eng",
      code: "9382",
      title: "Functional English",
      credits: "3 (3+0)",
      kind: "pdf",
      file: "books/9382-functional-english.pdf",
      cover: "assets/covers/9382-functional-english.jpg",
      summary: "A practical English course focused on communication functions, grammar structures, reading skills, and usable everyday expression for university study.",
      assessmentFocus: ["Grammar accuracy", "Functional expression", "Short writing practice"],
      assignmentTips: [
        "Use short and correct sentences rather than overcomplicated language.",
        "Show the grammar rule and then give examples.",
        "If an answer asks for dialogue, keep it natural and polite."
      ],
      units: [
        {
          title: "Unit 1 - Asking and Answering Questions",
          notes: [
            "WH-questions place the question word at the beginning.",
            "Simple present is used for habits and general truths.",
            "Present continuous shows actions happening now or around the present time."
          ],
          prompts: [
            "Write five WH-questions for a classmate interview.",
            "Change simple present sentences into present continuous form."
          ]
        },
        {
          title: "Unit 2 - Seeking Confirmation",
          notes: [
            "Tag questions confirm information politely.",
            "Positive statements usually take negative tags and vice versa.",
            "Present perfect links past action to present relevance."
          ],
          prompts: [
            "Add correct question tags to five sentences.",
            "Write a short dialogue seeking confirmation."
          ]
        },
        {
          title: "Unit 3 - Agreeing and Disagreeing",
          notes: [
            "Agreement and disagreement should be expressed politely.",
            "Simple past is used for completed actions in the past.",
            "Prediction while reading uses titles and clues before full reading."
          ],
          prompts: [
            "Write a polite disagreement about a sports topic.",
            "Use five irregular past verbs in meaningful sentences."
          ]
        },
        {
          title: "Unit 4 - Possibility and Impossibility",
          notes: [
            "Modal verbs like may, might, and could show possibility.",
            "Skimming helps get the main idea quickly.",
            "Scanning helps find specific details like names and dates."
          ],
          prompts: [
            "Use modal verbs in three sentences about future plans.",
            "Skim a paragraph and write its main idea in one sentence."
          ]
        },
        {
          title: "Unit 5 - Certainty and Uncertainty",
          notes: [
            "Words such as definitely and probably show confidence level.",
            "Passive voice shifts focus from doer to action.",
            "Instructional writing often uses imperative verbs."
          ],
          prompts: [
            "Change active sentences into passive voice.",
            "Write five imperative instructions for a process."
          ]
        },
        {
          title: "Unit 6 - Preference and Intention",
          notes: [
            "Preference can be expressed with prefer or would rather.",
            "Will and going to both express future meaning, but not always in the same way.",
            "Good paragraphs include topic sentence, support, and closing sentence."
          ],
          prompts: [
            "Write a paragraph about your weekend plans.",
            "Use prefer and would rather in separate examples."
          ]
        },
        {
          title: "Unit 7 - Permission and Future Continuous",
          notes: [
            "Permission can be asked directly or politely depending on context.",
            "Future continuous describes an action that will be in progress in the future.",
            "General reading exercises build comprehension speed."
          ],
          prompts: [
            "Write three polite permission questions.",
            "Describe what you will be doing tomorrow at 8 PM."
          ]
        },
        {
          title: "Unit 8 - Appreciation and Reported Speech",
          notes: [
            "Expressions of gratitude and appreciation support positive communication.",
            "Reported speech usually changes tense and removes quotation marks.",
            "Inference means understanding what is suggested, not directly stated."
          ],
          prompts: [
            "Convert direct speech into reported speech.",
            "Write a short thank-you note to a teacher."
          ]
        },
        {
          title: "Unit 9 - Advice, Suggestions, and Clauses",
          notes: [
            "Advice can be expressed using should, ought to, or if I were you.",
            "Clauses may be independent or dependent.",
            "Facts are verifiable while opinions are personal beliefs."
          ],
          prompts: [
            "Write advice for a student preparing for exams.",
            "Write two facts and two opinions about your city."
          ]
        }
      ],
      quiz: [
        {
          question: "Which tense is commonly used for actions happening right now?",
          options: ["Simple past", "Present continuous", "Past perfect", "Future perfect"],
          answer: 1,
          explanation: "Present continuous usually describes actions happening at the moment of speaking."
        },
        {
          question: "Which expression is mainly used to give advice?",
          options: ["If I were you", "I have gone", "Was it", "Could have been"],
          answer: 0,
          explanation: "If I were you is a classic structure for giving advice."
        },
        {
          question: "What does scanning help a reader find?",
          options: ["Overall emotion only", "Specific details", "Only grammar errors", "Only opinions"],
          answer: 1,
          explanation: "Scanning is used to quickly locate specific information."
        },
        {
          question: "Which sentence best shows a tag question?",
          options: ["Where are you going?", "You are coming, aren't you?", "I was there yesterday.", "Please close the door."],
          answer: 1,
          explanation: "The sentence ends with a short tag for confirmation."
        }
      ]
    },
    {
      id: "qr",
      code: "9424",
      title: "Quantitative Reasoning-I",
      credits: "3 (3+0)",
      kind: "pdf",
      file: "books/9424-quantitative-reasoning-1.pdf",
      cover: "assets/covers/9424-quantitative-reasoning-1.jpg",
      summary: "A numerical reasoning course covering problem solving, number systems, finance, expressions, geometry, Venn diagrams, inequalities, and logical thinking.",
      assessmentFocus: ["Stepwise solving", "Applied numeracy", "Logical accuracy"],
      assignmentTips: [
        "Write formulas clearly before substitution.",
        "Explain each step to earn method marks.",
        "For logic questions, define proposition and relation symbols first."
      ],
      units: [
        {
          title: "Unit 1 - Importance of Quantitative Reasoning Skills",
          notes: [
            "Quantitative reasoning helps interpret data and make informed decisions.",
            "Historical number systems influenced modern mathematics.",
            "Number categories include natural, whole, integers, rational, and irrational numbers."
          ],
          prompts: [
            "Explain one historical contribution to mathematics.",
            "Differentiate rational and irrational numbers."
          ]
        },
        {
          title: "Unit 2 - Problem Solving Techniques",
          notes: [
            "Parts and whole relationships are central to many real-life problems.",
            "Unit conversion helps compare quantities correctly.",
            "Rates compare two unlike quantities such as distance per time."
          ],
          prompts: [
            "Convert one daily-life measurement from one unit to another.",
            "Solve a simple part-of-whole problem."
          ]
        },
        {
          title: "Unit 3 - Numbers and Universe",
          notes: [
            "Very large and very small numbers appear in science and economics.",
            "Measurement uncertainty affects how accurately values are used.",
            "Probability helps quantify uncertainty and risk."
          ],
          prompts: [
            "Give an example of a very large number from real life.",
            "Explain why uncertainty matters in measurement."
          ]
        },
        {
          title: "Unit 4 - Financial Issues",
          notes: [
            "Profit and loss compare cost price with selling price.",
            "Simple and compound interest differ in how interest accumulates.",
            "Financial literacy includes taxation, discounts, and Zakat understanding."
          ],
          prompts: [
            "Calculate profit percentage in a simple example.",
            "Differentiate simple and compound interest."
          ]
        },
        {
          title: "Unit 5 - Mathematical Expressions",
          notes: [
            "Linear and quadratic expressions follow different algebraic patterns.",
            "Sequences may be arithmetic or geometric.",
            "Word problems require translating language into symbols."
          ],
          prompts: [
            "Identify whether a sequence is arithmetic or geometric.",
            "Translate a word problem into an algebraic equation."
          ]
        },
        {
          title: "Unit 6 - Geometry in Architecture and Landscape",
          notes: [
            "Geometry supports design, structure, and measurement in practical life.",
            "Triangles offer strong structural stability.",
            "Area and volume calculations appear in planning and construction."
          ],
          prompts: [
            "Find the volume of a simple cylindrical object.",
            "Explain why triangles are common in structural design."
          ]
        },
        {
          title: "Unit 7 - Venn Diagrams",
          notes: [
            "Sets are well-defined collections of elements.",
            "Union combines members, while intersection shows common elements.",
            "Venn diagrams visualize relationships among sets clearly."
          ],
          prompts: [
            "Find intersection and difference for two small sets.",
            "Draw a simple Venn diagram for two related categories."
          ]
        },
        {
          title: "Unit 8 - Inequalities",
          notes: [
            "Inequalities compare values using less than, greater than, and related symbols.",
            "Multiplying or dividing by a negative number reverses the sign.",
            "Absolute value inequalities show distance from zero or another point."
          ],
          prompts: [
            "Solve a linear inequality and show it on a number line.",
            "Explain why the sign changes when multiplying by a negative number."
          ]
        },
        {
          title: "Unit 9 - Logical Thinking",
          notes: [
            "Deductive logic uses valid premises to reach necessary conclusions.",
            "Conjunction, disjunction, and conditionals are basic logical structures.",
            "Truth tables help test whether compound statements are true or false."
          ],
          prompts: [
            "Write a truth table for p and q.",
            "Explain the converse of a simple conditional statement."
          ]
        }
      ],
      quiz: [
        {
          question: "Which set operation shows only the common elements of two sets?",
          options: ["Union", "Difference", "Intersection", "Complement"],
          answer: 2,
          explanation: "Intersection contains only the elements shared by both sets."
        },
        {
          question: "What happens to an inequality sign when both sides are divided by a negative number?",
          options: ["It becomes invisible", "It stays the same", "It reverses", "It doubles"],
          answer: 2,
          explanation: "The direction of the inequality must reverse when multiplying or dividing by a negative number."
        },
        {
          question: "A sequence with a common difference is called: ",
          options: ["Geometric", "Arithmetic", "Quadratic", "Logical"],
          answer: 1,
          explanation: "Arithmetic sequences increase or decrease by a fixed difference."
        },
        {
          question: "Which mathematical tool is used to analyze truth values of compound statements?",
          options: ["Pie chart", "Truth table", "Histogram", "Compass"],
          answer: 1,
          explanation: "Truth tables are standard tools in formal logic."
        }
      ]
    },
    {
      id: "psy",
      code: "8411",
      title: "Introduction to Psychology",
      credits: "3 (3+0)",
      kind: "pdf",
      file: "books/8411-introduction-to-psychology.pdf",
      cover: "assets/covers/8411-introduction-to-psychology.jpg",
      summary: "A broad introductory psychology course on perspectives, research, brain and behavior, sensation, consciousness, development, learning, and memory.",
      assessmentFocus: ["Concept explanation", "Theory comparison", "Applied behavior analysis"],
      assignmentTips: [
        "Define the concept, then connect it to daily life.",
        "When comparing theories, use a table or clear contrast paragraph.",
        "Support answers with named psychologists or approaches when relevant."
      ],
      units: [
        {
          title: "Unit 1 - Introduction",
          notes: [
            "Psychology is the scientific study of behavior and mental processes.",
            "The discipline aims to describe, understand, predict, and influence behavior.",
            "Psychology connects biological, social, and cognitive dimensions of human life."
          ],
          prompts: [
            "Define psychology in your own words.",
            "Why is psychology considered a science?"
          ]
        },
        {
          title: "Unit 2 - Major Perspectives",
          notes: [
            "Biological perspective emphasizes the brain, body, and nervous system.",
            "Cognitive perspective focuses on thinking, memory, and information processing.",
            "Humanistic and psychodynamic approaches explain behavior through different assumptions about the self and motivation."
          ],
          prompts: [
            "Compare psychoanalytic and behavioral views.",
            "Explain the cognitive perspective with one example."
          ]
        },
        {
          title: "Unit 3 - Psychological Science",
          notes: [
            "Scientific psychology depends on objectivity, evidence, and replication.",
            "Research may be basic or applied depending on its goal.",
            "Descriptive, correlational, and experimental methods answer different questions."
          ],
          prompts: [
            "Differentiate independent and dependent variables.",
            "What is the role of validity in research?"
          ]
        },
        {
          title: "Unit 4 - Brains, Bodies, and Behavior",
          notes: [
            "Neurons transmit electrical and chemical signals.",
            "The central nervous system includes brain and spinal cord.",
            "Major brain areas and neurotransmitters shape movement, emotion, and cognition."
          ],
          prompts: [
            "Name four lobes of the cerebral cortex.",
            "How do neurotransmitters affect behavior?"
          ]
        },
        {
          title: "Unit 5 - Sensing and Perceiving",
          notes: [
            "Sensation detects stimuli while perception interprets them.",
            "Transduction changes physical energy into neural signals.",
            "Illusions and hallucinations are not the same phenomenon."
          ],
          prompts: [
            "Differentiate illusion and hallucination.",
            "How does perception depend on the brain?"
          ]
        },
        {
          title: "Unit 6 - States of Consciousness",
          notes: [
            "Sleep and waking consciousness differ in awareness and responsiveness.",
            "REM sleep is closely linked with vivid dreaming.",
            "Psychoactive substances alter consciousness through brain chemistry."
          ],
          prompts: [
            "List common sleep disorders.",
            "How can people improve sleep without drugs?"
          ]
        },
        {
          title: "Unit 7 - Growing and Developing",
          notes: [
            "Development includes physical, cognitive, and social change across life.",
            "Piaget explained stages of cognitive development.",
            "Erikson highlighted psychosocial challenges across the lifespan."
          ],
          prompts: [
            "Explain one stage from Piaget's theory.",
            "What is the social clock in adulthood?"
          ]
        },
        {
          title: "Unit 8 - Learning",
          notes: [
            "Classical conditioning links two stimuli through association.",
            "Operant conditioning uses reinforcement and punishment.",
            "Observational learning occurs by watching others."
          ],
          prompts: [
            "Give an example of positive reinforcement.",
            "Explain extinction in learned behavior."
          ]
        },
        {
          title: "Unit 9 - Remembering and Judging",
          notes: [
            "Memory includes sensory, short-term, and long-term systems.",
            "Explicit memory is conscious while implicit memory works more automatically.",
            "Judgment and recall can be improved through rehearsal, chunking, and association."
          ],
          prompts: [
            "Differentiate retrograde and anterograde amnesia.",
            "Explain primacy and recency effects."
          ]
        }
      ],
      quiz: [
        {
          question: "Which perspective mainly studies how people think, remember, and process information?",
          options: ["Cognitive", "Behavioral", "Biological", "Cross-cultural"],
          answer: 0,
          explanation: "The cognitive perspective focuses on mental processes like thinking and memory."
        },
        {
          question: "Which research method is strongest for identifying cause and effect?",
          options: ["Survey", "Case study", "Experiment", "Natural observation only"],
          answer: 2,
          explanation: "Experiments are designed to test causal relationships by controlling variables."
        },
        {
          question: "Which type of learning is associated with Skinner?",
          options: ["Operant conditioning", "Classical conditioning", "Sensory adaptation", "Insight only"],
          answer: 0,
          explanation: "Skinner is strongly associated with operant conditioning."
        },
        {
          question: "Which memory type refers to skills and habits that can operate without conscious recall?",
          options: ["Explicit memory", "Working memory", "Implicit memory", "Sensory memory"],
          answer: 2,
          explanation: "Implicit memory includes skills and conditioned patterns that do not always require conscious recollection."
        }
      ]
    },
    {
      id: "isl",
      code: "9801",
      title: "Islamic Studies (BS)",
      credits: "3 (3+0)",
      kind: "pdf",
      file: "books/9801-islamic-studies.pdf",
      cover: "assets/covers/9801-islamic-studies.jpg",
      summary: "A nine-unit Islamic Studies course covering Kitab and Sunnah, the religion of Islam, worship, Seerah, morality, civilization, and contemporary issues.",
      assessmentFocus: ["Conceptual understanding", "Short explanations", "Moral and historical application"],
      assignmentTips: [
        "Keep the tone respectful and clear.",
        "Use headings for concepts, lessons, and applications.",
        "Connect beliefs with social and moral outcomes."
      ],
      units: [
        {
          title: "Unit 1 - Kitab and Sunnah I",
          notes: [
            "Wahy refers to divine revelation delivered to prophets.",
            "The Quran was revealed gradually across 23 years.",
            "Quranic teachings include individual and social guidance."
          ],
          prompts: [
            "What is Wahy?",
            "Explain one social teaching from Quranic guidance."
          ]
        },
        {
          title: "Unit 2 - Kitab and Sunnah II",
          notes: [
            "Sunnah includes the sayings, actions, and approvals of the Prophet ﷺ.",
            "Hadith documents the Sunnah through reports.",
            "Following the Sunnah supports correct religious practice."
          ],
          prompts: [
            "Differentiate Hadith and Sunnah.",
            "Why is the Sunnah important in Muslim life?"
          ]
        },
        {
          title: "Unit 3 - The Religion of Islam I",
          notes: [
            "Islam is a complete way of life, not only a set of rituals.",
            "Tawhid is the foundation of Islamic belief.",
            "Shirk is considered the opposite of pure Tawhid."
          ],
          prompts: [
            "Define Tawhid.",
            "Why is Tawhid central in Islam?"
          ]
        },
        {
          title: "Unit 4 - The Religion of Islam II",
          notes: [
            "Belief in prophethood links divine guidance to human life.",
            "Akhirah shapes moral accountability.",
            "Finality of prophethood is a key Islamic belief."
          ],
          prompts: [
            "Explain Akhirah briefly.",
            "Why does belief in accountability matter morally?"
          ]
        },
        {
          title: "Unit 5 - The Religion of Islam III (Ibadat)",
          notes: [
            "Salah structures daily spiritual discipline.",
            "Zakat purifies wealth and supports social justice.",
            "Fasting and Hajj develop self-control, unity, and devotion."
          ],
          prompts: [
            "What are the social benefits of Zakat?",
            "How does fasting build self-discipline?"
          ]
        },
        {
          title: "Unit 6 - Biography of the Holy Prophet ﷺ",
          notes: [
            "The Seerah offers guidance in leadership, patience, and community building.",
            "Hijrah was a turning point in Muslim communal history.",
            "Major events include revelation, Madinah community, and key treaties and battles."
          ],
          prompts: [
            "State the significance of Hijrah.",
            "Write key lessons from the Prophet's last sermon."
          ]
        },
        {
          title: "Unit 7 - Morality in Islam",
          notes: [
            "Good character is a core part of Islamic faith.",
            "Truthfulness, respect, and piety shape social life.",
            "Moral conduct must appear in speech, intention, and action."
          ],
          prompts: [
            "Explain the importance of truthfulness.",
            "Write five examples of good moral conduct."
          ]
        },
        {
          title: "Unit 8 - Contribution to Human Civilization",
          notes: [
            "Islamic civilization contributed to science, mathematics, medicine, and philosophy.",
            "Muslim scholars preserved and expanded knowledge traditions.",
            "Human dignity and justice are central contributions of Islamic civilization."
          ],
          prompts: [
            "Name three Muslim contributors to science.",
            "How did Islamic civilization support knowledge growth?"
          ]
        },
        {
          title: "Unit 9 - Our Future: Issues and Solution",
          notes: [
            "Contemporary Muslim societies face political, economic, and educational challenges.",
            "Reform requires unity, literacy, justice, and balanced institutions.",
            "Solutions should connect faith, ethics, and practical policy action."
          ],
          prompts: [
            "List practical educational reforms for Muslim societies.",
            "How can unity support social progress?"
          ]
        }
      ],
      quiz: [
        {
          question: "What does Sunnah primarily refer to?",
          options: ["Only written law", "Prophetic sayings, actions, and approvals", "Only historical events", "Only sermons"],
          answer: 1,
          explanation: "Sunnah refers to the lived example of the Prophet ﷺ through sayings, actions, and approvals."
        },
        {
          question: "Which belief most directly relates to the oneness of Allah?",
          options: ["Akhirah", "Risalat", "Tawhid", "Hijrah"],
          answer: 2,
          explanation: "Tawhid is the doctrine of the absolute oneness of Allah."
        },
        {
          question: "Which act of worship is directly associated with purifying wealth?",
          options: ["Salah", "Zakat", "Sawm", "Hajj"],
          answer: 1,
          explanation: "Zakat is associated with purifying wealth and social support."
        },
        {
          question: "Which unit especially highlights Muslim contributions to science and civilization?",
          options: ["Unit 5", "Unit 7", "Unit 8", "Unit 2"],
          answer: 2,
          explanation: "Unit 8 focuses on contributions to human civilization."
        }
      ]
    },
    {
      id: "pak",
      code: "9806",
      title: "Pakistan Studies",
      credits: "2 (2+0)",
      kind: "html",
      cover: "assets/covers/9806-pakistan-studies.svg",
      summary: "An internal study guide built from official AIOU Pakistan Studies department themes: history, ideology, culture, geography, economy, politics, society, foreign policy, and national integration.",
      assessmentFocus: ["Theme overview", "Short note writing", "National and civic understanding"],
      assignmentTips: [
        "Keep answers structured by theme: history, society, politics, economy.",
        "Use balanced language and connect events with national development.",
        "For long answers, begin with ideology or historical background before current issues."
      ],
      internalHtml: "<div class='html-section'><h3>Pakistan Studies Internal Guide</h3><p>This built-in guide is based on the official department description of Pakistan Studies as a multidisciplinary subject that covers culture, demographics, geography, history, ideology, politics, economy, and society. It is designed for compact semester-1 revision inside this local website.</p></div><div class='html-section'><h4>Core Themes</h4><ul><li>Ideology and historical background of Pakistan</li><li>Culture, national integration, and social cohesion</li><li>Geography, resources, and strategic importance</li><li>Political development, constitution, governance, and citizenship</li><li>Economy, foreign policy, and contemporary national challenges</li></ul></div><div class='html-section'><h4>How to study this course</h4><ul><li>Revise one theme daily because the course is short but broad.</li><li>Make one-page summaries for ideology, geography, economy, and constitutional development.</li><li>Practice writing 5 to 7 sentence short notes for exam readiness.</li></ul></div>",
      units: [
        {
          title: "Unit 1 - Ideology of Pakistan",
          notes: [
            "Pakistan Studies aims to build understanding of the vision behind Pakistan.",
            "Ideology is linked with identity, national purpose, and state formation.",
            "Historical context helps explain why ideological debates matter."
          ],
          prompts: [
            "Explain the term ideology in the Pakistani context.",
            "Why is ideology important in national studies?"
          ]
        },
        {
          title: "Unit 2 - Freedom Movement and Historical Background",
          notes: [
            "The freedom movement shaped Pakistan's political identity.",
            "Leadership, historical events, and constitutional developments are central topics.",
            "A timeline approach helps remember cause and consequence."
          ],
          prompts: [
            "Write a short note on the freedom movement.",
            "How does historical background support national understanding?"
          ]
        },
        {
          title: "Unit 3 - Geography, Culture, and Society",
          notes: [
            "Pakistan Studies includes geography, demographics, and culture.",
            "Regional diversity is a national strength when linked with unity.",
            "Social structure and cultural heritage influence development."
          ],
          prompts: [
            "How does geography shape Pakistan's importance?",
            "Write a short note on cultural diversity in Pakistan."
          ]
        },
        {
          title: "Unit 4 - Political Development and Governance",
          notes: [
            "The subject includes politics, constitutional development, and governance.",
            "Citizenship and public participation matter in state functioning.",
            "Understanding institutions helps explain democratic development."
          ],
          prompts: [
            "Why is constitutional development important?",
            "How does good governance affect national progress?"
          ]
        },
        {
          title: "Unit 5 - Economy and Foreign Policy",
          notes: [
            "Economy and foreign policy are major parts of Pakistan Studies.",
            "Development depends on productive sectors, policy choices, and regional relations.",
            "National progress requires both internal stability and external balance."
          ],
          prompts: [
            "Write a short note on Pakistan's economy.",
            "Why does foreign policy matter for national development?"
          ]
        },
        {
          title: "Unit 6 - National Integration and Contemporary Challenges",
          notes: [
            "National integration is a core objective of Pakistan Studies.",
            "Students are encouraged to think critically about challenges and solutions.",
            "Balanced citizenship requires both patriotism and informed analysis."
          ],
          prompts: [
            "What is national integration?",
            "Suggest practical responses to one current challenge in Pakistan."
          ]
        }
      ],
      quiz: [
        {
          question: "Pakistan Studies is best described as: ",
          options: ["Only a geography subject", "A multidisciplinary subject", "Only political history", "Only economics"],
          answer: 1,
          explanation: "The official department description presents Pakistan Studies as a multidisciplinary field."
        },
        {
          question: "Which topic belongs clearly to Pakistan Studies?",
          options: ["Astronomical chemistry", "National integration", "Organic laboratory reactions", "Cell division only"],
          answer: 1,
          explanation: "National integration is one of the course's explicit themes."
        },
        {
          question: "Which of the following is a useful way to prepare for Pakistan Studies?",
          options: ["Memorize only one paragraph", "Ignore history", "Make short thematic notes", "Skip geography"],
          answer: 2,
          explanation: "Short thematic notes are effective because the course is broad and concept-oriented."
        },
        {
          question: "Which theme connects directly to Pakistan's role in the world?",
          options: ["Foreign policy", "Only handwriting", "Only grammar", "Only chemistry"],
          answer: 0,
          explanation: "Foreign policy explains external relations and strategic position."
        }
      ]
    }
  ]
};