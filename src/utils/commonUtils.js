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
      "link": "https://twitter.com/SaiMounikaPeri"
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
      "name": "Kestra - OpenSource Orchestration Platform",
      "techstack": "ReactJS",
      "category": "Mern-Stack",
      "image": '../images/kestra.png',
      "links": {
        "code": "https://github.com/kestra-io/kestra/issues"
      }
    },
    {
      "name": "Nexter - Your Home Your Freedom",
      "techstack": "HTML5, CSS3, Sass",
      "category": "Basic Web",
      "image": '../images/Nexter.png',
      "links": {
        "code": "https://github.com/mounikaperi/css-project-assignments/tree/main/Project-Nexter",
        "video": "https://www.youtube.com/watch?v=Bxu0Ccl_oIs",
        "visit": "https://saimounikas-nexter-app.netlify.app/"
      }
    },
    {
      "name": "Trillio - All In One Booking App",
      "techstack": "HTML5, CSS3, Sass, JavaScript",
      "category": "Basic Web",
      "image": '../images/trillio.png',
      "links": {
        "code": "https://github.com/mounikaperi/css-project-assignments/tree/main/Project-Trillio",
        "video": "https://www.youtube.com/watch?v=jDiDhcc6S-M",
        "visit": "https://saimounikas-trillio-bookingapp.netlify.app/"
      }
    },
    {
      "name": "OmniFood - The Food Website",
      "techstack": "HTML5, CSS3, Sass, JavaScript",
      "category": "Basic Web",
      "image": '../images/omnifood.png',
      "links": {
        "code": "https://github.com/mounikaperi/css-project-assignments/tree/main/Project-OmniFood",
        "video": "https://www.youtube.com/watch?v=kSLj3TD4J3o",
        "visit": "https://saimounikas-foodstartup-omnifood.netlify.app/"
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
        "Skills: ReactJS · Java · MicroServices · Spring · NodeJS · MongoDB"
      ]
    },
    {
      "company": "Cognizant",
      "position": "Full-Stack Developer",
      "duration": "2022 - present",
      "desc": [
        "I have experience working as a Full Stack and MERN Stack Developer, contributing to the development of scalable applications",
        "Have expertise in building event-driven architectures, seamlessly integrating multiple microservices using AWS API Gateway and Lambda functions",
        "Played a key role in optimizing backend processes, cleaning/refactoring bad code which led to improvement of the system's performance by 75% ensuring high availability of services",
        "Have experience in making the components lightweight by ensuring loose coupling between the microservices",
        "Proficient in designing and deploying cloud-based solutions, leveraging AWS services to enhance system efficiency and scalability.",
        "Skills: ReactJS · Java · MicroServices · Spring · NodeJS · MongoDB · AWS Lambdas"
      ]
    }
  ]
}

exports.getEducationDetails = () => {
  return [
    {
      "institute": "Guru Nanak Institutions Technical Campus",
      "degree": "Bachelor of Technology - BTech, Computer Science",
      "duration": "2014 - 2018",
      "desc": [
        "Pursued Computer Science Engineering course from Guru Nanak Institutions",
        "Worked on building the product from scratch and built multiple dashboards.",
        "Skills: ReactJS · Java · MongoDB · Microservices · Spring · NodeJS · MongoDB · AWS Lambdas"
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