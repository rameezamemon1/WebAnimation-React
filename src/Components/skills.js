// import React from "react";
// import "../index.css";
// import chakra from "./../images/skill/chakra.jpg";
// import css from "./../images/skill/css.png";
// import express from "./../images/skill/express.png";
// import firebase from "./../images/skill/firebase.png";
// import github from "./../images/skill/github.png";
// import mongodb from "./../images/skill/mongodb.png";
// import js from "./../images/skill/js.png";
// import mui from "./../images/skill/mui.png";
// import next from "./../images/skill/next.png";
// import aws from "./../images/skill/aws.png";
// import node from "./../images/skill/nodejs.png";
// import react from "./../images/skill/react.png";
// import redux from "./../images/skill/redux.png";
// import socket from "./../images/skill/socket.io.jpg";
// import tailwind from "./../images/skill/tailwind.png";

// const arr = [
//   {
//     name: 'Javascript',
//     image: js,
//   },
//   {
//     name: 'React',
//     image: react
//   },
//   {
//     name: 'Next',
//     image: next,
//   },
//   {
//     name: 'Redux',
//     image: redux,
//   },
//   {
//     name: 'CSS',
//     image: css,
//   },
//   {
//     name: 'Tailwind CSS',
//     image: tailwind,
//   },
//   {
//     name: 'Material UI',
//     image: mui,
//   },
//   {
//     name: 'Chakra UI',
//     image: chakra,
//   },
//   {
//     name: 'Firebase',
//     image: firebase,
//   },
//   {
//     name: 'Express',
//     image: express,
//   },
//   {
//     name: 'Node',
//     image: node,
//   },
//   {
//     name: 'MongoDb',
//     image: mongodb,
//   },
//   {
//     name: 'Socket.io',
//     image: socket,
//   },
//   {
//     name: 'AWS',
//     image: aws,
//   },
//   {
//     name: 'Github',
//     image: github,
//   }
// ]
// const Skills = () => {
//   return (
//     <section
//       data-aos="fade-right"
//       className="skills-container"
//       name="skills"
//       id="skills"
//     >
//       <h1 className="heading">What I Am Good At &nbsp;&nbsp;?</h1>

//       <div className="techs">
//         {arr?.map((res, i) => {
//           return <li key={i}><img src={res?.image} /><span>{res?.name}</span></li>
//         })}
//         {/* <li>
//           <i className="fab html fa-html5"></i> <p>HTML5</p>
//         </li>
//         <li>
//           <i className="fab css fa-css3"></i>
//           <p>CSS3</p>
//         </li>
//         <li>
//           <i className="fab bootstrap fa-bootstrap"></i>
//           <p>Bootstrap</p>
//         </li>
//         <li>
//           <i className="fab javascript fa-js"></i>
//           <p>Javascript</p>
//         </li>
//         <li>
//           <i className="fab react fa-react"></i>
//           <p>ReactJs</p>
//         </li>
//         <li>
//           <i className="fab typescript fa-node"></i>
//           <p>NodeJs</p>
//         </li> */}

//       </div>
//     </section>
//   );
// };

// export default Skills;


import React from "react";
import chakra from "./../images/skill/chakra.jpg";
import "../index.css";

export const ToolsData = [
  {
    name: 'JavaScript',
    tag: 'devicon-javascript-plain colored'
  },
  {
    name: 'React',
    tag: 'devicon-react-original colored'
  },
  {
    name: 'Next JS',
    tag: 'devicon-nextjs-original'
  },
  {
    name: 'Redux',
    tag: 'devicon-redux-original colored'
  },
  {
    name: 'Tailwind CSS',
    tag: 'devicon-tailwindcss-plain colored'
  },
  {
    name: 'Material UI',
    tag: 'devicon-materialui-plain colored'
  },

  {
    name: 'Express',
    tag: 'devicon-express-original'
  },
  {
    name: 'Node JS',
    tag: 'devicon-nodejs-plain colored'
  },
  {
    name: 'Chakra UI',
    tag: chakra,
  },
  {
    name: 'Firebase',
    tag: 'devicon-firebase-plain colored',
  },
  {
    name: 'Heroku',
    tag: 'devicon-heroku-original colored'
  },
  {
    name: 'MongoDB',
    tag: 'devicon-mongodb-plain colored'
  },
  {
    name: 'AWS',
    tag: 'devicon-amazonwebservices-original colored'
  },
  {
    name: 'Github',
    tag: 'devicon-github-original colored'
  }
];
const Skills = () => {
  return (
    <section
      data-aos="fade-right"
      className="skills-container"
      name="skills"
      id="skills"
    >
      <h1 className="heading">What I Am Good At &nbsp;&nbsp;?</h1>

      <div className="techs">
        {ToolsData?.map((res, i) => {
          return <li key={i}>
            {res?.name == 'Chakra UI' ? <img src={res?.tag} /> : <i className={`${res?.tag}`}></i>}
            <p className="">{res?.name}</p>
          </li>
        })}
      </div>
    </section>
  );
};

export default Skills;
