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
    //  2023
    // ─────────────────────────────────────────────

    {
        id: "2023_MCQ_1",
        options: ["Bhujangasana", "Halasana", "Vajrasana", "Dhanurasana"],
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Identify the asana shown in the image.`,
        imageUrl: "/PE_2023_qs_1.png",
        answer: `(a) Bhujangasana
(For visually impaired: Bhujangasana)`,
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
        question: `Which trait of the Big Five Theory is characterised by emotional instability, anxiety, sadness, and the inability to handle stress?`,
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
        question: `Which force acts on a body submerged or floating in a fluid, acting upward against gravity?`,
        answer: `(c) Buoyant Force`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_4",
        options: ["Joint Structure", "Previous Injury", "Efficiency of Lungs", "Age and Gender"],
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `Vital capacity is directly related to which of the following?`,
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
        question: `Which component of physical fitness is most important for a marathon runner?`,
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
        question: `Which coordinative ability involves coupling two or more movements of different body parts to perform perfect sports movements?`,
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
        question: `Which substance accumulates in the muscles during high-intensity exercise and contributes to fatigue?`,
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
        question: `Which force pulls objects toward the centre of the earth?`,
        answer: `(a) Weight`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_9",
        options: ["Both (A) and (R) are true and (R) is the correct explanation of (A).", "Both (A) and (R) are true, but (R) is not the correct explanation of (A).", "(A) is true, but (R) is false.", "(A) is false, but (R) is true."],
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Given below are two statements, one labelled as Assertion (A) and the other labelled as Reason (R). Read both the statements and choose the appropriate option.
Assertion (A): Regular physical activity improves cardiovascular health.
Reason (R): Exercise increases heart rate and strengthens the heart muscle.`,
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
        question: `What is the primary function of water in the human body?`,
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
        question: `Which vitamins are water-soluble?`,
        answer: `(b) Vitamin B and C`,
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
        question: `Which asana resembles a mountain and is performed from Padmasana by raising both hands above the head?`,
        answer: `(c) Parvatasana`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_13",
        options: ["18", "17", "20", "16"],
        year: 2023,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `What is the minimum age for participating in the Special Olympics?`,
        answer: `(a) 8 years`,
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
        question: `In which type of tournament is a team eliminated after losing a single match?`,
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
        question: `In which year were the Special Olympics officially recognised by the International Olympic Committee?`,
        answer: `(c) 1924`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_16",
        options: ["I-3, II-1, III-4, IV-2", "I-1, II-3, III-4, IV-2", "I-4, II-2, III-1, IV-3", "I-2, II-3, III-4, IV-1"],
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Match the types of runs in List I with their purposes in List II and select the correct option.`,
        answer: `(a) I-3, II-1, III-4, IV-2`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_MCQ_17",
        options: ["I-2, II-1, III-4, IV-3", "I-2, II-3, III-1, IV-4", "I-1, II-3, III-2, IV-4", "I-2, II-3, III-4, IV-1"],
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Match the types of levers in List I with their features in List II and choose the correct option.`,
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
        question: `What does the term 'Menarche' refer to?`,
        answer: `(b) Beginning of menstrual period in women`,
        source: "CBSE 2023 Board Exam",
    },
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
        question: `What is BMI? Calculate BMI of a child whose weight is 72 kg and height is 1.68 m.`,
        answer: `Body Mass Index (BMI) is a measure of body fat, based on height and weight of a person.

BMI = Weight (kg) / Height² (m²)
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
2. Have calorific value                     2. No calorific value
3. Consist of energy and body-         3. Consist of protecting elements
   building elements
4. Carbohydrates, fats, protein,       4. Vitamins and minerals
   water
(Any relevant 2 points)`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_25",
        year: 2023,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 3,
        question: `"Participation in physical activities is advantageous for children with special needs." Briefly explain any six advantages.`,
        answer: `1. Physical improvement
2. Mental improvement
3. Increase in self-esteem
4. Reduce the level of stress, anxiety and depression
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
        question: `Briefly explain the functions of Directing and Controlling in organising a sports event.`,
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
        question: `How can we enhance sports performance with the help of self-talk and self-esteem? Explain.`,
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
        question: `Elucidate any six effects of exercise on the muscular system.`,
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
        question: `What do you understand by round shoulders deformity? Suggest any four corrective measures for round shoulders.`,
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
    {
        id: "2023_31",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Case Study",
        marks: 4,
        question: `A fixture for a league tournament is shown in the diagram. Based on the fixture, answer the following questions:
(a) Which method is shown to draw the fixture in a league tournament?
(b) What is the formula to calculate the number of matches?
(c) On what basis is the winner decided in a League or Round Robin Tournament?
(d) If 7 teams participate in a league tournament, how many matches will be played?`,
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
        question: `Based on the illustration of a ball in motion, answer the following questions:
(a) Which law of motion is applied to initiate the motion of the ball as depicted in illustration A?
(b) In illustration B, which force is acting upon the ball to slow it down?
(c) Which law of motion determines the quality of bounce?
(d) The _________ of an object directly depends upon the mass of the object and the net force applied on it.`,
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
        question: `Based on the logos shown in the images, answer the following questions:
(a) Which picture's logo refers to Special Olympics?
(b) Who was the founder of Special Olympics?
(c) The hand shapes of 'OK', 'Good' and 'Great' that overlap each other in a circle represent the original sign for which event?
(d) How many countries participated in the first Paralympic Games in Rome (Italy) in 1960?`,
        imageUrl: "/PE_2023_qs_33.png",
        answer: `(a) C
(b) Eunice Kennedy Shriver
(c) Deaf Olympics / Deaflympics
(d) 23
OR (alternate): The motto of Paralympics is "Spirit in motion"`,
        source: "CBSE 2023 Board Exam",
    },
    {
        id: "2023_34",
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Long",
        marks: 5,
        question: `List down any four asanas used for prevention of hypertension. Explain the procedure and contraindications of any one of them with the help of a stick diagram.`,
        answer: `Asanas for hypertension (any 4):
Tadasana, Katichakrasana, Uttanpadasana, Ardha Halasana, Sarala Matsyasana, Gomukhasana, Uttan Mandukasana, Vakrasana, Bhujangasana, Makarasana, Shavasana, Nadishodhan Pranayam, Sheetali Pranayam

Procedure of Tadasana (specimen):
• Stand straight on the floor/mat
• Take a small gap between feet
• After deep inhalation, raise both arms
• Keep arms upward by interlocking fingers
• Rise on the toes by raising heels
• Feel the pressure of stretching from toes
• Try to maintain this pose with slow and deep breathing

Contraindications of Tadasana:
• People suffering from headaches, low blood pressure or insomnia should avoid it
• People with diarrhoea, neck and spinal injuries should avoid it
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
        question: `What is the purpose of the Rikli and Jones Fitness Test? Explain the procedure of any two test items in detail.`,
        answer: `Purpose: The senior citizen fitness test was developed by Rikli and Jones to assess the fitness of senior citizens. It contains six tests designed to assess lower body strength, upper body strength, lower and upper body flexibility, agility, and aerobic endurance.

Six test items:
1. Chair Stand Test
2. Arm Curl Test
3. Chair Sit and Reach Test
4. Back Scratch Test
5. Eight Foot Up and Go Test
6. Six Minute Walk Test

Chair Stand Test (procedure):
The chair should be placed against the wall. The individual sits with back straight, arms crossed, and feet firmly on the floor shoulder-width apart. On the command "Go", the individual stands up completely and returns to the initial sitting position (= one stand). The individual is motivated to do the maximum number of stands in 30 seconds. If the individual is halfway up when time ends, it is counted as a full stand.
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
        question: `What is Friction? Write the advantages and disadvantages of friction by giving suitable examples from sports.`,
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
        question: `Which pranayama is recommended for the management of obesity as per the prescribed syllabus?`,
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
        question: `In which year were the Special Olympics officially recognised by the IOC?`,
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
        question: `Which component of food is also known as dietary fibre and is not digested by the body?`,
        answer: `(c) Roughage`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_4",
        options: ["Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).", "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).", "Assertion (A) is true, but Reason (R) is false.", "Assertion (A) is false, but Reason (R) is true."],
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Given below are two statements, one labelled as Assertion (a) and the other labelled as Reason (r). Read both and choose the appropriate option.
Assertion (a): Intramural tournaments help in the overall development of students.
Reason (r): They provide opportunities for every student to participate in sports activities.`,
        answer: `(a) Both Assertion (a) and Reason (r) are true and Reason (r) is the correct explanation of Assertion (a).`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_5",
        options: ["I-1, II-2, III-3, IV-4", "I-1, II-2, III-4, IV-3", "I-2, II-4, III-1, IV-3", "I-2, II-4, III-3, IV-1"],
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Match the types of levers in List I with their features in List II and choose the correct option.`,
        answer: `(c) I-2, II-4, III-1, IV-3`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_6",
        options: ["Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).", "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).", "Assertion (A) is true, but Reason (R) is false.", "Assertion (A) is false, but Reason (R) is true."],
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Given below are two statements, one labelled as Assertion (a) and the other labelled as Reason (r). Read both and choose the appropriate option.
Assertion (a): Sports participation helps in the development of personality.
Reason (r): Sports teach discipline, teamwork and leadership skills.`,
        answer: `(a) Both Assertion (a) and Reason (r) are true and Reason (r) is the correct explanation of Assertion (a).`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_7",
        options: ["Speed", "Strength", "Endurance", "Flexibility"],
        year: 2024,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which component of physical fitness is most important for a cross-country runner?`,
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
        question: `Which of the following statements is correct regarding stability and the centre of gravity?`,
        answer: `(d) Higher centre of gravity leads to less stability`,
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
        question: `Which type of personality is characterised by a person who tends to focus only on themselves, shows little concern for others, and is often aloof?`,
        answer: `(b) Self-Centred`,
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
        question: `Which type of strength involves applying maximum force in the shortest possible time?`,
        answer: `(c) Explosive strength`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_MCQ_11",
        options: ["To achieve high performance", "To provide career opportunities", "To promote health and fitness", "To promote cultural and economic development"],
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `What is the main objective of conducting intramural activities?`,
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
        question: `At what age does the growth spurt typically occur in children?`,
        answer: `(c) 3–4 years`,
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
        question: `Identify the asana shown in the image.`,
        imageUrl: "/PE_2024_qs_13.png",
        answer: `(d) Shalbhasana
(For visually impaired: (b) Shavasana)`,
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
        question: `What does ICSD stand for in the context of sports for the deaf?`,
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
        question: `What is the normal BMI range for an adult?`,
        answer: `(c) 18.5–24.9`,
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
        question: `In the Back Scratch Test, the score is recorded as the distance between the middle fingers. What is the minimum overlap required to score positively?`,
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
        question: `Which domain of learning is concerned with knowledge, understanding and thinking skills?`,
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
        question: `Which component of fitness does the Chair Sit and Reach Test measure in senior citizens?`,
        imageUrl: "/PE_2024_qs_18.png",
        answer: `(c) Lower body flexibility
(For visually impaired: (c) Arm Curl Test)`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_19",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Short",
        marks: 2,
        question: `Describe the second-class lever with a suitable example from sports.`,
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
        question: `Enlist four test items of the Johnson-Metheny Test of Motor Educability.`,
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
• Average age for a girl to get her first period ranges from 8–15 years
(Or any other relevant description)`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_22",
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Short",
        marks: 2,
        question: `Enlist four asanas that help to control asthma.`,
        answer: `Tadasana, Urdhwahastottanasana, Uttan Mandukasana, Ushtrasana, Vakrasana, Matsyasana, Gomukhasana, Dhanurasana, Bhujangasana
(Any four from the above)`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_23",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 2,
        question: `Write any two advantages of physical activities for Children with Special Needs (CWSN).`,
        answer: `1. Physical benefits
2. Fun and recreation
3. Improved emotional health
4. Active lifestyle
5. Behavioural benefits
6. Increased independence
7. Psychological benefits
8. Improvement in cognitive and intellectual ability
9. Increase in sleep and appetite
10. Improvement in social skills
(Any 2 relevant advantages)`,
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
Water friction: Swimming in water, diving
(Any 2 types with a relevant example)`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_25",
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Short",
        marks: 3,
        question: `Mr. X performs the Harvard Step Test for 275 seconds and his pulse count in 1–1.5 min after exercise was 100. Write the formula of the fitness index score for the Harvard Step Test and calculate the fitness index score of Mr. X.`,
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
        question: `Comment on the concept of talent identification and talent development.`,
        answer: `Talent Identification: Recognising participants with the potential to become elite performers in the future. Physiological, Physical Fitness, Psychological and Technical components are considered. Methods include drills, test batteries, electronic gadgets, parameters, standard norms and performance analysis.

Talent Development: Providing athletes with a suitable learning environment to accelerate or realise their potential. It is a complete, systematic, scientific and long-term process.`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_27",
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Short",
        marks: 3,
        question: `Explain the responsibilities of any two committees required during a sports competition.`,
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

(Write the procedure and benefits of any one asana from the above)`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_29",
        year: 2024,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 3,
        question: `Write a short note on the Female Athlete Triad.`,
        answer: `The Female Athlete Triad consists of three interrelated conditions:

1. Eating Disorders (Low Energy Availability):
   • Anorexia Nervosa: Person severely limits food intake to prevent weight gain.
   • Bulimia Nervosa: Person eats large amounts of food in a short time and then purges.

2. Amenorrhea (Disruption of Menstrual and Endocrine Function):
   • Long absence of menstrual periods. Primary amenorrhea: first period does not start by age 15. Secondary amenorrhea: normal menstrual bleeding stops for 3 or more months.

3. Osteoporosis (Loss of Bone Mineral Density):
   • Bones lose minerals such as calcium faster than the body can replace them, leading to loss of bone density. Common sites: hip, spine, wrist, upper arm, forearm, ribs.
(Explain all 3)`,
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
13. Decrease in mobility
(Explain any 3 points)`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_31",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Case Study",
        marks: 4,
        question: `Based on the table showing participation of children with disabilities in different events, answer the following questions:
(a) In which event is there no participation of special children?
(b) Participation of students with disabilities in regular physical education classes is known as _________.
(c) Enlist any two strategies to make physical activities accessible for children with special needs.
(d) The motto of Special Olympics is _________.`,
        imageUrl: "/PE_2024_qs_31.png",
        answer: `(a) Long Jump
(b) Inclusion / Adaptive Physical Education
(c) Any two from: Create specific environment, assess physical and mental ability, modified rules, use of modified equipment, plan activity as per need, plan additional support of parents and trained assistants, extra care for safety
(d) "Let me win. But if I cannot win, let me be brave in the attempt."
OR: "Joy and Happiness for all the children of the world."
OR: The motto of Paralympics is "Spirit in motion."`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_32",
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Case Study",
        marks: 4,
        question: `Based on the images of different types of fractures, answer the following questions:
(a) Which type of fracture is shown in Image 1?
(b) When a bone breaks diagonally as shown in Image 2, it is known as _________.
(c) _________ fracture occurs when the broken ends of the bones are jammed together by the force of injury.
(d) In which type of fracture is the bone broken, splintered or crushed into a number of pieces?`,
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
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Case Study",
        marks: 4,
        question: `Based on the knockout tournament fixture shown, answer the following questions:
(a) What is the total number of rounds in this fixture?
(b) If the winner team plays the least number of matches, which serial number team is the winner?
(c) What is the formula to calculate the number of matches in a knockout tournament?
(d) If 16 teams are participating in a knockout tournament, how many byes will be given?`,
        imageUrl: "/PE_2024_qs_33.png",
        answer: `(a) 4 (four)
(b) Serial no. 15
(c) Number of matches = N – 1 (where N = Number of teams)
(d) 0 (zero) byes — since 16 is already a power of 2
OR Formula for byes: Next higher Power of 2 – Number of Teams`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_34",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Long",
        marks: 5,
        question: `What do you understand by aggression in sports? Explain any two types of aggression by giving suitable examples from sports.`,
        answer: `Aggression: A type of behaviour aimed at causing physical or psychological harm to another person.

Types (any 2):
1. Instrumental Aggression: Necessary to achieve performance goals; displayed in a planned manner. Purpose is not to harm but to achieve goals. E.g. In football, a player snatches the ball from an opponent aggressively to score a goal, not to harm. Common in wrestling, kabaddi, boxing.

2. Hostile Aggression: Purpose is to cause physical or psychological harm, usually as a reaction to someone's action. Main aim is to injure the opponent. E.g. In kabaddi, players try to inflict injury on the raider after catching them; in hockey, hitting with the stick purposely to injure.

3. Assertive Behaviour: Forceful behaviour not intended to injure the opponent; within the rules of the game. Intention is to establish dominance rather than harm. E.g. A rugby player using aggression to tackle an opponent to win the ball.`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_35",
        year: 2024,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Long",
        marks: 5,
        question: `What is a balanced diet? What is the significance of pre-competition and post-competition meals for an athlete? Explain.`,
        answer: `Balanced Diet: A diet that consists of all essential food elements — Proteins, Carbohydrates, Vitamins, Fats, Minerals and Water in the correct proportion.

Importance of Pre-Competition Meals:
1. Focus is to fuel up muscle glycogen stores — meal should have moderate protein, low fat, low fibre and high carbohydrates.
2. Proper hydration is essential to control fatigue and hunger.
3. Should be light for a comfortable gastro-intestinal state.
4. Should be taken 2–4 hours before competition.
5. New food or food with known allergies should be avoided.

Importance of Post-Competition Meals:
1. Main focus is on recovery of the body and reducing chances of injury.
2. Fluids lost during competition must be replenished.
3. Carbohydrate stores (muscle glycogen) must be refilled.
4. Electrolytes (sodium, potassium, chloride) must be recovered.
5. Within two hours of the event, a balanced meal including carbohydrates and good quality proteins should be eaten.`,
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
        answer: `Projectile Trajectory: When any object is projected in the air, forces of gravity and air resistance result in a curved or parabolic path, known as projectile trajectory.

Factors:
1. Angle of Projection: At 45°, maximum horizontal distance is achieved.
2. Initial Velocity: Greater the initial velocity, greater the horizontal distance.
3. Gravity: Greater the weight of an object, greater the influence of gravity; gravitational pull stops the upward movement and decreases the height of the projectile.
4. Air Resistance: Surface area, speed, surface texture and mass of the object affect air resistance.
5. Spin: Changes the path of the projectile. The amount and direction of spin directly affects the distance the projectile travels, as air pressure acts on the ball.`,
        source: "CBSE 2024 Board Exam",
    },
    {
        id: "2024_37",
        year: 2024,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "Long",
        marks: 5,
        question: `What is endurance? Explain any two types of endurance on the basis of duration of the activity with suitable examples from sports.`,
        answer: `Endurance: The ability of the body to sustain a physical activity for a longer duration of time.
OR: The ability to resist fatigue.
OR: The result of physiological capabilities of an individual to sustain movement over a period of time.

Types on the basis of duration:
1. Short-term Endurance: Activities lasting 45 seconds to 2 minutes. E.g. 400 m race, 800 m race.
2. Medium-term Endurance: Activities lasting 2 to 10 minutes. E.g. 1500 m run, 3000 m run.
3. Long-term Endurance: Activities lasting more than 10 minutes. E.g. marathon, cross-country race.
(Explain any 2 with relevant example)`,
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
        question: `Match the types of fractures in List I with their features in List II and choose the correct option.
List I: (a) Transverse, (b) Oblique, (c) Greenstick, (d) Comminuted
List II: (i) Bone breaks diagonally, (ii) Bone is crushed into a number of pieces, (iii) Straight break right across a bone, (iv) Soft bone in which the bone bends`,
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
        question: `Match the traits of the Big Five Theory in List I with their characteristics in List II and choose the correct option.
List I: (a) Openness, (b) Extroversion, (c) Neuroticism, (d) Agreeableness
List II: (i) Active, optimistic and social, (ii) Insecure, nervous and anxious, (iii) Creative, focused on tackling new challenges and curious, (iv) Friendly, helpful and trustworthy`,
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
    // ─────────────────────────────────────────────
    //  2023 Compartment
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
        answer: "Technical",
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_2",
        year: 2023,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `First menstrual period in a young girl is called:`,
        options: ["Menstrual dysfunction", "Osteoporosis", "Amenorrhea", "Menarche"],
        answer: "Menarche",
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
        answer: "Shavasana",
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
        answer: "Eunice Kennedy Shriver",
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
        answer: "3 – 7 days",
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
        answer: "Strength",
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
        answer: "Ligament",
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_8",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is NOT a Jung's classification of personality?`,
        options: ["Introvert", "Endomorph", "Extrovert", "Ambivert"],
        answer: "Endomorph",
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_9",
        year: 2023,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `The ability to combine the movement of different body parts is known as:`,
        options: ["Coupling ability", "Reaction ability", "Rhythm ability", "Adaptation ability"],
        answer: "Coupling ability",
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_10",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Assertion (A): Aggression is a type of hostile behaviour aimed to harm other persons.
Reason (R): Aggression is unintentional.
Which one of the following is correct?`,
        options: [
            "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).",
            "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of the Assertion (A).",
            "Assertion (A) is true, but Reason (R) is false.",
            "Assertion (A) is false, but Reason (R) is true."
        ],
        answer: "Assertion (A) is true, but Reason (R) is false.",
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_11",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `Match List I (A. Abrasion, B. Fracture, C. Dislocation, D. Strain) with List II (i. Joint, ii. Bone, iii. Muscle, iv. Skin):`,
        options: [
            "A-(iv), B-(ii), C-(i), D-(iii)",
            "A-(iv), B-(ii), C-(iii), D-(i)",
            "A-(iv), B-(i), C-(iii), D-(ii)",
            "A-(iii), B-(iv), C-(ii), D-(i)"
        ],
        answer: "A-(iv), B-(ii), C-(i), D-(iii)",
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_12",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Fats and oils come under:`,
        options: ["Bodybuilding foods", "Protective foods", "Routine foods", "Energy-giving foods"],
        answer: "Energy-giving foods",
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
        answer: "8",
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_14",
        year: 2023,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Flat foot deformity is also known as:`,
        options: ["Genu varum", "Pes planus", "Genu valgum", "Lateral curvature"],
        answer: "Pes planus",
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_15",
        year: 2023,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Suryabhedi Pranayam is performed to control:`,
        options: ["Obesity", "Diabetes", "Asthma", "Hypertension"],
        answer: "Obesity",
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_16",
        year: 2023,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `The purpose of Plate Tapping Test is:`,
        options: [
            "To know the strength of hands",
            "To know the cardiovascular efficiency",
            "To know hand-eye quickness and co-ordination",
            "To know the flexibility"
        ],
        answer: "To know hand-eye quickness and co-ordination",
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
        answer: "Magnesium Powder",
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_18",
        year: 2023,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Which Newton's law of motion will be applied at the time of take-off in long jump?`,
        options: ["Law of Acceleration", "Law of Inertia", "Law of Reaction", "Law of Gravity"],
        answer: "Law of Reaction",
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_19",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Short",
        marks: 2,
        question: `Explain any two functions of marketing committee, before and during the sports competition.`,
        answer: `Pre-event: arranging sponsorships, publicity, press release, event campaigns, food/drink partners. During event: works with media, issues press releases, manages communication, arranges telecast. (Any 2 from each)`,
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
        answer: `Horse-riding exercises; keeping pillow between knees and standing erect; Padmasana and Gomukhasana; Vrikshasana; leg raises seated/lying; using walking calipers; outward walking on outer edge of foot. (Any 4)`,
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
        answer: `Increases lung capacity; massages abdominal organs and improves digestion; purifies frontal air sinuses; useful for cold, sinusitis, asthma; increases metabolic rate and aids weight loss; improves blood circulation; removes acidity and gas; reduces CO2 in blood; relieves anxiety; beneficial for insomnia. (Any 4)`,
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
        answer: `Sources: Plant (pulses, beans, nuts, grains); Animal (eggs, meat, fish, milk). Functions: Drives metabolic reactions; strengthens immune system; repair and builds body tissues; transports and stores nutrients; forms antibodies; regulates water and acid balance. (Any 2 sources + any 2 functions)`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_23",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 2,
        question: `Write any two physiological factors determining speed.`,
        answer: `1. Nervous system and its mobility. 2. Composition of muscle fibres – larger the fast twitch fibres, more the speed. 3. Flexibility – better flexibility helps generate better speed. 4. Phosphogen stores – energy stored in muscle determines speed of movement. (Any 2)`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_24",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 2,
        question: `According to Big Five Theory, write any two traits of personality.`,
        answer: `Openness (imaginative, creative, curious); Conscientiousness (self-disciplined, goal-driven, organised); Extraversion (energetic, talkative, social); Agreeableness (friendly, cooperative, kind, trustworthy); Neuroticism (insecure, anxious, hostile, impulsive). (Any 2)`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_25",
        year: 2023,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 3,
        question: `Explain any three effects of exercise on the cardio-respiratory system.`,
        answer: `Blood flow in arteries and veins increases (cardiac output and stroke volume); blood pressure decreases; number of capillaries increases; size of heart increases; vital capacity improves; aerobic and anaerobic capacity improves; breathing rate decreases; resting heart rate decreases; increase in VO2 max. (Any 3)`,
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
        answer: `1. Fibre/Roughage – undigested part of food; adds bulk; sources: whole cereals, fresh fruits/vegetables. 2. Water – essential component; transports nutrients; helps excretion of waste. 3. Flavouring Agents – enhance taste of food; derived from nutritive and non-nutritive components. 4. Colour Compounds – make food attractive; derived from natural or artificial pigments. (Any 3)`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_27",
        year: 2023,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "Short",
        marks: 3,
        question: `Discuss about the female athlete triad.`,
        answer: `1. Osteoporosis – weak bones. 2. Amenorrhea – Primary amenorrhea; Secondary amenorrhea. 3. Eating disorder – Anorexia nervosa; Bulimia nervosa.`,
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
        answer: `Purpose: Measures flexibility of lower back and hamstring muscles. Procedure: Sit on floor with legs stretched straight; remove shoes; soles flat against the box; knees locked and pressed flat; palms facing down, hands on top of each other, reach forward as far as possible; hold position for 1–2 seconds; record the distance. No jerky movements.`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_29",
        year: 2023,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Short",
        marks: 3,
        question: `Write a short note on Paralympic Games.`,
        answer: `International multisport events for athletes with a range of disabilities; first held in 1960 in Rome; held after respective Summer and Winter Olympics; governed by International Paralympic Committee; athletes compete in six disability groups – Amputee, Cerebral palsy, Visual impairment, Spinal cord injuries, Intellectual disability, and Les autres (e.g., Dwarfism).`,
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
        answer: `Procedure: Lie on back, stretch legs straight; bend right knee, hold with hands pressing towards abdomen; exhale and lift head to touch knee with chin; inhale and return; repeat with left leg; then press abdomen with both legs, chin between knees. Benefits: Stretches neck and back; releases trapped gases from large intestine; improves digestive system; relieves constipation; strengthens lower back; reduces fat in abdomen/thighs/buttocks. (Procedure 2 marks + any 2 benefits 1 mark)`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_31",
        year: 2023,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Case Study",
        marks: 4,
        question: `Vitamins and minerals are essential nutrients. (i) ______ is a group of 8 water-soluble vitamins important for cellular metabolism. (ii) ________ disease is caused due to lack of Vitamin C. (iii) Vitamin ________ is important for healthy bones and teeth. (iv) Vitamin ______ is needed for blood-clotting. [OR for visually impaired: What is Vitamin? Explain functions and sources of Vitamin A and D.]`,
        answer: `(i) Vitamin B (ii) Scurvy (iii) D (iv) K [OR Night blindness – deficiency of Vitamin A]`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_32",
        year: 2023,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Case Study",
        marks: 4,
        question: `Senior citizen fitness tests (pictures A, B, C shown). (i) Name the test used to measure upper body flexibility. (ii) In Arm Curl Test, weight of dumbbell for women is __________ pounds. (iii) Purpose of Chair-Stand Test is to measure ___________. (iv) In which test is stop watch not used? [OR visually impaired: Rikli and Jones Senior Citizen Test was developed in the year ___________.]`,
        answer: `(i) Back Scratch Test (ii) 5 pounds (iii) Lower body strength (iv) Chair Sit and Reach Test / Back Scratch Test [OR 2001]`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_33",
        year: 2023,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Case Study",
        marks: 4,
        question: `Psychological attributes affect performance. (i) An image created in the mind in the absence of any external stimuli is known as ________. (ii) _______ is an effective technique to control thoughts and influence feelings. (iii) ________ is necessary to achieve the target within a specified time. (iv) ______ is centred around a belief in the self, respect for self and confidence for self. [OR visually impaired: Discuss how self-talk and mental imagery can improve athlete performance.]`,
        answer: `(i) Mental imagery (ii) Self-talk (iii) Goal setting (iv) Self-esteem`,
        source: "CBSE 2023 Compartment Exam",
    },
    {
        id: "C_2023_34",
        year: 2023,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Long",
        marks: 5,
        question: `Prepare a knockout fixture of 15 teams mentioning all the steps involved. [OR for visually impaired: (i) Calculate total matches for 15 teams in knockout. (ii) Formula to calculate Byes. (iii) What is Seeding? (iv) Methods to prepare fixtures in league tournaments. (v) Formula to calculate matches in league tournament.]`,
        answer: `N=15; Matches=N-1=14; NB=16-15=1; Upper half=(15+1)/2=8 teams; Lower half=(15-1)/2=7 teams; Byes in upper=(NB-1)/2=0; Byes in lower=(NB+1)/2=1. [Visually impaired: (i) 14 matches (ii) Next power of 2 minus N (iii) Arranging strong teams in appropriate positions so they don't meet in preliminary rounds (iv) Staircase, Cyclic, Tabular method (v) N(N-1)/2]`,
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
        answer: `Projectile: Any object thrown/hurled/fired/tossed in the air, acted upon by gravity and drag. Factors: 1. Angle of projection – 45° gives maximum horizontal distance. 2. Initial velocity – greater velocity gives greater distance. 3. Gravity – 9.8 m/s² at Earth's surface; decreases at altitude. 4. Air resistance – affected by surface area, speed, mass, and surface of object. 5. Spin – changes path; amount/direction of spin affects distance. (Any 4)`,
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
        answer: `Speed: Capability of the body to perform successive movement at the fastest rate / ability to execute motor movements as quickly as possible. Methods: 1. Acceleration Runs – run a specific distance, attain max speed from static position, repeat with sufficient rest. 2. Pace Runs – running a set distance at uniform speed; used for 800m and above; pace maintained throughout; repetition as per athlete's level.`,
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
        answer: `1. Medical checkup to assess disability type. 2. Activities based on children's interests. 3. Equipment adapted to their needs. 4. Specific accessible environment/space. 5. Variety of instructional strategies (verbal, visual, peer teaching). 6. Modified rules. 7. Consider previous experience. 8. Graded activities. 9. Inclusive strategies. 10. Psychological strategies – motivation, learning new skills. (Any 5)`,
        source: "CBSE 2023 Compartment Exam",
    },
    // ─────────────────────────────────────────────
    //  2024 Compartment
    // ─────────────────────────────────────────────

    {
        id: "C_2024_1",
        year: 2024,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `As per the division process of age in Special Olympics, which of the following is the appropriate age division for team games?`,
        options: ["13 and under", "8 – 11 years", "30 and above", "16 – 21 years"],
        answer: "16 – 21 years",
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_2",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `A girl is participating in sports for 2 years. Identify the psychological benefits for her from the following:`,
        options: [
            "Helps in increasing bone density",
            "Helps in improving muscle tone",
            "Helps to improve self-esteem",
            "Helps in improving communication"
        ],
        answer: "Helps to improve self-esteem",
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_3",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `__________ is characterized by high sociability, if a person is outgoing and has a tendency to seek stimulation in the company of others.`,
        options: ["Conscientiousness", "Agreeableness", "Extraversion", "Neuroticism"],
        answer: "Extraversion",
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_4",
        year: 2024,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `Which of the following is a short term effect of exercise on the muscular system?`,
        options: ["Hypertrophy of muscles", "Increase in glycogen storage", "Increase in muscle temperature", "Increase in lactic acid tolerance"],
        answer: "Increase in muscle temperature",
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
        answer: "Sodium",
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_6",
        year: 2024,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Given below are the options for number of participating teams in a tournament. Which option will have highest number of Byes while drawing a fixture?`,
        options: ["17", "18", "19", "20"],
        answer: "17",
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_7",
        year: 2024,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Match the following — Column I: I. Sliding friction, II. Fluid friction, III. Rolling friction, IV. Static friction — Column II: 1. Cycling, 2. Ice skating, 3. Try to push heavy object, 4. Swimming`,
        options: [
            "I-2, II-1, III-3, IV-4",
            "I-2, II-1, III-4, IV-3",
            "I-2, II-4, III-1, IV-3",
            "I-4, II-2, III-3, IV-1"
        ],
        answer: "I-2, II-4, III-1, IV-3",
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_8",
        year: 2024,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Identify the asana shown in the picture given below:`,
        options: ["Tadasana", "Katichakrasana", "Pawanmuktasana", "Garudasana"],
        answer: "Pawanmuktasana",
        imageUrl: "/PE_C_2024_qs_8.png",
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_9",
        year: 2024,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `SAI Khelo India Fitness Test is introduced in schools for two groups, namely class 1–3 and class 4–12. Which of the following test item is common for both groups?`,
        options: ["Plate Tapping Test", "Body Mass Index Test", "Sit and Reach Test", "50 mts Dash"],
        answer: "Body Mass Index Test",
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
        answer: "Ballistic method",
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
        answer: "Seven",
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
        answer: "20 inches",
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
        answer: "Finance",
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
        answer: "Mandukasana",
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_15",
        year: 2024,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "MCQ",
        marks: 1,
        question: `Assertion (A): Self-esteem is centred around a belief in the self and respect for the self.
Reason (R): Mental imagery is a psychological skill, that can be created in the mind in the absence of any external stimuli.
Which one of the following is correct?`,
        options: [
            "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).",
            "Both Assertion (A) and Reason (R) are true and Reason (R) is not the correct explanation of the Assertion (A).",
            "Assertion (A) is true, but Reason (R) is false.",
            "Assertion (A) is false, but Reason (R) is true."
        ],
        answer: "Both Assertion (A) and Reason (R) are true and Reason (R) is not the correct explanation of the Assertion (A).",
        source: "CBSE 2024 Compartment Exam",
    },
    {
        id: "C_2024_16",
        year: 2024,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Assertion (A): Menarche is usually considered the point of sexual maturity for girls.
Reason (R): Menstrual dysfunction is an abnormal condition in a woman's menstrual cycle.
Which one of the following is correct?`,
        options: [
            "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of the Assertion (A).",
            "Both Assertion (A) and Reason (R) are true and Reason (R) is not the correct explanation of the Assertion (A).",
            "Assertion (A) is true, but Reason (R) is false.",
            "Assertion (A) is false, but Reason (R) is true."
        ],
        answer: "Both Assertion (A) and Reason (R) are true and Reason (R) is not the correct explanation of the Assertion (A).",
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
        answer: "Vitamin-B",
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
        answer: "Side Roll",
        source: "CBSE 2024 Compartment Exam",
    },
    // ─────────────────────────────────────────────
    //  2025 Compartment
    // ─────────────────────────────────────────────

    {
        id: "C_2025_1",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `Seeding is decided on the basis of:`,
        options: ["Previous Performance", "Future Performance", "Current Performance", "Bad Performance"],
        answer: "Previous Performance",
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_2",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "MCQ",
        marks: 1,
        question: `In a knock-out tournament, if byes are in odd numbers, then number of byes in lower half is calculated by:`,
        options: ["(NB + 1) / 2", "NB / 2", "(NB - 1) / 2", "NB"],
        answer: "(NB + 1) / 2",
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
        options: ["Size and strength of heart increases", "Increase in heart rate", "Blood volume increases", "Resting heart rate decreases"],
        answer: "Increase in heart rate",
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_4",
        year: 2025,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "MCQ",
        marks: 1,
        question: `Identify the asana:`,
        options: ["Vakrasana", "Gomukhasana", "Shalabhasana", "Urdhva Hastottanasana"],
        answer: "Vakrasana",
        imageUrl: "/PE_C_2025_qs_4.png",
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_5",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "MCQ",
        marks: 1,
        question: `Dr. Ludwig Guttmann is related to:`,
        options: ["Paralympic Games", "Olympic Games", "Asian Games", "Commonwealth Games"],
        answer: "Paralympic Games",
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_6",
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `If the menstrual cycle does not begin at puberty, the condition is called:`,
        options: ["Primary Amenorrhea", "Secondary Amenorrhea", "Oligomenorrhea", "Menarche"],
        answer: "Primary Amenorrhea",
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_7",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "MCQ",
        marks: 1,
        question: `Assertion (A): Balanced diet is the diet which contains all the essential nutrients in adequate quantity and proportion.
Reason (R): Requirement of food depends upon age, type of work, etc.
Which one of the following is correct?`,
        options: [
            "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
            "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).",
            "Assertion (A) is true, but Reason (R) is false.",
            "Assertion (A) is false, but Reason (R) is true."
        ],
        answer: "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).",
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
        answer: "2.3 kg",
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_9",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "MCQ",
        marks: 1,
        question: `Back Scratch Test is used to measure:`,
        options: ["Lower body strength", "Lower body flexibility", "Upper body flexibility", "Upper body strength"],
        answer: "Upper body flexibility",
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_10",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "MCQ",
        marks: 1,
        question: `Match List I (a. Size of muscle, b. Fast Twitch Fibre, c. Aerobic capacity, d. Joint structure) with List II (i. Determines endurance, ii. Determines strength, iii. Determines speed, iv. Determines flexibility):`,
        options: [
            "a-iii, b-iv, c-ii, d-i",
            "a-ii, b-iii, c-i, d-iv",
            "a-i, b-ii, c-iv, d-iii",
            "a-iv, b-i, c-iii, d-ii"
        ],
        answer: "a-ii, b-iii, c-i, d-iv",
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
        options: ["Back bend in standing position", "Forward bend in standing position", "Leg raised in sitting position", "Head raised in lying position"],
        answer: "Back bend in standing position",
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_12",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Assertion (A): Newton's third law of motion concludes that forces occur in pairs of action and reaction.
Reason (R): The action force is more than the reaction force.
Which one of the following is correct?`,
        options: [
            "Both Assertion (A) and Reason (R) are true and Reason (R) is the correct explanation of Assertion (A).",
            "Both Assertion (A) and Reason (R) are true, but Reason (R) is not the correct explanation of Assertion (A).",
            "Assertion (A) is true, but Reason (R) is false.",
            "Assertion (A) is false, but Reason (R) is true."
        ],
        answer: "Assertion (A) is true, but Reason (R) is false.",
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_13",
        year: 2025,
        chapter: "Children & Women in Sports",
        topic: "Children & Women in Sports",
        type: "MCQ",
        marks: 1,
        question: `Children aged 3 – 4 years should engage in physical activities for:`,
        options: ["120 minutes", "60 minutes", "180 minutes", "45 minutes"],
        answer: "180 minutes",
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_14",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "MCQ",
        marks: 1,
        question: `Match List I (a. Polishing, b. Lubrication, c. Shoes and spikes, d. Use of ball bearings) with List II (i. Makes surface slippery, ii. Makes surface smooth, iii. Replaces sliding friction with rolling friction, iv. Designed to increase friction so that better speed is generated):`,
        options: [
            "a-iv, b-iii, c-ii, d-i",
            "a-ii, b-i, c-iv, d-iii",
            "a-iii, b-iv, c-i, d-ii",
            "a-i, b-ii, c-iii, d-iv"
        ],
        answer: "a-ii, b-i, c-iv, d-iii",
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
        answer: "Submissiveness",
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
        answer: "Extrovert",
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_17",
        year: 2025,
        chapter: "Training in Sports",
        topic: "Training in Sports",
        type: "MCQ",
        marks: 1,
        question: `The duration of micro cycle is:`,
        options: ["3 to 6 weeks", "3 to 10 days", "3 to 12 months", "3 to 10 years"],
        answer: "3 to 10 days",
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
        answer: "Ballistic method",
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_19",
        year: 2025,
        chapter: "Yoga & Lifestyle",
        topic: "Yoga & Lifestyle",
        type: "Short",
        marks: 2,
        question: `Explain the correct breathing pattern while performing Nadi-Shodhana Pranayama.`,
        answer: `Place right hand in Pranayama mudra; close right nostril with thumb; inhale through left nostril for 5 counts; release thumb, close left nostril with ring finger; exhale through right nostril for 10 counts; then inhale through right nostril for 5 counts and repeat. No sound should be produced.`,
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
        answer: `An abnormal condition in a woman's menstrual cycle. Normal range is 21–35 days. If it occurs earlier than 21 days or after 35 days it is a problem. Also includes missing 3+ periods, heavier/lighter flow than usual, cycle longer than 7 days, painful menstruation, or bleeding after menopause.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_21",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Short",
        marks: 2,
        question: `Roughage is an essential component for our body. Explain this statement by enumerating the functions of roughage.`,
        answer: `Improves digestion; promotes gut health; reduces risk of heart disease; manages weight and blood sugar; reduces bowel irritation; keeps digestive system clean; prevents constipation; satisfies appetite; softens stool. (Any 2 functions)`,
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
        answer: `Measures abdominal/core strength and endurance.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_23",
        year: 2025,
        chapter: "Psychology & Sports",
        topic: "Psychology & Sports",
        type: "Short",
        marks: 2,
        question: `Differentiate between extroverts and introverts.`,
        answer: `Extroverts: social, outgoing, confident, make friends easily, generous, supportive, action-oriented. Introverts: reserved, self-conscious, more interested in own thoughts, self-centred, think before acting, tend to be poets/artists/writers. (Any 2 differences)`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_24",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Short",
        marks: 2,
        question: `Write any two physiological factors to determine strength.`,
        answer: `1. Muscle composition (slow and fast twitch fibres). 2. Size of muscle. 3. Body weight. 4. Intensity of nerve impulse. 5. Muscle coordination. (Any 2)`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_25",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Short",
        marks: 3,
        question: `Differentiate between Knock-out and League tournament.`,
        answer: `Knockout: teams eliminated on losing; strong teams may exit early; less expensive; less time; seeding used; also called Elimination tournament. League: every team plays each other; true winner emerges; more expensive; more time; no seeding; also called Round Robin tournament. (Any 3 differences)`,
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
        answer: `Knock Knees (Genu Valgum): legs bent inward, knees strike while walking. Corrective: horse riding, Padmasana/Gomukhasana, outward walking, pillow between knees. Flat Foot (Pes Planus): arch of foot less than normal. Corrective: walk barefoot on sand, rope skipping, picking marbles with toes, Adhomukhasana/Vajrasana. (Any 2 deformities with corrective measures)`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_27",
        year: 2025,
        chapter: "Test & Measurement in Sports",
        topic: "Test & Measurement in Sports",
        type: "Short",
        marks: 3,
        question: `What is the purpose of conducting the Sit and Reach test? Write the procedure for conducting this test.`,
        answer: `Purpose: Measures flexibility of lower back and hamstring muscles. Procedure: Sit on floor, legs stretched straight; remove shoes; soles flat against box; knees locked and flat; extend hands for initial reading; reach forward with palms down, hands stacked, as far as possible for final reading; hands at same level; no jerky movements.`,
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
        answer: `Asanas: Tadasana, Urdhwahastottanasana, Ardha Chakrasana, Ushtrasana, Vakrasana, Saral Matsyendrasana, Bhujangasana, Gomukhasana, Bhadrasana, Makarasana. Procedure of Tadasana: Stand with feet together; distribute weight equally; raise arms over head, interlock fingers, palms upward; inhale and stretch arms/shoulders/chest upward; raise heels onto toes; hold for a few seconds; lower heels on exhale and bring hands down.`,
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
        answer: `8 types: 1. Impaired muscle power. 2. Impaired passive range of movement. 3. Loss of limb or limb deficiency. 4. Leg-length difference. 5. Short stature. 6. Hypertonia. 7. Ataxia. 8. Athetosis. (Any 3)`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_30",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Short",
        marks: 3,
        question: `Why are the angles of release for shotput, javelin and discus throw different? Explain.`,
        answer: `1. Different aerodynamic properties due to shape of equipment affect the optimal angle of release. 2. Different throwing action/style for each event leads to different angles. 3. Different weight of equipment results in different optimal release angles.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_31",
        year: 2025,
        chapter: "Planning in Sports",
        topic: "Planning in Sports",
        type: "Case Study",
        marks: 4,
        question: `In a badminton competition with 7 players, 3 were eliminated in the first round. (i) What type of tournament is this? (A) Round Robin (B) Knock-out (C) Challenge (D) Knock-out Cum League. (ii) Total matches if it were a Round Robin tournament? (A) 18 (B) 17 (C) 21 (D) 16. (iii) An advantage of knock-out tournament is? (A) Takes less time (B) Weak teams may enter final (C) Strong teams may get eliminated (D) More expensive. (iv) Formula to calculate byes in upper-half is? (A) N (B) (N+1)/2 (C) (NB+1)/2 (D) NB/2.`,
        answer: `(i) B – Knock-out Tournament (ii) C – 21 (iii) A – It takes less time (iv) D – NB/2`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_32",
        year: 2025,
        chapter: "Physical Education & Sports for CWSN",
        topic: "Physical Education & Sports for CWSN",
        type: "Case Study",
        marks: 4,
        question: `The 10th Asia Pacific Deaf Games were held in Kuala Lumpur, Malaysia (medal table shown). (i) The first Deaflympic Games were held in the year ___. (A) 1924 (B) 1984 (C) 1948 (D) 1954. (ii) How many athletes participated in the Judo tournament? (A) 2 (B) 4 (C) 6 (D) 8. (iii) How many silver medals were clinched in wrestling? (A) 1 (B) 2 (C) 6 (D) 3. (iv) In which year was the logo of Deaflympics designed? (A) 2001 (B) 2002 (C) 2003 (D) 2005. [OR visually impaired (NEP 2020/CWSN context): (i) Least preferred strategy for CWSN? (ii) Social strategy for making activity accessible? (iii) Where should physical activity start first for CWSN? (iv) Effective inclusive PE programme includes?]`,
        answer: `(i) A – 1924 (ii) C – 6 (iii) A – 1 (iv) C – 2003 [OR visually impaired: (i) B – Use of standard equipment only (ii) A – Increasing interaction among CWSN (iii) C – From an indoor activity (iv) A – Simple to complex activities]`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_33",
        year: 2025,
        chapter: "Physiology & Injuries in Sports",
        topic: "Physiology & Injuries in Sports",
        type: "Case Study",
        marks: 4,
        question: `A handball team reached semifinals but arrived at venue late, so Rohit did not warm up and got injured. (i) What was the cause of injury? (A) Lack of warming-up (B) Improper equipment (C) Collision with another player (D) Improper coaching. (ii) Which injury occurs due to tear of ligament? (A) Contusion (B) Strain (C) Sprain (D) Abrasion. (iii) Which refers to any collection of blood outside a vessel? (A) Incision (B) Abrasion (C) Contusion (D) Laceration. (iv) Fracture of a bone without breaking is called __________. (A) Oblique fracture (B) Impacted fracture (C) Comminuted fracture (D) Green stick fracture.`,
        answer: `(i) A – Lack of warming-up (ii) C – Sprain (iii) C – Contusion (iv) D – Green stick fracture`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_34",
        year: 2025,
        chapter: "Sports & Nutrition",
        topic: "Sports & Nutrition",
        type: "Long",
        marks: 5,
        question: `Vitamins are divided into two different categories. Enlist them and explain any two vitamins with their deficiency diseases.`,
        answer: `Fat soluble: Vitamin A, D, E, K. Water soluble: Vitamin B and C. Any 2 vitamins with function and deficiency, e.g.: Vitamin A – vision in dim light; deficiency: Night blindness, Xerophthalmia. Vitamin D – absorption of calcium/phosphorus; deficiency: Rickets, Osteomalacia. Vitamin C – wound healing, metabolic rate; deficiency: Scurvy. Vitamin K – prevention of haemorrhage; deficiency: blood does not clot.`,
        source: "CBSE 2025 Compartment Exam",
    },
    {
        id: "C_2025_35",
        year: 2025,
        chapter: "Biomechanics & Sports",
        topic: "Biomechanics & Sports",
        type: "Long",
        marks: 5,
        question: `Define friction. What are the advantages and disadvantages of friction in the field of games and sports? Explain with suitable examples.`,
        answer: `Friction: A force acting over the area of contact between two surfaces, in the direction opposite to motion / a force that resists movement. Advantages: Running/walking due to friction between ground and shoes (spikes/studs); grip in badminton/tennis; friction prevents cyclist from slipping; gymnasts/javelin throwers use magnesium powder. Disadvantages: Excessive friction in cycle tyres wastes energy; air resistance slows projectiles; loss of grip on pole vault pole can cause injury; sliding across ground can cause injuries. (Any 2 advantages + 2 disadvantages)`,
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
        answer: `Need: Builds self-esteem; improves social skills; enhances sensitivity; creates better understanding; creates sense of belongingness; enhances academic participation. Measures: Equipping teachers; developing support from stakeholders; curriculum transaction; designing CWSN-friendly classrooms; developing education goals; Right to Education. (Any 2 needs + any 3 measures)`,
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
        answer: `Speed: Capability of the body to perform successive movements at the fastest rate / ability to execute motor movements as quickly as possible. Methods: 1. Acceleration Runs – develop speed from static position; run specific distance at max speed; repeated with sufficient rest; sets based on age, capacity, fitness. 2. Pace Runs – running a set distance at uniform speed; for 800m and above; pace maintained throughout; repetitions as per athlete's level.`,
        source: "CBSE 2025 Compartment Exam",
    },
];
