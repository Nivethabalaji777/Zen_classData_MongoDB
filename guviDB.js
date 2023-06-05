// users
db.users.insertMany([
    {
      user_id: 1,
      name: "Nivetha T",
      email: "nivethabharathi77@gmail.com",
      mentor_id: 1,
    },
    {
      user_id: 2,
      name: "Balaji N",
      email: "balajinagarajan@gmail.com",
      mentor_id: 2,
    },
    {
      user_id: 3,
      name: Kkarthick T",
      email: "karthickbharathi@gmail.com",
      mentor_id: 3,
    },
    {
      user_id: 4,
      name: "Saraanya T",
      email: "saranyathanush@gmail.com",
      mentor_id: 4,
    },
    {
       user_id: 5,
      name: "Arjith B",
      email: "saiarjith@gmail.com",
      mentor_id: 5,
    },
  ]);
  
  
  // codekata
  db.codekata.insertMany([
    {
      user_id: 1,
      no_of_problems_solved: 120,
    },
    {
      user_id: 2,
      no_of_problems_solved: 100,
    },
    {
      user_id: 3,
      no_of_problems_solved: 85,
    },
    {
      user_id: 4,
      no_of_problems_solved: 70,
    },
    {
      user_id: 5,
      no_of_problems_solved: 95,
    },
  ]);
  
  
  // attendance
  db.attendance.insertMany([
    {
      user_id: 1,
      topic_id: 1,
      present: true,
    },
    {
      user_id: 2,
      topic_id: 2,
      present: true,
    },
    {
      user_id: 3,
      topic_id: 3,
      present: false,
    },
    {
      user_id: 4,
      topic_id: 4,
      present: false,
    },
    {
      user_id: 5,
      topic_id: 5,
      present: true,
    },
  ]);
  
  
  // topics
  db.topics.insertMany([
    {
      topic_id: 1,
      topic: "HTML",
      topic_date: new Date("01-10-2020"),
    },
    {
      topic_id: 2,
      topic: "CSS",
      topic_date: new Date("10-10-2020"),
    },
    {
      topic_id: 3,
      topic: "Javascript",
      topic_date: new Date("15-10-2020"),
    },
    {
      topic_id: 4,
      topic: "ReactJS",
      topic_date: new Date("20-10-2020"),
    },
    {
      topic_id: 5,
      topic: "NodeJS",
      topic_date: new Date("25-10-2020"),
    },
  ]);
  
  
  // tasks
  db.tasks.insertMany([
    {
      task_id: 1,
      topic_id: 1,
      user_id: 1,
      task: "HTML task",
      due_date: new Date("01-10-2020"),
      submitted: true,
    },
    {
      task_id: 2,
      topic_id: 2,
      user_id: 2,
      task: "CSS task",
      due_date: new Date("15-10-2020"),
      submitted: true,
    },
    {
      task_id: 3,
      topic_id: 3,
      user_id: 3,
      task: "Javascript task",
      due_date: new Date("20-10-2020"),
      submitted: true,
    },
    {
      task_id: 4,
      topic_id: 4,
      user_id: 4,
      task: "ReactJS task",
      due_date: new Date("25-10-2020"),
      submitted: false,
    },
    {
      task_id: 5,
      topic_id: 5,
      user_id: 5,
      task: "NodeJS task",
      due_date: new Date("30-10-2020"),
      submitted: false,
    },
  ]);
  
  
  // company_drives
  db.company_drives.insertMany([
    {
      user_id: 1,
      drive_date: new Date("05-10-2020"),
      company_name: "Google",
    },
    {
      user_id: 1,
      drive_date: new Date("10-10-2020"),
      company_name: "Amazon",
    },
    {
      user_id: 2,
      drive_date: new Date("20-10-2020"),
      company_name: "Microsoft",
    },
    {
      user_id: 3,
      drive_date: new Date("15-10-2020"),
      company_name: "Zoho",
    },
    {
      user_id: 5,
      drive_date: new Date("30-10-2020"),
      company_name: "Facebook",
    },
  ]);
  
  
  // mentors
  db.mentors.insertMany([
    {
      mentor_id: 1,
      mentor_name: "Manikandan Anbalagan",
      mentor_email: "ManikandanA@gmail.com",
      mentee_count: 30,
    },
    {
      mentor_id: 2,
      mentor_name: "Farook",
      mentor_email: "farook@gmail.com",
      mentee_count: 25,
    },
    {
      mentor_id: 3,
      mentor_name: "Deepika",
      mentor_email: "deepika@gmail.com",
      mentee_count: 20,
    },
    {
      mentor_id: 4,
      mentor_name: "Sivaraman",
      mentor_email: "sivaraman@gmail.com",
      mentee_count: 12,
    },
    {
      mentor_id: 5,
      mentor_name: "Banu",
      mentor_email: "banu@gmail.com",
      mentee_count: 15,
    },
  ]);