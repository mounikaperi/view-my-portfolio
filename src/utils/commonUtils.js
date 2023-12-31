const javaIcon = require('../images/skills/icons8-java-96.png');
const bootstrapIcon = require('../images/skills/bootstrap.webp');
const materialUIIcon = require('../images/skills/material-ui.webp');
const NodeJsIcon = require('../images/skills/node-js.webp');
const springBootIcon = require('../images/skills/icons8-spring-boot-96.png');
const springDataJPAIcon = require('../images/skills/spring-data-jpa.jpg');
const hibernateIcon = require('../images/skills/hibernate.jpg');
const mySqlIcon = require('../images/skills/icons8-database-50.png');
const reactJsIcon = require('../images/skills/icons8-react-80.png');
const expressJsIcon = require('../images/skills/expressJs.jpg');
const mongoDBIcon = require('../images/skills/mongodb.png');
const awsIcon = require('../images/skills/aws.png');
const html5Icon = require('../images/skills/html5.webp');
const css3Icon = require('../images/skills/icons8-css3-100.png');
const sassIcon = require('../images/skills/icons8-sass-96.png');
const javaScriptIcon = require('../images/skills/JS.webp');
const springMvcIcon = require('../images/skills/springMVC.jpg');
const springSecurityIcon = require('../images/skills/springsecurity.jpg');
const junitIcon = require('../images/skills/Junit.jpg');
const gitIcon = require('../images/skills/Git.webp');
const gitHubIcon = require('../images/skills/GitHub.webp');

exports.getSocialDetails = () => {
  return [
    {
      "icon": "FaLinkedin",
      "link": "https://www.linkedin.com/in/saimounikaperi/"
    },
    {
      "icon": "FaGithub",
      "link": "https://github.com/mounikaperi/"
    },
    {
      "icon": "FaInstagram",
      "link": "https://www.instagram.com/mounikaperi/"
    },
    {
      "icon": "FaTwitter",
      "link": "https://twitter.com/jhondoe"
    }
  ]
}

exports.getSkills = () => {
  return [
    {
      "name": "Java",
      "image": javaIcon,
      "category": "BackEnd"
    },
    {
      "name": "Spring Boot",
      "image": springBootIcon,
      "category": "BackEnd"
    },
    {
      "name": "Spring Data JPA",
      "image": springDataJPAIcon,
      "category": "BackEnd"
    },
    {
      "name": "Spring-MVC",
      "image": springMvcIcon,
      "category": "BackEnd"
    },
    {
      "name": "Spring-Security",
      "image": springSecurityIcon,
      "category": "BackEnd"
    },
    {
      "name": "Hibernate",
      "image": hibernateIcon,
      "category": "BackEnd"
    },
    {
      "name": "Junit",
      "image": junitIcon,
      "category": "Others"
    },
    {
      "name": "MySQL",
      "image": mySqlIcon,
      "category": "BackEnd"
    },
    {
      "name": "ReactJS",
      "image": reactJsIcon,
      "category": "FrontEnd"
    },
    {
      "name": "NodeJS",
      "image": NodeJsIcon,
      "category": "BackEnd"
    },
    {
      "name": "ExpressJS",
      "image": expressJsIcon,
      "category": "BackEnd"
    },
    {
      "name": "MongoDB",
      "image": mongoDBIcon,
      "category": "BackEnd"
    },
    {
      "name": "AWS",
      "image": awsIcon,
      "category": "Others"
    },
    {
      "name": "HTML5",
      "image": html5Icon,
      "category": "FrontEnd"
    },
    {
      "name": "CSS3",
      "image": css3Icon,
      "category": "FrontEnd"
    },
    {
      "name": "SASS",
      "image": sassIcon,
      "category": "FrontEnd"
    },
    {
      "name": "JavaScript",
      "image": javaScriptIcon,
      "category": "FrontEnd"
    },
    {
      "name": "Material-UI",
      "image": materialUIIcon,
      "category": "FrontEnd"
    },
    {
      "name": "Bootstrap",
      "image": bootstrapIcon,
      "category": "FrontEnd"
    },
    {
      "name": "Git",
      "image": gitIcon,
      "category": "Others"
    },
    {
      "name": "GitHub",
      "image": gitHubIcon,
      "category": "Others"
    }
  ];
}

exports.getProjectDetails = () => {
  return [
    {
      "name": "Project Title",
      "techstack": "HTML5, CSS3, JavaScript, jQuery",
      "category": "Full-Stack",
      "image": "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210114225740/10-Best-Web-Development-Project-Ideas-For-Beginners-in-2021.png",
      "links": {
        "code": "https://github.com/mounikaperi",
        "video": "https://github.com/mounikaperi",
        "visit": "https://github.com/mounikaperi"
      }
    }
  ];
}

exports.getExperienceDetails = () => {
  return  [
    {
      "company": "NTT DATA Global Delivery Services",
      "position": "Full-Stack Developer | Project Lead",
      "duration": "2018 -2022",
      "desc": [
        "Led a team of 15 for 3 Major queues of Blue Cross Blue Shield. Built Enterprise Web Services using NodeJs, Spring Microservices with frontend React, GraphQL",
        "I have led major incidents- initiated the bridge calls, gathered all the middleware teams under one roof and got the SLA Critical Issues addressed quickly either through a workaround or a problem ticket for permanent fix",
        "Proactively analyzed the code issues, suspecting a future incident/defect that might come to limelight and communicated actively to the stakeholders.",
        "Actively participated in Change Management, Release Management for my application code implementations/deployments. Effectively communicated in the CAB meetings on the immediate outages or the vendor support required for business validations. Engaged multiple groups for the Validations and got them deployed within timeframe and experienced the customer satisfaction.",
        "Skills: Java · React · Spring · NodeJs · GraphQL ·  MySQL · REST APIs"
      ]
    },
    {
      "company": "Cognizant",
      "position": "Full-Stack Developer",
      "duration": "2022 - present",
      "desc": [
        "Building full stack application, delivering content to OTT Platforms",
        "Worked on building the product from scratch and built multiple dashboards.",
        "Skills: ReactJS · GraphQL · Java · MongoDB · TypeScript · Spring · NodeJS · MongoDB · AWS Lambdas"
      ]
    }
  ]
}

exports.getEducationDetails = () => {
  return [
    {
      "institute": "XXX",
      "degree": "YYY",
      "duration": "2014 - 2016"
    },
    {
      "institute": "AAA",
      "degree": "B.Tech CSE",
      "duration": "2016 - 2020",
      "desc": [
        "Pursuing IT Engineering course from ABC University",
        "Worked on web application development using HTML, CSS, and JavaScript, designing a database system using SQL",
        "Familiar with software development methodologies and project management practices, including Agile and Waterfall methodologies."
      ]
    },
    {
      "institute": "AAA",
      "degree": "B.Tech CSE",
      "duration": "2016 - 2020",
      "desc": [
        "Pursuing IT Engineering course from ABC University",
        "Worked on web application development using HTML, CSS, and JavaScript, designing a database system using SQL",
        "Familiar with software development methodologies and project management practices, including Agile and Waterfall methodologies."
      ]
    }
  ];
}

exports.getCertificationDetails = () => {
  return [
    {
      "name": "AWS Certified Cloud Practitioner",
      "issuedBy": "Amazon Web Services Training and Certification",
      "credentialLink": "https://www.credly.com/badges/12d2b469-e020-4f70-b2b1-62c5c7d09476/linked_in_profile",
      "skills": "Amazon Web Services, AWS, Cloud Services",
      "duration": '2023-2026'
    },
    {
      "name": "AWS Certified Developer – Associate",
      "issuedBy": "Amazon Web Services Training and Certification",
      "credentialLink": "https://www.credly.com/badges/db320ae8-cbf0-4047-a6cc-4bf142c905c2/linked_in_profile",
      "skills": "Amazon Web Services, Cloud Development, Cloud Deployment",
      "duration": '2023-2026'
    }
  ]
}

exports.getAllEdDetails = (show) => {
  switch (show) {
    case 'Experiences':
      return this.getExperienceDetails().reverse();
    case 'Education':
      return this.getEducationDetails().reverse();
    case 'Certifications':
      return this.getCertificationDetails().reverse();
    default:
      return [];
  }
};