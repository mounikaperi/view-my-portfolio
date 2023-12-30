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
      "category": "Full-Stack"
    },
    {
      "name": "Spring Boot",
      "image": springBootIcon,
      "category": "Full-Stack"
    },
    {
      "name": "Spring Data JPA",
      "image": springDataJPAIcon,
      "category": "Full-Stack"
    },
    {
      "name": "Spring-MVC",
      "image": springMvcIcon,
      "category": "Full-Stack"
    },
    {
      "name": "Spring-Security",
      "image": springSecurityIcon,
      "category": "Full-Stack"
    },
    {
      "name": "Hibernate",
      "image": hibernateIcon,
      "category": "Full-Stack"
    },
    {
      "name": "Junit",
      "image": junitIcon,
      "category": "Full-Stack"
    },
    {
      "name": "MySQL",
      "image": mySqlIcon,
      "category": "Full-Stack"
    },
    {
      "name": "ReactJS",
      "image": reactJsIcon,
      "category": "Mern-Stack"
    },
    {
      "name": "NodeJS",
      "image": NodeJsIcon,
      "category": "Mern-Stack"
    },
    {
      "name": "ExpressJS",
      "image": expressJsIcon,
      "category": "Mern-Stack"
    },
    {
      "name": "MongoDB",
      "image": mongoDBIcon,
      "category": "Mern-Stack"
    },
    {
      "name": "AWS",
      "image": awsIcon,
      "category": "Mern-Stack"
    },
    {
      "name": "HTML5",
      "image": html5Icon,
      "category": "Others"
    },
    {
      "name": "CSS3",
      "image": css3Icon,
      "category": "Others"
    },
    {
      "name": "SASS",
      "image": sassIcon,
      "category": "Others"
    },
    {
      "name": "JavaScript",
      "image": javaScriptIcon,
      "category": "Others"
    },
    {
      "name": "Material-UI",
      "image": materialUIIcon,
      "category": "Others"
    },
    {
      "name": "Bootstrap",
      "image": bootstrapIcon,
      "category": "Others"
    }
  ];
}
