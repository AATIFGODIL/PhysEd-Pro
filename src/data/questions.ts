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
    imageUrl?: string;
    options?: string[];
    matchTable?: {
        headers: string[];
        rows: { left: string; right: string }[];
    };
}

export const chapters = [
    "Planning in Sports",
    "Children & Women in Sports",
    "Yoga & Lifestyle",
    "Physical Education & Sports for CWSN",
    "Sports & Nutrition",
    "Test & Measurement in Sports",
    "Physiology & Injuries in Sports",
    "Biomechanics & Sports",
    "Psychology & Sports",
    "Training in Sports",
] as const;

export type Chapter = (typeof chapters)[number];

export const questions: Question[] = [
    // ─────────────────────────────────────────────
    //  2022
    // ─────────────────────────────────────────────

    {
        id: "2022_1",
        year: 2022,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Short",
        marks: 2,
        question: `Comment on the statement: "Asanas can be used as a preventive measure."`,
        answer: `• Asanas strengthen the immune system
• Improve blood circulation
• Efficient working of the respiratory system
• Improves the digestive system
• Efficiency of the nervous system increases
• Excretory system becomes efficient
• Stimulate and regulate the functions of endocrine glands
• Improve concentration ability
• Improve body flexibility
(Any 4 or any other relevant points)`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_2",
        year: 2022,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 2,
        question: `What is Active flexibility and Passive flexibility?`,
        answer: `Active Flexibility: It is the ability of joints to do movements without any external help. The stretching is done to its full range without the help of a partner. It is further divided into two categories — Static and Dynamic flexibility.

Passive Flexibility: It is the ability of joints to do movements with external help. E.g. performing stretching exercise with the help of a partner.`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_3",
        year: 2022,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 2,
        question: `Justify the statement: "Extrinsic motivation sometimes may kill intrinsic motivation."`,
        answer: `Extrinsic motivation refers to behaviour driven by external rewards like cash, fame, grades, and praise. As a consequence, an athlete initiates and assists an activity for attraction, incentive, or rewards. Earlier or later the athlete loses interest and quits the sport once the rewards are no longer forthcoming. For example, children may start playing cricket for fun but may start feeling the burden of meeting expectations of coaches and parents to succeed, leading to burnout and eventually dropping out from sports.`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_4",
        year: 2022,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 2,
        question: `Define disability and list down any two types of disability.`,
        answer: `Disability: A physical or mental condition that limits a person's movements, senses, or activities.
OR: Disability is the state of an individual when he/she cannot work efficiently.

Types of disability (any 2):
1. Cognitive (Memory disorder, Dyslexia, Hyperactive, Sleep disorder, Motor deficiency)
2. Intellectual (Learning problem, Reasoning, Communication, Judgment)
3. Physical Disability / Sensory impairment (Mobility, Dexterity, Respiratory disorder, Vision, Epilepsy)`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_5",
        year: 2022,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 2,
        question: `Describe any two objectives of first aid.`,
        answer: `1. Preserves life
2. Promotes recovery
3. Protects from unconsciousness
4. Prevents the escalation of the illness or injury
5. Pain relief
6. To make the victim comfortable till he is transported to a medical facility
(Explain any 2 points)`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_6",
        year: 2022,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 2,
        question: `Elucidate any two types of coordinative ability with suitable examples.`,
        answer: `1. Reaction Ability: Ability to react against a signal. Types — simple and complex reaction ability. E.g. 100 m start.
2. Balance Ability: Ability to maintain balance during static and moving conditions. E.g. Water-skiing or performing on a balancing beam.
3. Rhythm Ability: Ability to understand the rhythm and do movement accordingly. E.g. Gymnastics, synchronized swimming.
4. Adaptation Ability: Ability to change complete movement based on anticipated changes. E.g. Combat sports like judo, wrestling.
5. Differentiation Ability: Ability to achieve fine tuning between individual movement phases. E.g. Basketball dribbling.
6. Coupling Ability: Ability to couple two or more movements of different body parts. E.g. Coordination between hands, feet and eyes in smashing.
7. Orientation Ability: Ability to change position and movement in time and space. E.g. Starting from blocks in sprints.
(Any 2 types with relevant example)`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_7",
        year: 2022,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 2,
        question: `What are the symptoms of Autism Spectrum Disorder?`,
        answer: `1. Difficulty in communication
2. Repetitive behaviour
3. Does not express emotions
4. Avoids eye contact
5. Touching objects repeatedly
6. Does not make friends
7. Sensitive to taste, smell and sound
8. Difficulty in speech
9. Failure to show interest; not responding to name
10. Avoids social interactions
(Any 2 relevant points)`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_8",
        year: 2022,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 2,
        question: `Explain any two physiological factors that help in determining endurance.`,
        answer: `1. Aerobic capacity
2. Oxygen intake
3. Oxygen uptake
4. Energy reserve
5. Lactic acid tolerance
6. Anaerobic capacity
7. Movement economy
8. VO2 max
9. Muscle composition
(Explain any 2 points)`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_9",
        year: 2022,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 2,
        question: `Enlist any four causes of Oppositional Defiant Disorder.`,
        answer: `1. Biological or Genetic factors
2. Physical Factors
3. Psychological Factors
4. Social Factors
5. Environmental Factor
(List any 4 relevant causes)`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_10",
        year: 2022,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Long",
        marks: 3,
        question: `Define aggression. Discuss any two types of aggression.`,
        answer: `Aggression: The kind of behaviour that causes harm or damage to people or property.

Types:
1. Hostile Aggression: Actions motivated by anger, intended solely to harm someone. Primary aim is to cause injury. Unplanned, reactionary, impulsive, fuelled by intense emotions.
2. Instrumental Aggression: Necessary to achieve performance goals. Athletes attempt to injure an opponent to increase chances of victory. Not because of enmity or anger.
3. Assertive Behaviour: Aim is to communicate productively, achieving a win/win outcome. Standing up for your own rights without violating those of the other person.
(Explain any two)`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_11",
        year: 2022,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Long",
        marks: 3,
        question: `What do you mean by disability etiquettes? List down any four disability etiquettes while communicating with a person with special needs.`,
        answer: `Disability etiquettes are a set of guidelines dealing specifically with how to approach a person with disability.
OR: Disability etiquettes refer to communicating and interacting respectfully and courteously with people who have disabilities.

Etiquettes (any 4):
• Speak to the person directly, not to the person accompanying them
• Establish rapport
• Keep your tone low; communicate slowly and clearly
• Give them time to respond
• Language should be nice and humble
• Always look at and speak directly to the person
• Never be rude; always be polite
• Use sign language if both parties are familiar with it
• While talking, keep your body at their eye level
• Read body language and lip sync without making awkward faces`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_12",
        year: 2022,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Long",
        marks: 3,
        question: `Draw a diagram and explain the management of any two types of bone injury.`,
        imageUrl: "/PE_2022_qs_12.png",
        answer: `Types and management (any two):

a. Stress Fracture: Rest; apply ice for 24–48 hours; painkillers with medical consent; use a splint for immobilisation; avoid the causative activity for at least 6 weeks; physiotherapy after recovery.

b. Greenstick Fracture: Immobilisation with removable splint; medicine to reduce swelling; painkillers with medical consent; physiotherapy after recovery.

c. Comminuted Fracture: Use plasters and splint above and below the fracture; painkillers; physiotherapy after recovery.

d. Transverse Fracture: Hospitalisation not necessary for minor breaks; serious cases require surgery; painkillers; avoid activity; physiotherapy.

e. Oblique Fracture: Most require surgery; metal rods and screws may be used; physiotherapy.

f. Impacted Fracture: Sling or splint for immobilisation; surgery for severe cases; physiotherapy.`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_13",
        year: 2022,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Long",
        marks: 3,
        question: `Write the benefits and contraindications of Matsyasana.`,
        answer: `Benefits (any 3):
1. Opens and stretches neck muscles and shoulders
2. Helps open the chest and corrects round shoulders
3. Provides relief from respiratory disorders by encouraging deep breathing; increases lung capacity
4. Strengthens back muscles through the formation of the arch
5. Increased blood supply to cervical and thoracic regions helps tone parathyroid, pituitary and pineal glands
6. Reduces tension and stiffness in neck and shoulders; helps with initial stages of spondylitis
7. Improves flexibility of the neck
8. Helps regulate emotions and stress

Contraindications (any 3):
1. Persons with heart diseases, high/low blood pressure should not perform it
2. Patients of migraine and insomnia should avoid it
3. Serious neck or lower-back injuries — strongly not recommended
4. After abdominal surgery or with hernia, avoid it
5. Issues of dizziness or cervical spine problems — avoid it
6. Persons with peptic ulcers should refrain`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_14",
        year: 2022,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Long",
        marks: 3,
        question: `Differentiate between Isometric and Isotonic exercises with suitable examples.`,
        answer: `Isometric Exercises:
• Involve static muscle contraction against stationary resistance
• No visible movement; muscle length remains the same
• Used in gymnastics, weightlifting, wrestling
• Develops maximum strength
• Can rehabilitate immobilised joints
• Recovery from fatigue is slow
• E.g. Pushing against wall, flexed arm hang

Isotonic Exercises:
• Involve dynamic movement; muscle changes in length
• Most popular type of strength training
• Used in almost all games and sports
• Develops explosive strength
• Develops excellent coordination
• Recovery from fatigue is fast
• E.g. Push-ups, pull-ups, rope climbing, bench press
(Any 3 relevant points of difference)`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_15",
        year: 2022,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Long",
        marks: 4,
        question: `What are the personality traits according to the Big Five Theory? Explain any four.`,
        answer: `1. Openness: Willing to embrace new things; imaginative; insightful; open-minded; curious.

2. Extraversion: Talkative, vocal and energetic; socialises easily; positive emotions; enthusiastic; action-oriented.

3. Conscientiousness: Honest, hardworking and wise; trustworthy; self-disciplined and responsible; detail-oriented; punctual; strong work ethics.

4. Agreeableness: Kind, loving and compassionate; co-operative and polite; empathetic and affectionate; trustworthy and honest.

5. Neuroticism: Emotionally unstable; unsuccessful in maintaining interpersonal relationships; sad and moody; feeling of self-doubt; anxiety and irritability; unable to handle stress; self-conscious and shy.
(Explain any 4 traits)`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_16",
        year: 2022,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Long",
        marks: 4,
        question: `Discuss any two long-term and any two short-term effects of exercise on the cardiorespiratory system.`,
        answer: `Short-term effects (any 2):
1. Increased heart rate
2. Increased blood circulation
3. Increased blood pressure
4. Increased stroke volume
5. Increased cardiac output
6. Increased breath rate
7. Increased tidal volume
8. Oxygen uptake increases

Long-term effects (any 2):
1. Increased size and strength of heart
2. Low level of accumulation of lactic acid
3. Decrease in resting heart rate
4. Normal blood pressure
5. Increase in stroke volume and cardiac output
6. Increase in strength of intercostal muscles
7. Diaphragm muscles strengthen
8. Lung volume increases; vital capacity increases
9. Unused alveoli become active
10. Increase in residual volume`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_17",
        year: 2022,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Long",
        marks: 4,
        question: `Define endurance and discuss the methods of endurance development.`,
        answer: `Endurance: Ability to sustain an activity.
OR: Physiological capacity of an individual to sustain movement over a period of time.
OR: Ability to resist fatigue.

Methods:
1. Continuous Method: Exercise performed without a break. Intensity remains low but duration is long. Heart rate: 140–160 bpm; duration not less than 30 minutes. E.g. Cross country race.

2. Interval Method: Based on effort and recovery principle. Recovery period given after each speedy workout. Load can be increased by reducing recovery or increasing workout. E.g. 400 m at 80% speed followed by jogging until heart rate drops to 120–140 bpm.

3. Fartlek Method: Means "speed play." A blend of continuous and interval training. Lays emphasis on both aerobic and anaerobic systems. Speed is not pre-planned; changed as per surroundings (hills, rivers, forest, muddy roads). Heart rate: 140–180 bpm.`,
        source: "CBSE 2022 Board Exam",
    },
    {
        id: "2022_18",
        year: 2022,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Long",
        marks: 4,
        question: `What is obesity? Draw stick diagrams of any two asanas recommended to control obesity and explain their procedure.`,
        answer: `Obesity: A condition in which excess body fat accumulates to such an extent that health may be affected. Commonly defined as a BMI of 30 kg/m² or higher.

Asanas for obesity (any 2 — procedure required):

Vajrasana: Kneel on the ground, knees/ankles/toes touching the floor. Toes stretched backwards. Place palms on knees. Keep upper body straight. Control breath. Maintain for 5–10 minutes.

Hastasana (Urdhwahastottanasana): Stand erect. Stretch palms facing upward. Keep hands straight near ears. Exhale while bending to one side. Hold 10–15 seconds. Inhale and return to centre. Repeat on other side.

Trikonasana: Stand erect, legs 1–2 feet apart. Stretch arms sideways to shoulder level. Bend to the left from the waist. Place left hand on left foot, stretch right arm upward. Hold 5–10 seconds. Breathe normally. Repeat on other side.

Ardhamatsyendrasana: Sit on mat, extend legs. Bend left knee and place left foot near right buttock. Place right foot on the ground over the left knee. Keep right hand on backside; encircle waist with the right arm. Turn head to the right. Repeat on the other side.`,
        source: "CBSE 2022 Board Exam",
    },
    // ─────────────────────────────────────────────
    //  2023  –  CORRECTED from CBSE PDFs
    // ─────────────────────────────────────────────

    {
        id: "2023_MCQ_1",
        options: ["Bhujangasana", "Halasana", "Vajrasana", "Dhanurasana"],
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Identify the Asana :`,
        imageUrl: "/PE_2023_qs_1.png",
        answer: `(a) Bhujangasana
(For visually impaired: ________ pose is like cobra. → Bhujangasana)`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_2",
        options: ["Extroversion", "Agreeableness", "Conscientiousness", "Neuroticism"],
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Traits like sadness, mood swings and emotional instability are related with ______.`,
        answer: `(d) Neuroticism`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_3",
        options: ["Gravity", "Angle of Release", "Buoyant Force", "Air Resistance"],
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is NOT the factor affecting projectile trajectory ?`,
        answer: `(c) Buoyant Force`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_4",
        options: ["Joint Structure", "Previous Injury", "Efficiency of Lungs", "Age and Gender"],
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following factors, does NOT determine flexibility ?`,
        answer: `(c) Efficiency of Lungs`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_5",
        options: ["Endurance", "Strength", "Flexibility", "Speed"],
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `Fartlek Training is used to develop ______.`,
        answer: `(a) Endurance`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_6",
        options: ["Orientation ability", "Coupling ability", "Adaptation ability", "Differentiation ability"],
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which type of coordinative ability is required in games like judo and wrestling ?`,
        answer: `(b) Coupling ability`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_7",
        options: ["Lactic acid", "Hydrochloric acid", "Acetic acid", "Sulphuric acid"],
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `The ability to tolerate higher concentration of ______ can help in improving endurance performance.`,
        answer: `(a) Lactic acid`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_8",
        options: ["Weight", "Force", "Resistance", "Velocity"],
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Centre of Gravity is the average location of an object's ______.`,
        answer: `(a) Weight`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_9",
        options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true.",
        ],
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Given below are the two statements labelled Assertion (A) and Reason (R).
Assertion (A) : Aggression is part of human behaviour and is necessary for an individual to live and struggle for higher achievements.
Reason (R) : Aggression is inevitable and inseparable in sport activities.
In the context of the above two statements, which one of the following is correct ?`,
        answer: `(a) Both (A) and (R) are true and (R) is the correct explanation of (A).`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_10",
        options: ["Regulate body temperature", "Give energy", "Repair cell", "Protect from disease"],
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `Role of water in human body is to ______.`,
        answer: `(a) Regulate body temperature`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_11",
        options: ["Vitamin D & K", "Vitamin B & C", "Vitamin A & E", "Vitamin A & C"],
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Which of the following are water soluble vitamins ?`,
        answer: `(b) Vitamin B & C`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_12",
        options: ["Tadasana", "Dhanurasana", "Parvatasana", "Bhujangasana"],
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Which of the following asana is NOT used to cure Asthma ?`,
        answer: `(c) Parvatasana`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_13",
        options: ["18", "17", "20", "16"],
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `How many total matches will be played in a knock-out fixture of 19 teams ?`,
        answer: `(a) 18`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_14",
        options: ["Elimination tournament", "Round-robin tournament", "League tournament", "Challenge tournament"],
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Knock-out tournament is also known as ______.`,
        answer: `(a) Elimination tournament`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_15",
        options: ["1896", "1960", "1924", "1951"],
        year: 2023,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `First Deaflympic Games was organized in the year ______.`,
        answer: `(c) 1924`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_16",
        options: ["I-3, II-1, III-4, IV-2", "I-1, II-3, III-4, IV-2", "I-4, II-2, III-1, IV-3", "I-2, II-3, III-4, IV-1"],
        year: 2023,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Match the following :
List – I                          List – II
I.   Knock Knee / Genu Valgum     1. Increase exaggeration of backward curve
II.  Kyphosis                     2. Wide gap between the knees when standing with feet together
III. Lordosis                     3. Knees touch each other in normal standing position
IV.  Bow legs                     4. Inward curvature of the spine
Choose the correct option from the following :`,
        answer: `(a) I-3, II-1, III-4, IV-2`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_17",
        options: ["I-2, II-1, III-4, IV-3", "I-2, II-3, III-1, IV-4", "I-1, II-3, III-2, IV-4", "I-2, II-3, III-4, IV-1"],
        year: 2023,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `Match the following :
List – I                  List – II
I.   Plate Tapping Test   1. Upper body strength endurance of boys
II.  Push-up              2. Speed and coordination of limb movement
III. Partial Curl up      3. Upper body strength endurance of girls
IV.  Modified push up     4. Abdominal strength
Choose the correct option from the following :`,
        answer: `(a) I-2, II-1, III-4, IV-3`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_18",
        options: ["Ending of menstrual period in women", "Beginning of menstrual period in women", "Time of pregnancy", "Spinal deformity"],
        year: 2023,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Menarche is related to :`,
        answer: `(b) Beginning of menstrual period in women`,
        source: "CBSE 2023 Board Exam",
    },

    // ─── Section B ───────────────────────────────

    {
        id: "2023_19",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 2,
        question: `Briefly explain any two factors determining endurance.`,
        answer: `1. Aerobic capacity: Oxygen intake, oxygen uptake, oxygen transport, energy reserve
2. Anaerobic capacity
3. Movement Economy
4. Muscle Composition
5. Lactic acid tolerance
(Explanation of any two)`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_20",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 2,
        question: `What do you understand by "Goal Setting"?`,
        answer: `Goal setting is a mental technique that can be used to increase an individual's commitment towards achieving a specific standard of proficiency on a task within a specified time.
OR: The process of establishing a level of performance proficiency that should be reached within a prescribed time period.`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_21",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 2,
        question: `Define Flexibility and list down its types.`,
        answer: `Flexibility is the maximum range of movement of a joint.
OR: The quality of muscles, ligaments and tendons that enables the joint of the body to move easily through a complete range of movement.

Types:
1. Active Flexibility — ability to do joint movement without any external help: (a) Static Flexibility (b) Dynamic Flexibility
2. Passive Flexibility — ability to do joint movement with a greater range with external help or a partner.`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_22",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 2,
        question: `Elucidate any four types of fractures.`,
        answer: `(a) Greenstick — Incomplete break of soft bones of children.
(b) Comminuted — A bone breaks into a number of pieces.
(c) Transverse — A straight break right across a bone.
(d) Oblique — A bone breaks diagonally.
(e) Impacted — Broken ends of bones are jammed together by the force of injury.
(Any 4 types)`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_23",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 2,
        question: `What is BMI ? Calculate BMI of a child whose weight is 72 kg and height 1.68 mt.`,
        answer: `Body Mass Index (BMI) is a measure of body fat, based on height and weight of a person.

BMI = Weight (kg) / [Height (m)]²
     = 72 / (1.68 × 1.68)
     = 72 / 2.8224
     = 25.51`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_24",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 2,
        question: `Differentiate between Macro and Micro Nutrients.`,
        answer: `Macro Nutrients                              Micro Nutrients
1. Required in large quantity           1. Required in small quantity
2. Have calorific value                 2. No calorific value
3. Consist of energy and body-          3. Consist of protecting elements
   building elements
4. Carbohydrates, fats, protein,        4. Vitamins and minerals
   water
(Any relevant 2 points)`,
        source: "CBSE 2023 Board Exam",
    },

    // ─── Section C ───────────────────────────────

    {
        id: "2023_25",
        year: 2023,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 3,
        question: `"Participation in physical activities is advantageous for children with special need." Briefly explain any six advantages.`,
        answer: `1. Physical improvement
2. Mental improvement
3. Increase in self-esteem
4. Reduce the level of stress, Anxiety and Depression
5. Reduce the risk of health complications
6. Improved social interaction
7. Improved cognitive skills
8. Improved emotional and psychological health
9. Mode of recreation and fun
10. Channelising surplus energy
(Any 6 relevant points explained)`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_26",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 3,
        question: `Write the functions of Vitamin D and Vitamin K and mention their sources.`,
        answer: `Functions of Vitamin D:
1. Helps in the absorption of calcium and phosphorus
2. Maintains the functions of Parathormone secreted by parathyroid glands
3. Helps keep the teeth and bones strong
Sources: Sunrays, milk, fish, liver oil, butter

Functions of Vitamin K:
1. Helps in blood clotting
2. Enhances bone strength and heart health
3. Helps facilitate energy production in mitochondria
Sources: Green leafy vegetables, cabbage, milk
(Any 2 relevant functions and 1 source for each)`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_27",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Short",
        marks: 3,
        question: `Briefly explain the functions of Directing and Controlling to organize sports event.`,
        answer: `Functions of Directing (any 3):
1. Requires leadership quality
2. Making employees aware of their duties and responsibilities
3. Includes supervision and motivation
4. Guiding, inspiring and instructing people to accomplish organisational goals
5. Ensures coordination

Functions of Controlling (any 3):
1. Establishing standards
2. Ensuring actual performance is in accordance with planned performance
3. Imparting instructions to employees to achieve the common goal
4. Helping to revise standards in the light of changing circumstances`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_28",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 3,
        question: `How can we enhance the sports performance with the help of self-talk and self-esteem ? Explain.`,
        answer: `Self-Esteem (any 3):
1. Controls negative thoughts
2. Boosts self-confidence
3. Controls emotion and anxiety
4. Helps in skill acquisition
5. Helps in decision making
6. Taking up challenges
7. Increases potential to change oneself
8. Increased self-esteem leads to improvement in performance and successful accomplishment of a goal

Self-Talk (any 3):
1. Creating and changing mood
2. Building and developing self-efficacy
3. Controlling efforts
4. Focusing attention or concentration
5. Improving overall performance
6. Giving oneself instructions to carry out a task
7. Helps improve stressful situations`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_29",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 3,
        question: `Elucidate any six effects of exercise on muscular system.`,
        answer: `1. Increased muscle temperature
2. Increased blood supply
3. Increased muscle flexibility
4. Hypertrophy of muscle
5. Increase in strength of ligaments and tendons
6. Increase in size and number of mitochondria
7. Increase in myoglobin storage
8. Increase in glycogen storage
9. Increase in oxidation/metabolism
10. Increased lactic acid tolerance
11. Better posture
12. Delayed fatigue
(Any 6 relevant points)`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_30",
        year: 2023,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 3,
        question: `What do you understand by Round shoulders deformity ? Suggest any four corrective measures for round shoulders.`,
        answer: `Round Shoulder: A postural deformity in which shoulders are bent forward from the ideal alignment, giving a narrow curve to the upper back.
OR: The shoulders become round and sometimes seem to be bent forward.

Corrective measures (any 4):
1. Perform Chakrasana and Dhanurasana
2. Hold the horizontal bar
3. Keep fingertips on shoulders and rotate elbows clockwise and anticlockwise
4. Pull-ups
5. Perform Bhujangasana and Ushtrasana
6. Pull the shoulders backward and look upward
7. Chest stretches, T-stretches, wall stretches
8. Handclasp stretch and planks`,
        source: "CBSE 2023 Board Exam",
    },

    // ─── Section D ───────────────────────────────

    {
        id: "2023_31",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Case Study",
        marks: 4,
        question: `A fixture for a league tournament is shown in the diagram. On the basis of above fixture, answer the following questions:
(a) Which method is shown in the picture to draw fixture in league tournament ?
(b) What is the formula to calculate number of matches ?
(c) In league or Round Robin Tournament winner will be decided on the basis of ______.
(d) If 7 teams participate in a league Tournament, ______ number of matches will be played.`,
        imageUrl: "/PE_2023_qs_31.png",
        answer: `(a) Staircase method
(b) N(N-1) / 2
(c) Points scored by teams / number of matches won / American method / British method
(d) 21 matches`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_32",
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Case Study",
        marks: 4,
        question: `Study the pictures given below (A = Stationary Ball, B = Moving Ball).
Based on your above study and your knowledge, answer the following questions:
(a) Which law of motion will be applied to initiate motion of the ball as depicted in the illustration (A)?
(b) In illustration (B) which force is acting upon the ball to slow it down?
(c) Which law of motion will determine the quality of bounce?
(d) ______ of an object directly depends upon the mass of the object and net force applied on it.
OR: "When a cricket ball is moving with a certain velocity, the player has to apply retarding force to bring the ball at rest in his hands." Which Newton's Law is applied in this illustration?`,
        imageUrl: "/PE_2023_qs_32.png",
        answer: `(a) Law of Inertia / Newton's first law of motion
(b) Friction
(c) Third law — law of action and reaction
(d) Acceleration
OR: Newton's second law of motion / Law of acceleration`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_33",
        year: 2023,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Case Study",
        marks: 4,
        question: `In relation to the pictures (A, B, C logos shown), answer the following questions:
(a) Logo shown in picture ______ refers to Special Olympic.
(b) Who was the founder of Special Olympics?
(c) According to figure 'B', the hand shapes of 'OK', 'Good' and 'Great' that overlap each other in a circle, represent the original sign for ______.
(d) How many countries participated in the first Paralympic Games in Rome (Italy) in 1960?
OR: The moto of Paralympics is ______.`,
        imageUrl: "/PE_2023_qs_33.png",
        answer: `(a) C
(b) Eunice Kennedy Shriver
(c) Deaf Olympics / Deaflympics
(d) 23
OR: Spirit in motion`,
        source: "CBSE 2023 Board Exam",
    },

    // ─── Section E ───────────────────────────────

    {
        id: "2023_34",
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Long",
        marks: 5,
        question: `List down any four asanas used for prevention of Hypertension. Explain the procedure and contraindication of any one of them with the help of a stick diagram.`,
        answer: `Asanas for hypertension (any 4):
Tadasana, Katichakrasana, Uttanpadasana, Ardha Halasana, Sarala Matsyasana, Gomukhasana, Uttan Mandukasana, Vakrasana, Bhujangasana, Makarasana, Shavasana, Nadishodhan Pranayam, Sheetali Pranayam

Procedure of Tadasana (specimen):
• Stand straight on the floor/mat
• Take a small gap between feet
• After deep inhalation, raise both arms
• Keep arms upward by interlocking fingers
• Come on the toes by raising heels
• Feel the pressure of stretching from toes
• Try to maintain this pose with slow and deep breathing

Contraindications of Tadasana:
• People suffering from headaches, Low blood pressure and insomnia should avoid this asana
• People suffering from diarrhoea, neck and spinal injuries should avoid this asana
(Procedure and any 2 contraindications of any one asana)`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_35",
        year: 2023,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Long",
        marks: 5,
        question: `What is the purpose of Rikli and Jones fitness test ? Explain the procedure of its any two test items in detail.`,
        answer: `Purpose: The senior citizen fitness test was developed by Rikli and Jones for the purpose of assessment of fitness of senior citizens. This test battery contains six tests designed mainly to assess the lower body strength, upper body strength, lower and upper body flexibility, agility and aerobic endurance.

Six test items:
1. Chair Stand Test
2. Arm Curl Test
3. Chair Sit and Reach Test
4. Back Scratch Test
5. Eight Foot Up and Go Test
6. Six Minute Walk Test

Chair Stand Test (procedure):
The chair should be placed against the wall. The individual sits with back straight, arms crossed, and feet firmly on the floor shoulder-width apart. On the command "Go", the individual will stand up completely, and then return back to the initial position (= one stand). The individual should be motivated to do maximum stands in 30 seconds. If the individual is in halfway of the stand and time is over, it is counted as a full stand.
(Explain any 2 test items)`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_36",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Long",
        marks: 5,
        question: `Define strength and explain any two methods to develop it.`,
        answer: `Strength: The ability of a muscle to exert force in a single muscle contraction.
OR: The capacity of the whole body or any of its parts to exert force.
OR: The force that a muscle or group of muscles can exert against a resistance in one maximum effort.

Methods:
1. Isometric Exercise: No direct movement is visible; muscle length remains the same. E.g. pushing a wall. Needs less time and equipment; can be performed anywhere.

2. Isotonic Exercise: Movements can be seen directly; results in toned muscles and increased muscle length. E.g. running, jumping, weight training, calisthenics.

3. Isokinetic Exercise: Performed on specially designed machines. Muscles apply maximal force throughout the range of motion around the joint. E.g. brisk walking on a treadmill, cycling on an exercise bike.
(Any 2 methods explained)`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_37",
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Long",
        marks: 5,
        question: `What is Friction ? Write the advantages and disadvantages of friction by giving suitable examples from sports.`,
        answer: `Friction: A force acting over the area of contact between two surfaces in the direction opposite to that of motion.
OR: A force that acts parallel to two surfaces.
OR: A force that resists movement.

Advantages (any 2):
1. Running and walking are results of friction between the ground and shoes; athletes use spikes, footballers use studs.
2. The grip in badminton and tennis plays a major role in performing a perfect shot.
3. Friction between tyres and the surface prevents cyclists from slipping and skidding.
4. Gymnasts and javelin throwers use magnesium powder to increase friction.

Disadvantages (any 2):
1. If air pressure in cycle tyres is not appropriate, excessive friction causes more energy expenditure.
2. Air resistance (friction) slows down the speed of a projectile.
3. During pole-vault, an athlete may lose grip on the pole if there is less friction between palm and pole, causing injury.
4. Friction can cause injuries as a player slides across the ground during play.`,
        source: "CBSE 2023 Board Exam",
    },
    // ─────────────────────────────────────────────
    //  2024
    // ─────────────────────────────────────────────

    {
        id: "2024_MCQ_1",
        options: ["Kapalbhati Pranayama", "Anulom Vilom Pranayama", "Suryabhedan Pranayama", "Sitili Pranayama"],
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Which of the following pranayama is helpful to reduce obesity?`,
        answer: `(c) Suryabhedan Pranayama`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_2",
        options: ["1985", "2003", "1989", "2001"],
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `International Paralympic Committee was formed in`,
        answer: `(c) 1989`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_3",
        options: ["Toxins formation due to food poisoning", "Absence of an enzyme", "Roughage", "Gluten"],
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is NOT the cause of Food Intolerance?`,
        answer: `(c) Roughage`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_4",
        options: ["Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).", "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).", "Assertion (A) is true, but Reason (R) is false.", "Assertion (A) is false, but Reason (R) is true."],
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Given below are two statements labelled Assertion (A) and Reason (R).
Assertion (A): The Basal Metabolic Rate (BMR) is the number of calories needed to maintain body function at resting condition.
Reason (R): A person who does not engage in any work, still requires energy for the functioning of their internal organs.`,
        answer: `(a) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_5",
        options: ["I-1, II-2, III-3, IV-4", "I-1, II-2, III-4, IV-3", "I-2, II-4, III-1, IV-3", "I-2, II-4, III-3, IV-1"],
        year: 2024,
        chapter: "Management of Sporting Events",
        topic: "Management of Sporting Events",
        type: "MCQ",
        marks: 1,
        question: `Match the functions of Sports Management in List-I with their Explanation in List-II:`,
        matchTable: {
            headers: ["List I (Functions)", "List II (Explanation)"],
            rows: [
                { left: "(I) Planning", right: "(1) Guiding/instructing people" },
                { left: "(II) Controlling", right: "(2) Preparing layout for future" },
                { left: "(III) Directing", right: "(3) Ensuring proper talent" },
                { left: "(IV) Staffing", right: "(4) Establishing performance standards" },
            ],
        },
        answer: `(c) I-2, II-4, III-1, IV-3`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_6",
        options: ["Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).", "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).", "Assertion (A) is true, but Reason (R) is false.", "Assertion (A) is false, but Reason (R) is true."],
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Postural Deformities",
        type: "MCQ",
        marks: 1,
        question: `Given below are two statements labelled Assertion (A) and Reason (R).
Assertion (A): In a normal standing posture, both knees touch each other, while there is a gap of 3-4 inches between the ankles.
Reason (R): It is due to Genu Valgum and it can develop due to an injury or infection in the knee or leg, rickets, severe lack of vitamin D and calcium...`,
        answer: `(a) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_7",
        options: ["Speed", "Strength", "Endurance", "Flexibility"],
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology",
        type: "MCQ",
        marks: 1,
        question: `In which of the following fitness component an athlete gives better performance, if he/she has more slow twitch fibre in comparison to fast twitch fibres.`,
        answer: `(c) Endurance`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_8",
        options: ["Larger base", "Greater weight", "Lower centre of gravity", "Higher centre of gravity"],
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Identify the factor which decreases equilibrium.`,
        answer: `(d) Higher centre of gravity`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_9",
        options: ["Meet unknown people easily", "Self-centered", "Highly socialized", "Expressive nature"],
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Identify the characteristic of introvert personality.`,
        answer: `(b) Self-centered`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_10",
        options: ["Static strength", "Maximum strength", "Explosive strength", "Strength endurance"],
        year: 2024,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `Jump for smash in volleyball is an example of.`,
        answer: `(c) Explosive strength`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_11",
        options: ["To achieve high performance", "To provide career opportunities", "To promote health and fitness", "To promote cultural and economic development"],
        year: 2024,
        chapter: "Management of Sporting Events",
        topic: "Management of Sporting Events",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is the objective of Intramural competition?`,
        answer: `(c) To promote health and fitness`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_12",
        options: ["Less than 1 year", "1 – 2 year", "3 – 4 year", "5 – 17 year"],
        year: 2024,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `According to W.H.O. recommendations, children of _______ should be engaged in physical activities for 180 minutes and should have 10-13 hours of good quality sleep per day.`,
        answer: `(c) 3-4 year`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_13",
        options: ["Bhujangasana", "Katichakrasana", "Pawanmuktasana", "Shalbhasana"],
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Identify the asana shown in the picture given below.`,
        imageUrl: "/PE_2024_qs_13.png",
        answer: `(d) Shalbhasana`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_14",
        options: ["World Deaf Champions Committee", "National Sports Federation", "International Co-ordinating Committee Sports for Disabled", "International Committee of Sports for the Deaf"],
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `Which is the main governing body responsible for the organization of Deaflympics?`,
        answer: `(d) International Committee of Sports for the Deaf`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_15",
        options: ["25.0 – 29.0", "30.0 – 34.9", "18.5 – 24.9", "35.0 – 39.9"],
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Which of the following BMI range is considered for healthy weight?`,
        answer: `(c) 18.5-24.9`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_16",
        options: ["8 inches", "4 inches", "6 inches", "10 inches"],
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `In partial curl up test the difference between two parallel lines is`,
        answer: `(c) 6 inches`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_17",
        options: ["Cognitive", "Pedagogical", "Social", "Facilitation"],
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Goal setting is a ________ approach, under motivational technique.`,
        answer: `(a) Cognitive`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_18",
        options: ["Physical Mobility", "Upper Body Flexibility", "Lower Body Flexibility", "Upper Body Strength"],
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which functional fitness component of senior citizens is determined in the test shown below (Chair Sit and Reach)?`,
        imageUrl: "/PE_2024_qs_18.png",
        answer: `(c) Lower body flexibility`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_19",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Short",
        marks: 2,
        question: `Describe the second-class lever with suitable example from sports.`,
        answer: `Second-Class Lever: It has the load (resistance) between the fulcrum and the force. There is always a mechanical advantage as the force arm is always greater than the resistance arm.

Example: Full body push-up / wheelbarrow / wall climbing / taking off for a jump / pushing against starting blocks in sprints.`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_20",
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Short",
        marks: 2,
        question: `Enlist four test items of Johnson - Metheny Test of Motor Educability.`,
        answer: `I. Front Roll
II. Back Roll
III. Jumping Half-Turns
IV. Jumping Full-Turns`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_21",
        year: 2024,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 2,
        question: `Write a short note on 'Menarche'.`,
        answer: `• First menstruation cycle of a girl
• Point of sexual maturity of a girl
• Average age for a girl to get her first period ranges from 8–15 years`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_22",
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Short",
        marks: 2,
        question: `Enlist four asanas those help to control asthma.`,
        answer: `Tadasana, Urdhwahastottanasana, Uttan Mandukasana, Ushtrasana, Vakrasana, Matsyasana, Gomukhasana, Dhanurasana, Bhujangasana`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_23",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 2,
        question: `Write any two advantages of physical activities for Children With Special Needs (CWSN).`,
        answer: `1. Physical benefits
2. Fun and recreation
3. Improved emotional health
4. Active lifestyle
5. Behavioural benefits
6. Increased independence
7. Psychological benefits
8. Improvement in cognitive and intellectual ability
9. Increase in sleep and appetite
10. Improvement in social skills`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_24",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Short",
        marks: 2,
        question: `Mention any two types of friction by giving suitable examples from sports.`,
        answer: `Static friction: Weightlifting, holding the parallel bar
Sliding friction: Ice hockey, ice skating
Rolling friction: Rolling of a football, cricket ball, tennis ball
Air friction: Riding a bicycle, skydiving
Water friction: Swimming in water, diving`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_25",
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Short",
        marks: 3,
        question: `Mr. X performs the Harvard step test for 275 seconds and his pulse in 1-1.5 min after exercise was 100. Write the formula of fitness index score for Harvard step test and calculate the fitness index score of Mr. X.`,
        answer: `Formula = (Duration of exercise in seconds × 100) / (5.5 × Pulse count of 1–1.5 min after exercise)

Calculation:
= (275 × 100) / (5.5 × 100)
= 27500 / 550
= 50`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_26",
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Short",
        marks: 3,
        question: `Comment on the concept of Talent Identification and Talent Development.`,
        answer: `Talent Identification: Recognising participants with the potential at an earlier age to become elite performers in the future. Physiological, Physical Fitness, Psychological and Technical components are considered. Methods include drills, test batteries, electronic gadgets, parameters, standard norms and performance analysis.

Talent Development: Providing athletes with a suitable learning environment to accelerate or realise their potential. It is a complete, systematic, scientific and long-term process.`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_27",
        year: 2024,
        chapter: "Management of Sporting Events",
        topic: "Management of Sporting Events",
        type: "Short",
        marks: 3,
        question: `Explain the responsibilities of any two committees during sports competition.`,
        answer: `Committees (any 2 with explanation):
1. Reception Committee
2. First Aid Committee
3. Refreshment Committee
4. Technical Committee
5. Media Reporting Committee
6. Announcement Committee
7. Ground and Equipment Committee
8. Transportation Committee
9. Finance Committee
10. Boarding and Lodging Committee`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_28",
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Short",
        marks: 3,
        question: `Explain the procedure and benefits of any one asana for back pain.`,
        answer: `Asanas for back pain:
Tadasana, Vakrasana, Sarala Matsyendrasana, Urdhwahastottanasana, Ardha Chakrasana, Ushtrasana, Bhujangasana, Gomukhasana, Bhadrasana, Makarasana
(Procedure and benefits to be written for any one)`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_29",
        year: 2024,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 3,
        question: `Write short note on Female Athlete Triad.`,
        answer: `The Female Athlete Triad consists of three interrelated conditions:

1. Eating Disorders (Low Energy Availability):
   • Anorexia Nervosa: Severely limits food intake.
   • Bulimia Nervosa: Binge eating followed by purging (vomiting/laxatives).

2. Amenorrhea (Disruption of Menstrual and Endocrine Function):
   • Long absence of menstrual periods. Primary (no period by 15) or Secondary (stops for 3+ months).

3. Osteoporosis (Loss of Bone Mineral Density):
   • Bones lose minerals like calcium faster than replaced. Common sites: hip, spine, wrist, ribs.`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_30",
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 3,
        question: `Describe any three physiological changes due to ageing.`,
        answer: `1. Changes in metabolism and body composition
2. Changes in the respiratory system
3. Changes in brain and nervous system
4. Changes in the digestive system
5. Changes in the excretory system
6. Changes in sensory organs
7. Changes in the endocrine system
8. Decline in muscle strength
9. Diminished memory
10. Decrease in cardiovascular function
11. Loss of bone density
12. Decrease in body mass
13. Decrease in mobility`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_31",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Case Study",
        marks: 4,
        question: `Based on the survey table showing participation of normal and special children:
(a) In which event is there no participation of special child?
(b) Participation of students with disabilities in regular physical education classes is known as _________.
(c) Enlist any two strategies to make physical activities accessible for children with special needs.
(d) Motto of Special Olympic is _________. (OR) Motto of Paralympic is _______.`,
        imageUrl: "/PE_2024_qs_31.png",
        answer: `(a) Long Jump
(b) Inclusion / Adaptive Physical Education
(c) Strategies: Create specific environment, assess physical/mental ability, modified rules, modified equipment, plan activity as per need, plan implementation from easy to difficult, extra care for safety, trained assistants.
(d) Special Olympics: "Let me win. But if I cannot win, let me be brave in the attempt." OR "Joy and Happiness for all the children of the world."
(OR) Paralympics: "Spirit in motion."`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_32",
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Case Study",
        marks: 4,
        question: `Based on the images of different types of fractures:
(a) Which type of fracture you see in image-1?
(b) When a bone breaks diagonally as shown in image-2, it is known as _________.
(c) _________ fracture occurs when the broken ends of the bones are jammed together by the force of the injury.
(d) In which type of fracture bone is broken, splinted, or crushed into number of pieces?`,
        imageUrl: "/PE_2024_qs_32.png",
        answer: `(a) Transverse fracture
(b) Oblique fracture
(c) Impacted fracture
(d) Comminuted fracture`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_33",
        year: 2024,
        chapter: "Management of Sporting Events",
        topic: "Management of Sporting Events",
        type: "Case Study",
        marks: 4,
        question: `Based on the fixture shown:
(a) According to the above fixture total number of rounds will be?
(b) If the winner team plays least number of matches, then which number of team is the winner?
(c) What is the formula for calculating number of matches in a knockout tournament?
(d) If 16 teams are participating, how many byes will be given? (OR) Formula for total number of byes?`,
        imageUrl: "/PE_2024_qs_33.png",
        answer: `(a) 4 (four)
(b) Serial no. 15
(c) Number of matches = N – 1 (where N = Number of teams)
(d) 0 (zero) byes
(OR) Formula for byes: Next higher Power of 2 – Number of Teams`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_34",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Long",
        marks: 5,
        question: `What do you understand by Aggression in sports? Explain any 2 types of Aggression by giving suitable examples from sports.`,
        answer: `Aggression: A type of behaviour aimed at causing physical or psychological harm to another person.

Types:
1. Instrumental Aggression: Necessary to achieve performance goals; planned. Purpose is not to harm but to achieve goals. (E.g. Snatching ball in football, wrestling, kabaddi).
2. Hostile Aggression: Purpose is to cause physical or psychological harm, usually as a reaction to someone's action. Main aim is to injure the opponent. (E.g. Inflicting injury on raider in Kabaddi, hitting with stick in hockey to injure).
3. Assertive Behaviour: Forceful behaviour not intended to injure; within rules. Intention is dominance. (E.g. Rugby tackle to win ball).`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_35",
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Long",
        marks: 5,
        question: `What is Balanced Diet? What is the significance of pre and post competition meals for an athlete? Explain.`,
        answer: `Balanced Diet: Consists of all essential food elements (Proteins, Carbohydrates, Vitamins, Fats, minerals, water) in correct proportion.

Significance of Pre-Competition Meals:
1. Fuel up muscle glycogen stores (moderate protein, low fat, low fibre, high carbs).
2. Proper hydration.
3. Light for comfortable gastro-intestinal state.
4. Taken 2–4 hours before.
5. Avoid new foods/allergens.

Significance of Post-Competition Meals:
1. Focus on recovery and reducing injury chances.
2. Replenish lost fluids.
3. Refill carbohydrate stores (muscle glycogen).
4. Recover electrolytes (sodium, potassium chloride).
5. Balanced meal within 2 hours including carbs and good quality protein.`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_36",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Long",
        marks: 5,
        question: `What do you understand by projectile trajectory? Explain the factors affecting projectile trajectory in sports.`,
        answer: `Projectile Trajectory: The curved or parabolic path an object takes in the air under the influence of gravity and air resistance.

Factors:
1. Angle of Projection: Maximum horizontal distance at 45°.
2. Initial Velocity: Greater initial velocity = greater horizontal distance.
3. Gravity: Pulls object down, decreases height.
4. Air Resistance: Affected by surface area, speed, surface texture, and mass.
5. Spin: Changes path (Magnus effect); amount and direction of spin affects distance.`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_37",
        year: 2024,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Long",
        marks: 5,
        question: `What is Endurance? Explain any two types of Endurance on the basis of duration of the activity with suitable examples from sports.`,
        answer: `Endurance: Ability to sustain physical activity for a longer duration / resist fatigue.

Types (based on duration):
1. Speed Endurance: Resisting fatigue in cyclic activities up to 45 seconds (e.g., 400m sprint). Dependent on power/energy capacity.
2. Short-term Endurance: Activities 45 sec to 2 min (e.g., 800m run). Depends on speed and strength endurance.
3. Medium-term Endurance: Activities 2 min to 11 min (e.g., 1500m, 3000m run).
4. Long-term Endurance: Activities > 11 min (e.g., Marathon, cross-country).`,
        source: "CBSE 2024 Board Exam",
    },

    // ─────────────────────────────────────────────
    //  2025
    // ─────────────────────────────────────────────

    {
        id: "2025_1",
        options: ["Requisition to purchase equipment", "Arrangement of equipment and stationery", "Arrangement of officials", "Maintenance of the field"],
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which one of the following is a post-competition responsibility of the technical committee?`,
        answer: `(D) Maintenance of the field`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_2",
        options: ["To achieve high performance at the highest level of the tournament.", "To develop the feeling of integration with other institutions.", "To provide opportunities for choosing a career in sports.", "To promote health and recreation at the institution."],
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is an objective of intramural tournaments?`,
        answer: `(D) To promote health and recreation at the institution.`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_3",
        options: ["Knock-Knee", "Scoliosis", "Bow-legs", "Flat-foot"],
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following deformities is NOT related to lower extremities?`,
        answer: `(B) Scoliosis`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_4",
        options: ["Speed activities", "Strength activities", "Endurance activities", "Co-ordinative activities"],
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `Brisk walking, running, bicycling and jumping are related to which type of activities?`,
        answer: `(C) Endurance activities`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_5",
        options: ["Obesity", "Hypertension", "Asthma", "Back pain"],
        year: 2025,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `As per the prescribed syllabus, Suryabhedan Pranayam is recommended for which condition?`,
        answer: `(A) Obesity`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_6",
        options: ["Chakrasana", "Dhanurasana", "Halasana", "Ushtrasana"],
        year: 2025,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Identify the asana shown in the image.`,
        imageUrl: "/PE_2025_qs_6.png",
        answer: `(B) Dhanurasana
(For visually impaired: Forward bending in the sitting position)`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_7",
        options: ["Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).", "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).", "Assertion (A) is true, but Reason (R) is false.", "Assertion (A) is false, but Reason (R) is true."],
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read both and choose the appropriate option.
Assertion (A): Yoga helps in maintaining mental health.
Reason (R): Regular practice of yoga reduces stress and anxiety.`,
        answer: `(A) Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_8",
        options: ["Red, blue, black and yellow", "Blue, yellow, black and red", "Red, blue, yellow and green", "Blue, black, red and yellow"],
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `Which colours represent the four regional confederations in the Deaflympic logo?`,
        answer: `(C) Red, blue, yellow and green`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_9",
        options: ["First class lever", "Second class lever", "Both (A) and (B)", "Third class lever"],
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `What type of lever has the load (resistance) between the fulcrum and the force?`,
        answer: `(B) Second class lever`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_10",
        options: ["Betadine acid", "Ascorbic acid", "Acetonic acid", "Hydrochloric acid"],
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `What is the scientific name of Vitamin C?`,
        answer: `(B) Ascorbic acid`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_11",
        options: ["Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).", "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).", "Assertion (A) is true, but Reason (R) is false.", "Assertion (A) is false, but Reason (R) is true."],
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read both and choose the appropriate option.
Assertion (A): Physical activity is important for children with special needs.
Reason (R): It helps in the development of motor skills.`,
        answer: `(B) Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_12",
        options: ["Partial curl-up", "Back stretch test", "Sit and reach test", "Chair sit and reach test"],
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `In which test is the score recorded to the nearest centimetre between the initial and final score?`,
        answer: `(C) Sit and Reach Test`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_13",
        options: ["a-iii, b-iv, c-ii, d-i", "a-iii, b-i, c-iv, d-ii", "a-i, b-ii, c-iii, d-iv", "a-ii, b-iii, c-iv, d-i"],
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `Match the types of fractures in List I with their features in List II and choose the correct option.`,
        matchTable: {
            headers: ["Fracture Type", "Feature"],
            rows: [
                { left: "(a) Transverse", right: "(i) Bone breaks diagonally" },
                { left: "(b) Oblique", right: "(ii) Bone is crushed into a number of pieces" },
                { left: "(c) Greenstick", right: "(iii) Straight break right across a bone" },
                { left: "(d) Comminuted", right: "(iv) Soft bone in which the bone bends" },
            ],
        },
        answer: `(B) a – (iii), b – (i), c – (iv), d – (ii)`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_14",
        options: ["Law of Inertia", "Law of Acceleration", "Law of Gravity", "Law of Reaction"],
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `"The golf ball remains at rest until it is struck by a golf club." Which law does this statement indicate?`,
        answer: `(A) Law of Inertia`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_15",
        options: ["a-iii, b-i, c-iv, d-ii", "a-iii, b-i, c-ii, d-iv", "a-iv, b-ii, c-iii, d-i", "a-iv, b-i, c-ii, d-iii"],
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Match the traits of the Big Five Theory in List I with their characteristics in List II and choose the correct option.`,
        matchTable: {
            headers: ["Trait", "Characteristic"],
            rows: [
                { left: "(a) Openness", right: "(i) Active, optimistic and social" },
                { left: "(b) Extroversion", right: "(ii) Insecure, nervous and anxious" },
                { left: "(c) Neuroticism", right: "(iii) Creative, focused on tackling new challenges and curious" },
                { left: "(d) Agreeableness", right: "(iv) Friendly, helpful and trustworthy" },
            ],
        },
        answer: `(B) a - (iii), b - (i), c - (ii), d - (iv)`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_16",
        options: ["Mental-imagery", "Self-esteem", "Self-talk", "Goal-setting"],
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `The concept of _________ generally refers to a person's evaluation of, or attitude towards, him or herself.`,
        answer: `(B) Self-esteem`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_17",
        options: ["Fartlek training", "Interval method", "Continuous method", "Pace method"],
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `The Swedish term "speed play" is also known as _________.`,
        answer: `(A) Fartlek training`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_18",
        options: ["Iso-tonic", "Iso-kinetic", "Iso-metric", "Plyometric"],
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `In which type of exercise can movement NOT be seen directly?`,
        answer: `(C) Isometric exercise`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_19",
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 2,
        question: `Suggest any two corrective measures each for bow legs and round shoulders.`,
        answer: `Corrective measures for Bow Legs:
• Walk on the inner edge of the feet
• Perform/Practice Garudasana
• Perform lunges (leg strengthening exercises)
• Wearing of braces and modified shoes

Corrective measures for Round Shoulders:
• T-stretch, wall stretch, handclasp stretch and planks, pull-ups, reverse shoulder stretch
• Develop the habit of keeping the spine straight
• Perform asanas like Chakrasana, Dhanurasana, Ushtrasana, Bhujangasana
• Shoulder rotation clockwise and anticlockwise
(Any two corrective measures for each)`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_20",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 2,
        question: `Enlist four benefits of participation in physical activities for children with special needs.`,
        answer: `1. Physical benefits: Improves motor skills, flexibility and mobility, builds strength, endurance and speed, supports cardiovascular health
2. Psychological benefits: Builds confidence and boosts self-esteem, reduces stress and anxiety
3. Emotional benefits: Improves emotional well-being and happiness
4. Social benefits: Improves social interaction and communication skills
(Any four relevant benefits)`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_21",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 2,
        question: `Enumerate any two myths related to food items with their respective facts.`,
        answer: `Examples of myths and facts:
Myth 1: Eating fat makes you fat.
Fact: Healthy fats (unsaturated fats) are essential for the body; it is excess calories overall that lead to weight gain.

Myth 2: Carbohydrates should be avoided for weight loss.
Fact: Complex carbohydrates are an important energy source and should not be eliminated; refined carbohydrates in excess should be limited.

Myth 3: Drinking water during meals causes weight gain.
Fact: Water has no calories; drinking water can actually aid digestion.
(Any 2 myths with relevant facts)`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_22",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Short",
        marks: 2,
        question: `Mention the fitness index score formula and its norms for the Harvard Step Test.`,
        answer: `Formula:
Fitness Index = (Duration of exercise in seconds × 100) / (5.5 × Pulse count in 1–1.5 min after exercise)

Norms for Harvard Step Test:
• Up to 49       — Poor
• 50 – 80         — Average
• 81 or above  — Good`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_23",
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 2,
        question: `Mention any two strategies for enhancing adherence to exercise.`,
        answer: `Strategies for enhancing adherence to exercise:
1. Set realistic and achievable goals
2. Choose enjoyable activities
3. Track progress
4. Find a workout buddy/partner
5. Incorporate variety
6. Adjust workload according to physical capacity
7. Focus on benefits
8. Maintain mindful expectations
9. Advance communication about activity, space and resources
10. Use approachable space and appropriate equipment
11. Plan age-appropriate graded activities
(Any two)`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_24",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Short",
        marks: 2,
        question: `When wrestlers fall on the mat, why do they spread their arms, knees and legs? Justify your answer.`,
        answer: `When wrestlers fall on the mat and spread their arms, knees and legs, they increase the base of support. A wider base of support lowers the body's centre of gravity and distributes the impact force over a larger area. This increases stability and reduces the risk of injury by decreasing the force per unit area upon impact. This is an application of the principle of equilibrium — the wider the base of support, the greater the stability.`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_25",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Short",
        marks: 3,
        question: `"The organisation of its community sports reflects the progress of any country." In the context of this statement, outline 'Run for a Specific Cause' and 'Run for Unity'.`,
        answer: `Run for a Specific Cause:
This event is generally conducted to spread awareness about social issues like cleanliness, promoting a green environment, etc. The purpose is to spread awareness among the masses for a specific cause or to generate charity. For example, the specific cause may be cancer, AIDS, gender inequality, etc.

Run for Unity:
In such a type of run, the purpose is to foster peace, promote the feeling of integrity and brotherhood in the community, state, nation or among different religions. Such events help to develop bonding and a sense of togetherness among people cutting across social and economic barriers.`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_26",
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 3,
        question: `Describe the physical and psychological benefits of women's participation in sports.`,
        answer: `Physical Benefits:
1. Reduces the chances of lifestyle diseases (diabetes, high blood pressure)
2. Tones muscles
3. Improves cardiovascular system
4. Improves bone density
5. Improves reproductive health
6. Better sleep pattern
7. Improves posture and flexibility

Psychological Benefits:
1. Reduces stress and anxiety
2. Improves mood and emotional well-being
3. Improves self-esteem
4. Better cognitive function
5. Improves sleep quality
(Any 3 from each category)`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_27",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 3,
        question: `Define flexibility. Explain the methods to improve flexibility for a gymnast.`,
        answer: `Flexibility: The range of motion around a joint.
OR: The ability to execute a movement with greater amplitude or range.

Methods to improve flexibility:
1. Static Stretching: Stretching a muscle to its end range and holding the position for 15–30 seconds. E.g. hamstring stretch held in a static position.
2. Dynamic Stretching: Controlled swinging or circular movements that take the joints through their full range of motion. E.g. leg swings, arm circles.
3. PNF (Proprioceptive Neuromuscular Facilitation): Involves contracting and then relaxing the muscle before stretching. More advanced; effective for gymnasts.
4. Ballistic Stretching: Uses momentum to force a body part beyond its normal range. Risky if not done properly.
(Any 2 methods with explanation)`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_28",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 3,
        question: `Mention any three importances of diet during competition.`,
        answer: `1. Provides adequate energy to sustain performance during the competition.
2. Maintains fluid balance and prevents dehydration.
3. Delays the onset of fatigue so the athlete can perform for a longer duration.
4. Maintains blood glucose levels, which is essential for brain function and muscle performance.
5. Provides easily digestible nutrients to avoid gastro-intestinal discomfort.
6. Replaces electrolytes lost through sweat.
(Any 3 relevant points)`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_29",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 3,
        question: `Describe Residual Volume and Stroke Volume.`,
        answer: `(a) Residual Volume:
The amount of air remaining in the lungs after maximum exhalation. It is the air that cannot be expelled from the lungs even after the most forceful expiration. It prevents the lungs from collapsing and allows gas exchange to continue between breaths. Approximately 1.2 litres in adults.

(b) Stroke Volume:
The amount of blood pumped out by the heart in a single beat (contraction). It is an indicator of cardiac efficiency. Regular exercise increases stroke volume, meaning the heart can pump more blood with each beat. Cardiac Output = Stroke Volume × Heart Rate.`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_30",
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 3,
        question: `Compare and contrast hostile aggression and instrumental aggression.`,
        answer: `Hostile Aggression vs Instrumental Aggression:

Intent: Both aim to cause harm or suffering, but in hostile aggression harm is the end goal; in instrumental aggression, harm is a means to an end.

Primary Goal: Hostile — to harm or injure; Instrumental — to win or gain an advantage.

Process: Both involve non-legitimate means.

Emotion: Hostile — involves anger; Instrumental — no anger present.

Self-justification: Hostile — athlete offers self-justification; Instrumental — athlete may offer apologies instead of justification.
(Any 3 points)`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_31",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Case Study",
        marks: 4,
        question: `Aarti prepared a fixture for 11 teams to conduct a Kho-Kho tournament in her locality. Based on the fixture, answer the following questions:
(i) What is the number of non-bye teams in this tournament?
(ii) If the above fixture had been of 48 teams, then the number of byes would have been _________.
(iii) Which two teams will play in round 3?
(iv) Which method is used for seeding in knockout tournaments?`,
        imageUrl: "/PE_2025_qs_31.png",
        answer: `(i) (A) 06
(ii) 16
(iii) 10 and 11 (OR) Determined by formula NB + 1 / 2
(iv) (C) Seeding

For Visually Impaired:
(i) 16
(ii) (A) Knockout tournament
(iii) (A) Logistics committee
(iv) NB + 1 / 2 OR NB – 1 / 2`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_32",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Case Study",
        marks: 4,
        question: `During the Physical Education class, Vivek's teacher provided information about sports for children with special needs and explained how they are catered for in the Paralympics, Deaflympics and Special Olympics. Based on the case and your prior knowledge, answer the following:
(i) To participate in the Special Olympics, the minimum age should be _________ years old.
(ii) In which year were the Deaflympics founded?
(iii) Who was the founder of the modern Paralympic movement?
(iv) Enlist any two strategies to make physical activities accessible for children with special needs.`,
        answer: `(i) (C) 8 years
(ii) 1924
(iii) Dr. Ludwig Guttmann
(iv) Any 2 from: Proper instructions, proper space, adapted equipment, modified rules, graded activities, social strategies, involve people with disabilities in decision-making, regular medical check-up`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_33",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Case Study",
        marks: 4,
        question: `Diya went to a sports training centre for the first time. Her coach informed her about the physical, social and psychological benefits of sports and highlighted long-term effects on the muscles, heart and respiratory systems. Based on the case and your prior knowledge, answer the following:
(i) Which is NOT a long-term effect of exercise on the muscular system?
(ii) What is cardiac output?
(iii) Choose the correct statement related to tidal volume.
(iv) Lactic acid tolerance relates to _________.`,
        answer: `(i) (D) Accumulation of lactate
(ii) Cardiac output is the amount of blood pumped out by the heart in 1 minute. Cardiac Output = Stroke Volume × Heart Rate.
(iii) (A) Amount of air inhaled and exhaled in one breath.
(iv) (D) Endurance`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_34",
        year: 2025,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Long",
        marks: 5,
        question: `Describe the procedure and benefits of Mandukasana and Makarasana to control hypertension.`,
        answer: `Mandukasana:
Mandukasana comes from the Sanskrit word 'Manduk' meaning frog. The body resembles a frog when the asana is practised.

Procedure:
• Sit in Vajrasana and make fists with both hands, thumbs inside
• Place fists on belly next to the belly button
• Bend forward with exhalation; keep looking straight
• Hold breath in the posture for a few seconds; come up with inhalation
• Repeat 3–4 times

Benefits (any 2):
• Beneficial to all organs of the body
• Gives relief from diabetes, digestive disorders and constipation
• Improves flexibility and mobility of knee and ankle joints
• Helps tone muscles of shoulder and abdomen
• Increases lung capacity
• Reduces fat from thighs, belly and hips

Makarasana:
Makar means crocodile. The body resembles a crocodile in this asana.

Procedure:
1. Lie down on the stomach with hands folded under the head
2. Place the right palm over the left palm; rest head over the right palm
3. Stretch the legs; toes point outwards
4. Relax the whole body; breathe slowly and deeply
5. Relax in this posture for a few minutes
6. While returning, slowly bring feet together, unfold arms, and come to prone position

Benefits (any 2):
• Deep relaxation to the shoulder and the spine
• Reduces waist pain
• Helps in slipped disc
• Beneficial for asthma
• Relief for arthritis patients
• Abdominal muscles get an automatic massage`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_35",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Long",
        marks: 5,
        question: `What do you mean by Equilibrium? Explain how equilibrium increases with the influence of various factors by giving suitable examples from sports.`,
        answer: `Equilibrium: State of balance or a stable situation where opposite forces cancel each other and no changes occur.
OR: Condition in which the sum of all forces acting on a body is zero, causing it to remain at rest or move with constant velocity.

Factors (any 4 with examples):

1. Lower Centre of Gravity means more stability: Athletes lower their centre of gravity to improve stability. E.g. Runners bend their knees to stop quickly; a wrestler adopts a half-sitting posture for better balance; a shot put thrower bends their knees to avoid a foul.

2. Stability increases when centre of gravity is centred over the base: Balance is lost if the centre of gravity moves outside the support base. E.g. A gymnast on a balance beam may raise an arm or leg to bring the centre of gravity back to centre.

3. Wider base of support enhances stability: Spreading the support base adds stability. E.g. Standing with feet apart; using a stance requiring both hands and feet creates the most comprehensive base.

4. Body weight is directly proportional to stability: A heavier person or object is more stable and more challenging to move. E.g. In Boxing, Judo, Wrestling, competitors are classified by weight.

5. More friction on the surface means more stability: Greater friction leads to greater stability. E.g. If friction on a wrestling mat is low, wrestlers tend to slip.`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_36",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Long",
        marks: 5,
        question: `What do you understand by circuit training? How will a coach plan circuit training sessions with 6 stations to develop the fitness of new trainees? Explain.`,
        answer: `Circuit Training:
Circuit training was introduced by R.E. Morgan and G.T. Adamson of Leeds University in 1951. It is a training method in which certain exercises of various kinds are performed with or without apparatus with a given dosage.

Planning 6 Stations (any 6 relevant stations):
A coach must consider the fitness level, goals and variety of exercises. Each station should focus on a different component of fitness — strength, endurance, agility and flexibility.

1. Push-ups (upper body strength)
2. Jump Squats (lower body power)
3. Rope Skipping (cardiovascular endurance)
4. Pull-ups (upper body strength)
5. Shuttle Run (agility and speed)
6. Arm Curling (muscular endurance)
7. Shoulder Press (upper body strength)
8. Burpees (full body conditioning)
9. Step-ups (leg strength and endurance)
10. Sit-ups (core strength)
(Any 6 or other relevant stations)`,
        source: "CBSE 2025 Board Exam",
    },
    {
        id: "2025_37",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Long",
        marks: 5,
        question: `Write in detail the procedure and scoring of the Flamingo Balance Test and the Plate Tapping Test recommended for the age group 5–8 years by SAI Khelo India.`,
        answer: `Flamingo Balance Test:

Procedure:
• Stand on the beam; keep balance by holding the instructor's hand if required to start
• Start the watch as the instructor lets go of the participant
• Pause the stopwatch each time the subject loses balance (falls off the beam or lets go of the held foot); resume timing until they lose balance again
• Count the number of falls in 60 seconds of balancing
• If there are more than 15 falls in the first 30 seconds, the test is terminated

Scoring:
• The total number of falls or loss of balance in 60 seconds is recorded
• If there are more than 15 falls in the first 30 seconds, the test is terminated

Plate Tapping Test:

Procedure:
• Adjust table height so the subject can stand comfortably in front of the discs
• Two yellow discs are placed with centres 60 cm apart on the table; a rectangle is placed equidistant between both discs
• Non-preferred hand is placed on the rectangle
• The subject moves the preferred hand back and forth between the discs, over the non-preferred hand, as quickly as possible
• This action is repeated for 25 full cycles (50 taps)

Scoring:
• The time taken to complete 25 cycles is recorded`,
        source: "CBSE 2025 Board Exam",
    },
    // ═══════════════════════════════════════════════════════════════
    //  CBSE CLASS XII PHYSICAL EDUCATION
    //  COMPARTMENT EXAMS — 2023 | 2024 | 2025
    //  All Sections: A (MCQ) · B (2 marks) · C (3 marks) · D (Case Study) · E (5 marks)
    // ═══════════════════════════════════════════════════════════════


    // ─────────────────────────────────────────────
    //  2023 COMPARTMENT — SECTION A  (MCQ, 1 mark)
    // ─────────────────────────────────────────────
    {
        id: "C_2023_1",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Rules and regulations of a sports tournament are the responsibility of _______ Committee.`,
        options: ["Technical", "Logistics", "Marketing", "Finance"],
        answer: `Technical`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_2",
        year: 2023,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `First menstrual period in a young girl is called :`,
        options: ["Menstrual dysfunction", "Osteoporosis", "Amenorrhea", "Menarche"],
        answer: `Menarche`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_3",
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Which of the following asana is NOT used to cure obesity?`,
        options: ["Pavanmuktasana", "Halasana", "Shavasana", "Paschimottanasana"],
        answer: `Shavasana`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_4",
        year: 2023,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `The founder of Special Olympics is _________.`,
        options: ["John F. Kennedy", "Ludwig Guttmann", "Eugene Rubens", "Eunice Kennedy Shriver"],
        answer: `Eunice Kennedy Shriver`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_5",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `The duration of micro plan in sports training may be ________.`,
        options: ["3 – 7 days", "3 – 7 weeks", "3 – 4 months", "3 – 4 years"],
        answer: `3 – 7 days`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_6",
        year: 2023,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `Partial curl-up test is used to measure _________.`,
        options: ["Speed", "Strength", "Reaction time", "Flexibility"],
        answer: `Strength`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_7",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `Sprain is related to _________.`,
        options: ["Muscle", "Ligament", "Bone", "Tendon"],
        answer: `Ligament`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_8",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is NOT a classification of Jung's personality?`,
        options: ["Introvert", "Endomorph", "Extrovert", "Ambivert"],
        answer: `Endomorph`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_9",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `The ability to combine the movement of different body parts is known as :`,
        options: ["Coupling ability", "Reaction ability", "Rhythm ability", "Adaptation ability"],
        answer: `Coupling ability`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_10",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Given below are two statements labelled Assertion (A) and Reason (R).

Assertion (A) : Aggression is a type of hostile behaviour aimed to harm other persons.
Reason (R) : Aggression is unintentional.

In the context of the above two statements, which one of the following is correct?`,
        options: [
            "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).",
            "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of the Assertion (A).",
            "Assertion (A) is true, but Reason (R) is false.",
            "Assertion (A) is false, but Reason (R) is true.",
        ],
        answer: `Assertion (A) is true, but Reason (R) is false.`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_11",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `Match List I with List II and select the correct answer from the codes given below :`,
        matchTable: {
            headers: ["Injury", "Affected Part"],
            rows: [
                { left: "A. Abrasion", right: "(i) Joint" },
                { left: "B. Fracture", right: "(ii) Bone" },
                { left: "C. Dislocation", right: "(iii) Muscle" },
                { left: "D. Strain", right: "(iv) Skin" },
            ],
        },
        options: [
            "A-(iv), B-(ii), C-(i), D-(iii)",
            "A-(iv), B-(ii), C-(iii), D-(i)",
            "A-(iv), B-(i), C-(iii), D-(ii)",
            "A-(iii), B-(iv), C-(ii), D-(i)",
        ],
        answer: `A-(iv), B-(ii), C-(i), D-(iii)`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_12",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Fats and oils come under :`,
        options: ["Bodybuilding foods", "Protective foods", "Routine foods", "Energy-giving foods"],
        answer: `Energy-giving foods`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_13",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `How many matches will be played in the 2nd round of a knockout tournament if 17 teams are participating?`,
        options: ["6", "7", "8", "5"],
        answer: `8`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_14",
        year: 2023,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Flat-foot deformity is also known as :`,
        options: ["Genu varum", "Pes planus", "Genu valgum", "Lateral curvature"],
        answer: `Pes planus`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_15",
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Suryabhedi Pranayam is performed to control :`,
        options: ["Obesity", "Diabetes", "Asthma", "Hypertension"],
        answer: `Obesity`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_16",
        year: 2023,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `The purpose of Plate Tapping Test is :`,
        options: [
            "To know the strength of hands",
            "To know the cardiovascular efficiency",
            "To know hand-eye quickness and co-ordination",
            "To know the flexibility",
        ],
        answer: `To know hand-eye quickness and co-ordination`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_17",
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Friction can be increased by using ________.`,
        options: ["Lubricant", "Polishing", "Magnesium Powder", "Ball Bearing"],
        answer: `Magnesium Powder`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_18",
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Which law of Newton is applied when a long jumper takes off?`,
        options: ["Law of Acceleration", "Law of Inertia", "Law of Reaction", "Law of Gravity"],
        answer: `Law of Reaction`,
        source: "CBSE 2023 Compartment Exam",
    },


    // ─────────────────────────────────────────────
    //  2023 COMPARTMENT — SECTION B  (2 marks, attempt any 5)
    // ─────────────────────────────────────────────
    {
        id: "C_2023_19",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Short",
        marks: 2,
        question: `Explain any two functions of marketing committee, before and during the sports competition.`,
        answer: `Pre-sports event (any 2):
• Arranging for sponsorships
• Publicity of the event
• Issues related to press release
• Campaigns related to the event
• Arranging food and drink partners

During sports event (any 2):
• Works with media
• Issues press release
• Manages methods of communication
• Fulfils the requirements
• Arranges for telecast of event`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_20",
        year: 2023,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 2,
        question: `Enlist any four corrective measures for Knock-knees.`,
        answer: `Corrective Measures for Knock Knees (any 4):
• Exercises like horse-riding
• Keeping a pillow between the knees and standing erect for some time
• Performing Padmasana and Gomukhasana
• Vrikshasana also helps in correcting knock knee
• Leg raises while seated or lying down
• Using walking calipers
• Outward walking — try to walk on the outer edge of the foot`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_21",
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Short",
        marks: 2,
        question: `State any four benefits of Kapalbhati.`,
        answer: `Benefits of Kapalbhati (any 4):
1. Increases the capacity of lungs
2. Massages abdominal organs and improves digestion
3. Purifies the frontal air sinuses and stimulates the brain
4. Useful in treating cold, sinusitis and bronchial infection like asthma
5. Increases the metabolic rate and aids in weight loss
6. Improves blood circulation and adds radiance to face
7. Removes acidity and gas related problems
8. Removes toxins
9. Reduces CO₂ levels in the blood
10. Relieves anxiety and tension
11. Beneficial in curing insomnia
12. Increases endorphins; is a mood elevator`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_22",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 2,
        question: `List down any two sources and two functions of protein.`,
        answer: `Sources of proteins (any 2):
1. Plant sources: Pulses, beans, nuts, grain
2. Animal sources: Eggs, meat, fish, milk and its products

Functions of proteins (any 2):
1. Drives metabolic reactions
2. Strengthens the immune system
3. Helps in repair and builds body tissues
4. Transports and stores nutrients; can act as an energy source
5. Forms antibodies
6. Regulates balance of water and acid and maintains proper pH values
7. Forms a part of various enzymes and hormones
8. Proteins like keratin, collagen and elastin help form the connective framework of certain structures in the body`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_23",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 2,
        question: `Write any two physiological factors determining speed.`,
        answer: `1. Nervous system and its mobility
2. Composition of muscle fibres — larger the fast-twitch fibres, more the speed
3. Flexibility — better flexibility helps in generating better speed
4. Phosphogen stores — energy stored in the muscle determines speed of movement
(Any 2 relevant points)`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_24",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 2,
        question: `According to the 'Big Five Theory', write any two traits of personality.`,
        answer: `Traits of personality — Big Five Theory (any 2):
1. Openness — Imaginative, insightful, creative, intellectual, curious, open to learn new things, independent
2. Conscientiousness — Competence, self-discipline, goal-driven, thoughtfulness, hardworking, organised, responsible
3. Extraversion — Energetic, talkative, interactive, affectionate, social
4. Agreeableness — Friendly, co-operative, compatible, kind, gentle, generous, sympathetic, trustworthy, helpful
5. Neuroticism — Insecure, nervous, anxious, unpleasant emotions, impulsive, hostile`,
        source: "CBSE 2023 Compartment Exam",
    },


    // ─────────────────────────────────────────────
    //  2023 COMPARTMENT — SECTION C  (3 marks, attempt any 5)
    // ─────────────────────────────────────────────
    {
        id: "C_2023_25",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 3,
        question: `Explain any three effects of exercise on the cardio-respiratory system.`,
        answer: `Effects of exercise on the cardio-respiratory system (any 3):
1. Blood flow increases in arteries and veins (cardiac output and stroke volume)
2. Blood pressure decreases
3. Number of capillaries increases
4. Size of heart increases (Athletic heart)
5. Vital capacity of lungs improves
6. Aerobic and anaerobic capacity of an individual improves
7. Breathing rate decreases
8. Decrease in resting heart rate
9. Increase in maximum oxygen uptake (VO₂ max)`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_26",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 3,
        question: `Briefly explain the non-nutritive components of diet.`,
        answer: `Non-nutritive components of diet (any 3):
1. Fibre/Roughage — The undigested part of food which can't be absorbed by the human intestinal tract; adds bulk to food. Sources: Whole cereals, fresh fruits/vegetables.
2. Water — An essential component of diet. Helps in transportation of nutrients to body cells and helps in excretion of waste products.
3. Flavouring Agents — Derived from both nutritive and non-nutritive components of food; enhance taste of food.
4. Colour Compounds — Make food more attractive and appealing. Derived from natural/artificial pigments.`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_27",
        year: 2023,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 3,
        question: `Discuss about the Female Athlete Triad.`,
        answer: `The Female Athlete Triad consists of three interrelated conditions:

1. Osteoporosis — Weak bones due to loss of bone mineral density.
2. Amenorrhea:
   • Primary amenorrhea — First period does not start by age 15.
   • Secondary amenorrhea — Normal menstrual bleeding stops for 3 or more months.
3. Eating Disorders:
   • Anorexia Nervosa — Person severely limits food intake to prevent weight gain.
   • Bulimia Nervosa — Person eats large amounts of food in a short time and then purges.`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_28",
        year: 2023,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Short",
        marks: 3,
        question: `Write the purpose and procedure of Sit-and-Reach Test as per SAI Khelo India Fitness Test.`,
        answer: `Purpose: Common measure of flexibility; specifically measures the flexibility of the lower back and hamstring muscles.

Procedure:
1. This test involves sitting on the floor with legs stretched out straight ahead.
2. Shoes should be removed.
3. The soles of the feet are placed flat against the Sit and Reach box.
4. Both knees should be locked and pressed flat to the floor — the tester may assist by holding them down.
5. With the palms facing downwards and hands on top of each other, the subject reaches forward along the measuring line as far as possible.
6. Ensure that the hands remain at the same level, not one reaching further forward than the other.
7. After some practice, the subject reaches out and holds that position for 1–2 seconds while the distance is recorded. No jerky movements.`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_29",
        year: 2023,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 3,
        question: `Write a short note on 'Paralympic' Games.`,
        answer: `The Paralympic Games is a periodic series of international multisport events involving athletes with a range of disabilities. These were held for the first time in 1960 in Rome. They are held following the respective summer and winter Olympic Games. All Paralympic games are governed by the International Paralympic Committee. The Paralympic athletes compete in six different disability groups — Amputee, Cerebral Palsy, Visual Impairment, Spinal Cord Injuries, Intellectual Disability and 'Les Autres' (i.e. Dwarfism).`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_30",
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Short",
        marks: 3,
        question: `Describe the procedure and any two benefits of Pavanmuktasana.`,
        answer: `Procedure of Pavanmuktasana:
1. Lie on back, stretching your legs straight.
2. Bend your right knee and hold it with your hands, pressing it towards your abdomen. Breathe out while lifting up your head and try to touch your knee with your chin.
3. Breathe in and come to initial position.
4. Now repeat the same procedure with the left leg.
5. Then press your abdomen with both legs, placing your chin between your knees.

Benefits (any 2):
• Stretches the neck and back
• The abdominal muscles are stretched and internal organs are compressed, increasing blood circulation
• The pressure on the abdomen releases any trapped gases in the large intestine
• Digestive system is improved; relieves constipation
• Strengthens the lower back muscles and loosens the spinal vertebrae
• Reduces fats in the abdominal area, thighs and buttocks`,
        source: "CBSE 2023 Compartment Exam",
    },


    // ─────────────────────────────────────────────
    //  2023 COMPARTMENT — SECTION D  (Case Studies, 4 marks)
    // ─────────────────────────────────────────────
    {
        id: "C_2023_31",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Case Study",
        marks: 4,
        question: `Vitamins and minerals are essential nutrients which protect us from various diseases and are helpful for general development of the body.

(i) _______ is a group of 8 water-soluble vitamins which are important for cellular metabolism.
(ii) _______ disease is caused due to lack of Vitamin C.
(iii) Vitamin _______ is important for healthy bones and teeth.
(iv) Vitamin _______ is needed for blood-clotting.
OR: Night blindness occurs due to the deficiency of Vitamin _______.`,
        answer: `(i) Vitamin B
(ii) Scurvy
(iii) D
(iv) K
OR: Night blindness occurs due to the deficiency of Vitamin A

(For Visually Impaired — Vitamin A and D functions & sources):
Vitamin A Sources: Milk, cheese, cream, butter, egg yolk, liver, beta-carotene, dark green leafy vegetables, red and yellow fruits/vegetables
Vitamin A Functions: Needed for vision in dim light; healthy skin and mucous membranes; growth of skeletal and soft tissues; immune system health

Vitamin D Sources: Egg yolks, liver, fatty fish, fortified foods; sunlight exposure
Vitamin D Functions: Needed for proper absorption of calcium and phosphorus; deposition of calcium and phosphorus in bones`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_32",
        year: 2023,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Case Study",
        marks: 4,
        question: `Taking care of health during old age is very important. Fitness tests have been developed for senior citizens so that their fitness can be assessed. Look at the pictures and answer the questions.

(i) Name the test used to measure upper body flexibility.
(ii) In Arm Curl Test, weight of the dumbbell for women is __________ pounds.
(iii) Purpose of Chair-Stand Test is to measure ___________.
(iv) In which test is a stopwatch NOT used?
OR: Rikli and Jones Senior Citizen Test was developed in the year ___________.`,
        answer: `(i) Back Scratch Test
(ii) 5 pounds
(iii) Lower body strength
(iv) Chair Sit and Reach Test / Back Scratch Test
OR: Rikli and Jones Senior Citizen Test was developed in the year 2001

(For Visually Impaired — procedure of Chair-Stand Test and Back-Scratch Test):
Chair Stand Test: Place the chair against a wall. Individual sits with back straight, arms crossed, feet firmly on the floor (shoulder-width apart). On the command "Go", stand up completely and return to initial position (= 1 stand). Count maximum stands in 30 seconds.
Back Scratch Test: In standing position, participant places one hand over the shoulder and one hand in the middle of the back and tries to touch or overlap them.`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_33",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Case Study",
        marks: 4,
        question: `Psychological attributes can influence the performance, behaviour and mental well-being of a sportsperson.

(i) An image can be created in the mind in the absence of any external stimuli, and this is known as _________.
(ii) _________ is an effective technique to control thoughts and to influence feelings.
(iii) _________ is necessary to achieve the target within a specified time.
(iv) _________ is centred around a belief in the self, respect for self and confidence for self.`,
        answer: `(i) Mental imagery
(ii) Self-talk
(iii) Goal setting
(iv) Self-esteem

(For Visually Impaired — self-talk and mental imagery benefits):
Benefits of Mental Imagery (any 2): Helps athlete maintain a vision to achieve; assists in setting goals; stays motivated during training; reduces competition stress; develops confidence; enhances focus and concentration.
Benefits of Self-talk (any 2): Building and developing self-efficacy; controlling effort; creating and changing mood; skill acquisition; focusing attention/concentration; better handling of mistakes.`,
        source: "CBSE 2023 Compartment Exam",
    },


    // ─────────────────────────────────────────────
    //  2023 COMPARTMENT — SECTION E  (Long Answer, 5 marks, attempt any 3)
    // ─────────────────────────────────────────────
    {
        id: "C_2023_34",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Long",
        marks: 5,
        question: `Prepare a knockout fixture of 15 teams mentioning all the steps involved.`,
        answer: `Knockout Fixture of 15 Teams:

Step 1: Total no. of teams (N) = 15; Total no. of matches = N – 1 = 14

Step 2: No. of Byes (NB) = Next highest power of 2 – N = 16 – 15 = 1

Step 3: Teams in upper half = (N+1)/2 = 16/2 = 8 teams
Teams in lower half = (N–1)/2 = 14/2 = 7 teams

Step 4: Byes in upper half = (NB–1)/2 = 0/2 = 0 Byes
Byes in lower half = (NB+1)/2 = 2/2 = 1 Bye

The 1st Bye is given to the last team of the lower half (Team 15).

[Draw fixture with 4 rounds showing teams 1–15 with 1 bye for team 15 in Round 1]

(For Visually Impaired):
(i) Number of matches = N – 1 = 15 – 1 = 14
(ii) No. of Byes = Next power of 2 – N
(iii) Seeding — Arranging strong teams in appropriate positions in a knockout tournament so they do not meet in the preliminary round.
(iv) Methods for league fixtures: Staircase, Cyclic, Tabular method
(v) No. of matches in league = N(N–1)/2`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_35",
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Long",
        marks: 5,
        question: `Define Projectile. Describe any four factors that affect projectile trajectory.`,
        answer: `Projectile: Any object that can be thrown, hurled, fired, pitched, tossed or flung in the air. It is a body thrown with some initial velocity and then allowed to be acted upon by gravity and possible drag.

Factors affecting projectile trajectory (any 4):
1. Angle of Projection — At 45°, maximum horizontal distance is achieved.
2. Initial Velocity — Greater the initial velocity applied on the projectile during release, greater horizontal distance is achieved.
3. Gravity — At the surface of the earth, gravity is 9.8 m/s². At high altitude its value decreases, resulting in better distance in jumping. Greater the weight of an object, greater the influence of gravity.
4. Air Resistance — Surface area, speed, surface of object and mass of object all have an impact on air resistance.
5. Spin — Changes the path of the projectile. The amount and direction of spin directly affects the distance the projectile travels because the air pressure acts on the ball.`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_36",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Long",
        marks: 5,
        question: `Define speed. Explain any two methods to develop it.`,
        answer: `Speed: Capability of the body to perform successive movement at the fastest rate.
OR: Ability to execute motor movements as quickly as possible.

Methods of speed development (any 2):
1. Acceleration Runs — Method used to develop speed while attaining maximum speed from a static position. A sports person is required to run a specific distance, gain maximum speed at the earliest, and finish the specified distance at that speed. These runs are repeated with sufficient rest in between. The number of acceleration runs should be set as per age, capacity and fitness of the athlete.

2. Pace Runs — Running a set distance at uniform speed. Usually includes races of 800 m and above. It is important to keep pace in mind when running middle and long distance races. In the beginning of the race, the pace should not be too high and should be maintained throughout. Repetition of pace runs can be done as per level of athlete.`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_37",
        year: 2023,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Long",
        marks: 5,
        question: `Suggest any five strategies to make physical activities accessible for children with special needs.`,
        answer: `Strategies to make physical activities accessible for children with special needs (any 5):
1. Medical Checkup — To assess type of disability.
2. Physical activities must be based on interests of children.
3. Equipment related to physical activities should be according to the needs of children.
4. Specific environment and space should be provided; the playing area should be easily accessible.
5. A variety of different instructional strategies should be used in verbal, visual and peer teaching form.
6. Rules should be modified according to the needs of children with disabilities.
7. Children's previous experience must be taken into consideration.
8. Graded activities.
9. Inclusive strategies.
10. Psychological strategies — motivation, learning new skills.`,
        source: "CBSE 2023 Compartment Exam",
    },


    // ═══════════════════════════════════════════════════════════════
    //  2024 COMPARTMENT — SECTION A  (MCQ, 1 mark)
    // ═══════════════════════════════════════════════════════════════
    {
        id: "C_2024_1",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `As per the division process of age in Special Olympics, which of the following is the appropriate age division for team games?`,
        options: ["13 and under", "8 – 11 years", "30 and above", "16 – 21 years"],
        answer: `16 – 21 years`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_2",
        year: 2024,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `A girl is participating in sports for 2 years. Identify the psychological benefits for her from the following :`,
        options: [
            "Helps in increasing bone density",
            "Helps in improving muscle tone",
            "Helps to improve self-esteem",
            "Helps in improving communication",
        ],
        answer: `Helps to improve self-esteem`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_3",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `____________ is characterized by high sociability, if a person is outgoing and has a tendency to seek stimulation in the company of others.`,
        options: ["Conscientiousness", "Agreeableness", "Extraversion", "Neuroticism"],
        answer: `Extraversion`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_4",
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is a short-term effect of exercise on the muscular system?`,
        options: [
            "Hypertrophy of muscles",
            "Increase in glycogen storage",
            "Increase in muscle temperature",
            "Increase in lactic acid tolerance",
        ],
        answer: `Increase in muscle temperature`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_5",
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is a macro mineral?`,
        options: ["Iodine", "Copper", "Iron", "Sodium"],
        answer: `Sodium`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_6",
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Given below are the options for number of participating teams in a tournament. Which option will have the highest number of 'Byes' while drawing a fixture?`,
        options: ["17", "18", "19", "20"],
        answer: `17`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_7",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Match the following types of friction with their examples:`,
        matchTable: {
            headers: ["Type of Friction", "Sports Example"],
            rows: [
                { left: "I. Sliding friction", right: "1. Cycling" },
                { left: "II. Fluid friction", right: "2. Ice skating" },
                { left: "III. Rolling friction", right: "3. Try to push heavy object" },
                { left: "IV. Static friction", right: "4. Swimming" },
            ],
        },
        options: [
            "I-2, II-1, III-3, IV-4",
            "I-2, II-1, III-4, IV-3",
            "I-2, II-4, III-1, IV-3",
            "I-4, II-2, III-3, IV-1",
        ],
        answer: `I-2, II-4, III-1, IV-3`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_8",
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Identify the asana shown in the picture given below :`,
        imageUrl: "/PE_C_2024_qs_8.png",
        options: ["Tadasana", "Katichakrasana", "Pawanmuktasana", "Garudasana"],
        answer: `Katichakrasana`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_9",
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `SAI Khelo India Fitness Test is introduced in schools for two groups, namely class 1 – 3 and class 4 – 12. Which of the following test item is common for both groups?`,
        options: ["Plate Tapping Test", "Body Mass Index Test", "Sit and Reach Test", "50 mts Dash"],
        answer: `Body Mass Index Test`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_10",
        year: 2024,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `In which of the following methods to develop flexibility, an individual performs the movement with swing and rhythm?`,
        options: ["Slow stretching method", "Slow stretch and hold method", "PNF method", "Ballistic method"],
        answer: `Ballistic method`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_11",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `There are ___________ different types of physical impairment in Paralympics.`,
        options: ["Seven", "Six", "Eight", "Nine"],
        answer: `Eight`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_12",
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `The height of bench used in Harvard Step Test for men is ___________.`,
        options: ["16 inches", "20 inches", "22 inches", "15 inches"],
        answer: `20 inches`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_13",
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Preparing budget of the tournament and maintaining a record of income and expenditure of the tournament are the responsibilities of which committee?`,
        options: ["Technical", "Finance", "Transport", "Medical"],
        answer: `Finance`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_14",
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Which of the following asana is performed in a sitting position?`,
        options: ["Bhujangasana", "Matsyendrasana", "Garudasana", "Mandukasana"],
        answer: `Mandukasana`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_15",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Given below are two statements labelled Assertion (A) and Reason (R) :

Assertion (A) : Self-esteem is centred around a belief in the self and respect for the self.
Reason (R) : Mental imagery is a psychological skill, that can be created in the mind in the absence of any external stimuli.

In the context of the above two statements which one of the following is correct?`,
        options: [
            "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).",
            "Both Assertion (A) and Reason (R) are true and Reason (R) is not the correct explanation of the Assertion (A).",
            "Assertion (A) is true, but Reason (R) is false.",
            "Assertion (A) is false, but Reason (R) is true.",
        ],
        answer: `Both Assertion (A) and Reason (R) are true and Reason (R) is not the correct explanation of the Assertion (A).`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_16",
        year: 2024,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Given below are two statements labelled Assertion (A) and Reason (R) :

Assertion (A) : Menarche is usually considered the point of sexual maturity for girls.
Reason (R) : Menstrual dysfunction is an abnormal condition in a woman's menstrual cycle.

In the context of the above two statements which one of the following is correct?`,
        options: [
            "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).",
            "Both Assertion (A) and Reason (R) are true and Reason (R) is not the correct explanation of the Assertion (A).",
            "Assertion (A) is true, but Reason (R) is false.",
            "Assertion (A) is false, but Reason (R) is true.",
        ],
        answer: `Both Assertion (A) and Reason (R) are true and Reason (R) is not the correct explanation of the Assertion (A).`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_17",
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Fat soluble vitamins include the following vitamins except _______________.`,
        options: ["Vitamin-B", "Vitamin-D", "Vitamin-A", "Vitamin-E"],
        answer: `Vitamin-B`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_18",
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `Johnson-Metheny Test Battery does not consist of ___________ motor stunt.`,
        options: ["Front Roll", "Side Roll", "Back Roll", "Jumping Full Turns"],
        answer: `Side Roll`,
        source: "CBSE 2024 Compartment Exam",
    },


    // ─────────────────────────────────────────────
    //  2024 COMPARTMENT — SECTION B  (2 marks, attempt any 5)
    // ─────────────────────────────────────────────
    {
        id: "C_2024_19",
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Short",
        marks: 2,
        question: `Briefly explain 'Health Run'.`,
        answer: `Health runs are generally conducted for the purpose of improving the health standards in society and creating awareness about the importance of physical activities for maintaining good health or for raising charity. The purpose of the runners is not to win, but to participate in the events. To get its full impact, a large number of registrations are required. There is no age bar for participants. It is not a professional race so there is no need to run a long distance. These runs are conducted by NGOs or health departments to spread awareness about health-related issues.`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_20",
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 2,
        question: `Briefly explain 'R.I.C.E.' therapy to manage soft tissue injuries.`,
        answer: `Soft tissue injuries like sprain and strain can be managed by giving first aid. R.I.C.E. is the therapy that helps to reduce pain and swelling.

R — Rest and protect the injured or sore area.
I — Ice or cold packs are used as soon as possible.
C — Compression, or wrapping the injured or sore area with an elastic bandage.
E — Elevate the injured or sore area.`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_21",
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Short",
        marks: 2,
        question: `Explain the procedure of Dhanurasana as a preventive measure for Asthma.`,
        answer: `Procedure of Dhanurasana:
1. Take prone position, legs together, and hands straight by the side of the thighs, chin resting on the ground.
2. Fold the legs at the knee and bring them to the thighs. Knees must remain together.
3. Bring hands backward and hold the toes of respective legs with the thumb and forefinger of the respective hands.
4. Raise legs up a bit and simultaneously raise the head and chest.
5. Holding the toes, pull the legs towards the ears. Gaze in front.
6. While returning to the original position, loosen your hands, take legs backward, let the thighs touch the ground, leave the toes and ultimately bring the legs and hands to the first position.`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_22",
        year: 2024,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 2,
        question: `What do you understand by Macro-cycle?`,
        answer: `Macro Cycle: The duration of this cycle is 3 to 12 months and it is considered the most extended cycle of training. A macrocycle comprises of several mesocycles; the last mesocycle ensures recovery and realization for a smooth transition to the following macrocycle. The purpose of the macrocycle is to enable the sportsperson to improve the performance capacity and put up an optimal performance at a specific time during the competition.`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_23",
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 2,
        question: `Enlist four non-nutritive food items.`,
        answer: `Non-nutritive food components (any 4):
• Fibre or Roughage
• Water
• Colour Compounds
• Flavour Compounds
• Plant compounds
• Artificial sweeteners
• Preservatives
• Spices
• Coffee`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_24",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 2,
        question: `Suggest any two strategies to make physical activities accessible for CWSN.`,
        answer: `Any two strategies from the following:
• Medical check-up
• To create specific environment
• To assess physical and mental ability
• To assess the interest of the child
• Plan activity as per need
• Plan different strategies for instruction
• Modified rules
• Use of modified equipment
• Plan for implementation from easy to difficult
• Extra care or concern for safety
• Plan for additional support of parents and trained assistants`,
        source: "CBSE 2024 Compartment Exam",
    },


    // ─────────────────────────────────────────────
    //  2024 COMPARTMENT — SECTION C  (3 marks, attempt any 5)
    // ─────────────────────────────────────────────
    {
        id: "C_2024_25",
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Short",
        marks: 3,
        question: `Briefly explain the concept of Talent Identification in sports.`,
        answer: `Talent Identification is the process by which children are encouraged to participate in the sport they are most likely to succeed, based on selected parameters. These parameters are designed to predict performance capacity, considering the child's current level of fitness and maturity. Recognizing participants with the potential at an earlier age to become elite performers in the future. For the talent identification process, Physiological, Physical Fitness, Psychological, and Technical components are taken into consideration. Various methods such as drills, test batteries, electronic gadgets, parameters, standard norms, performance and other techniques are adopted. The first stage of the process could occur between the ages of 10 and 12, using essential field tests that are easy to administer. The second phase could occur between 13 and 16.`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_26",
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Short",
        marks: 3,
        question: `Explain the purpose and procedure of 'Flamingo Balance Test'.`,
        answer: `Purpose: Ability to balance successfully on a single leg. This single-leg balance test assesses the strength of the leg, pelvic, and trunk muscles as well as static balance. (For age group 5–8 yrs., classes 1–3.)

Procedure: Stand on the beam. Keep balance by holding the instructor's hand (if required to start). While balancing on the preferred leg, the free leg is flexed at the knee and the foot of this leg held close to the buttocks. Start the watch as the instructor lets go of the participant. Pause the stopwatch each time the subject loses balance (either by falling off the beam or letting go of the foot being held). Resume timing until they lose balance again. Count the number of falls in 60 seconds. If there are more than 15 falls in the first 30 seconds, the test is terminated.`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_27",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Short",
        marks: 3,
        question: `Elucidate any three factors affecting projectile trajectory.`,
        answer: `Factors affecting projectile trajectory (any 3):
1. Angle of Projection — At 45°, maximum horizontal distance is achieved.
2. Initial Velocity — Greater the initial velocity applied on the projectile during release, greater horizontal distance is achieved.
3. Gravity — It is the force of attraction exerted by the earth. The greater the weight of an object, the greater is the influence of gravity. Gravitational pull stops the upward movement, resulting in decreased height of the projectile.
4. Air Resistance — Surface area, speed, surface of object and mass of object all have an impact on air resistance.
5. Spin — Changes the path of the projectile. The amount and direction of spin directly affects the distance the projectile travels because the air pressure acts on it.`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_28",
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Short",
        marks: 3,
        question: `Enlist any two tests to measure functional fitness of senior citizens and describe the procedure of any one of them.`,
        answer: `Tests for senior citizens (any 2 from):
1. Chair Stand Test — lower body strength
2. Arm Curl Test — upper body strength
3. Chair Sit and Reach Test — lower body flexibility
4. Back Scratch Test — upper body flexibility
5. Eight Foot Up and Go Test — agility
6. Six Minute Walk Test — aerobic endurance

Chair Stand Test Procedure: Place the chair against the wall. Individual sits with back straight, arms crossed, feet firmly on the floor (shoulder-width apart). On the command "Go", the individual stands up completely, then returns to the initial position (= 1 stand). The individual should be motivated to do the maximum number of stands in 30 seconds.`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_29",
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 3,
        question: `Describe three food myths and their related facts.`,
        answer: `Food myths and facts (any 3):

Myth 1: The fewer the carbohydrates, the healthier you are.
Fact: Choosing the healthiest carbohydrates, especially whole grains, is important for health and well-being.

Myth 2: Oils/Margarine have fewer calories than Ghee/Butter.
Fact: Ghee/Butter and Oils/Margarine have about the same amount of calories.

Myth 3: Apples and brinjals are rich in iron because they turn brown when cut.
Fact: They are an excellent source of fibre but not of iron.

Myth 4: Milk should be avoided after eating fish.
Fact: Drinking milk right after consuming fish causes skin disease like leukoderma — this is not true.

Myth 5: Drinking water in between meals affects digestion.
Fact: Drinking water simply fills up the stomach and as a result one tends to eat less, which is especially good when trying to lose weight.`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_30",
        year: 2024,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 3,
        question: `Describe any two methods to develop strength, by giving suitable examples from sports.`,
        answer: `Methods to develop strength (any 2):

1. Isometric Exercise: No direct movement is visible; there is no change in muscle length. Work performed cannot be seen directly (e.g., pushing a wall). Needs less time and equipment; can be performed anywhere.
Examples: Planks, Flexed Arm Hang, Wall Sit, Low Squat, Calf Raise and Hold, Glute Bridge.

2. Isotonic Exercise: Movements can be seen directly. Results in toned muscles and increased muscle length.
Examples: Running and jumping on the spot, weight training exercises, calisthenics exercises.

3. Isokinetic Exercise: Performed on specially designed machines. Muscles apply maximal force throughout the range of motion around the joint.
Examples: Brisk walking on a treadmill, cycling on an exercise bike, rowing.`,
        source: "CBSE 2024 Compartment Exam",
    },


    // ─────────────────────────────────────────────
    //  2024 COMPARTMENT — SECTION D  (Case Studies, 4 marks)
    // ─────────────────────────────────────────────
    {
        id: "C_2024_31",
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Case Study",
        marks: 4,
        question: `Study the table given below (League tournament fixture — Cyclic Method with 7 teams across 7 rounds). Based on the above study and your knowledge, answer the following questions :

(a) League Tournament is also known as _____________.
(b) Identify the method used in the above fixture.
(c) How many rounds will be played if 6 teams are participating in a league tournament?
(d) How many matches are played in the above fixture?`,
        answer: `(a) Round Robin
(b) Cyclic Method
(c) 5 Rounds
(d) 21 matches

(For Visually Impaired — intramural and extramural sports):
Intramural: Tournament conducted within the walls of a single institution/school/community.
Objectives (any 2): Encourage mass participation; all-round development of children; develop values like fair play; provide first opportunity to compete in a controlled environment; focus on fitness, wellness and health.

Extramural: Tournaments conducted outside the walls of the organising unit between players/teams of different schools/colleges/institutions.
Objectives (any 2): Achieve high performance at highest level; develop feeling of integration with other institutions; provide opportunities for choosing a career in sports; promote social, cultural, economic development.`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_32",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Case Study",
        marks: 4,
        question: `Study the picture of the Deaflympics logo. Based on the above study and your knowledge, answer the following questions :

(a) The above logo incorporates four colours, red, blue, yellow and _________.
(b) The logo of Deaflympics was designed in the year ___________.
(c) In the above logo, the hand shapes, "Ok", "Good" and "_________" overlap each other.
(d) The first Deaflympics were held in the year ___________ in Paris.
OR: First Deaflympics Games were also known as _________.`,
        answer: `(a) Green
(b) 2003
(c) Great
(d) 1924
OR: First Deaflympics Games were also known as International Silent Games

(For Visually Impaired — advantages of physical activities for CWSN, any 4):
1. Physical improvement
2. Mental improvement
3. Increased self-esteem
4. Reduces the level of stress, anxiety and depression
5. Reduces the risk of health complications
6. Improved social interaction
7. Improved cognitive skills
8. Improved emotional and psychological health
9. Mode of recreation and fun
10. Channelising the surplus energy`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_33",
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Case Study",
        marks: 4,
        question: `Study the picture given below (showing a sprain and a fracture). Based on the above study and your knowledge, answer the following questions :

(a) Identify the injury shown in picture 'A'.
(b) The injury shown in picture 'A' occurs due to overstretching of _______.
(c) Identify the type of fracture shown in picture 'B'.
OR: Fracture is a _________ tissue injury.
(d) _________ is a joint injury that forces the ends of bones out of position.`,
        answer: `(a) Sprain
(b) Ligaments
(c) Oblique
OR: Fracture is a Hard tissue injury
(d) Dislocation

(For Visually Impaired — any two soft tissue injuries):
Abrasion: Injury most commonly occurring due to moving contact with a rough surface, causing grinding or rubbing away of the upper superficial layers of the epidermis.
Contusion: A type of haematoma which refers to any collection of blood outside of a vessel. Occurs when a body part is struck by enough force to crush underlying muscle fibres without breaking the skin.
Laceration: Irregular tear-like wounds caused by blunt trauma.
Strain: Injury to either a muscle or a tendon generally caused by overuse, force or stretching.
Sprain: Stretching or tearing of ligaments which connects bones in the joints.`,
        source: "CBSE 2024 Compartment Exam",
    },


    // ─────────────────────────────────────────────
    //  2024 COMPARTMENT — SECTION E  (Long Answer, 5 marks, attempt any 3)
    // ─────────────────────────────────────────────
    {
        id: "C_2024_34",
        year: 2024,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Long",
        marks: 5,
        question: `Explain any two postural deformities and suggest their corrective measures.`,
        answer: `Postural Deformities (any 2 with explanation and corrective measures):

1. Knock Knees (Genu Valgum): A postural deformity in which the legs are bent inward and knees strike each other while walking or running, with a wide gap between the ankles.
Corrective measures: Horse riding; perform Padmasana and Gomukhasana; outward walking; keep a pillow between the knees and stand erect for some time.

2. Flat Foot (Pes Planus): When the arch of the foot is lesser than normal, it is known as flat foot.
Corrective measures: Walk barefooted over sand; perform rope skipping; picking up marbles with toes; perform Adhomukhasana and Vajrasana.

3. Round Shoulders: Shoulders become round and seem to be bent forward.
Corrective measures: Perform Chakrasana and Dhanurasana; pull-ups; hold the horizontal bar; perform Bhujangasana and Ushtrasana.

4. Bow Legs (Genu Varum): Knees remain wide apart even when feet are kept together.
Corrective measures: Walk on inner edge of feet; perform Garudasana; perform lunges; use braces and modified shoes.`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_35",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Long",
        marks: 5,
        question: `Define Equilibrium. Explain Static and Dynamic Equilibrium by giving suitable examples from sports.`,
        answer: `Equilibrium: A state of balance or a stable situation where opposite forces cancel each other out and where no changes are occurring.

Static Equilibrium: A state when a body is at rest or completely motionless.
Examples:
1. Performing handstand in gymnastics
2. Stance maintained by the batsman in cricket
3. On the starting block by the sprinter
4. Wide stance maintained by the wrestler
5. A shooter maintains a steady stance and grip while aiming at a target

Dynamic Equilibrium: A state when the body or an object is moving with a constant velocity with no change in speed or direction.
Examples:
1. Cyclist balance while riding
2. Surfer balancing on a moving surfboard
3. A basketball player maintaining balance while dribbling and shooting
4. A figure skater maintaining balance during footwork sequences
5. A diver maintaining balance during the take-off`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_36",
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Long",
        marks: 5,
        question: `What do you understand by Obesity? Explain the procedure of any two asanas to manage obesity.`,
        answer: `Obesity: An abnormal or excessive fat accumulation that may impair health. A medical condition when the body of a person contains 20% or more fat as compared to ideal weight. According to WHO, if an individual's BMI is 30 or higher, the person is in the obese category.

Asanas for obesity (procedure of any 2):
Tadasana, Katichakrasana, Pawanmuktasana, Surya Namaskar, Halasana, Paschimottanasana, Ardha Matsyendrasana, Mandukasana, Dhanurasana, Ushtrasana, Suryabhedan Pranayam

Procedure of Pawanmuktasana:
1. Lie on back, stretching legs straight.
2. Bend right knee and hold it with hands, pressing it towards the abdomen while breathing out.
3. Lift head and try to touch the knee with the chin.
4. Breathe in and return to initial position.
5. Repeat with left leg.
6. Then press abdomen with both legs, placing chin between knees.

Procedure of Halasana:
1. Lie on back with arms by the side and legs together.
2. While breathing in, raise both legs to 90°.
3. Support the back with hands; while breathing out, take legs over the head to touch the floor behind.
4. Keep chin pressed on chest; maintain the position for a few seconds.
5. Return slowly to the starting position.`,
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_37",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Long",
        marks: 5,
        question: `Define Motivation. Differentiate between Intrinsic and Extrinsic Motivation.`,
        answer: `Motivation: The direction and intensity of effort.
OR: A process of inspiring and guiding the organism to move in a particular direction.
OR: The process of arousing action, sustaining the activities in progress and regulating the patterns of activity.

Difference between Intrinsic and Extrinsic Motivation:

Intrinsic Motivation:
• Definition: Driving force to pursue an action for fun, joy or any other inner satisfaction.
• Factors: Internal factors like joy, enjoyment.
• Method: Goal setting strategies, family and community support.
• Benefits: Long-term benefit of maintaining a behaviour.

Extrinsic Motivation:
• Definition: Driving force to pursue an action due to reward, trophy, money, promotions or praise.
• Factors: External factors like reward, promotion, praise.
• Method: Associating success with future benefits, awards, promotions.
• Benefits: Helpful to initiate or create a drive towards a desired behaviour when internal factors are missing.`,
        source: "CBSE 2024 Compartment Exam",
    },


    // ═══════════════════════════════════════════════════════════════
    //  2025 COMPARTMENT — SECTION A  (MCQ, 1 mark)
    // ═══════════════════════════════════════════════════════════════
    {
        id: "C_2025_1",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Seeding is decided on the basis of :`,
        options: ["Previous Performance", "Future Performance", "Current Performance", "Bad Performance"],
        answer: `Previous Performance`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_2",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `In a knock-out tournament, if byes are in odd numbers, then number of byes in lower half is calculated by :`,
        options: ["NB + 1 / 2", "NB – 1 / 2", "NB / 2", "NB – 1"],
        answer: `NB + 1 / 2`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_3",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is the short-term effect of Exercise on cardio-vascular system?`,
        options: [
            "Size and strength of heart increases",
            "Increase in heart rate",
            "Blood volume increases",
            "Resting heart rate decreases",
        ],
        answer: `Increase in heart rate`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_4",
        year: 2025,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Identify the asana :`,
        imageUrl: "/PE_C_2025_qs_4.png",
        options: ["Vakrasana", "Gomukhasana", "Shalabhasana", "Urdhva Hastottanasana"],
        answer: `Vakrasana`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_5",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `Dr. Ludwig Guttmann is related to :`,
        options: ["Paralympic Games", "Olympic Games", "Asian Games", "Commonwealth Games"],
        answer: `Paralympic Games`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_6",
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `If the menstrual cycle does not begin at puberty, the condition is called :`,
        options: ["Primary Amenorrhea", "Secondary Amenorrhea", "Oligomenorrhea", "Menarche"],
        answer: `Primary Amenorrhea`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_7",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Given below are two statements labelled as Assertion (A) and Reason (R). Read both the statements carefully :

Assertion (A) : Balanced diet is the diet which contains all the essential nutrients in adequate quantity and proportion.
Reason (R) : Requirement of food depends upon age, type of work, etc.

In the context of the above two statements, which one of the following is correct?`,
        options: [
            "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
            "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).",
            "Assertion (A) is true, but Reason (R) is false.",
            "Assertion (A) is false, but Reason (R) is true.",
        ],
        answer: `Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_8",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `In arm curl test, weight of the dumbbell for women is _________.`,
        options: ["2.5 kg", "2.3 kg", "2.8 kg", "2.1 kg"],
        answer: `2.3 kg`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_9",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `Back Scratch Test is used to measure :`,
        options: ["Lower body strength", "Lower body flexibility", "Upper body flexibility", "Upper body strength"],
        answer: `Upper body flexibility`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_10",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `Match the physiological factors determining fitness with the fitness components:`,
        matchTable: {
            headers: ["Physiological Factor", "Fitness Component"],
            rows: [
                { left: "a. Size of muscle", right: "i. Determines endurance" },
                { left: "b. Fast Twitch Fibre", right: "ii. Determines strength" },
                { left: "c. Aerobic capacity", right: "iii. Determines speed" },
                { left: "d. Joint structure", right: "iv. Determines flexibility" },
            ],
        },
        options: [
            "a-iii, b-iv, c-ii, d-i",
            "a-ii, b-iii, c-i, d-iv",
            "a-i, b-ii, c-iv, d-iii",
            "a-iv, b-i, c-iii, d-ii",
        ],
        answer: `a-ii, b-iii, c-i, d-iv`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_11",
        year: 2025,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `In Ardha Chakrasana, which is the correct pose?`,
        options: [
            "Back bend in standing position",
            "Forward bend in standing position",
            "Leg raised in sitting position",
            "Head raised in lying position",
        ],
        answer: `Back bend in standing position`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_12",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Given below are two statements labelled as Assertion (A) and Reason (R). Read both statements carefully :

Assertion (A) : Newton's third law of motion concludes that forces occur in pairs of action and reaction.
Reason (R) : The action force is more than the reaction force.

In the context of the above two statements, which one of the following is correct?`,
        options: [
            "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
            "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).",
            "Assertion (A) is true, but Reason (R) is false.",
            "Assertion (A) is false, but Reason (R) is true.",
        ],
        answer: `Assertion (A) is true, but Reason (R) is false.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_13",
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Children aged 3 – 4 years should engage in physical activities for :`,
        options: ["120 minutes", "60 minutes", "180 minutes", "45 minutes"],
        answer: `180 minutes`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_14",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Match the following methods to increase or decrease friction:`,
        matchTable: {
            headers: ["Method", "Effect on Friction"],
            rows: [
                { left: "a. Polishing", right: "i. Makes surface slippery" },
                { left: "b. Lubrication", right: "ii. Makes surface smooth" },
                { left: "c. Shoes and spikes", right: "iii. Replaces sliding friction with rolling friction" },
                { left: "d. Use of ball bearings", right: "iv. Designed to increase friction so that better speed is generated" },
            ],
        },
        options: [
            "a-iv, b-iii, c-ii, d-i",
            "a-ii, b-i, c-iv, d-iii",
            "a-iii, b-iv, c-i, d-ii",
            "a-i, b-ii, c-iii, d-iv",
        ],
        answer: `a-ii, b-i, c-iv, d-iii`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_15",
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Which one of the following is NOT a trait of Big Five Theory?`,
        options: ["Openness to new ideas", "Neuroticism", "Extraversion", "Submissiveness"],
        answer: `Submissiveness`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_16",
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `A person who is bold and outgoing is a/an ___________.`,
        options: ["Introvert", "Ambivert", "Extrovert", "Somatotype"],
        answer: `Extrovert`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_17",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `The duration of micro cycle is :`,
        options: ["3 to 6 weeks", "3 to 10 days", "3 to 12 months", "3 to 10 years"],
        answer: `3 to 10 days`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_18",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `In which method is stretching done rhythmically?`,
        options: ["Slow stretch", "Slow stretch and hold", "Ballistic method", "PNF"],
        answer: `Ballistic method`,
        source: "CBSE 2025 Compartment Exam",
    },


    // ─────────────────────────────────────────────
    //  2025 COMPARTMENT — SECTION B  (2 marks, attempt any 5)
    // ─────────────────────────────────────────────
    {
        id: "C_2025_19",
        year: 2025,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Short",
        marks: 2,
        question: `Explain the correct breathing pattern while performing Nadi-Shodhana Pranayama.`,
        answer: `1. Place right hand in Pranayama mudra. Close the right nostril with the right thumb. Inhale through the left nostril for 5 counts.
2. After 5 counts, release the pressure of thumb from the right nostril and close the left nostril with the ring finger.
3. Exhale through the right nostril for 10 counts, keeping the respiration rate slow, deep and silent. Then inhale through the right nostril for 5 counts and the procedure continues.
4. Make sure that no sound is produced as the air passes through the nostrils.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_20",
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 2,
        question: `What do you understand by menstrual dysfunction? Write in brief.`,
        answer: `Menstrual dysfunction is an abnormal condition in a woman's menstrual cycle. The normal range of menstrual cycle is 21 to 35 days. If it happens earlier than 21 days or after more than 35 days, it is a problem. It can also include missing 3 or more periods, heavier or lighter menstrual flow than usual, cycle happening longer than 7 days, painful menstruation or bleeding after menopause.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_21",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 2,
        question: `'Roughage is an essential component for our body.' Explain this statement by enumerating the functions of roughage.`,
        answer: `Roughage improves digestion and is essential for our body. Functions of roughage (any 2):
1. Improves digestion
2. Promotes gut health
3. Reduces risk factor of heart disease
4. Manages weight and blood sugar
5. Reduces bowel irritation
6. Helps in keeping the digestive system clean
7. Prevents constipation and helps release faecal matter
8. Satisfies appetite
9. Softens stool`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_22",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Short",
        marks: 2,
        question: `What is the purpose of the abdominal partial curl up test?`,
        answer: `Abdominal partial curl up test measures abdominal/core strength and endurance.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_23",
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 2,
        question: `Differentiate between Extroverts and Introverts.`,
        answer: `Extroverts:
1. Social, outgoing, confident, lively and make friends easily.
2. They are generous, supportive and courageous.
3. They are action oriented.
4. Group leaders, politicians, heads, actors are extroverts generally.

Introverts:
1. Reserved, too self-conscious, more interested in own thoughts and ideas.
2. They are self-centred, unable to adjust easily in society.
3. They think before acting.
4. Poets, artists, philosophers, writers etc. are usually introverts.
(Any 2 differences)`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_24",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 2,
        question: `Write any two physiological factors to determine strength.`,
        answer: `Physiological factors to determine strength (any 2):
1. Muscle composition (Slow and Fast Twitch fibres)
2. Size of muscle
3. Body weight
4. Intensity of nerve impulse
5. Muscle coordination`,
        source: "CBSE 2025 Compartment Exam",
    },


    // ─────────────────────────────────────────────
    //  2025 COMPARTMENT — SECTION C  (3 marks, attempt any 5)
    // ─────────────────────────────────────────────
    {
        id: "C_2025_25",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Short",
        marks: 3,
        question: `Differentiate between Knock-out and League Tournament.`,
        answer: `Knockout vs League Tournament (any 3 differences):

1. Knockout: Player/team continues to play until being defeated. | League: Player/team gets equal chance to play with each other.
2. Knockout: Good teams/players can be eliminated at early stages. | League: The true winner emerges from this format.
3. Knockout: It is less expensive. | League: It is more expensive.
4. Knockout: Requires less time. | League: Requires more time.
5. Knockout: Seeding procedure can be used. | League: No provision of seeding.
6. Knockout: Also known as Elimination Tournament. | League: Also known as Round Robin Tournament.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_26",
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 3,
        question: `Explain any two common postural deformities with their corrective measures.`,
        answer: `Postural Deformities (any 2):

1. Knock Knees (Genu Valgum): Legs are bent inward and knees strike each other while walking or running; wide gap between ankles.
Corrective measures: Horse riding; perform Padmasana and Gomukhasana; outward walking; keep a pillow between the knees and stand erect for some time.

2. Flat Foot (Pes Planus): Arch of the foot is lesser than normal.
Corrective measures: Walk barefooted over sand; perform rope skipping; picking up marbles with toes; perform Adhomukhasana and Vajrasana.

3. Round Shoulders: Shoulders become round and bent forward.
Corrective measures: Perform Chakrasana, Dhanurasana; pull-ups; shoulder rotation exercises.

4. Bow Legs (Genu Varum): Knees remain wide apart when feet are kept together.
Corrective measures: Walk on inner edge of feet; perform Garudasana; lunges.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_27",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Short",
        marks: 3,
        question: `What is the purpose of conducting the Sit and Reach Test? Write the procedure for conducting this test.`,
        answer: `Purpose: Common measure of flexibility; specifically measures the flexibility of the lower back and hamstring muscles.

Procedure:
1. This test involves sitting on the floor with legs stretched out straight ahead.
2. Shoes should be removed.
3. The soles of the feet are placed flat against the Sit and Reach box.
4. Both knees should be locked and pressed flat to the floor — the tester may assist by holding them down.
5. The subject extends hands to reach the measuring scale without bending for initial reading.
6. With palms facing downwards and hands on top of each other, the subject reaches forward along the measuring line as far as possible for the final reading.
7. Ensure that the hands remain at the same level. Make sure there are no jerky movements.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_28",
        year: 2025,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Short",
        marks: 3,
        question: `Enlist any two asanas for back pain and explain the procedure of any one asana.`,
        answer: `Asanas for Back-pain (any 2 from):
Tadasana, Urdhwahastottanasana, Ardha Chakrasana, Ushtrasana, Vakrasana, Saral Matsyendrasana, Bhujangasana, Gomukhasana, Bhadrasana, Makarasana

Procedure of Tadasana:
1. Stand with feet together or about 10 cm apart, hands by the side of the thighs.
2. Distribute weight equally on both feet to keep the body steady.
3. Raise arms over the head. Interlock the fingers and turn the palms upward.
4. Inhale and stretch the arms, shoulders and chest upward.
5. Raise heels, coming up onto the toes.
6. Hold the breath and position for a few seconds.
7. Lower the heels while breathing out and bring hands down.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_29",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 3,
        question: `What types of physical impairments are considered for grouping the athletes for Paralympics?`,
        answer: `Physical Impairment — Eight different types (any 3):
1. Impaired Muscle Power — Force generated by muscles in one limb, one side of the body or lower half of the body is reduced.
2. Impaired Passive Range of Movement — Range of movement in one or more joints is reduced.
3. Loss of Limb or Limb Deficiency — A total or partial absence of bones or joints.
4. Leg-length Difference — Significant bone shortening occurs in one leg.
5. Short Stature — Standing height is reduced.
6. Hypertonia — Abnormal increase in muscle tension and reduced ability of a muscle to stretch.
7. Ataxia — Lack of coordination of muscle movements.
8. Athetosis — Unbalanced, involuntary movements and difficulty maintaining a symmetrical posture.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_30",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Short",
        marks: 3,
        question: `Why are the angles of release for Shotput, Javelin and Discus Throw different? Explain.`,
        answer: `The angles of release for Shotput, Javelin and Discus Throw are different because:
1. Due to the shape of the equipment, aerodynamics play a role in the angle of release — each implement has a different shape and flight characteristic.
2. The difference in throwing action or style leads to a different angle of release for each event.
3. The difference in the weight of the equipment also means the angle of release must be different to achieve maximum distance.`,
        source: "CBSE 2025 Compartment Exam",
    },


    // ─────────────────────────────────────────────
    //  2025 COMPARTMENT — SECTION D  (Case Studies, 4 marks)
    // ─────────────────────────────────────────────
    {
        id: "C_2025_31",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Case Study",
        marks: 4,
        question: `In a badminton competition, there were 7 players. In the first round, 3 players were eliminated after they lost their matches. Based on this information and your prior knowledge, answer the following questions :

(i) What type of tournament is mentioned above?
(A) Round Robin Tournament  (B) Knock-out Tournament  (C) Challenge Tournament  (D) Knock-out Cum League Tournament

(ii) How many total matches will be played if it is a Round Robin tournament?
(A) 18  (B) 17  (C) 21  (D) 16

(iii) An advantage of knock-out tournament is :
(A) It takes less time  (B) Weak teams may enter the final  (C) Strong teams may get eliminated  (D) It is more expensive

(iv) The formula to calculate byes in the upper-half in a knock-out tournament is :
(A) N + 1 / 2  (B) N – 1 / 2  (C) NB + 1 / 2  (D) NB – 1 / 2`,
        answer: `(i) Knock-out Tournament
(ii) 21
(iii) It takes less time
(iv) NB – 1 / 2`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_32",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Case Study",
        marks: 4,
        question: `The 10th 'Asia Pacific Deaf Games' were held in Kuala Lumpur, Malaysia. The table shows medals won by India. Based on this and your prior knowledge, answer the following questions :

(i) The first Deaflympic Games were held in the year ____________.
(A) 1924  (B) 1984  (C) 1948  (D) 1954

(ii) How many athletes participated in the Judo tournament?
(A) 2  (B) 4  (C) 6  (D) 8

(iii) How many silver medals were clinched in the wrestling competition?
(A) 1  (B) 2  (C) 6  (D) 3

(iv) In which year was the logo of Deaflympics designed?
(A) 2001  (B) 2002  (C) 2003  (D) 2005`,
        answer: `(i) 1924
(ii) 6
(iii) 1
(iv) 2003

(For Visually Impaired):
(i) Use of Standard equipment only (least preferred strategy)
(ii) Increasing interaction among CWSN (social strategy)
(iii) From an Indoor activity
(iv) Simple to complex activities`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_33",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Case Study",
        marks: 4,
        question: `A handball team from XYZ School reached the semifinals. The team arrived at the scheduled match time with no time for warm-up. As soon as the match started, Rohit suddenly got injured and fell on the ground. His coach had knowledge of first aid and immediately rushed to help. Based on this and your prior knowledge, answer the following questions :

(i) What was the cause of injury?
(A) Lack of warming-up  (B) Improper equipment  (C) Collision with another player  (D) Improper coaching

(ii) Which of the following injury occurs due to tear of ligament?
(A) Contusion  (B) Strain  (C) Sprain  (D) Abrasion

(iii) Which of the following refers to any collection of blood outside of a vessel?
(A) Incision  (B) Abrasion  (C) Contusion  (D) Laceration

(iv) Fracture of a bone without breaking is called __________.
(A) Oblique fracture  (B) Impacted fracture  (C) Comminuted fracture  (D) Green stick fracture`,
        answer: `(i) Lack of warming-up
(ii) Sprain
(iii) Contusion
(iv) Green stick fracture`,
        source: "CBSE 2025 Compartment Exam",
    },


    // ─────────────────────────────────────────────
    //  2025 COMPARTMENT — SECTION E  (Long Answer, 5 marks, attempt any 3)
    // ─────────────────────────────────────────────
    {
        id: "C_2025_34",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Long",
        marks: 5,
        question: `Vitamins are divided into two different categories. Enlist them and explain any two vitamins with their deficiency diseases.`,
        answer: `Categories of Vitamins:
• Fat Soluble: Vitamin A, Vitamin D, Vitamin E, Vitamin K
• Water Soluble: Vitamin B and Vitamin C

Any two vitamins (function + deficiency):

Vitamin A: Helps in formation of bones and teeth, promotes normal vision. Deficiency: Night blindness, Keratomalacia, Xerophthalmia.

Vitamin D: Helps in absorption of calcium and phosphorus. Deficiency: Rickets, Osteomalacia, Osteoporosis, Tetany, Dental Cavities.

Vitamin E: Keeps skin healthy, maintains normal functioning of reproductive organs. Deficiency: Alzheimer's, Paralysis, Slow Growth.

Vitamin K: Prevention of haemorrhage and excessive bleeding in wounds. Deficiency: Anaemia, Blood Does Not Clot.

Vitamin B1 (Thiamin): Helps in metabolising carbohydrate, maintains health of liver and kidney. Deficiency: Beri-Beri.

Vitamin C: Helps in healing wounds, increases metabolic rate, helpful in absorbing calcium. Deficiency: Scurvy.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_35",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Long",
        marks: 5,
        question: `Define Friction. What are the advantages and disadvantages of friction in the field of games and sports? Explain with suitable examples.`,
        answer: `Friction: A force acting over the area of contact between two surfaces in the direction opposite to that of motion.
OR: A force that acts parallel to two surfaces; a force that resists the movement.

Advantages (any 2):
1. Running and walking are the result of friction between ground and shoes. E.g. athletes use spikes; footballers use studs.
2. The grip in badminton and tennis plays a major role in performing a perfect shot — a good grip provides better friction.
3. Friction between tyres and the surface prevents the cyclist from slipping and skidding.
4. Gymnasts and javelin throwers use magnesium powder to increase friction.

Disadvantages (any 2):
1. If air pressure in cycle tyres is not appropriate, excessive friction causes more energy expenditure.
2. Air resistance slows down the speed of the projectile in flight.
3. During pole-vault, an athlete may lose grip on the pole if there is less friction between palm and pole, causing injury.
4. Friction can cause injuries when a player slides across the ground during play.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_36",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Long",
        marks: 5,
        question: `What is the need for inclusive education in India? What measures can be taken for the effective implementation of inclusive education?`,
        answer: `Need for Inclusive Education (any 2):
1. Builds self-esteem
2. Improves social skills
3. Enhances sensitivity
4. Creates better understanding
5. Creates a sense of belongingness
6. Enhances academic performance

Measures for effective implementation (any 3):
1. Equipping teachers with special education training
2. Developing support by involving stakeholders
3. Curriculum transaction — adapting curriculum to meet diverse needs
4. Designing classrooms to be CWSN-friendly
5. Developing appropriate education goals
6. Right to Education — ensuring legislative support and awareness`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_37",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Long",
        marks: 5,
        question: `What is speed? Explain any two methods of speed development.`,
        answer: `Speed: Capability of the body to perform successive movement at the fastest rate.
OR: Ability to execute motor movements as quickly as possible.

Methods of Speed Development (any 2):

1. Acceleration Runs: Method used to develop speed while attaining maximum speed from a static position. A sports person is required to run a specific distance, gain maximum speed at the earliest, and finish the specified distance at that speed. These runs are repeated with sufficient rest in between. The number of acceleration runs should be set as per age, capacity and fitness of the athlete.

2. Pace Runs: Running a set distance at uniform speed. Usually includes races of 800 m and above. It is important to keep pace in mind when running middle and long distance races. In the beginning of the race, the pace should not be too high and should be maintained throughout. Repetition of pace runs can be done as per level of athlete.`,
        source: "CBSE 2025 Compartment Exam",
    },


    // ═══════════════════════════════════════════════════════════════
    //  CBSE CLASS XII PHYSICAL EDUCATION
    //  SAMPLE QUESTION PAPERS — 2023 | 2024 | 2025 | 2026
    //  All Sections: A (MCQ) · B (2 marks) · C (3 marks) · D (Case Study) · E (5 marks)
    //  ID format: S_YYYY_Q
    // ═══════════════════════════════════════════════════════════════

    // ─────────────────────────────────────────────
    //  SQP 2023 (Session 2022-23) — SECTION A
    // ─────────────────────────────────────────────
    {
        id: "S_2023_1",
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Identify the asana shown in the image.`,
        imageUrl: "/SQP 23 qs 1.png",
        options: ["Paschimottanasana", "Halasana", "Vajrasana", "Dhanurasana"],
        answer: `Dhanurasana`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_2",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `A person who likes to learn new things, new concepts and new experiences are categorized as ____________.`,
        options: ["Agreeableness", "Extroversion", "Conscientiousness", "Openness"],
        answer: `Openness`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_3",
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Cartwheel in gymnastics is an example of _______________.`,
        options: ["Static Equilibrium", "Dynamic Equilibrium", "Active Equilibrium", "Passive Equilibrium"],
        answer: `Dynamic Equilibrium`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_4",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `Slow twitch fibres are ____________ in colour.`,
        options: ["White", "Red", "Transparent", "Brown"],
        answer: `Red`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_5",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `Jumping on the spot is an example of _______________.`,
        options: ["Iso-metric", "Iso-tonic", "Iso-kinetic", "Iso-kinesthetic"],
        answer: `Iso-tonic`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_6",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `Take-off in Long jump is an example of _______________ strength.`,
        options: ["Explosive strength", "Maximum strength", "Strength endurance", "Static strength"],
        answer: `Explosive strength`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_7",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `The amount of oxygen which can be absorbed and consumed by the working muscles from the blood is called __________________.`,
        options: ["Oxygen Uptake", "Oxygen Intake", "Oxygen Transport", "Vital capacity"],
        answer: `Oxygen Uptake`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_8",
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `In Law of Acceleration, acceleration of an object is inversely proportionate to its _________________.`,
        options: ["Force", "Mass", "Speed", "Size"],
        answer: `Mass`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_9",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Given below are the two statements labeled Assertion (A) and Reason (R).

Assertion (A): Intrinsic motivation has long term benefits.
Reason (R): As factors behind it are naturally pursuing actions that provide fun, pleasure, fulfillment or challenge.

In the context of the above two statements, which one of the following is correct?`,
        options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true.",
        ],
        answer: `Both (A) and (R) are true and (R) is the correct explanation of (A).`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_10",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Carbohydrates which are soluble in water and crystalline in structure are known as ___________ carbohydrates.`,
        options: ["Simple", "Complex", "Compound", "Complicated"],
        answer: `Simple`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_11",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Which amongst these is NOT a micro mineral?`,
        options: ["Iodine", "Magnesium", "Iron", "Copper"],
        answer: `Magnesium`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_12",
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Which asana is helpful in increasing height?`,
        options: ["Sukhasana", "Tadasana", "Bhujangasana", "Vajrasana"],
        answer: `Tadasana`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_13",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `How many byes will be given if there are 17 teams?`,
        options: ["1", "8", "15", "12"],
        answer: `15`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_14",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `How many matches will be played in the knockout tournament's first round if there are 15 teams?`,
        options: ["8", "7", "5", "6"],
        answer: `7`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_15",
        year: 2023,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `Watching others play and enjoy which in turn motivates the child with special need to participate is a part of which kind of strategy?`,
        options: ["Mental", "Physical", "Psychological", "Social"],
        answer: `Social`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_16",
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Match the following asanas with the deformities they correct:`,
        matchTable: {
            headers: ["Asana", "Deformity Corrected"],
            rows: [
                { left: "I. Garudasana", right: "1. Round shoulder" },
                { left: "II. Gomukhasana", right: "2. Lordosis" },
                { left: "III. Chakrasana", right: "3. Bow legs" },
                { left: "IV. Naukasana", right: "4. Knock knees" },
            ],
        },
        options: ["I-3, II-4, III-1, IV-2", "I-1, II-3, III-4, IV-2", "I-4, II-2, III-1, IV-3", "I-2, II-3, III-4, IV-1"],
        answer: `I-3, II-4, III-1, IV-2`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_17",
        year: 2023,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `Match the following Rikli & Jones fitness tests with what they measure:`,
        matchTable: {
            headers: ["Test", "Measures"],
            rows: [
                { left: "I. Chair stand test", right: "1. Lower Body strength" },
                { left: "II. Arm curl test", right: "2. Aerobic Endurance" },
                { left: "III. Back scratch test", right: "3. Upper body strength" },
                { left: "IV. Six minute walk test", right: "4. Upper body flexibility" },
            ],
        },
        options: ["I-1, II-3, III-4, IV-2", "I-2, II-3, III-1, IV-4", "I-1, II-3, III-2, IV-4", "I-2, II-3, III-4, IV-1"],
        answer: `I-1, II-3, III-4, IV-2`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_18",
        year: 2023,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Weakening of bones due to loss of bone density and improper bone formation is known as _______.`,
        options: ["Amenorrhea", "Anorexia Nervosa", "Osteoporosis", "Lordosis"],
        answer: `Osteoporosis`,
        source: "CBSE 2022-2023 Sample Paper",
    },

    // SQP 2023 — SECTION B
    {
        id: "S_2023_19",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 2,
        question: `List down any four effects of exercise on the muscular system.`,
        answer: `Effects of exercise on the muscular system (any 4):
1. Increased muscle temperature
2. Increased blood supply to muscles
3. Hypertrophy of muscle (increase in muscle size)
4. Increase in strength of ligaments and tendons
5. Increase in size and number of mitochondria
6. Increased myoglobin storage
7. Increased glycogen storage
8. Increased lactic acid tolerance
9. Better posture
10. Delayed fatigue`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_20",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 2,
        question: `List down any four benefits of self-talk by athletes in sports.`,
        answer: `Benefits of self-talk (any 4):
1. Building and developing self-efficacy
2. Skill acquisition
3. Creating and changing mood
4. Controlling efforts
5. Focusing attention
6. Improving overall performance
7. Maintains a positive mindset
8. Better handling of mistakes`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_21",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 2,
        question: `List down any four advantages of fartlek training method.`,
        answer: `Advantages of Fartlek Training (any 4):
1. Improves both aerobic and anaerobic fitness simultaneously
2. Flexible and enjoyable — no set rules or structure
3. Can be adapted to any fitness level
4. Improves speed, endurance and strength together
5. Training can be done on varied terrain
6. Helps develop mental toughness
7. Less monotonous than continuous training
8. Can be done without any specialist equipment`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_22",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 2,
        question: `Explain any two types of soft tissue injuries with help of examples.`,
        answer: `Types of soft tissue injuries (any 2):

1. Sprain: Stretching or tearing of ligaments. E.g. ankle sprain in basketball when a player lands on a twisted foot.

2. Strain: Injury to a muscle or tendon due to overuse or excessive force. E.g. hamstring strain in a sprinter.

3. Contusion (Bruise): Collection of blood outside a vessel caused by a blunt force. E.g. a bruise on the thigh in football.

4. Abrasion: Grinding or rubbing away of the skin surface. E.g. road rash in cycling.

5. Laceration: Irregular tear-like wound caused by blunt trauma. E.g. a cut on the forehead from a cricket ball.`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_23",
        year: 2023,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Short",
        marks: 2,
        question: `Write down the objectives and administration of the Flamingo Balance Test.`,
        answer: `Objective: To assess the ability to balance on a single leg. Measures static balance and strength of leg, pelvic and trunk muscles. (For age group 5–8 yrs, classes 1–3.)

Administration/Procedure:
Stand on the beam. Hold the instructor's hand if required for initial balance. While balancing on the preferred leg, bend the free leg at the knee and hold the foot close to the buttocks. Start the stopwatch as the instructor lets go. Pause the stopwatch each time the subject loses balance. Count the number of falls in 60 seconds of balancing. If there are more than 15 falls in the first 30 seconds, the test is terminated.`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_24",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 2,
        question: `What should be the basic nutrient in a weightlifter's diet and why?`,
        answer: `The basic nutrient in a weightlifter's diet should be Protein.

Reason: Protein is the building block of muscle tissue. Weightlifters need high protein intake to:
• Repair micro-tears in muscles caused during heavy lifting
• Promote muscle hypertrophy (growth)
• Maintain muscle mass during intense training
• Support recovery after training sessions
Good sources include eggs, milk, lean meat, pulses and nuts.`,
        source: "CBSE 2022-2023 Sample Paper",
    },

    // SQP 2023 — SECTION C
    {
        id: "S_2023_25",
        year: 2023,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 3,
        question: `Create a mind map including any six advantages of physical activities for children with special needs.`,
        answer: `Advantages of physical activities for CWSN (any 6):
1. Physical improvement — improves gross and fine motor skills, strength and endurance
2. Mental improvement — enhances cognitive function and academic performance
3. Increases self-esteem — builds confidence and sense of achievement
4. Reduces stress, anxiety and depression — improves psychological wellbeing
5. Reduces risk of health complications — manages weight, improves cardiovascular health
6. Improved social interaction — builds communication and teamwork skills
7. Improved emotional health — emotional regulation and mood stability
8. Mode of recreation and fun — enjoyment and leisure
9. Channelising surplus energy — constructive outlet
10. Develops independence — improves ability to perform daily tasks`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_26",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 3,
        question: `What are carbohydrates? Differentiate between its types.`,
        answer: `Carbohydrates are organic compounds made up of Carbon, Hydrogen and Oxygen. They are a major source of energy.

Types of Carbohydrates:

1. Simple Carbohydrates (Monosaccharides and Disaccharides):
• Soluble in water and crystalline in structure.
• Found in fruits (sucrose, glucose, fructose), milk (lactose) and commercially produced sweets.
• Provide quick energy.

2. Complex Carbohydrates (Polysaccharides):
• More than two units of monosaccharides joined together; include starches and fibre.
• Found in whole grain cereals, rice, oats, potatoes, bread, legumes, corn and flour.
• Provide sustained energy and aid digestion.`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_27",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Short",
        marks: 3,
        question: `Define bye. Explain the rules of giving bye with help of an example.`,
        answer: `Bye: The position of a participant in a tournament who is not paired with an opponent (usually in the first round) and advances to the next round without playing.

Rules for allotment of byes in a knockout fixture:
1. First bye — given to the last team of the Lower Half.
2. Second bye — given to the first team of the Upper Half.
3. Third bye — given to the first team of the Lower Half.
4. Fourth bye — given to the last team of the Upper Half.
The same pattern is followed for any remaining byes.

Example: If 19 teams participate, byes = 32 – 19 = 13. These 13 byes are distributed in the above order among the teams.`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_28",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 3,
        question: `Make a table explaining any three personalities from Big Five Theory and their characteristics.`,
        answer: `Big Five Theory personalities (any 3):

1. Openness — Imaginative, creative, intellectual, curious, open to learning new things, independent, insightful.

2. Conscientiousness — Self-disciplined, goal-driven, thoughtful, hardworking, organised, responsible, competent.

3. Extraversion — Energetic, talkative, interactive, affectionate, social, outgoing, enthusiastic.

4. Agreeableness — Friendly, co-operative, kind, gentle, generous, sympathetic, trustworthy, helpful.

5. Neuroticism — Insecure, nervous, anxious, experiences unpleasant emotions, impulsive, hostile, emotionally unstable.`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_29",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 3,
        question: `Explain any three physiological factors determining strength.`,
        answer: `Physiological factors determining strength (any 3):

1. Muscle Composition (Fast Twitch Fibres): In strength-related sports, a higher percentage of fast-twitch fibres is required as they produce more force quickly.

2. Hypertrophy of Muscle: Increase in muscle size leads to greater force production. Resistance training causes micro-tears which repair and grow thicker.

3. Increase in Strength of Ligaments and Tendons: Stronger connective tissue allows muscles to exert more force without injury.

4. ATP-CP System: Energy stored as phosphocreatine in muscles determines peak power output in short, explosive activities.

5. Stroke Volume: The volume of blood pumped out per cardiac contraction determines oxygen delivery to muscles, supporting sustained strength effort.`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_30",
        year: 2023,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 3,
        question: `What is the meaning of Female Athlete Triad? Explain any two in brief.`,
        answer: `Female Athlete Triad: A syndrome of three interrelated medical conditions commonly seen in female athletes — disordered eating, menstrual dysfunction (amenorrhea) and loss of bone density (osteoporosis).

1. Disordered Eating:
• Anorexia Nervosa — person severely restricts food intake.
• Bulimia Nervosa — person binges on large amounts of food and then purges.
• Results in low energy availability, affecting performance and recovery.

2. Amenorrhea (Menstrual Dysfunction):
• Primary amenorrhea — first menstrual period does not begin by age 15.
• Secondary amenorrhea — normal menstrual bleeding stops for 3 or more months.
• Caused by low energy availability and intense training.

3. Osteoporosis:
• Loss of bone mineral density leading to weak, fragile bones.
• Increased risk of stress fractures, especially in the hip, spine and wrist.`,
        source: "CBSE 2022-2023 Sample Paper",
    },

    // SQP 2023 — SECTION D
    {
        id: "S_2023_31",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Case Study",
        marks: 4,
        question: `Based on the knockout tournament fixture shown, answer the following:

(a) Total number of matches in the 2nd round are __________.
(b) What is the formula for calculating the total number of matches?
(c) The fourth round in this case can also be called as _______________.
(d) What is the formula for calculating the number of byes?
OR: The formula for calculating number of rounds is __________.`,
        imageUrl: "/SQP 23 qs 31.png",
        answer: `(a) 8
(b) N – 1
(c) Semi-final
(d) 2ⁿ – N (where n is the next higher power of 2)
OR: Number of rounds = log₂N

(For Visually Impaired — four committees and their roles):
• Technical Committee — prepares fixtures, selects officials, enforces rules.
• Marketing Committee — arranges sponsorships and handles publicity.
• First Aid Committee — provides medical assistance during the event.
• Ground and Equipment Committee — prepares playing areas and arranges equipment.`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_32",
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Case Study",
        marks: 4,
        imageUrl: "/SQP 23 qs 32.png",
        question: `The teachers as well as coaches always make their best efforts to improve the performance of their students in various competitive games and sports.

Based on the pictures showing Newton's laws, answer the following:

(a) The more force one exerts on the downward bounce, the higher the ball bounces into the air. Which law is this statement being referred to?
(b) Among the above given pictures, Newton's 3rd law is depicted in __________.
(c) Newton's second law is also known as ___________________.
(d) The study of human body and various forces acting on it is _________.
OR: A high jumper can jump higher off a solid surface because it opposes his/her body with as much force as he/she is able to generate. This refers to which law of motion?`,
        answer: `(a) Third Law of Motion — Law of Action and Reaction
(b) 1st picture
(c) Law of Acceleration
(d) Kinesiology
OR: Newton's Third Law of Motion — Law of Action and Reaction

(For Visually Impaired — Equilibrium):
Types: Static Equilibrium (body at rest, e.g. handstand) and Dynamic Equilibrium (body moves at constant velocity, e.g. cyclist maintaining balance).
Factors increasing equilibrium: Broader base of support; lower centre of gravity; greater body weight; nearer centre of gravity to centre of base of support; direction of acting force.`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_33",
        year: 2023,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Case Study",
        marks: 4,
        imageUrl: "/SQP 23 qs 33.png",
        question: `In relation to the pictures of Special Olympics and Deaflympics logos, answer the following:

(a) What is the mission of the first organization (Special Olympics)?
(b) What is the motto of the first organization (Special Olympics)?
(c) Until 1965 the games in the second picture (Deaflympics) were known as _______.
(d) Second picture games (Deaflympics) are conducted after every __________ years.`,
        answer: `(a) The mission of Special Olympics is to provide year-round sports training and athletic competition in a variety of Olympic-type sports for children and adults with intellectual disabilities, giving them continuing opportunities to develop physical fitness, demonstrate courage, experience joy and participate in sharing gifts, skills and friendship with their families, other Special Olympics athletes and the community.
(b) "Let me win. But if I cannot win, let me be brave in the attempt."
(c) International Games for the Deaf / International Silent Games
(d) 4 years`,
        source: "CBSE 2022-2023 Sample Paper",
    },

    // SQP 2023 — SECTION E
    {
        id: "S_2023_34",
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Long",
        marks: 5,
        question: `List down any four asanas used for prevention of asthma. Explain the procedure for administration of any one of them with help of a stick diagram.`,
        answer: `Asanas for Asthma (any 4): Sukhasana, Chakrasana, Gomukhasana, Parvatasana, Bhujangasana, Paschimottanasana, Matsyasana, Anulom-Vilom

Procedure of Gomukhasana:
1. Sit in Dandasana (legs stretched out straight).
2. Bend the left leg and place the left foot under the right buttock.
3. Bend the right leg over the left and place the right foot beside the left hip.
4. Raise the right arm, bend it at the elbow and place the right hand on the back.
5. Bring the left arm around the back from below and try to clasp both hands.
6. Keep the back straight and breathe normally. Hold for 30–60 seconds.
7. Release and repeat on the other side.`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_35",
        year: 2023,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Long",
        marks: 5,
        question: `Make a table of test items listed under the fitness test by SAI (Age group 9–18 yrs) along with the objectives of conducting them. Explain the administration of any one of them.`,
        answer: `SAI Khelo India Fitness Test — Age Group 9–18 yrs (Class 4–12):
1. Body Composition (BMI) — measures weight-to-height ratio
2. Strength: (a) Abdominal Partial Curl-up — measures abdominal/core strength; (b) Push-ups (Boys) / Modified Push-ups (Girls) — measures upper body muscular endurance
3. Flexibility: Sit and Reach Test — measures lower back and hamstring flexibility
4. Cardiovascular Endurance: 600 Metre Run/Walk — measures aerobic capacity
5. Speed: 50 mt. Dash — measures running speed

Procedure of 50 MTR DASH (Standing Start):
Give a thorough warm-up including practice starts and accelerations. Start from a stationary position with one foot in front of the other; front foot on or behind the starting line (static/dead start). On the signal "Go", run as fast as possible through the finish line.
Scoring: Time taken for completion (in seconds).`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_36",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Long",
        marks: 5,
        question: `Define flexibility along with its types. Explain any two methods used to develop flexibility.`,
        answer: `Flexibility: The range of motion around a joint or series of joints; the ability to do movements with greater amplitude.

Types:
1. Active Flexibility — performing a movement with greater amplitude without external help.
2. Passive Flexibility — doing movements with greater amplitude with external help.

Methods to develop flexibility (any 2):
1. Slow Stretching — gently stretch the muscle to the farthest point and hold for 15–30 seconds.
2. Slow Stretch and Hold (Static Stretching) — hold the stretched position for 20–30 seconds; gradually increases range of motion.
3. Ballistic Method — performing movements with swing and rhythm (bouncing stretches); used by experienced athletes.
4. PNF (Proprioceptive Neuromuscular Facilitation) — contract the muscle, then relax and stretch further with partner assistance; most effective method.`,
        source: "CBSE 2022-2023 Sample Paper",
    },
    {
        id: "S_2023_37",
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Long",
        marks: 5,
        question: `Define Projectile and explain any two factors affecting projectile with help of examples from sports.`,
        answer: `Projectile: Any object thrown, hurled, fired, pitched, tossed or flung in the air, acted upon by gravity and possible drag after initial release.

Factors affecting projectile (any 2 with examples):

1. Angle of Projection: Determines the range of the projectile. At 45° maximum horizontal distance is achieved.
E.g. A shot putter releases the shot at approximately 40–42° for maximum distance. A long jumper takes off at approximately 20–22°.

2. Initial Velocity: The greater the initial velocity at release, the greater the horizontal distance.
E.g. A fast bowler delivers the ball at higher velocity, causing it to travel farther compared to a slow bowler.

3. Gravity: Acts on all projectiles pulling them downward, reducing height.
E.g. A basketball thrown at an arc reaches a peak height and then falls due to gravity.

4. Air Resistance: Surface area, speed, texture and mass all affect air resistance.
E.g. A discus is designed with a flat shape to reduce air resistance and maximise flight distance.

5. Spin: Amount and direction of spin affect the distance and path.
E.g. A spinning tennis ball curves mid-air (topspin or backspin) due to the Magnus effect.`,
        source: "CBSE 2022-2023 Sample Paper",
    },


    // ═══════════════════════════════════════════════════════════════
    //  SQP 2024 (Session 2023-24) — SECTION A
    // ═══════════════════════════════════════════════════════════════
    {
        id: "S_2024_1",
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Identify the asana shown in the image.`,
        imageUrl: "/SQP 24 qs 1.png",
        options: ["Pawanmuktasana", "Sukhasana", "Chakrasan", "Gomukhasana"],
        answer: `Pawanmuktasana`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_2",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Reactive Aggression is also called __________.`,
        options: ["Instrumental Aggression", "Hostile Aggression", "Assertive Aggression", "Both (a) and (b)"],
        answer: `Hostile Aggression`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_3",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `The friction force acts in a/an __________ direction to the direction of motion of an object.`,
        options: ["Opposite", "Same", "Downwards", "Diagonal"],
        answer: `Opposite`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_4",
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `The irregular tear-like wounds caused by some blunt trauma are called __________.`,
        options: ["Laceration", "Contusion", "Abrasion", "Incision"],
        answer: `Laceration`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_5",
        year: 2024,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `Given below are two statements labelled as Assertion (A) and Reason (R).

Assertion (A): For improvement of performance in long distance running, continuous training is effective.
Reason (R): Continuous method of training improves basic endurance.

Which one of the following statements is correct?`,
        options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true.",
        ],
        answer: `Both (A) and (R) are true and (R) is the correct explanation of (A).`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_6",
        year: 2024,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `What do you mean by iso and metric?`,
        options: [
            "Iso means constant and metric means length",
            "Iso means change and metric means size",
            "Iso means constant and metric means velocity",
            "Iso means size and metric means constant",
        ],
        answer: `Iso means constant and metric means length`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_7",
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `It is the amount of blood pumped out by each side of the heart (actually each ventricle) in 1 minute __________.`,
        options: ["Blood pressure", "Cardiac Output", "Blood volume", "Both (a) and (b)"],
        answer: `Cardiac Output`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_8",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Identify the Newton's law depicted: "With no outside forces, a stationary object will not move. With no outside forces, a moving object will not stop."`,
        imageUrl: "/SQP 24 qs 8.png",
        options: ["First Law of Motion", "Second Law of Motion", "Third Law of Motion", "Law of Effects"],
        answer: `First Law of Motion`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_9",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Match List I (Big Five personality traits) with List II (characteristics):`,
        matchTable: {
            headers: ["Trait", "Characteristic"],
            rows: [
                { left: "1. Extraversion", right: "i. Enthusiasm" },
                { left: "2. Conscientiousness", right: "ii. Responsible" },
                { left: "3. Agreeableness", right: "iii. Compassionate behavior" },
                { left: "4. Neuroticism", right: "iv. Emotional Stability" },
            ],
        },
        options: [
            "1-i, 2-ii, 3-iii, 4-iv",
            "1-iv, 2-iii, 3-ii, 4-i",
            "1-iii, 2-iv, 3-ii, 4-i",
            "1-ii, 2-iii, 3-iv, 4-i",
        ],
        answer: `1-i, 2-ii, 3-iii, 4-iv`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_10",
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Given below are two statements labelled as Assertion (A) and Reason (R).

Assertion (A): Scurvy is caused due to the deficiency of Vitamin C.
Reason (R): The disease sets in when the diet does not include fresh vegetables and fruits for a long time.

Which one of the following statements is correct?`,
        options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true but (R) is not the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true.",
        ],
        answer: `Both (A) and (R) are true but (R) is not the correct explanation of (A).`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_11",
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `One gram of carbohydrate contains ________ Calories.`,
        options: ["2", "3", "4", "5"],
        answer: `4`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_12",
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Which gland is associated with Diabetes?`,
        options: ["Endocrine glands", "Pituitary", "Pancreas", "Hypothalmus"],
        answer: `Pancreas`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_13",
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `What is the formula to determine number of matches in a League fixture for even number of teams?`,
        options: ["N+1/2", "N-1/2", "N(N-1)/2", "N(N+1)/2"],
        answer: `N(N-1)/2`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_14",
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following tournament helps save money?`,
        options: ["Knockout tournament", "League tournament", "Combination tournament", "Round Robin tournament"],
        answer: `Knockout tournament`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_15",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `Which of these is NOT one of the results of physical activities in children with special needs?`,
        options: [
            "Improvement in confidence",
            "Improvement in endurance",
            "Increase in depression",
            "Better hand-eye coordination",
        ],
        answer: `Increase in depression`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_16",
        year: 2024,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `If the menstruation cycle does not begin at puberty, the condition is called __________.`,
        options: ["Primary Amenorrhea", "Secondary amenorrhea", "Oligomenorrhea", "Dysmenorrhea"],
        answer: `Primary Amenorrhea`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_17",
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `Senior Citizen Fitness Test — the range of age group is __________.`,
        options: ["60-94", "55-79", "65-95", "50-90"],
        answer: `60-94`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_18",
        year: 2024,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Kyphosis is also known as __________.`,
        options: ["Hallow Back", "Hunch Back", "Curve Back", "Both (a) and (c)"],
        answer: `Hunch Back`,
        source: "CBSE 2023-2024 Sample Paper",
    },

    // SQP 2024 — SECTION B
    {
        id: "S_2024_19",
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 2,
        question: `Point out physiological factors for strength.`,
        answer: `Physiological factors for strength (any 4):
• Hypertrophy of Muscle — increase in muscle size
• Increase in Strength of Ligaments and Tendons
• Increase in Size and Number of Mitochondria
• Increased blood supply to muscles
• Different sports require different ratios of slow and fast twitch fibres; in strength sports, a higher percentage of fast-twitch fibres is required
• ATP-CP energy system supports explosive strength`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_20",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 2,
        question: `Write a short note on Goal Setting.`,
        answer: `Goal setting is a mental training technique used to increase an individual's commitment towards achieving a specific standard of proficiency on a task within a specified time. It is a process of establishing a level of performance which should be reached within a prescribed time period.

It has proven effectiveness in enhancing performance and productivity in competitive sport, employee exercise programs and industrial organisations. It provides a basis for both increasing a person's self-efficacy and for instilling a task with intrinsic worth.`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_21",
        year: 2024,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 2,
        question: `Explain Isokinetic exercise with suitable examples.`,
        answer: `Isokinetic exercise was introduced by J.J. Perrine in 1968. It involves isokinetic contraction where muscles apply maximal force throughout the range of motion around the joint at a constant speed. These exercises are performed on specially designed instruments. Unlike isotonic contraction (where pressure is applied at a particular angle), isokinetic contraction is maximal throughout the full range.

Examples: Rowing machine, swimming, exercise on isokinetic dynamometer.`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_22",
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 2,
        question: `Write key points on cardio-respiratory factors determining fitness.`,
        answer: `Cardiovascular System: Heart, blood vessels and blood. Major function — deliver oxygen and nutrients, remove CO₂ and metabolic waste, transport hormones, support thermoregulation and immune function.

Respiratory System: Nose, nasal cavity, pharynx, larynx, trachea, bronchi and lungs. Major functions — transport air to the lungs, exchange gases (O₂ and CO₂) between air and blood, regulate blood pH.`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_23",
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Short",
        marks: 2,
        question: `Explain the procedure and scoring of 600-meter run/walk.`,
        answer: `Procedure: Participants are instructed to run 600 mts. at the fastest possible pace. Begin on signal "ready, start". As they cross the finish line, the elapsed time is announced. Walking is permitted but the objective is to cover the distance in the shortest possible time.

Scoring: Time taken for completion (run or walk) in min and sec.`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_24",
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 2,
        question: `Explain the importance of fluid intake during a competition.`,
        answer: `The main aim during exercise and training should be to maintain water balance, control body temperature, sustain normal blood sugar levels and delay fatigue. Water lost through sweating during exercise needs to be replaced to maintain fluid balance and normal body temperature. Adequate fluid intake also prevents dehydration, maintains electrolyte balance (sodium, potassium, chloride), and helps sustain performance levels throughout the competition.`,
        source: "CBSE 2023-2024 Sample Paper",
    },

    // SQP 2024 — SECTION C
    {
        id: "S_2024_25",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 3,
        question: `Explain any three strategies to make physical activities accessible for CWSN.`,
        answer: `Strategies (any 3):

1. Communication — Advance information about activity, space and resources communicated clearly using verbal, visual and peer teaching strategies.

2. Space — Should be approachable for people with physical disability; limited area; disturbance-free (noise, heat, cold, texture of floor, audience). Always better to start with indoor space.

3. Equipment — Appropriate modified equipment should be provided; lack of equipment discourages participation.

4. Simple to Complex — Activities progress from easy to difficult.

5. Medical Check-up — Assessment of physical and mental ability before participation.`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_26",
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 3,
        question: `What are the benefits of Non-Nutritive foods?`,
        answer: `Non-Nutritive food components and their benefits (any 3):
1. Phytochemicals — help plants thrive and thwart competitors, predators or pathogens; have antioxidant properties.
2. Anthocyanins — give dark colour to grapes, blueberries, cranberries and raspberries; powerful antioxidants.
3. Flavonoids/Isoflavones — found in vegetables, fruits and grains like soybeans; may have oestrogen-like effects.
4. Artificial Sweeteners — provide sweet taste with less energy; useful in diet foods.
5. Preservatives — inhibit microbial growth; prolong shelf life of food and beverages.
6. Spices — provide flavouring, colouring or preservation.
7. Dietary Fibre — aids digestion and prevents constipation.`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_27",
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Short",
        marks: 3,
        question: `What should be the role of Technical and Marketing Committee while organizing the event?`,
        answer: `Technical Committee:
Covers technical aspects — procuring sports equipment, conducting matches through selected officials (referees, umpires, judges, timekeepers).
• Pre-event: Purchase of equipment, confirmation from officials, layout of fields, preparation of fixtures and rules.
• During event: Conducting matches, ensuring presence of jury, collecting score sheets.
• Post-event: Cleaning and layout, maintenance, returning equipment to store.

Marketing Committee:
Develops plans to generate publicity and sponsorships.
• Pre-event: Arranging sponsorships, publicity of the event, preparing MoUs.
• During event: Issues press releases, works with media, fulfils requirements of sponsors.
• Post-event: Issues press release, may arrange re-telecast.`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_28",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 3,
        question: `Differentiate between Introvert and Extrovert personality.`,
        answer: `Introvert:
• Interested in their own self; reserved
• Self-aware and introspective
• Takes pleasure in reading, writing
• Tends to shy away from public
• Thinks before acting

Extrovert:
• Highly socialised; broad-minded
• Expressive and enjoys being the centre of attention
• Meets unknown people easily
• Action oriented
• Comfortable in social situations`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_29",
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 3,
        question: `Define fracture and explain any four types of fracture.`,
        answer: `Fracture: A break in a bone caused by a direct impact such as a fall or a severe tackle.

Types of fractures (any 4):
1. Stress Fracture — hairline crack due to repetitive stress or overuse. E.g. shin splints in runners.
2. Greenstick Fracture — bone bends and partially breaks. Common in children.
3. Comminuted Fracture — bone broken into many pieces at one place or different places.
4. Transverse Fracture — breaks in a straight line at a right angle to the bone shaft; caused by a direct blow.
5. Oblique Fracture — bone breaks diagonally at an angle.
6. Impacted Fracture — broken ends of bone are jammed together by the force of injury.`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_30",
        year: 2024,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 3,
        question: `Write in brief the corrective measures of Bow Leg, Knock Knee and Flat Foot.`,
        answer: `Bow Legs: Use of braces and modified shoes; sufficient intake of balanced diet; walking on the inner edge of the feet may also help.

Flat Foot: Exercises — walking, standing or jumping on toes and heels in all directions, skipping rope, picking up marbles with toes, writing numbers in sand with toes. Yoga asanas like Adhomukhasana (Surya Namaskar) and Vajrasana are helpful.

Knock Knees (Genu Valgum): Exercises like horse-riding and keeping a pillow between the knees while standing erect. Padmasana and Gomukhasana help realign and stabilise the knees. Leg raises while seated or lying down. Using walking callipers at the pre-puberty stage is also helpful.`,
        source: "CBSE 2023-2024 Sample Paper",
    },

    // SQP 2024 — SECTION D
    {
        id: "S_2024_31",
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Case Study",
        marks: 4,
        question: `While organising sports events for the Annual Sports Day, Arjun and Ravi formed various committees as shown in the organogram.

Based on the picture, answer the following:
(a) The members of this __________ committee are responsible for welcoming guests and spectators.
(b) The __________ Committee is responsible for liaison with Print media.
(c) Purchase of sports equipment is the work of the __________ Committee.
(d) Publication of rules and regulations should be done __________.
OR (d): To prepare a proper score sheet for record is __________ responsibility.`,
        imageUrl: "/PE_SQP_2024_qs_31.png",
        answer: `(a) Reception Committee
(b) Marketing / Publicity Committee
(c) Grounds and Equipment Committee
(d) By the Technical Committee / Committee for entries, fixtures and programmes
OR (d): Technical Committee's responsibility

(For Blind Students — objectives of Extramural tournaments, any 4):
1. To achieve high performance at the highest level of the tournament.
2. To develop the feeling of integration with other institutions.
3. To provide opportunities for choosing a career in sports.
4. To promote social, cultural, economic development through sports.`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_32",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Case Study",
        marks: 4,
        question: `During her gymnastics practice, Zoya was finding it difficult to maintain her balance on the balancing beam. Her coach tried to explain the basic principles of equilibrium.

According to the principles of equilibrium, Centre of Gravity plays a very important role:
(a) The nearer the Center of Gravity to the Center of the base of support, the more will be the __________.
(b) The position of the centre of gravity changes depending upon the __________.
(c) The sum of all the vertical and horizontal forces acting on the body must be __________.
(d) Centre of gravity is the average location of an object's __________.
OR (d): When the sum of forces acting upon the object and sum of the movement acting upon the body is both equal to zero, then the body is said to be in __________.`,
        imageUrl: "/SQP 24 qs 32.png",
        answer: `(a) Stability
(b) Position of the intersection of forces / body position
(c) Zero
(d) Weight / mass distribution
OR (d): Equilibrium

(For Blind Students — Guiding Principles to Determine Degree of Stability, any 4):
1. Broader the base, the greater the stability.
2. Body weight is directly proportional to stability.
3. Lower the Centre of Gravity, higher the stability.
4. The nearer the centre of gravity to the centre of the base of support, the more will be the stability.
5. Direction of acting force.`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_33",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Case Study",
        marks: 4,
        question: `School management needs to recognize the essential place of physical activity in the education of children with special needs. In order to develop lifelong habits for fitness and provide them with many opportunities of socialization.

Based on the picture, answer the following:
(a) Development of Gross Motor and Fine Motor skills are benefits which are part of __________.
(b) Graded activities as strategy for effective inclusive physical education program includes __________.
(c) __________ for activities should be disturbance free (noise, heat, cold, texture of floor, audience etc.)
(d) The activities that include running, jumping, hopping, galloping, rolling, leaping and dodging, horizontal jump, slide are __________.`,
        imageUrl: "/PE_SQP_2024_qs_33.png",
        answer: `(a) Physical Benefits
(b) Simple to Complex
(c) Space
(d) Locomotor Activity

(For Blind Students — needs for Inclusive Education, any 4):
1. Builds Self-Esteem
2. Improves Social and Communication Skills
3. Enhances Sensitivity
4. Creates Better Understanding and Appreciation of others
5. Creates a Sense of Belonging
6. Enhances Academic Performance
7. Improves Performance`,
        source: "CBSE 2023-2024 Sample Paper",
    },

    // SQP 2024 — SECTION E
    {
        id: "S_2024_34",
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Long",
        marks: 5,
        question: `Discuss the asanas helpful for a person suffering from Hypertension. Write down the procedure and contraindications of Sarala Matsyasana in detail.`,
        answer: `Asanas for Hypertension (any 4):
Tadasana, Katichakrasana, Uttanpadasana, Ardha Halasana, Sarala Matsyasana, Gomukhasana, Uttan Mandukasana, Vakrasana, Bhujangasana, Makarasana, Shavasana, Nadi-Shodhanapranayam, Sitlipranayam

Procedure of Sarala Matsyasana (Fish Pose):
1. Lie flat on your back with legs extended and hands beside the thighs.
2. Place the hands underneath the hips with palms facing down.
3. Lift the chest upward while arching the back and tilt the head backward so that the crown touches the floor.
4. Inhale as you lift the chest and tuck the head.
5. Breathe normally and hold the posture deeply and slowly.
6. Exhale while relaxing the body and return to the initial position.
7. Get back to normal breathing.

Contraindications:
• People with cervical spondylitis and frozen shoulder should avoid this asana.
• Not suitable for individuals with high blood pressure or migraines.
• Should be performed under guidance if suffering from spinal disorder.`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_35",
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Long",
        marks: 5,
        question: `Make a table of test items listed under fitness test by SAI (Age group 9–18 yrs). Explain the procedure and scoring of 50 MTS Run and Partial Curl Up.`,
        answer: `SAI Khelo India Fitness Test — Age Group 9–18 yrs (Class 4–12):
1. Body Composition (BMI)
2. Strength: (a) Abdominal Partial Curl-up; (b) Push-ups (Boys) / Modified Push-ups (Girls)
3. Flexibility: Sit and Reach Test
4. Cardiovascular Endurance: 600 Metre Run/Walk
5. Speed: 50 mt. Dash

50 MTR DASH (Standing Start):
Procedure: Give a thorough warm-up including practice starts and accelerations. Start from a stationary position with one foot in front of the other; front foot on or behind the starting line (static/dead start). On signal, run as fast as possible through the finish line. Tester provides hints for maximising speed (keep low, drive hard with arms and legs).
Scoring: Time taken for completion.

ABDOMINAL PARTIAL CURL-UP:
Procedure: Subject lies on a cushioned, flat, clean surface with knees flexed (usually at 90°), hands straight on the sides (palms facing downwards) closer to the ground, parallel to the body. Subject raises the trunk in a smooth motion, curling up at least 6 inches above/along the ground towards the parallel strip. Trunk is lowered back so that shoulder blades or upper back touch the floor.
Scoring: Record the maximum number of curl-ups in 30 seconds.`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_36",
        year: 2024,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Long",
        marks: 5,
        question: `Define Flexibility. Explain its types and any two methods to develop flexibility.`,
        answer: `Flexibility: The range of motion around a joint or series of joints; the ability to do movements with greater amplitude.

Types:
1. Active Flexibility — performing a movement with greater amplitude without external help.
2. Passive Flexibility — doing movements with greater amplitude with external help.

Methods to develop flexibility (any 2):
1. Slow Stretching — gently stretch the muscle to the farthest point and hold.
2. Slow Stretch and Hold (Static Stretching) — hold the stretched position for 20–30 seconds.
3. Ballistic Method — performing movements with swing and rhythm (bouncing stretches); for experienced athletes.
4. PNF (Proprioceptive Neuromuscular Facilitation) — contract the muscle, then relax and stretch further with partner assistance; most effective method.`,
        source: "CBSE 2023-2024 Sample Paper",
    },
    {
        id: "S_2024_37",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Long",
        marks: 5,
        question: `With the help of suitable examples, discuss the application of Newton's Laws of Motion in sports.`,
        answer: `Newton's First Law (Law of Inertia):
A body will remain at rest or move at constant velocity unless acted upon by an external force.
• A skater gliding on ice continues gliding with the same speed unless an external force acts.
• A ball thrown in mid-air continues until acted upon by gravity.

Newton's Second Law (Law of Momentum/Acceleration):
Rate of change of momentum is proportional to the resultant force. F = ma.
• In Shot-put, more force and correct angle produces greater displacement.
• In soccer, more force is needed to kick the ball faster and higher.

Newton's Third Law (Law of Reaction):
For every action, there is an equal and opposite reaction.
• A diver pushes down on the springboard (action); the springboard pushes back (reaction), projecting the diver into the air.
• A swimmer pushes water backward (action); water pushes the swimmer forward (reaction).`,
        source: "CBSE 2023-2024 Sample Paper",
    },

    // ═══════════════════════════════════════════════════════════════
    //  SQP 2025 (Session 2024-25) — ALL SECTIONS
    // ═══════════════════════════════════════════════════════════════
    {
        id: "S_2025_1",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `How many total matches will be played in a knock out fixture of 19 teams?`,
        options: ["18", "17", "20", "16"],
        answer: `18`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_2",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Assertion (A): The knock out tournament is an elimination tournament. Reason (R): In knock out tournament, winner of each match advances and the loser gets eliminated. Which is correct?`,
        options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true.",
        ],
        answer: `Both (A) and (R) are true and (R) is the correct explanation of (A).`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_3",
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Match the following postural deformities with their descriptions:`,
        matchTable: {
            headers: ["Deformity", "Description"],
            rows: [
                { left: "I. Knock Knee", right: "1. Increase exaggeration of backward curve" },
                { left: "II. Kyphosis", right: "2. Wide gap between the knees when standing with feet together" },
                { left: "III. Lordosis", right: "3. Knees touch each other in normal standing position" },
                { left: "IV. Bow legs", right: "4. Inward curvature of the spine" },
            ],
        },
        options: ["I-3, II-1, III-4, IV-2", "I-1, II-3, III-4, IV-2", "I-4, II-2, III-1, IV-3", "I-2, II-3, III-4, IV-1"],
        answer: `I-3, II-1, III-4, IV-2`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_4",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `For developing muscles, which nutrient should be increased in diet?`,
        options: ["Vitamins", "Protein", "Minerals", "Carbohydrates"],
        answer: `Protein`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_5",
        year: 2025,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Identify the asana shown in the image.`,
        imageUrl: "/SQP 25 qs 5.png",
        options: ["Paschimottanasana", "Halasana", "Vajrasana", "Dhanurasana"],
        answer: `Halasana`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_6",
        year: 2025,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Which asana is pose like cobra?`,
        options: ["Bhujangasana", "Dhanurasana", "Vajrasana", "Ardhmatsyendrasana"],
        answer: `Bhujangasana`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_7",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `Deaflympics Games was first organized in the year _________.`,
        options: ["1896", "1960", "1924", "1951"],
        answer: `1924`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_8",
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Menarche is defined as the:`,
        options: ["Ending of menstrual period of women", "Beginning of menstrual period in women", "Time of pregnancy", "Missing of menstrual cycle"],
        answer: `Beginning of menstrual period in women`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_9",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Which of the following are fat soluble vitamins?`,
        options: ["Vitamin D & K", "Vitamin B & C", "Vitamin A & E", "Both option A & C (Vitamins A, D, E & K)"],
        answer: `Both option A & C (Vitamins A, D, E & K)`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_10",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `Match the following SAI Khelo India fitness tests:`,
        matchTable: {
            headers: ["Test", "Measures"],
            rows: [
                { left: "I. Plate Tapping Test", right: "1. Upper body strength boys" },
                { left: "II. Push up", right: "2. Reaction time" },
                { left: "III. Partial Curl up", right: "3. Upper body strength girls" },
                { left: "IV. Modified push up", right: "4. Abdominal strength" },
            ],
        },
        options: ["I-2, II-1, III-4, IV-3", "I-2, II-3, III-1, IV-4", "I-1, II-3, III-2, IV-4", "I-2, II-3, III-4, IV-1"],
        answer: `I-2, II-1, III-4, IV-3`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_11",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is a physiological factor determining flexibility?`,
        options: ["Bone density", "Joint structure", "Cardiac output", "Tidal Volume"],
        answer: `Joint structure`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_12",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `The ability to tolerate higher concentration of ________ can help in improving endurance performance.`,
        options: ["Lactic acid", "Hydrochloric acid", "Acetic acid", "Sulphuric acid"],
        answer: `Lactic acid`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_13",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `If a ball is hit and it is stopped by gravitational force, this is an example of which law of motion?`,
        options: ["Law of Inertia", "Law of acceleration", "Law of action and reaction", "Both a & b"],
        answer: `Law of Inertia`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_14",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `In which of the following sports does friction play the least important role?`,
        options: ["Car race", "Football", "Ice skating", "Hockey"],
        answer: `Ice skating`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_15",
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Instrumental aggression is related to _________.`,
        options: ["Accepting defeat", "Achieving goal", "Only performance", "Hurting someone to gain something"],
        answer: `Achieving goal`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_16",
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Assertion (A): Aggression is part of human behavior and is necessary for an individual to live and struggle for higher achievements. Reason (R): Aggression is inevitable and inseparable in sport activities. Which is correct?`,
        options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
            "(A) is true, but (R) is false.",
            "(A) is false, but (R) is true.",
        ],
        answer: `Both (A) and (R) are true and (R) is the correct explanation of (A).`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_17",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of these is a type of endurance?`,
        options: ["Static", "Specific", "Dynamic", "Relative"],
        answer: `Specific`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_18",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which type of coordinative ability is required in games like judo and wrestling?`,
        options: ["Orientation ability", "Coupling ability", "Adaptation ability", "Differentiation ability"],
        answer: `Adaptation ability`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    // SQP 2025 — SECTION B
    {
        id: "S_2025_19",
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 2,
        question: `Enlist any two exercise guidelines by WHO for different age groups.`,
        answer: `WHO Exercise Guidelines (any 2 age groups):
1. Children under 5 years: At least 180 minutes/day of physical activity; tummy time (30 mins) for infants.
2. Children & Adolescents (5–17 years): Minimum 60 minutes/day of moderate to vigorous activity; muscle and bone-strengthening exercises 3 days/week.
3. Adults (18–64 years): 150–300 minutes/week of moderate aerobic activity; muscle-strengthening 2+ days/week.
4. Senior Citizens (65+ years): 150–300 minutes/week; balance and strength exercises 2–3 days/week.`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_20",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 2,
        question: `How can we say that protein is an essential component of diet?`,
        answer: `Protein is the essential component of diet because it is known as the building block of life. It increases the strength of muscle fibres, repairs and maintains body tissue, is connected with the immune mechanism of the body, drives metabolic reactions, and forms antibodies, enzymes and hormones. Without adequate protein intake, growth, repair and overall body functioning would be impaired.`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_21",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Short",
        marks: 2,
        question: `Mention the tests performed on 9 to 18 yrs. of age group in SAI Khelo India fitness test and explain any one.`,
        answer: `Tests (Class 4–12): (a) Body Composition (BMI); (b) Abdominal Partial Curl-up; (c) Push-ups/Modified Push-ups; (d) Sit and Reach Test; (e) 600 Metre Run/Walk; (f) 50 mt. Dash.

Sit and Reach Test: Sit on floor with legs straight. Remove shoes. Place soles of feet flat against the box. Keep knees locked. With palms facing downwards and hands on top of each other, reach forward along the measuring line as far as possible. Hold for 1–2 seconds. Record the farthest point reached.`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_22",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 2,
        question: `List down the types of bone injuries.`,
        answer: `Types of bone injuries (any 4): Stress fracture; Greenstick fracture; Comminuted fracture; Transverse fracture; Impacted fracture; Oblique fracture; Simple (closed) fracture; Compound (open) fracture.`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_23",
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 2,
        question: `What do you understand by the term goal setting?`,
        answer: `Goal setting is one of the best motivational strategies. It improves performance by directing attention, increasing effort and persistence. Goals can be short-term or long-term and are designed to help athletes focus their efforts, stay motivated, track progress, and ultimately improve their performance. It is a mental training technique that increases an individual's commitment towards achieving a specific standard of proficiency on a task within a specified time.`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_24",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 2,
        question: `Define Flexibility and list down its types.`,
        answer: `Flexibility: The ability which helps to do the movements with greater amplitude or range of motion.

Types:
a. Active Flexibility — ability to perform a movement with greater amplitude without external help.
b. Passive Flexibility — ability to do movements with greater amplitude with external help.`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    // SQP 2025 — SECTION C
    {
        id: "S_2025_25",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Short",
        marks: 3,
        question: `Specify the purpose of specific sports programmes organised for community services.`,
        answer: `Purposes of specific sports programmes for community services:
1. Creating awareness about diseases like AIDS, Swine Flu, COVID-19.
2. Collecting funds for special causes like floods, earthquakes.
3. Health Runs — spreading awareness about the importance of physical activity.
4. Charity Runs — raising money for NGOs or health departments.
5. Promoting social inclusion and community bonding through sports participation.
6. Encouraging mass participation regardless of age, skill or disability.`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_26",
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 3,
        question: `What are the health problems faced by a woman due to Female Athlete Triad in sports and athletic performance?`,
        answer: `The Female Athlete Triad consists of Eating Disorder, Osteoporosis and Amenorrhea. Health problems faced (any 6): (a) Increased risk of injury (stress fractures); (b) Feeling tired — chronic fatigue; (c) Shortness of breath; (d) Stomach inflammation; (e) Muscle weakness; (f) Weak bones due to osteoporosis; (g) Hormonal imbalance; (h) Psychological effects — anxiety, depression, low self-esteem.`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_27",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 3,
        question: `Write in detail the aims and objectives of Special Olympic Bharat.`,
        answer: `Special Olympics Bharat is India's chapter of the Special Olympics movement. Aims and objectives:
1. Provide year-round sports training and athletic competition for children and adults with intellectual disabilities.
2. Promote Para sport worldwide without unlawful discrimination.
3. Support educational and cultural activities to promote the Paralympic movement.
4. Enhance awareness of disability and drive social inclusion.
5. Give athletes opportunities to develop physical fitness, demonstrate courage and experience joy.
6. Participation in sharing gifts, skills and friendship with families, other athletes and the community.
Motto: "Let me win. But if I cannot win, let me be brave in the attempt."`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_28",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 3,
        question: `Differentiate between nutritive and non-nutritive components of a diet on the basis of their functions.`,
        answer: `Nutritive Components: Provide considerable energy to the system (proteins, carbohydrates, fats). Functions: Provide energy; support growth and repair; regulate metabolism.

Non-Nutritive Components: Do not have nutritional value but are necessary for the body in tiny quantities. Functions: Provide flavour and texture; act as food additives; provide antioxidants; improve digestibility; enhance visual appeal.

Examples of non-nutritive: Fibre, water, colour compounds, flavouring agents, artificial sweeteners, preservatives, spices.`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_29",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Short",
        marks: 3,
        question: `With the help of suitable sports examples, explain the application of Newton's Third Law in sports.`,
        answer: `Newton's Third Law: For every action, there is an equal and opposite reaction.

Applications in Sports:
1. Swimming: Swimmer pulls arm through water (action); water pushes swimmer forward (reaction).
2. Long Jump: Jumper pushes down on ground at take-off (action); ground pushes athlete upward and forward (reaction).
3. Springboard Diving: Diver pushes down on springboard (action); springboard pushes diver into air (reaction).
4. Rowing: Oars push backward against water (action); water pushes boat forward (reaction).`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_30",
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 3,
        question: `How can we enhance the performance with the help of self-talk and self-esteem?`,
        answer: `Self-Talk enhances performance by: building confidence; helping athletes maintain a positive mindset; controlling thoughts and influencing feelings; focusing attention; aiding skill acquisition; creating and changing mood to be performance-ready; better handling of mistakes.

Self-Esteem enhances performance by: helping in taking effective decisions; reducing anxiety and stress; helping individuals bounce back from setbacks; controlling negative thoughts; boosting self-confidence; motivating to take up challenges leading to successful accomplishment of goals.`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    // SQP 2025 — SECTION D
    {
        id: "S_2025_31_1",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 25 qs 31.png",
        question: `Based on the provided information about committees, choose the function of the boarding committee:`,
        options: ["To take teams to the venue", "To provide them meals", "To take care of their stay", "To arrange opening ceremony"],
        answer: `To take care of their stay`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_31_2",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 25 qs 31.png",
        question: `Based on the provided information about committees, what is the work of the ceremony committee?`,
        options: ["To take teams to the venue", "To provide them meals", "To take care of their stay", "To arrange opening ceremony"],
        answer: `To arrange opening ceremony`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_31_3",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 25 qs 31.png",
        question: `Based on the provided information about committees, the ground and equipment committee should NOT perform:`,
        options: ["To arrange team match venues", "To provide them meals", "To take care of proper officiating", "To make fixtures"],
        answer: `To provide them meals`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_31_4",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 25 qs 31.png",
        question: `Based on the provided information about committees, why are committees required?`,
        options: ["To organise event perfectly", "To distribute work", "To make best use of resources", "All of the above"],
        answer: `All of the above`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_32_1",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 25 qs 32.png",
        question: `Based on the provided information about Paralympics, the first Paralympics was organised in:`,
        options: ["1960", "1970", "1965", "1985"],
        answer: `1960`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_32_2",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 25 qs 32.png",
        question: `Based on the provided information about Paralympics, special education is a branch of education that deals with:`,
        options: ["Educating children in special schools", "Instructions designing for students with special needs", "To provide opportunity of special education", "More than one of the above"],
        answer: `Instructions designing for students with special needs`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_32_3",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 25 qs 32.png",
        question: `Based on the provided information about Paralympics, why is it called the Paralympics?`,
        options: ["First competition was held in Paraguay", "Originally for paramilitary soldiers", "The event runs parallel with the Olympics", "It's an event for paraplegics"],
        answer: `The event runs parallel with the Olympics`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_32_4",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 25 qs 32.png",
        question: `Based on the provided information about Paralympics, what is the motto of the Paralympic Games?`,
        options: ["Spirit in motion", "Citius, Altius, Fortius", "Faster, Higher, Stronger", "Diversity, Equality, Inclusion"],
        answer: `Spirit in motion`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_33_1",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 25 qs 33.png",
        question: `Based on the provided information about the cardiorespiratory system, what is the primary effect of exercise on the cardiorespiratory system?`,
        options: ["Decreased heart rate", "Increased stroke volume", "Decreased lung capacity", "Decreased blood pressure"],
        answer: `Decreased heart rate`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_33_2",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 25 qs 33.png",
        question: `Based on the provided information about the cardiorespiratory system, what is stroke volume?`,
        options: ["Volume of blood ejected per minute", "Volume of blood ejected per beat", "Volume of blood in ventricles at end of diastole", "Volume pumped during exercise"],
        answer: `Volume of blood ejected per minute`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_33_3",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 25 qs 33.png",
        question: `Based on the provided information about the cardiorespiratory system, cardiac output is:`,
        options: ["Volume of blood ejected per minute", "Volume ejected per beat", "Volume at end of diastole", "Volume pumped during exercise"],
        answer: `Volume of blood ejected per minute`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_33_4",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 25 qs 33.png",
        question: `Based on the provided information about the cardiorespiratory system, blood pressure is:`,
        options: ["Volume ejected per minute", "Force exerted by blood against walls of arteries", "Rate of blood flow through veins", "Amount of oxygen carried by red blood cells"],
        answer: `Force exerted by blood against walls of arteries`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    // SQP 2025 — SECTION E
    {
        id: "S_2025_34",
        year: 2025,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Long",
        marks: 5,
        question: `List down any four asanas used for prevention of Hypertension. Explain the procedure, benefits and contraindications of any one of them with help of a stick diagram.`,
        answer: `Asanas for Hypertension (any 4): Tadasana, Katichakrasana, Uttanpadasana, Ardha Halasana, Sarala Matsyasana, Gomukhasana, Uttan Mandukasana, Bhujangasana, Makarasana, Shavasana, Nadi-Shodhanapranayam, Sitlipranayam.

Procedure of Tadasana:
1. Stand erect, feet together, hands by the side of the thighs. Keep back straight and look in front.
2. Stretch the arms upward; keep them straight and parallel in vertical position, palms facing each other.
3. Slowly raise the heels as much as possible and stand on toes. Stretch body upward.
4. Maintain the position for 5–10 seconds.
5. Bring heels to floor, slowly bring down the hands and relax.

Benefits: Stretches whole body muscles; strengthens thighs, knees and ankles; helps increase height in children; removes laziness.

Contraindications: Those with vertigo should avoid this asana; avoid bending forward or backward; not for those with low blood pressure or insomnia.`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_35",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Long",
        marks: 5,
        question: `Discuss the purpose of Rikli & Jones fitness test and explain the procedure of any two test batteries in detail.`,
        answer: `Purpose: Rikli and Jones developed the Senior Fitness Test at Fullerton University to assess functional fitness of older adults aged 60–94 years. Tests: (1) Chair Stand Test — lower body strength; (2) Arm Curl Test — upper body strength; (3) Chair Sit & Reach — lower body flexibility; (4) Back Scratch Test — upper body flexibility; (5) 8 Foot Up & Go — agility/balance; (6) 6 Minute Walk — cardiovascular endurance.

Chair Stand Test:
Procedure: Place chair against wall. Sit in middle of chair, feet flat on floor, back straight, arms crossed at wrist on chest. On "Go", rise to full stand and sit again as many times as possible in 30 seconds.
Scoring: Total number of completed chair stands in 30 seconds.

Arm Curl Test:
Procedure: Sit on chair holding weight (5 lbs women / 8 lbs men) with suitcase grip on dominant arm. On "Go", do as many curls as possible in 30 seconds without swinging the weight.
Scoring: Total number of controlled arm curls in 30 seconds.`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_36",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Long",
        marks: 5,
        question: `Define strength and differentiate between Isometric, Iso-tonic and Iso-kinetic exercises.`,
        answer: `Strength: The ability of muscles to overcome the resistance; the capacity of the whole body or any of its parts to exert force.

Isometric Exercise: No direct movement visible; muscle length remains constant; tension is generated without movement. E.g. pushing a wall, plank hold. Iso = constant; metric = length.

Isotonic Exercise: Movements visible; muscle changes in length while tension remains approximately constant. Results in toned muscles. E.g. running, jumping, weight training. Iso = constant; tonic = tension.

Isokinetic Exercise: Performed on specially designed machines; muscles apply maximal force throughout the range of motion at a constant speed. Iso = constant; kinetic = velocity. E.g. rowing machine, exercise bike.`,
        source: "CBSE 2024-2025 Sample Paper",
    },
    {
        id: "S_2025_37",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Long",
        marks: 5,
        question: `What are the various types of friction? With the help of suitable examples, explain why friction is necessary in sports.`,
        answer: `Friction: A force which opposes efforts to slide or roll one body over another.

Types of Friction:
1. Static Friction — acts between two surfaces where one tends to move but hasn't yet. E.g. weightlifter gripping barbell before lifting.
2. Dynamic Friction — acts between two surfaces where one is actually moving:
   a. Sliding Friction — E.g. ice skating, cricket ball sliding on pitch.
   b. Rolling Friction — E.g. cricket ball rolling on ground, football rolling.
3. Fluid Friction — E.g. swimmer moving through water, cyclist through air.

Why Friction is Necessary in Sports:
• Without friction it would be impossible to walk or run — we would just slip.
• Athletes use spikes; footballers use studs to have appropriate friction while running fast.
• Gymnasts use lime/magnesium powder on palms for grip on horizontal bar, Roman rings.
• Badminton players rub shoe soles with lime before going on wooden court for better grip.
• A cyclist uses friction between tyres and road to maintain balance and control.`,
        source: "CBSE 2024-2025 Sample Paper",
    },

    // ═══════════════════════════════════════════════════════════════
    //  SQP 2026 (Session 2025-26) — SECTION A  Q1-Q15
    // ═══════════════════════════════════════════════════════════════
    {
        id: "S_2026_1",
        year: 2026,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `A tournament where every team plays with every other team once and the number of matches is determined with the help of the formula N(N-1) is called as:`,
        options: ["Knockout tournament", "Double league tournament", "Single league tournament", "None of these"],
        answer: `Double league tournament`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_2",
        year: 2026,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Assertion (A): Planning should be the first step for organizing a tournament. Reason (R): A tournament can be conducted without planning. Which is correct?`,
        options: [
            "Both (A) and (R) are true and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true and (R) is not the correct explanation of (A).",
            "(A) is true but (R) is false.",
            "(A) is false but (R) is true.",
        ],
        answer: `(A) is true but (R) is false.`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_3",
        year: 2026,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Match: (a) Garudasana, (b) Horse riding, (c) Rope skipping, (d) Halasana — with — (i) Flat foot, (ii) Lordosis, (iii) Knock knees, (iv) Bow legs. Choose the correct option.`,
        matchTable: {
            headers: ["Exercise / Asana", "Deformity Corrected"],
            rows: [
                { left: "(a) Garudasana", right: "(i) Flat foot" },
                { left: "(b) Horse riding", right: "(ii) Lordosis" },
                { left: "(c) Rope skipping", right: "(iii) Knock knees" },
                { left: "(d) Halasana", right: "(iv) Bow legs" },
            ],
        },
        options: ["A-(iv), B-(iii), C-(i), D-(ii)", "A-(ii), B-(iv), C-(i), D-(iii)", "A-(iii), B-(i), C-(iii), D-(iv)", "A-(i), B-(ii), C-(iii), D-(iv)"],
        answer: `A-(iv), B-(iii), C-(i), D-(ii)`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_4",
        year: 2026,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `What is nutrition?`,
        options: ["Essential substances of food like proteins, fats, carbohydrates, etc.", "Consuming correct ratio of nutrients", "Dynamic process in which consumed food is digested", "Both (a) and (b)"],
        answer: `Dynamic process in which consumed food is digested`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_5",
        year: 2026,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Identify the yoga asana shown in the image.`,
        imageUrl: "/SQP 26 qs 5.png",
        options: ["Uttana Mandukasana", "Paschimottanasana", "Dhanurasana", "Halasana"],
        answer: `Dhanurasana`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_6",
        year: 2026,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is a yoga pose for treatment of obesity?`,
        options: ["Gomukhasana", "Bhujangasana", "Paschimottanasana", "Vajrasana"],
        answer: `Paschimottanasana`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_7",
        year: 2026,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `Who are the participants in Special Olympics?`,
        options: ["Veterans", "Children and adults with intellectual disabilities", "Physically handicapped", "Both (b) and (c)"],
        answer: `Children and adults with intellectual disabilities`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_8",
        year: 2026,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Female Athlete Triad does NOT include _________.`,
        options: ["Amenorrhea", "Oligomenorrhea", "Osteoporosis", "Bulimia Nervosa"],
        answer: `Oligomenorrhea`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_9",
        year: 2026,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Find the odd one out (micro vs macro minerals):`,
        options: ["Calcium", "Sulfur", "Potassium", "Iron"],
        answer: `Iron`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_10",
        year: 2026,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `What is the dimension of layout in Johnson-Metheny Test of Motor Educability?`,
        options: ["15 × 3 feet", "15 × 3 meters", "15 × 2 feet", "15 × 2 meters"],
        answer: `15 × 2 feet`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_11",
        year: 2026,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is NOT a short-term effect of exercise on muscular system?`,
        options: ["Accumulation of lactate", "Increased blood supply", "Muscular hypertrophy", "Increased muscle temperature"],
        answer: `Muscular hypertrophy`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_12",
        year: 2026,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of these is NOT a soft tissue injury?`,
        options: ["Abrasion", "Dislocation", "Strain", "Incision"],
        answer: `Dislocation`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_13",
        year: 2026,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following helps with ice skating?`,
        options: ["Rolling friction", "Sliding friction", "Static friction", "Gliding friction"],
        answer: `Sliding friction`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_14",
        year: 2026,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is NOT a factor affecting projectile trajectory?`,
        options: ["Gravity", "Angle of release", "Buoyant force", "Air resistance"],
        answer: `Buoyant force`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_15",
        year: 2026,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Self-talk refers to our _________ consisting of statements we say to ourselves, either in our mind or out loud.`,
        options: ["Internal thoughts", "Internal behavior", "Internal soul", "Internal emotions"],
        answer: `Internal thoughts`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_16",
        year: 2026,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Assertion (A): Aggression is part of human behavior and is necessary for an individual to live and struggle for higher achievements.
Reason (R): Aggression is inevitable and inseparable in sport activities.

In the context of the above two statements, which one of the following is correct?`,
        options: [
            "(A) is false, but (R) is true.",
            "(A) is true, but (R) is false.",
            "Both (A) and (R) are true and (R) is the correct explanation of (A).",
            "Both (A) and (R) are true, but (R) is not the correct explanation of (A).",
        ],
        answer: `Both (A) and (R) are true, but (R) is not the correct explanation of (A).`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_17",
        year: 2026,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `The method of training that involves repeated bouts of high-intensity work followed by periods of rest or low-intensity activity is known as _______.`,
        options: ["Continuous Training", "Interval Training", "Fartlek Training", "Circuit Training"],
        answer: `Interval Training`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_18",
        year: 2026,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is NOT a type of coordinative ability?`,
        options: ["Orientation Ability", "Acceleration Ability", "Grouping Ability", "Dynamic Ability"],
        answer: `Orientation Ability`,
        source: "CBSE 2025-2026 Sample Paper",
    },

    // SQP 2026 — SECTION B
    {
        id: "S_2026_19",
        year: 2026,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 2,
        question: `Differentiate between the three types of spinal deformity.`,
        answer: `Kyphosis:
• Outward (posterior) curvature of the thoracic spine — hunchback appearance
• Head and shoulders lean forward
• Common in older adults or due to poor posture
• Can cause breathing issues and back pain in severe cases

Lordosis:
• Excessive inward (anterior) curvature of the lumbar spine — swayback
• Abdomen and buttocks protrude outward
• Often caused by weak abdominal muscles or obesity
• May lead to lower back discomfort and postural imbalance

Scoliosis:
• Lateral (sideways) curvature of the spine in 'S' or 'C' shape
• Uneven shoulders or hips may be visible
• Can be congenital or develop during adolescence
• Severe cases may affect lung and heart function`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_20",
        year: 2026,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 2,
        question: `What is a balanced diet? Mention its importance also.`,
        answer: `Balanced Diet: A diet that contains all essential nutrients in correct proportion — Proteins, Carbohydrates, Vitamins, Fats, Minerals and Water.

Importance of a Balanced Diet (any 2–3 points):
• Provides energy for daily activities and sports performance
• Supports growth, development and repair of body tissues
• Boosts immunity and prevents deficiency diseases
• Maintains efficient body functions
• Helps maintain healthy body weight
• Enhances mental alertness and mood`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_21",
        year: 2026,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Short",
        marks: 2,
        question: `A male student performed the Harvard Step Test for 4 minutes. His pulse was recorded during the recovery periods as 58 beats in the first half-minute, 50 beats in the second, and 42 beats in the third. Using the Harvard Step Test formula, calculate his Fitness Index and state whether his score falls in the Excellent, Good, or Average category.`,
        answer: `Formula: Fitness Index = (Duration of exercise in seconds × 100) ÷ (2 × Sum of pulse counts in recovery)

Step 1: Duration = 4 minutes = 240 seconds
Step 2: Sum of pulse counts = 58 + 50 + 42 = 150 beats
Step 3: Fitness Index = (240 × 100) ÷ (2 × 150) = 24000 ÷ 300 = 80

Category: Good`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_22",
        year: 2026,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 2,
        question: `Enlist any four types of fracture.`,
        answer: `Any four types of fracture:
i. Simple (Closed) Fracture
ii. Compound (Open) Fracture
iii. Comminuted Fracture
iv. Greenstick Fracture
v. Transverse Fracture
vi. Oblique Fracture
vii. Impacted Fracture`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_23",
        year: 2026,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 2,
        question: `Write a short note on Sports Psychology.`,
        answer: `Sports psychology is a field that studies how psychological factors influence athletic performance and participation in sports, exercise, and physical activity. It examines the mental aspects of sports including motivation, anxiety, stress, and the impact of sports on well-being.

Key areas of focus:
• Performance Enhancement — goal setting, visualization, relaxation and self-talk
• Mental Health and Well-being — addressing burnout, anxiety and depression
• Team Dynamics — improving communication and collaboration
• Coaching and Training — creating effective training programs with psychological principles
• Social and Developmental Aspects — studying how sports participation affects social development`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_24",
        year: 2026,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Short",
        marks: 2,
        question: `A football player wants to improve his acceleration and quick reaction during a match. Suggest two suitable training methods and justify how each will help improve his performance.`,
        answer: `1. Acceleration Sprints:
Method: The player repeatedly runs short distances from a standing start, building to maximum speed.
Justification: Improves the player's ability to quickly reach top speed during sudden movements in a match — crucial for breaking free from defenders or chasing a ball.

2. Reaction Drills:
Method: Use signals (visual/auditory cues) to trigger movement responses — e.g., reacting to a coach's hand gesture or a light board.
Justification: Enhances response time to game situations like interceptions, sudden passes or opponent movements, leading to better match performance.`,
        source: "CBSE 2025-2026 Sample Paper",
    },

    // SQP 2026 — SECTION C
    {
        id: "S_2026_25",
        year: 2026,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Short",
        marks: 3,
        question: `League tournament is a better way to judge the best team of the tournament. Comment.`,
        answer: `Why League Tournament is Better for Judging the Best Team (any 4 points):
• Equal opportunities — every team plays against all other teams at least once, ensuring fair competition.
• League matches minimize the impact of luck or unexpected outcomes — one bad day cannot eliminate a team.
• Teams are judged on the basis of multiple matches, not just one.
• Ranking is done on the basis of points earned over the entire tournament, reflecting consistent performance.
• Less pressure on teams compared to knockout — teams can recover from a loss.
• Scope of improvement — teams can learn and improve as the tournament progresses.
• The true, most consistent winner emerges from this format.`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_26",
        year: 2026,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 3,
        question: `Discuss the exercise guidelines for different age groups.`,
        answer: `WHO Exercise Guidelines for different age groups:

Children (Under 5 years):
• At least 180 minutes/day of physical activity of any intensity
• Tummy time (30 mins) for infants who aren't mobile
• Avoid being restrained for over 1 hour at a time
• Limit or avoid screen time

Adolescents (5–17 years):
• Minimum 60 minutes/day of moderate to vigorous activity
• Include muscle and bone-strengthening exercises 3 days/week
• Prefer aerobic activities like running, swimming, cycling
• Limit screen time and reduce sedentary behavior

Senior Citizens (65+ years):
• 150–300 minutes/week of moderate aerobic activity
• Do balance and strength exercises 2–3 days/week
• Be physically active daily; avoid long sitting hours
• Adapt intensity as per health conditions and ability`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_27",
        year: 2026,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 3,
        question: `Explain strategies to make Physical Activities Accessible for CWSN.`,
        answer: `Strategies to make physical activities accessible for CWSN (any 4):
1. Sensory Integration — Reduce loud music, use natural lighting, provide headphones/sunglasses for sensory-sensitive children.
2. Positive Behaviour Support (PBIS) — Use picture schedules and encourage positive interactions to manage behaviour.
3. Team Building Activities — Focus on creative, cooperative games over competition to build confidence.
4. Accessible Surfaces — Use gym mats or level fields to support mobility and wheelchair use.
5. Inclusive Classrooms — Educate CWSN alongside others to promote acceptance and social inclusion.
6. Assistive Technology — Use tools like large balls, bells, or string-attached equipment to accommodate different abilities.
7. Adaptive Physical Education — Modify rules and games based on individual needs and abilities.
8. Creative Game Focus — Use imaginative games to build confidence and reduce performance pressure.`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_28",
        year: 2026,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 3,
        question: `Discuss the importance of pre, during and post competition diet in detail.`,
        answer: `Pre-Competition Diet:
• Purpose: Provides energy, prevents early fatigue, and ensures smooth digestion before performance.
• Consume high-carbohydrate foods like rice, pasta or bread for sustained energy.
• Prefer easily digestible, low-fat, non-fried meals taken 3–4 hours before the event.
• Avoid new food or food with known allergies.

During Competition Diet:
• Purpose: Maintains hydration, energy and electrolyte balance to avoid fatigue and muscle cramps.
• Sip on glucose-rich drinks or electrolyte solutions to maintain blood sugar and sodium levels.
• Include small portions of quick energy foods like banana or energy gels if needed.

Post-Competition Diet:
• Purpose: Supports recovery by replenishing lost fluids and restoring glycogen levels in muscles.
• Eat carbohydrate-rich foods such as fruits, sandwiches or energy bars immediately after.
• Rehydrate with water, juice or sports drinks to replace lost electrolytes.
• Include good quality proteins to repair muscle damage.`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_29",
        year: 2026,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Short",
        marks: 3,
        question: `A gymnast maintains a handstand position on the balance beam, then performs a flip. Differentiate between the types of equilibrium shown and explain how they help in performance.`,
        answer: `Static Equilibrium — shown during the handstand:
• Body is balanced and at rest; sum of all forces equals zero.
• Helps the gymnast hold a steady position without falling.
• Centre of gravity is directly above the base of support.

Dynamic Equilibrium — shown during the flip:
• Stability is maintained while the body is in motion at a constant velocity.
• Allows the gymnast to transition between movements smoothly and safely.
• Requires continuous muscular adjustments to maintain balance.

How they help in performance:
• Static equilibrium allows controlled, steady positions that score higher in gymnastics.
• Dynamic equilibrium allows fluid, connected transitions between movements.
• Together, they help maintain balance, control, and fluidity during the full routine.`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_30",
        year: 2026,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 3,
        question: `Describe personality. Explain dimensions of personality.`,
        answer: `Personality: The combination of physical, mental, psychological and emotional traits that make an individual unique. It is the sum total of an individual's characteristics that distinguish them from others.

Dimensions of Personality:

1. Physical Dimension:
• Height and weight
• Body structure and posture
• Facial appearance and complexion

2. Mental Dimension:
• Intellect and reasoning ability
• Decision-making power
• Memory and concentration

3. Psychological Dimension:
• Emotions and mood stability
• Self-confidence and motivation
• Willpower and attitude`,
        source: "CBSE 2025-2026 Sample Paper",
    },

    // SQP 2026 — SECTION D
    {
        id: "S_2026_31_1",
        year: 2026,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 26 qs 31.png",
        question: `Based on the knockout tournament fixture shown, the method followed in drawing the fixture is:`,
        options: ["Random method", "Knock out method", "League cum knockout method", "League method"],
        answer: `Knock out method`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_31_2",
        year: 2026,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 26 qs 31.png",
        question: `Based on the tournament fixture shown, the number of matches played can be calculated by the formula:`,
        options: ["2N", "N+1", "N/2", "N – 1"],
        answer: `N – 1`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_31_3",
        year: 2026,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 26 qs 31.png",
        question: `Based on the tournament fixture shown, what is the advantage of this tournament?`,
        options: ["More matches are played", "Less number of teams participate", "The knockout tournament takes less time and is economical", "All teams play equal number of matches"],
        answer: `The knockout tournament takes less time and is economical`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_31_4",
        year: 2026,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 26 qs 31.png",
        question: `Based on the tournament fixture shown, what is the term used if privilege is given to a team to play at a higher round?`,
        options: ["Bye", "Draw", "Super seeding", "Any of the above"],
        answer: `Bye`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_32_1",
        year: 2026,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 26 qs 32.png",
        question: `Based on the picture, identify the logo:`,
        options: ["Special Olympics", "Paralympics", "Deaflympics", "Special Olympics Bharat"],
        answer: `Deaflympics`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_32_2",
        year: 2026,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 26 qs 32.png",
        question: `Based on the picture, what does the circle signify?`,
        options: ["Unity", "Ears", "Strength", "Iris"],
        answer: `Iris`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_32_3",
        year: 2026,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 26 qs 32.png",
        question: `Based on the picture, in which year was it held for the first time?`,
        options: ["2001", "1924", "1948", "1968"],
        answer: `1924`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_32_4",
        year: 2026,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 26 qs 32.png",
        question: `Based on the picture, what are the four colours in the logo?`,
        options: ["Red, Yellow, Black, Blue", "Red, Blue, Green, Yellow", "Yellow, Black, Red, Green", "Brown, Blue, Green, Red"],
        answer: `Red, Blue, Green, Yellow`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_33_1",
        year: 2026,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 26 qs 33.png",
        question: `Based on the picture of different types of fractures, when the two ends of the injured bone enter into each other it is said to be:`,
        options: ["Comminuted Fracture", "Greenstick Fracture", "Impacted Fracture", "Transverse Fracture"],
        answer: `Impacted Fracture`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_33_2",
        year: 2026,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 26 qs 33.png",
        question: `Based on the picture of different types of fractures, identify the comminuted fracture:`,
        options: ["(d)", "(b)", "(e)", "(a)"],
        answer: `(b)`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_33_3",
        year: 2026,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 26 qs 33.png",
        question: `Based on the picture of different types of fractures, when the bone is broken into many pieces at one place or different places, it is called:`,
        options: ["Oblique Fracture", "Impacted Fracture", "Comminuted Fracture", "Greenstick Fracture"],
        answer: `Comminuted Fracture`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_33_4",
        year: 2026,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        imageUrl: "/SQP 26 qs 33.png",
        question: `Based on the picture of different types of fractures, which fracture occurs in a straight line at a right angle to the shaft of the bone, usually caused by a direct blow:`,
        options: ["Greenstick Fracture", "Oblique Fracture", "Transverse Fracture", "Impacted Fracture"],
        answer: `Transverse Fracture`,
        source: "CBSE 2025-2026 Sample Paper",
    },

    // SQP 2026 — SECTION E
    {
        id: "S_2026_34",
        year: 2026,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Long",
        marks: 5,
        question: `What do you mean by Asthma? Mention its symptoms. Explain the procedure, benefits and contraindications of an asana beneficial for the patient of asthma.`,
        answer: `Asthma: A chronic respiratory condition where the airways become inflamed and narrow, leading to difficulty in breathing. It often triggers coughing, wheezing, shortness of breath and chest tightness.

Symptoms of Asthma:
• Difficulty in breathing
• Wheezing (whistling sound while breathing)
• Tightness in chest
• Frequent coughing, especially at night or early morning
• Fatigue during physical activity

Asanas helpful for Asthma: Sukhasana, Chakrasana, Gomukhasana, Bhujangasana, Paschimottanasana, Matsyasana, Anulom-Vilom Pranayama

Procedure of Matsyasana (Fish Pose):
1. Lie flat on your back with legs extended and hands beside the thighs.
2. Place the hands underneath the hips with palms facing down.
3. Lift the chest upward while arching the back and tilt the head backward so that the crown touches the floor.
4. Inhale as you lift the chest and tuck the head.
5. Breathe normally and hold the posture with deep, slow breathing.
6. Exhale while relaxing the body and return to the initial position.
7. Get back to normal breathing.

Benefits:
• Expands the chest and improves lung capacity
• Helps ease respiratory issues like asthma and bronchitis
• Stimulates the throat and opens nasal passages for easier breathing
• Strengthens the upper back and neck muscles
• Reduces anxiety and stress, which can trigger asthma

Contraindications:
• Avoid in case of serious neck or back injury
• Not suitable for individuals with high blood pressure or migraines
• Should be performed under guidance if suffering from spinal disorder`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_35",
        year: 2026,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Long",
        marks: 5,
        question: `Make a table of test items listed under fitness test by SAI (Age group 9–18 yrs). Explain the Procedure and Scoring of 50 MTS Run and Partial Curl Up.`,
        answer: `SAI Khelo India Fitness Test — Age Group 9–18 yrs (Class 4–12):
1. Body Composition (BMI)
2. Strength: (a) Abdominal Partial Curl-up; (b) Push-ups (Boys) / Modified Push-ups (Girls)
3. Flexibility: Sit and Reach Test
4. Cardiovascular Endurance: 600 Metre Run/Walk
5. Speed: 50 mt. Dash

50 MTR DASH (Standing Start):
Procedure: A thorough warm-up should be given, including some practice starts and accelerations. Start from a stationary position, with one foot in front of the other. The front foot must be on or behind the starting line. This starting position should be static (dead start). The tester should provide hints for maximising speed (such as keeping low, driving hard with the arms and legs) and the participant is encouraged to continue running hard through the finish line.
Scoring: Time taken for completion (in seconds).

ABDOMINAL PARTIAL CURL-UP:
Procedure: The subject lies on a cushioned, flat, clean surface with knees flexed (usually at 90°), with hands straight on the sides (palms facing downwards) closer to the ground, parallel to the body. The subject raises the trunk in a smooth motion, keeping the arms in position, curling up the desired amount (at least 6 inches above/along the ground towards the parallel strip). The trunk is lowered back to the floor so that the shoulder blades or upper back touch the floor.
Scoring: Record the maximum number of curl-ups in 30 seconds.`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_36",
        year: 2026,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Long",
        marks: 5,
        question: `What do you understand by circuit training? How will a coach plan circuit training sessions with 6 stations to develop the fitness of his new trainees? Explain.`,
        answer: `Circuit Training: A training method where different exercises are performed in a sequence (stations) with minimal rest between each. Each station targets a specific fitness component or muscle group. Helps improve overall fitness efficiently in a limited time.

6 Sample Stations for New Trainees:
Station 1: Push-ups — develops upper body strength (chest, shoulders, triceps)
Station 2: Squats — develops lower body strength (quadriceps, hamstrings, glutes)
Station 3: Skipping/Jump Rope — develops cardiovascular endurance and coordination
Station 4: Sit-ups/Abdominal Crunches — develops core strength
Station 5: Shuttle Runs — develops speed and agility
Station 6: Plank Hold — develops core stability and muscular endurance

Components developed in new trainees:
• Strength — push-ups, squats, sit-ups
• Endurance — skipping, shuttle runs
• Flexibility — stretching between stations
• Speed — shuttle runs
• Agility — shuttle runs, skipping
• Coordination — skipping, varied movements

Plan: Each station for 30–45 seconds, rest of 15 seconds between stations. Complete 2–3 rounds with 2 minutes rest between rounds.`,
        source: "CBSE 2025-2026 Sample Paper",
    },
    {
        id: "S_2026_37",
        year: 2026,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Long",
        marks: 5,
        question: `What is a lever? Discuss the application of levers in sports.`,
        answer: `Lever: A simple machine that provides mechanical advantage to magnify the force necessary to overcome a resistance. A lever consists of three components — Fulcrum (F), Force/Effort (E), and Load/Resistance (R).

Types and Application in Sports:

Class 1 Lever (Fulcrum between Force and Load):
• The fulcrum lies between the effort and the resistance.
• E.g. See-saw; seated dumbbell tricep extension (elbow joint is the fulcrum).
• In sport: Neck movement when heading a football — the atlanto-occipital joint acts as the fulcrum.

Class 2 Lever (Load between Fulcrum and Force):
• The resistance lies between the fulcrum and the effort.
• Mechanical advantage — force arm is always greater than resistance arm.
• E.g. Wheelbarrow; calf raise (ball of foot = fulcrum, body weight = load, calf muscles = force).
• In sport: Pushing against the starting block in sprint start; full body push-up.

Class 3 Lever (Force between Fulcrum and Load):
• The effort is applied between the fulcrum and the resistance.
• Mechanical disadvantage — but allows for speed and range of motion.
• E.g. Fishing rod; leg extension exercise (knee joint = fulcrum, foot = load, quadriceps = force applied at tibia).
• In sport: Bicep curl; most limb movements in throwing and kicking actions.`,
        source: "CBSE 2025-2026 Sample Paper",
    },
];


/* Initial release of PhysEd-Pro */
