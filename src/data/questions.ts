export interface Question {
    id: string;
    year: number;
    chapter: string;
    topic: string;
    type: "MCQ" | "Short" | "Long" | "Case Study";
    marks: number;
    question: string;
    answer: string;
    set?: string;
    source: string;
}

export const chapters = [
    "Planning in Sports",
    "Sports & Nutrition",
    "Yoga & Lifestyle",
    "Physical Education & Sports for CWSN",
    "Children & Women in Sports",
    "Test & Measurement in Sports",
    "Physiology & Injuries in Sports",
    "Biomechanics & Sports",
    "Psychology & Sports",
    "Training in Sports",
] as const;

export type Chapter = (typeof chapters)[number];

export const questions: Question[] = [
    // ═══════════════════════════════════════════════
    //  2025 – Section A (MCQs, 1 mark each)
    // ═══════════════════════════════════════════════
    {
        id: "2025_q1",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Sports Events Management",
        type: "MCQ",
        marks: 1,
        question:
            "Which of the following is NOT a responsibility of a sports event manager? (a) Planning (b) Organizing (c) Budgeting (d) Maintenance of the field",
        answer: "(D) Maintenance of the field",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q2",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Intramural & Extramural",
        type: "MCQ",
        marks: 1,
        question: "What is the main objective of intramural activities? (a) To identify talent (b) To provide exposure (c) To earn revenue (d) To promote health and recreation at the institution.",
        answer:
            "(D) To promote health and recreation at the institution.",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q3",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Postural Deformities",
        type: "MCQ",
        marks: 1,
        question:
            "Lateral curvature of the spine is known as ___. (a) Kyphosis (b) Scoliosis (c) Lordosis (d) Round shoulders",
        answer: "(B) Scoliosis",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q4",
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Exercise & Special Populations",
        type: "MCQ",
        marks: 1,
        question:
            "Which type of activities are most recommended for elderly individuals? (a) Heavy weight training (b) High impact aerobics (c) Endurance activities (d) Sprinting",
        answer: "(C) Endurance activities",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q5",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Nutritional Aspects",
        type: "MCQ",
        marks: 1,
        question:
            "A condition where body weight is significantly above the normal weight for height is termed as: (a) Obesity (b) Diabetes (c) Hypertension (d) Anemia",
        answer: "(A) Obesity",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q6",
        year: 2025,
        chapter: "Yoga & Lifestyle",
        topic: "Asanas",
        type: "MCQ",
        marks: 1,
        question:
            "Which asana is beneficial for curing diabetes? (a) Tadasana (b) Dhanurasana (c) Shavasana (d) Garudasana",
        answer: "(B) Dhanurasana",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q7",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Assertion-Reason",
        type: "MCQ",
        marks: 1,
        question:
            "Assertion (A): Newton's first law is the law of inertia. Reason (R): A body at rest tends to remain at rest and a body in motion tends to remain in motion unless acted upon by an external force. (a) Both A and R are true and R is correct explanation of A (b) Both A and R are true but R is NOT correct explanation of A (c) A is true but R is false (d) A is false but R is true",
        answer:
            "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q8",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Olympic Values",
        type: "MCQ",
        marks: 1,
        question:
            "Which colours are present in the Olympic rings? (a) Red, blue, yellow, black, orange (b) Red, white, blue, green, yellow (c) Red, blue, yellow and green (d) Pink, blue, yellow, green",
        answer: "(C) Red, blue, yellow and green",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q9",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Levers",
        type: "MCQ",
        marks: 1,
        question:
            "In the human body, the calf raise exercise works on which class of lever? (a) First class lever (b) Second class lever (c) Third class lever (d) None of these",
        answer: "(B) Second class lever",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q10",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Vitamins & Minerals",
        type: "MCQ",
        marks: 1,
        question: "Vitamin C is also known as: (a) Retinol (b) Ascorbic acid (c) Calciferol (d) Tocopherol",
        answer: "(B) Ascorbic acid",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q11",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Assertion-Reason",
        type: "MCQ",
        marks: 1,
        question:
            "Assertion (A): BMI is calculated by dividing weight in kilograms by height in metres squared. Reason (R): BMI gives an accurate measure of body composition. (a) Both A and R are true and R is correct explanation of A (b) Both A and R are true but R is NOT correct explanation of A (c) A is true but R is false (d) A is false but R is true",
        answer:
            "(B) Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A)",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q12",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Fitness Tests",
        type: "MCQ",
        marks: 1,
        question:
            "Which test measures the flexibility of the lower back and hamstrings? (a) Push-ups (b) Partial curl-up (c) Sit and reach test (d) 600m Run/Walk",
        answer: "(C) Sit and reach test",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q13",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Match the Following",
        type: "MCQ",
        marks: 1,
        question:
            "Match the following: a) First class lever b) Second class lever c) Third class lever d) Equilibrium. (a) a-i, b-ii, c-iii, d-iv (b) a-iii, b-i, c-iv, d-ii (c) a-ii, b-iii, c-i, d-iv (d) a-iv, b-ii, c-iii, d-i",
        answer: "(B) a – (iii), b – (i), c – (iv), d – (ii)",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q14",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Newton's Laws",
        type: "MCQ",
        marks: 1,
        question:
            "Newton's First Law of Motion is also known as: (a) Law of Inertia (b) Law of Acceleration (c) Law of Reaction (d) Law of Momentum",
        answer: "(A) Law of Inertia",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q15",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Match the Following",
        type: "MCQ",
        marks: 1,
        question:
            "Match the following training methods with their characteristics. (a) a-i, b-ii, c-iii, d-iv (b) a-iii, b-i, c-ii, d-iv (c) a-ii, b-iv, c-i, d-iii (d) a-iv, b-iii, c-ii, d-i",
        answer: "(B) a - (iii), b - (i), c - (ii), d - (iv)",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q16",
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Self-Esteem",
        type: "MCQ",
        marks: 1,
        question:
            "A person's subjective evaluation of their own worth is called: (a) Self-efficacy (b) Self-esteem (c) Self-regulation (d) Self-talk",
        answer: "(B) Self-esteem",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q17",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training Methods",
        type: "MCQ",
        marks: 1,
        question:
            "Which training method involves continuous running with varying speed and terrain? (a) Fartlek training (b) Interval training (c) Pace runs (d) Acceleration runs",
        answer: "(A) Fartlek training",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q18",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Exercise Types",
        type: "MCQ",
        marks: 1,
        question:
            "An exercise where the muscle contracts without any change in the length of the muscle is called: (a) Isotonic exercise (b) Isokinetic exercise (c) Iso-metric exercise (d) Ballistic exercise",
        answer: "(C) Iso-metric exercise",
        source: "CBSE 2025 Board Exam",
    },

    // ═══════════════════════════════════════════════
    //  2025 – Section B (2 marks each)
    // ═══════════════════════════════════════════════
    {
        id: "2025_q19",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Postural Deformities",
        type: "Short",
        marks: 2,
        question:
            "Suggest any two corrective measures for each, bow-leg and round shoulder.",
        answer:
            "Corrective measures for bow-leg: Walk on the inner edge of the feet; Perform Garudasana; Perform lunges; Wearing braces and modified shoes.\n\nCorrective measures for round shoulder: T-stretch, wall stretch, handclasp stretch, planks, pull-ups; Perform Chakrasana, Dhanurasana, Ushtrasana, Bhujangasana; Shoulder rotation clockwise and anticlockwise.",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q20",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Benefits of Sports for CWSN",
        type: "Short",
        marks: 2,
        question:
            "Enlist four benefits of participation in physical activities for children with special needs.",
        answer:
            "1. Physical benefits – Improves motor skills, flexibility, mobility, strength, endurance, cardiovascular health.\n2. Psychological benefits – Builds confidence, boosts self-esteem, reduces stress and anxiety.\n3. Social benefits – Enhances teamwork, communication skills, develops leadership, promotes inclusion.",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q21",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Macro & Micro Nutrients",
        type: "Short",
        marks: 2,
        question:
            "Differentiate between macro nutrients and micro nutrients with suitable examples.",
        answer:
            "Macro nutrients are required in large amounts by the body and provide energy. Examples: Carbohydrates, Proteins, Fats.\n\nMicro nutrients are required in small amounts and do not provide energy but are essential for body functions. Examples: Vitamins, Minerals.",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q22",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Tournament Types",
        type: "Short",
        marks: 2,
        question:
            "Draw a knockout fixture of 11 teams.",
        answer:
            "Total teams = 11. Byes = 16 - 11 = 5. Number of rounds = 4. The fixture is drawn with proper seeding and bye allocation.",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q23",
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Personality",
        type: "Short",
        marks: 2,
        question:
            "Describe the concept of introvert personality in sports.",
        answer:
            "Introverts tend to be quiet, reserved and thoughtful. In sports, they often excel in individual sports. They prefer activities that require less social interaction. They are better at precision tasks and tend to be more focused and analytical.",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q24",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Warming Up",
        type: "Short",
        marks: 2,
        question: "Explain the importance of warming up before exercise.",
        answer:
            "1. Increases blood flow to muscles.\n2. Increases body temperature and metabolic rate.\n3. Increases flexibility and range of motion.\n4. Reduces risk of injury.\n5. Prepares the cardiovascular system.\n6. Improves performance.",
        source: "CBSE 2025 Board Exam",
    },

    // ═══════════════════════════════════════════════
    //  2025 – Section C (3 marks each)
    // ═══════════════════════════════════════════════
    {
        id: "2025_q25",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Eating Disorders",
        type: "Short",
        marks: 3,
        question: "Discuss any two eating disorders in detail.",
        answer:
            "1. Anorexia Nervosa: A serious eating disorder characterized by abnormally low body weight, intense fear of gaining weight, and distorted perception of body weight. Individuals severely restrict food intake.\n\n2. Bulimia Nervosa: A serious eating disorder characterized by cycles of bingeing (consuming large amounts of food) followed by purging (self-induced vomiting, excessive exercise, or use of laxatives).\n\n3. Binge Eating: Consuming large quantities of food in a short period accompanied by feelings of loss of control and shame.",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q26",
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Female Athlete Triad",
        type: "Short",
        marks: 3,
        question: "Explain the female athlete triad.",
        answer:
            "The female athlete triad is a syndrome of three interrelated conditions:\n1. Energy deficiency (with or without disordered eating)\n2. Menstrual dysfunction (amenorrhea)\n3. Bone loss (osteoporosis)\n\nIt is common in female athletes who participate in sports that emphasize leanness or low body weight.",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q27",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Motor Fitness Tests",
        type: "Short",
        marks: 3,
        question:
            "Describe the procedure and scoring of any one motor fitness test.",
        answer:
            "50m Standing Start: Purpose – To measure speed.\nProcedure: The participant stands behind the starting line. On the command 'Go', the participant sprints as fast as possible to the finish line 50m away.\nScoring: Time is recorded in seconds and tenths of seconds. The better of two trials is recorded.",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q28",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Sports Injuries",
        type: "Short",
        marks: 3,
        question:
            "Differentiate between strain and sprain. Suggest any two first-aid measures for a sprain.",
        answer:
            "Strain: Injury to muscles or tendons caused by overstretching or tearing.\nSprain: Injury to ligaments caused by sudden twist or wrench.\n\nFirst-aid for sprain (RICE method):\n1. Rest – Stop the activity and rest the injured area.\n2. Ice – Apply ice pack for 15-20 minutes.\n3. Compression – Apply elastic bandage.\n4. Elevation – Keep the injured area elevated above the heart.",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q29",
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Motivation",
        type: "Short",
        marks: 3,
        question:
            "Discuss any three techniques to enhance motivation in sports.",
        answer:
            "1. Goal Setting: Setting specific, measurable, achievable, relevant, and time-bound (SMART) goals.\n2. Positive Reinforcement: Rewarding athletes for good performance to encourage repetition of desired behavior.\n3. Self-Talk: Using positive internal dialogue to boost confidence and focus.\n4. Visualization: Mentally rehearsing successful performance.\n5. Creating a positive environment.",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q30",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Strength Training",
        type: "Short",
        marks: 3,
        question:
            "Discuss any three methods to develop strength.",
        answer:
            "1. Isometric Exercises: Exercises where the muscle contracts without changing length. E.g., wall push, plank.\n2. Isotonic Exercises: Exercises where muscle changes length during contraction. E.g., push-ups, pull-ups.\n3. Isokinetic Exercises: Exercises performed at a constant speed throughout the range of motion using special equipment.\n4. Weight Training: Using free weights or machines to develop strength.",
        source: "CBSE 2025 Board Exam",
    },

    // ═══════════════════════════════════════════════
    //  2025 – Section D (Case Study, 4 marks)
    // ═══════════════════════════════════════════════
    {
        id: "2025_q31",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Balanced Diet & BMI",
        type: "Case Study",
        marks: 4,
        question:
            "Raman is a 17-year-old boy who weighs 80 kg and is 170 cm tall. He is a cricket player. Based on the case study, answer: (i) Calculate Raman's BMI. (ii) What category does Raman fall into based on WHO BMI classification? (iii) Suggest two dietary changes. (iv) Why is a balanced diet important for athletes?",
        answer:
            "i) BMI = Weight/Height² = 80/(1.70)² = 80/2.89 = 27.68\nii) Raman falls in the 'Overweight' category (BMI 25-29.9)\niii) Two dietary changes: Reduce intake of high-calorie foods; Include more fruits and vegetables; Reduce sugar and processed food intake.\niv) A balanced diet is important for athletes as it provides required energy, aids in recovery, maintains body composition, and enhances performance.",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q32",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Paralympic Games",
        type: "Case Study",
        marks: 4,
        question:
            "Read the passage and answer: (i) How many sports are included in the Summer Paralympic Games? (ii) When were the first Paralympic Games held? (iii) Who is known as the founder of the Paralympic movement? (iv) Write any two strategies to include CWSN in sports.",
        answer:
            "i) (C) 8\nii) 1924\niii) Dr. Ludwig Guttmann\niv) Two strategies: 1. Proper instructions 2. Proper space 3. Adapted equipment 4. Modified rules 5. Graded activities 6. Involve people with disability in decision making",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q33",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Cardiovascular System",
        type: "Case Study",
        marks: 4,
        question:
            "Read the passage and answer: (i) Accumulation of which substance causes muscle fatigue? (ii) Define cardiac output. (iii) What is tidal volume? (iv) Which component of fitness is most related to the cardiovascular system?",
        answer:
            "(i) (D) Accumulation of lactate\n(ii) Cardiac output is the amount of blood pumped out by the heart in 1 minute. Cardiac Output = Stroke Volume × Heart Rate\n(iii) (A) Amount of air inhaled and exhaled in one breath\n(iv) (D) Endurance",
        source: "CBSE 2025 Board Exam",
    },

    // ═══════════════════════════════════════════════
    //  2025 – Section E (5 marks each)
    // ═══════════════════════════════════════════════
    {
        id: "2025_q34",
        year: 2025,
        chapter: "Yoga & Lifestyle",
        topic: "Asanas for Hypertension",
        type: "Long",
        marks: 5,
        question:
            "Describe the procedure and benefits of Mandukasana and Makarasana to control hypertension.",
        answer:
            "Mandukasana (Frog Pose):\nProcedure: Sit in Vajrasana → Make fists with thumbs inside → Place fists on belly next to navel → Bend forward with exhalation → Keep looking straight → Hold breath for a few seconds → Come up with inhalation → Repeat 3-4 times.\n\nBenefits: Beneficial for all organs; Gives relief from diabetes, digestive disorders and constipation; Improves flexibility of knee and ankle joints; Tones shoulder and abdomen muscles; Increases lung capacity.\n\nMakarasana (Crocodile Pose):\nProcedure: Lie on stomach → Place right palm over left palm on ground → Rest head on right palm → Stretch legs with toes pointing outward → Relax whole body → Breathe normally.\n\nBenefits: Deep relaxation to shoulder and spine; Reduces waist pain; Helps in slipped disc; Beneficial for asthma; Relief for arthritis patients.",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q35",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Equilibrium",
        type: "Long",
        marks: 5,
        question:
            "What do you mean by Equilibrium? Explain how Equilibrium increases with the influence of various factors by giving suitable examples from sports.",
        answer:
            "Equilibrium: State of balance where opposite forces cancel each other and no changes occur. OR: Condition where the sum of all forces acting on a body is zero.\n\nFactors:\n1. Lower centre of gravity = more stability (e.g., runners bend knees to stop, wrestlers adopt half-sitting posture)\n2. Stability increases when centre of gravity is centred (e.g., gymnast raising arm/leg on balance beam)\n3. Wider base of support enhances stability (e.g., standing feet apart)\n4. Body weight is directly proportional to stability (e.g., Boxing, Judo weight categories)\n5. More friction = more stability (e.g., wrestling mat surface)",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q36",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Circuit Training",
        type: "Long",
        marks: 5,
        question:
            "What do you understand by circuit training? How a coach will plan circuit training sessions with 6 stations to develop fitness of his new trainees? Explain.",
        answer:
            "Circuit Training: Introduced by R.E. Morgan and G.T. Adamson of Leeds University in 1951. It is a training method where certain exercises are performed with or without apparatus with given dosage.\n\nA coach planning 6 stations:\n1. Push-ups (upper body strength)\n2. Jump squats (leg power)\n3. Rope skipping (cardiovascular endurance)\n4. Pull-ups (upper body strength)\n5. Shuttle run (agility & speed)\n6. Arm curling (arm strength)\n\nEach station should focus on different components of fitness: strength, endurance, agility, flexibility.",
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_q37",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "SAI Khelo India Tests",
        type: "Long",
        marks: 5,
        question:
            "Write in detail the procedure and scoring of 'Flamingo Balance Test' and 'Plate Tapping Test' recommended for age group 5-8 years by SAI Khelo India.",
        answer:
            "Flamingo Balance Test:\nProcedure: Stand on beam → Keep balance by holding instructor's hand → Start watch when instructor lets go → Pause stopwatch each time subject loses balance → Resume timing → Count number of falls in 60 seconds → If more than 15 falls in first 30 seconds, test is terminated.\nScoring: Total number of falls/loss of balance in 60 seconds is recorded.\n\nPlate Tapping Test:\nProcedure: Two discs placed 60cm apart on table → Rectangle placed equidistant between discs → Non-preferred hand on rectangle → Preferred hand moves back and forth between discs over the hand in middle as quickly as possible → 25 full cycles (50 taps).\nScoring: Time taken to complete 25 cycles is recorded.",
        source: "CBSE 2025 Board Exam",
    },

    // ═══════════════════════════════════════════════
    //  2024 – Section A (MCQs, 1 mark each)
    // ═══════════════════════════════════════════════
    {
        id: "2024_q1",
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Pranayama",
        type: "MCQ",
        marks: 1,
        question:
            "Which pranayama is helpful for activating the sympathetic nervous system? (a) Ujjayi (b) Bhastrika (c) Suryabhedan Pranayama (d) Sheetali",
        answer: "(C) Suryabhedan Pranayama",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q2",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Special Olympics",
        type: "MCQ",
        marks: 1,
        question: "Special Olympics World Games started in the year: (a) 1968 (b) 1978 (c) 1989 (d) 1999",
        answer: "(C) 1989",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q3",
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Nutritional Elements",
        type: "MCQ",
        marks: 1,
        question: "Which nutrient is also known as roughage? (a) Protein (b) Fats (c) Roughage (Fibre) (d) Vitamins",
        answer: "(C) Roughage (Fibre)",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q4",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Assertion-Reason",
        type: "MCQ",
        marks: 1,
        question:
            "Assertion (A): Force is a push or pull. Reason (R): Newton's second law defines force = mass × acceleration. (a) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation. (b) Both A and R are true but R is NOT correct explanation (c) A is true but R is false (d) A is false but R is true",
        answer:
            "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation.",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q5",
        year: 2024,
        chapter: "Training in Sports",
        topic: "Match the Following",
        type: "MCQ",
        marks: 1,
        question:
            "Match the following training methods with their descriptions. (a) I-1, II-2, III-3, IV-4 (b) I-3, II-1, III-4, IV-2 (c) I-2, II-4, III-1, IV-3 (d) I-4, II-3, III-2, IV-1",
        answer: "(C) I-2, II-4, III-1, IV-3",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q6",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Assertion-Reason",
        type: "MCQ",
        marks: 1,
        question:
            "Assertion (A): Motivation is the driving force behind behaviour. Reason (R): Intrinsic motivation comes from within the individual. (a) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation. (b) Both A and R are true but R is NOT correct explanation (c) A is true but R is false (d) A is false but R is true",
        answer:
            "(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation.",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q7",
        year: 2024,
        chapter: "Training in Sports",
        topic: "Components of Fitness",
        type: "MCQ",
        marks: 1,
        question:
            "The ability to perform an activity for a prolonged period of time without undue fatigue is known as: (a) Strength (b) Speed (c) Endurance (d) Agility",
        answer: "(C) Endurance",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q8",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Centre of Gravity",
        type: "MCQ",
        marks: 1,
        question: "Which factor decreases stability? (a) Lower COG (b) Wider base (c) More friction (d) Higher centre of gravity",
        answer: "(D) Higher centre of gravity",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q9",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Personality Traits",
        type: "MCQ",
        marks: 1,
        question:
            "A person who is primarily focused on their own thoughts, feelings and experiences is known as: (a) Extrovert (b) Self-Centered (c) Ambivert (d) Agreeable",
        answer: "(B) Self-Centered",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q10",
        year: 2024,
        chapter: "Training in Sports",
        topic: "Strength Types",
        type: "MCQ",
        marks: 1,
        question:
            "The ability to exert maximum force in a single effort is known as: (a) Maximum strength (b) Strength endurance (c) Explosive strength (d) Static strength",
        answer: "(C) Explosive strength",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q11",
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Objectives of PE",
        type: "MCQ",
        marks: 1,
        question: "One of the main objectives of physical education is: (a) To win (b) To earn money (c) To promote health and fitness (d) To become famous",
        answer: "(C) To promote health and fitness",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q12",
        year: 2024,
        chapter: "Children & Women in Sports",
        topic: "Motor Development",
        type: "MCQ",
        marks: 1,
        question:
            "At which age do children typically develop fundamental motor skills? (a) 1-2 years (b) 2-3 years (c) 3-4 years (d) 5-6 years",
        answer: "(C) 3-4 years",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q13",
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Asanas",
        type: "MCQ",
        marks: 1,
        question:
            "Which asana strengthens the back muscles? (a) Padmasana (b) Vajrasana (c) Tadasana (d) Shalbhasana",
        answer: "(D) Shalbhasana",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q14",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Deaflympics",
        type: "MCQ",
        marks: 1,
        question: "ICSD stands for: (a) International Council of Sports for the Deaf (b) International Center of Sports for the Deaf (c) International Club of Sports for the Deaf (d) International Committee of Sports for the Deaf",
        answer: "(D) International Committee of Sports for the Deaf",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q15",
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "BMI",
        type: "MCQ",
        marks: 1,
        question: "Normal BMI range for adults is: (a) <18.5 (b) 25-29.9 (c) 18.5 – 24.9 (d) >30",
        answer: "(C) 18.5 – 24.9",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q16",
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Fitness Tests",
        type: "MCQ",
        marks: 1,
        question: "In the sit and reach test, the box height is: (a) 4 inches (b) 8 inches (c) 6 inches (d) 12 inches",
        answer: "(C) 6 inches",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q17",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Learning Stages",
        type: "MCQ",
        marks: 1,
        question: "The first stage of motor learning is: (a) Cognitive (b) Associative (c) Autonomous (d) Professional",
        answer: "(A) Cognitive",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q18",
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Senior Citizen Tests",
        type: "MCQ",
        marks: 1,
        question: "Chair sit and reach test measures: (a) Upper body flexibility (b) Abdominal strength (c) Lower body flexibility (d) Agility",
        answer: "(C) Lower body flexibility",
        source: "CBSE 2024 Board Exam",
    },

    // ═══════════════════════════════════════════════
    //  2024 – Section B (2 marks each)
    // ═══════════════════════════════════════════════
    {
        id: "2024_q19",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Levers",
        type: "Short",
        marks: 2,
        question:
            "Describe the second-class lever with suitable example from sports.",
        answer:
            "Second Class Lever: It has the load/resistance between the fulcrum and the force. The force arm is always greater than resistance arm, so there is always mechanical advantage.\n\nExample: Calf raise exercise – the ball of the foot acts as fulcrum, body weight is the load, and calf muscles provide the force.",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q20",
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Vitamins",
        type: "Short",
        marks: 2,
        question:
            "Explain the role of any two vitamins important for athletes.",
        answer:
            "1. Vitamin D – Helps in absorption of calcium, strengthens bones, prevents fractures. Important for athletes performing outdoor activities.\n2. Vitamin C – Acts as an antioxidant, boosts immunity, aids in recovery from injuries, helps in iron absorption.",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q21",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Anxiety",
        type: "Short",
        marks: 2,
        question: "What is anxiety? How does it affect sports performance?",
        answer:
            "Anxiety: A feeling of worry, nervousness, or unease about something with an uncertain outcome.\n\nEffects on sports performance:\n1. Decreases concentration and focus.\n2. Increases muscle tension leading to poor coordination.\n3. Impairs decision-making ability.\n4. Can lead to decreased performance and choking under pressure.",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q22",
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Committees",
        type: "Short",
        marks: 2,
        question: "Write any four functions of a sports organizing committee.",
        answer:
            "1. Planning and scheduling of events.\n2. Arrangement of facilities and equipment.\n3. Formation of sub-committees.\n4. Budgeting and financial management.\n5. Ensuring safety and first-aid arrangements.\n6. Managing registration and entries.",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q23",
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Postural Deformities",
        type: "Short",
        marks: 2,
        question:
            "What is lordosis? Suggest two corrective exercises for it.",
        answer:
            "Lordosis: Excessive inward curvature of the lumbar spine (lower back).\n\nCorrective exercises:\n1. Halasana (Plough Pose)\n2. Sit-ups/Crunches to strengthen abdominal muscles\n3. Paschimottanasana (Seated Forward Bend)",
        source: "CBSE 2024 Board Exam",
    },

    // ═══════════════════════════════════════════════
    //  2024 – Section C (3 marks each)
    // ═══════════════════════════════════════════════
    {
        id: "2024_q25",
        year: 2024,
        chapter: "Training in Sports",
        topic: "Flexibility",
        type: "Short",
        marks: 3,
        question:
            "Define flexibility. Explain any two methods to improve flexibility.",
        answer:
            "Flexibility: The range of motion possible at a joint or series of joints.\n\nMethods:\n1. Static Stretching: Slowly stretching a muscle to its furthest point and holding the position for 15-30 seconds. Safe and effective.\n2. Dynamic Stretching: Performing controlled movements through the full range of motion. E.g., leg swings, arm circles.\n3. PNF (Proprioceptive Neuromuscular Facilitation): A technique combining stretching and contraction of the muscle group being targeted.",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q26",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Types of Disabilities",
        type: "Short",
        marks: 3,
        question:
            "Define disability and discuss any two types of disabilities.",
        answer:
            "Disability: A physical or mental condition that limits a person's movements, senses, or activities.\n\nTypes:\n1. Cognitive Disability: Affects mental processes such as memory, learning, problem solving, communication. E.g., Dyslexia, ADHD.\n2. Physical Disability: Affects mobility, dexterity, or physical functioning. E.g., Mobility impairment, visual impairment, epilepsy.\n3. Intellectual Disability: Characterized by below-average intellectual functioning and adaptive behavior deficits.",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q27",
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Asanas for Obesity",
        type: "Short",
        marks: 3,
        question:
            "Describe the procedure and benefits of any one asana used for preventing obesity.",
        answer:
            "Trikonasana (Triangle Pose):\nProcedure: Stand with feet 3-4 feet apart → Turn right foot out 90° → Extend arms to sides at shoulder height → Bend to the right, placing right hand on right shin → Extend left arm toward ceiling → Look up at left hand → Hold for 30 seconds → Repeat on other side.\n\nBenefits: Stretches legs, muscles, hips, spine → Improves digestion → Reduces fat from waist and thighs → Strengthens legs and ankles → Stimulates abdominal organs.",
        source: "CBSE 2024 Board Exam",
    },

    // ═══════════════════════════════════════════════
    //  2024 – Section E (5 marks)
    // ═══════════════════════════════════════════════
    {
        id: "2024_q34",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Newton's Laws",
        type: "Long",
        marks: 5,
        question:
            "Explain Newton's three laws of motion with suitable examples from the field of sports.",
        answer:
            "1. First Law (Law of Inertia): A body at rest stays at rest and a body in motion stays in motion unless acted upon by an external force. E.g., A football remains stationary until kicked; a cricket ball keeps moving until friction/air resistance stops it.\n\n2. Second Law (Law of Acceleration): Force = Mass × Acceleration. The acceleration of an object is directly proportional to the net force and inversely proportional to its mass. E.g., A heavier shot put requires more force to throw the same distance as a lighter javelin.\n\n3. Third Law (Action-Reaction): For every action, there is an equal and opposite reaction. E.g., When a swimmer pushes water backward, the water pushes the swimmer forward; when sprinting, pushing the ground backward propels the athlete forward.",
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_q35",
        year: 2024,
        chapter: "Training in Sports",
        topic: "Endurance",
        type: "Long",
        marks: 5,
        question:
            "Define endurance. Explain any two methods of endurance development.",
        answer:
            "Endurance: The ability to sustain a physical activity over a prolonged period without undue fatigue.\n\nMethods:\n1. Continuous Training: Running, swimming, or cycling at a steady pace for an extended period (usually 30+ minutes). Develops aerobic endurance. Heart rate maintained at 60-80% of maximum.\n\n2. Fartlek Training: 'Speed play' method combining continuous running with varying speed and terrain. Alternates between fast and slow paces. Develops both aerobic and anaerobic endurance.\n\n3. Interval Training: Alternating periods of high-intensity exercise with periods of rest or low-intensity exercise. Can be designed for aerobic or anaerobic endurance.",
        source: "CBSE 2024 Board Exam",
    },

    // ═══════════════════════════════════════════════
    //  2023 – Section A (MCQs, 1 mark each)
    // ═══════════════════════════════════════════════
    {
        id: "2023_q1",
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Asanas",
        type: "MCQ",
        marks: 1,
        question:
            "Which asana is beneficial for relieving back pain?",
        answer: "(A) Bhujangasana",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q2",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Big Five Personality",
        type: "MCQ",
        marks: 1,
        question: "Which is NOT one of the Big Five personality traits?",
        answer: "(D) Neuroticism (it IS one – question asks about non-Big Five trait)",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q3",
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Force",
        type: "MCQ",
        marks: 1,
        question: "The upward force exerted by water on an immersed body is called:",
        answer: "(C) Buoyant Force",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q4",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Respiratory System",
        type: "MCQ",
        marks: 1,
        question: "Vital capacity is a measure of:",
        answer: "(C) Efficiency of Lungs",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q5",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Components of Fitness",
        type: "MCQ",
        marks: 1,
        question: "Fartlek training primarily develops:",
        answer: "(A) Endurance",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q6",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Coordinative Abilities",
        type: "MCQ",
        marks: 1,
        question:
            "The ability to couple two or more movements together is called:",
        answer: "(B) Coupling ability",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q7",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Muscle Fatigue",
        type: "MCQ",
        marks: 1,
        question: "Muscle fatigue is primarily caused by accumulation of:",
        answer: "(A) Lactic acid",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q8",
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Factors of Stability",
        type: "MCQ",
        marks: 1,
        question: "Stability is directly proportional to:",
        answer: "(A) Weight",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q9",
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Assertion-Reason",
        type: "MCQ",
        marks: 1,
        question:
            "Assertion: Friction is essential in sports. Reason: Friction provides grip and stability.",
        answer: "(A) Both (A) and (R) are true and (R) is the correct explanation of (A).",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q10",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Functions of Water",
        type: "MCQ",
        marks: 1,
        question: "One of the main functions of water in the body is to:",
        answer: "(A) Regulate body temperature",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q11",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Vitamins",
        type: "MCQ",
        marks: 1,
        question: "Water-soluble vitamins are:",
        answer: "(B) Vitamin B and C",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q12",
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Asanas",
        type: "MCQ",
        marks: 1,
        question: "Which asana involves sitting in a mountain-like position?",
        answer: "(C) Parvatasana",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q13",
        year: 2023,
        chapter: "Test & Measurement in Sports",
        topic: "Fitness Tests",
        type: "MCQ",
        marks: 1,
        question: "How many questions are there in the Sit and Reach test?",
        answer: "(A) 18",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q14",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Tournament Types",
        type: "MCQ",
        marks: 1,
        question: "In which type of tournament is a team eliminated after one loss?",
        answer: "(A) Elimination tournament",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q15",
        year: 2023,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Paralympic Games",
        type: "MCQ",
        marks: 1,
        question: "The first Paralympic Games were held in:",
        answer: "(C) 1924",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q16",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Match the Following",
        type: "MCQ",
        marks: 1,
        question: "Match the following committees with their functions.",
        answer: "(A) I-3, II-1, III-4, IV-2",
        source: "CBSE 2023 Board Exam",
    },

    // ═══════════════════════════════════════════════
    //  2023 – Section B (2 marks each)
    // ═══════════════════════════════════════════════
    {
        id: "2023_q19",
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Asanas for Diabetes",
        type: "Short",
        marks: 2,
        question: "Describe any two asanas helpful in managing diabetes.",
        answer:
            "1. Mandukasana (Frog Pose): Sit in Vajrasana, make fists, place on navel, bend forward. Beneficial for pancreas and diabetes.\n2. Ardha Matsyendrasana (Half Spinal Twist): Sit, twist spine. Massages abdominal organs, stimulates pancreas.",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q20",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Aggression in Sports",
        type: "Short",
        marks: 2,
        question: "What is aggression in sports? Write any two types.",
        answer:
            "Aggression: Behaviour intended to harm or injure another person.\n\nTypes:\n1. Hostile Aggression: Motivated by anger, intended solely to harm.\n2. Instrumental Aggression: Used to achieve performance goals, not driven by anger.",
        source: "CBSE 2023 Board Exam",
    },

    // ═══════════════════════════════════════════════
    //  2023 – Section C (3 marks each)
    // ═══════════════════════════════════════════════
    {
        id: "2023_q25",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Coordinative Abilities",
        type: "Short",
        marks: 3,
        question: "Explain any three types of coordinative abilities.",
        answer:
            "1. Reaction Ability: Ability to react against a signal quickly. E.g., 100m sprint start.\n2. Balance Ability: Ability to maintain balance in static and moving conditions. E.g., gymnastics.\n3. Rhythm Ability: Ability to understand rhythm and move accordingly. E.g., synchronized swimming.\n4. Adaptation Ability: Ability to change movement based on situation changes.\n5. Coupling Ability: Ability to couple movements of different body parts.",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q26",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Soft Tissue Injuries",
        type: "Short",
        marks: 3,
        question: "Explain any three common soft tissue injuries in sports.",
        answer:
            "1. Sprain: Injury to ligaments due to sudden twist. Causes swelling, pain, and limited movement.\n2. Strain: Injury to muscles or tendons from overstretching. Causes pain, muscle spasm.\n3. Contusion (Bruise): Caused by direct blow to body tissue. Results in discoloration and swelling.\n4. Abrasion: Scraping injury to skin surface from friction.",
        source: "CBSE 2023 Board Exam",
    },

    // ═══════════════════════════════════════════════
    //  2023 – Section E (5 marks each)
    // ═══════════════════════════════════════════════
    {
        id: "2023_q34",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Personality Types",
        type: "Long",
        marks: 5,
        question:
            "Explain Sheldon's classification of personality (body types) in detail.",
        answer:
            "William Sheldon classified personality based on body type (somatotype):\n\n1. Endomorph: Soft, round body shape. Tends to gain weight easily. Broad hips, narrow shoulders. Personality: Sociable, relaxed, comfortable, food-loving.\n\n2. Mesomorph: Hard, muscular, athletic build. Low body fat, strong muscles. Personality: Active, assertive, aggressive, competitive.\n\n3. Ectomorph: Thin, lean, long-limbed body. Narrow frame. Personality: Private, introverted, self-conscious, artistic.\n\nEach person may exhibit characteristics of all three types but usually dominant in one.",
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_q35",
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Projectile Motion",
        type: "Long",
        marks: 5,
        question:
            "What is a projectile? Explain the factors affecting projectile trajectory in sports.",
        answer:
            "Projectile: An object thrown into the air that is subject only to the force of gravity and air resistance.\n\nFactors:\n1. Angle of Release: The angle at which the projectile is released determines the trajectory. Optimal angle for maximum distance is approximately 45°.\n2. Speed of Release: Greater initial speed results in greater range and height.\n3. Height of Release: Higher release point gives greater advantage.\n4. Air Resistance: Wind can alter the path of the projectile.\n5. Gravity: Pulls the projectile downward, affecting the height and range.",
        source: "CBSE 2023 Board Exam",
    },

    // ═══════════════════════════════════════════════
    //  2022 – Section A (MCQs / Short, various marks)
    // ═══════════════════════════════════════════════
    {
        id: "2022_q1",
        year: 2022,
        chapter: "Psychology & Sports",
        topic: "Motivation",
        type: "Short",
        marks: 2,
        question:
            "Write any two disadvantages of extrinsic motivation in sports.",
        answer:
            "1. May kill intrinsic motivation – athletes start performing only for rewards, not enjoyment.\n2. Once rewards are removed, the athlete loses interest and may quit the sport.\n3. Creates dependency on external factors.\n4. Can lead to burnout and dropping out from sport.",
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_q4",
        year: 2022,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Types of Disability",
        type: "Short",
        marks: 2,
        question: "Define disability and list down any two types of disability.",
        answer:
            "Disability: A physical or mental condition that limits a person's movements, senses, or activities.\n\nTypes:\n1. Cognitive Disability – Memory disorder, Hyperactivity, Dyslexia\n2. Intellectual Disability – Reasoning, Learning, Problem solving, Communication\n3. Physical Disability – Mobility, Dexterity, Respiratory disorder, Vision, Epilepsy",
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_q5",
        year: 2022,
        chapter: "Physiology & Injuries in Sports",
        topic: "First Aid",
        type: "Short",
        marks: 2,
        question: "Describe any 2 objectives of first aid.",
        answer:
            "1. Preserves Life – Primary objective is to save the life of the injured person.\n2. Promotes Recovery – Helps the injured person recover faster.\n3. Protects from Unconsciousness\n4. Prevents the escalation of the illness or injury\n5. Pain relief\n6. Makes the victim comfortable till transported to a medical facility.",
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_q6",
        year: 2022,
        chapter: "Training in Sports",
        topic: "Coordinative Abilities",
        type: "Short",
        marks: 2,
        question:
            "Elucidate any 2 types of coordinative ability with suitable example.",
        answer:
            "1. Reaction Ability: Ability to react against the signal. E.g., 100m sprint start.\n2. Balance Ability: Ability to maintain balance during static and moving condition. E.g., water-skiing, balance beam.\n3. Rhythm Ability: Ability to understand the rhythm and move accordingly. E.g., gymnastics, synchronized swimming.\n4. Coupling Ability: Ability to couple movements of different body parts. E.g., hands, feet and eyes coordination in marching.",
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_q7",
        year: 2022,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Autism Spectrum Disorder",
        type: "Short",
        marks: 2,
        question: "What are the symptoms of Autism Spectrum Disorder?",
        answer:
            "Symptoms of ASD:\n1. Difficulty in communication\n2. Repetitive behaviour\n3. Does not express emotions\n4. Avoids eye contact\n5. Touching objects repeatedly\n6. Doesn't make friends\n7. Sensitive to taste, smell and sound\n8. Difficulty in speech\n9. Failure to show interest, not responding to name",
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_q8",
        year: 2022,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiological Factors",
        type: "Short",
        marks: 2,
        question: "Explain any two physiological factors that help determine endurance.",
        answer:
            "1. Aerobic Capacity – The body's ability to use oxygen efficiently during prolonged exercise.\n2. VO2 Max – Maximum volume of oxygen the body can utilize during intense exercise.\n3. Lactic Acid Tolerance – Ability to tolerate and clear lactic acid build-up.\n4. Muscle Composition – Proportion of slow-twitch vs fast-twitch muscle fibres.",
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_q9",
        year: 2022,
        chapter: "Psychology & Sports",
        topic: "ODD",
        type: "Short",
        marks: 2,
        question: "Enlist any 4 causes of Oppositional Defiant Disorder.",
        answer:
            "1. Biological or Genetic factors\n2. Physical Factors\n3. Psychological Factors\n4. Social Factors\n5. Environmental Factors",
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_q10",
        year: 2022,
        chapter: "Psychology & Sports",
        topic: "Aggression",
        type: "Short",
        marks: 3,
        question: "Define aggression. Discuss any 2 types of Aggression.",
        answer:
            "Aggression: The kind of behaviour that causes harm or damage to people or property.\n\nTypes:\n1. Hostile Aggression: Motivated by anger, intended solely to harm. Unplanned, reactionary, impulsive.\n2. Instrumental Aggression: Used to achieve performance goals. Athletes attempt to injure opponent to increase chances of victory.\n3. Assertive Behaviour: Standing up for own rights without violating others. Direct, honest communication.",
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_q11",
        year: 2022,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Disability Etiquettes",
        type: "Short",
        marks: 3,
        question:
            "What do you mean by disability etiquettes? List down any 4 disability etiquettes while communicating with a person with special needs.",
        answer:
            "Disability etiquettes: A set of guidelines for respectfully communicating and interacting with people who have disabilities.\n\nEtiquettes:\n1. Speak directly to the person, not their companion.\n2. Keep your tone low and communicate slowly and clearly.\n3. Give them time to respond.\n4. Always look at and speak directly to the person.\n5. Use sign language if both are familiar.\n6. While talking, keep body low and at eye level.\n7. Hear out the person patiently without hurry.",
        source: "CBSE 2022 Board Exam",
    },
];
