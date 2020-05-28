
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Fealps",
  title: "Hello, I'm Felipe",
  subTitle: emoji("A software engineering student and level 16 wizard, that enjoy building algorithms and have some experience in building Web applications with JavaScript / Reactjs / Nodejs / React Native and some other cool stuff."),
  resumeLink: "https://drive.google.com/file/d/1shgqCvrRHpYSx-24U87QkeT-voqeE4FG/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Fealps",
  linkedin: "https://www.linkedin.com/in/felipe-agustini-706859173/",
  gmail: "felipeb.agustini@gmail.com",
  facebook: "https://www.facebook.com/felipe.agustini.311"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "A Mid-level full stack developer looking for xp to level up",
  skills: [
    emoji("⚡ Develop interactive Front end / User Interfaces for your web applications"),
    emoji("⚡ Progressive Web Applications ( PWA )"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS "),
    emoji("⚡ Can DM a full Dnd campaign")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  subTitle: "+10 arcana, -1 athletics, +10 investigation, +8 performace",
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "60%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  subTitle: "Defeated 18 goblins with 1 fireball. Can also cast it on bugs.",
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Code Instructor",  
      company: "Codebuddy",
      companylogo:  require("./assets/images/codebuddy_br.jpg"),
      date: "2018 – 2019",
      desc: "Taught Programming to kids and helped them in creating games and other engineering projects."
    },
    {
      role: "People Management Accessor",   
      company: "Orc'estra",
      companylogo: require("./assets/images/orcestra.png"),
      date: "2017 – 2018",
      desc: "Helped to improve the work environment. Managed gamification projects. and created a gamified bonus policy"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "OTdkOWQ1MDM0Mzc0YzQ5NDhlNDFhZjU2MTYzNWZmOTYxZjMzZTE0Yw==",
  githubUserName: "fealps",
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+55 061 981-843-515",
  email_address: "felipeb.agustini@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "fealps"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, contactInfo , twitterDetails};
