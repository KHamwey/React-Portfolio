
import React from "react";
import {
 Timeline,
 Events,
 UrlButton,
 ImageEvent,
 createTheme,
 themes
} from "@merc/react-timeline";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";

//Css file
import "./project.css";

//Projects
import ChatKharaMeal from "../../assets/img/projects/ChatKharaMeal-Website.png";
import ExpenseTracker from "../../assets/img/projects/Expense-TrackerApp.png";
import MusicList from "../../assets/img/projects/Music-List-App.png";
import QuizApp from "../../assets/img/projects/QuizzApp-JavaScript.png";
import EmpolyeeTable from "../../assets/img/projects/Empolyee-table.png";
import Portfolio from "../../assets/img/projects/portfolio.png";
import WordPressSite from "../../assets/img/projects/Wordpress-site.png";
import LandingPage from "../../assets/img/projects/Landing-Page.png";

//Skills
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP from "../../assets/img/skills/bootstrap-4.svg";
import L_REACT from "../../assets/img/skills/react.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_JAVASCRIPT from "../../assets/img/skills/javascript.svg";
import L_FIREBASE from "../../assets/img/skills/firebase-icon.svg";
import L_WORDPRESS from "../../assets/img/skills/wordpress-icon.svg";

// Custom timline theme
const customTheme = createTheme(themes.default, {
 card: {
   backgroundColor: "#efefef"
 },
 date: {
   backgroundColor: "#ec4b4f"
 },
 marker: {
   borderColor: "#070d59"
 },
 timelineTrack: {
   backgroundColor: "#ec4b4f"
 }
});


const ProjectTimeline = () => {
 return (
   <div id="projects">
     <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
     <Timeline theme={customTheme}>
       <Events>
          {/* //React Portfolio */}
          <ImageEvent
           date="4th, Jan 2025"
           className="text-center"
           text="Portfolio Website"
           src={Portfolio}
           alt="Portfolio Website"
         >
           <div className="d-flex justify-content-between flex-column mt-1">
             <div>
               <Accordion>
                 <Card>
                   <Accordion.Toggle
                     as={Card.Header}
                     eventKey="0"
                     className="p-2 text-center accordian-main"
                   >
                     PROJECT DETAILS
                   </Accordion.Toggle>


                   <Accordion.Collapse eventKey="0" className="text-left">
                     <Card.Body>
                       <strong>Description:</strong> This is a Portfolio site that displays some of the coding skills I currently have.
                       <hr />
                       <strong>Features:</strong>
                       <ul className="list-styles pt-1">
                         <li>Provide user friendy Enviroment.</li>
                         <li>Powered by ReactNative, Js and Css</li>
                       </ul>
                       <hr />
                       <strong>Tech used:</strong>
                       <ul>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_REACT}
                               alt="React"
                               rounded
                               className="image-style m-1"
                             ></Image>{" "}
                             React Native
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_CSS3}
                               alt="CSS 3"
                               rounded
                               className="image-style m-1"
                             ></Image>{" "}
                             CSS3
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_JAVASCRIPT}
                               alt="JavaScript"
                               rounded
                               className="image-style1 m-1"
                             ></Image>{" "}
                             JavaScript
                           </span>
                         </li>
                       </ul>
                     </Card.Body>
                   </Accordion.Collapse>
                 </Card>
               </Accordion>
             </div>
             <div className="d-flex justify-content-between flex-nowrap text-center">
               <UrlButton
                 href="https://www.kylehamwey.com/"
                 target="_blank"
               >
                 SEE LIVE
               </UrlButton>
               <UrlButton
                 href="https://github.com/KHamwey/React-Portfolio"
                 target="_blank"
               >
                 SOURCE CODE
               </UrlButton>
             </div>
           </div>
         </ImageEvent>

	 {/* //WordPress Site */}


         <ImageEvent
           date="10th Feb, 2025"
           className="text-center"
           text="WordPress Site"
          src={WordPressSite}
           alt="WordPress Site"
         >
           <div className="d-flex justify-content-between flex-column mt-1">
             <div>
               <Accordion>
                 <Card>
                   <Accordion.Toggle
                     as={Card.Header}
                     eventKey="0"
                     className="p-2 text-center accordian-main"
                   >
                     PROJECT DETAILS
                   </Accordion.Toggle>


                   <Accordion.Collapse eventKey="0" className="text-left">
                     <Card.Body>
                       <strong>Description:</strong> This is a WordPress based application geared towards creating dynamic and responsive web pages, but also for ease of use regarding Authentication. It also has a Nice Ebay Plug-In for Inventory Management.
                       <hr />
                       <strong>Features:</strong>
                       <ul className="list-styles pt-1">
                         <li>Beginner Level Wordpress Project</li>
                         <li>Powered by Wordpress</li>
                         <li>Provide best quality, low tech, service for a low price rate.</li>
                         <li>Provide quality, refurbished products, for a low price rate.</li>
                         <li>Responsive Web Design</li>
                       </ul>
                       <hr />
                       <strong>Tech used:</strong>
                       <ul>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_WORDPRESS}
                               alt="WordPress"
                               rounded
                               className="image-style m-1"
                             ></Image>{" "}
                             WordPress
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_HTML5}
                               alt="HTML5"
                               rounded
                               className="image-style m-1"
                             ></Image>{" "}
                             HTML5
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_CSS3}
                               alt="CSS3"
                               rounded
                               className="image-style1 m-1"
                             ></Image>{" "}
                             CSS3
                           </span>
                         </li>
                       </ul>
                     </Card.Body>
                   </Accordion.Collapse>
                 </Card>
               </Accordion>
             </div>
             <div className="d-flex justify-content-between flex-nowrap text-center">
               <UrlButton
                 href="https://ktrlcomputers.com/"
                 target="_blank"
               >
                 SEE LIVE
               </UrlButton>
             </div>
           </div>
         </ImageEvent>


         {/* //React Empolyee Table */}
         
         <ImageEvent
           date="29th Mar, 2025"
           className="text-center"
           text="Landing Page"
           src={LandingPage}
           alt="Landing Page"
         >
           <div className="d-flex justify-content-between flex-column mt-1">
             <div>
               <Accordion>
                 <Card>
                   <Accordion.Toggle
                     as={Card.Header}
                     eventKey="0"
                     className="p-2 text-center accordian-main"
                   >
                     PROJECT DETAILS
                   </Accordion.Toggle>


                   <Accordion.Collapse eventKey="0" className="text-left">
                     <Card.Body>
                       <strong>Description:</strong> This is a landing page for my portfolio site and up & coming hardware and service business.
                       <hr />
                       <strong>Features:</strong>
                       <ul className="list-styles pt-1">
                         <li>This is to showcase my skills and projects.</li>
                         <li>A brief professional Bio.</li>
                         <li>Responsive Web Design using vanilla HTML5 & CSS</li>
                       </ul>
                       <hr />
                       <strong>Tech used:</strong>
                       <ul>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_HTML5}
                               alt="HTML5"
                               rounded
                               className="image-style m-1"
                             ></Image>{" "}
                             HTML5
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_CSS3}
                               alt="CSS 3"
                               rounded
                               className="image-style m-1"
                             ></Image>{" "}
                             CSS3
                           </span>
                         </li>
                       </ul>
                     </Card.Body>
                   </Accordion.Collapse>
                 </Card>
               </Accordion>
             </div>
             <div className="d-flex justify-content-between flex-nowrap text-center">
               <UrlButton
                 href="https://khamwey.github.io/"
                 target="_blank"
               >
                 SEE LIVE
               </UrlButton>
               <UrlButton
                 href="https://github.com/KHamwey/KHamwey.github.io"
                 target="_blank"
               >
                 SOURCE CODE
               </UrlButton>
             </div>
           </div>
         </ImageEvent>


         {/* //ChatKharaMeal */}
{/* 
         <ImageEvent
           date="30th Nov, 2020"
           className="text-center"
           text="ChatKhara Meal"
           src={ChatKharaMeal}
           alt="Chatkhara meal"
         >
           <div className="d-flex justify-content-between flex-column mt-1">
             <div>
               <Accordion>
                 <Card>
                   <Accordion.Toggle
                     as={Card.Header}
                     eventKey="0"
                     className="p-2 text-center accordian-main"
                   >
                     PROJECT DETAILS
                   </Accordion.Toggle>


                   <Accordion.Collapse eventKey="0" className="text-left">
                     <Card.Body>
                       <strong>Description:</strong> This is an E-Commerce
                       website of savoury foods, which provides user online
                       food shopping experience with various varieties.
                       <hr />
                       <strong>Features:</strong>
                       <ul className="list-styles pt-1">
                         <li>
                           Provide best quality of food in low price rate.
                         </li>
                         <li>Powered by Pure JavaScript and CSS</li>
                         <li>Respoisive Design</li>
                       </ul>
                       <hr />
                       <strong>Tech used:</strong>
                       <ul>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_HTML5}
                               alt="HTML 5"
                               rounded
                               className="image-style m-1"
                             ></Image>{" "}
                             HTML5
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_CSS3}
                               alt="CSS 3"
                               rounded
                               className="image-style m-1"
                             ></Image>{" "}
                             CSS3
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_JAVASCRIPT}
                               alt="JavaScript"
                               rounded
                               className="image-style1 m-1"
                             ></Image>{" "}
                             JavaScript
                           </span>
                         </li>
                       </ul>
                     </Card.Body>
                   </Accordion.Collapse>
                 </Card>
               </Accordion>
             </div>
             <div className="d-flex justify-content-between flex-nowrap text-center">
               <UrlButton
                 href="https://adibaabid-team-malamjabba.github.io/ChatKharaMeal-Website/"
                 target="_blank"
               >
                 SEE LIVE
               </UrlButton>
               <UrlButton
                 href="https://github.com/AdibaAbid-Team-MalamJabba/ChatKharaMeal-Website"
                 target="_blank"
               >
                 SOURCE CODE
               </UrlButton>
             </div>
           </div>
         </ImageEvent>

*/}
         {/* //ExpenseTracker */}
{/*
         <ImageEvent
           date="18th July, 2020"
           className="text-center"
           text="Expense Tracker App"
           src={ExpenseTracker}
           alt="ExpenseTracker"
         >
           <div className="d-flex justify-content-between flex-column mt-1">
             <div>
               <Accordion>
                 <Card>
                   <Accordion.Toggle
                     as={Card.Header}
                     eventKey="0"
                     className="p-2 text-center accordian-main"
                   >
                     PROJECT DETAILS
                   </Accordion.Toggle>


                   <Accordion.Collapse eventKey="0" className="text-left">
                     <Card.Body>
                       <strong>Description:</strong> This is a Finance app to
                       track your daily expenses and keep to up to date. User
                       friendly and easy to use.
                       <hr />
                       <strong>Features:</strong>
                       <ul className="list-styles pt-1">
                         <li>Keep up to date you about your daily expenses</li>
                         <li>Powered by JavaScript, HTML and CSS.</li>
                         <li>Firebase firestore hosting and integration</li>
                       </ul>
                       <hr />
                       <strong>Tech used:</strong>
                       <ul>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_HTML5}
                               alt="HTML 5"
                               rounded
                               className="image-style m-1"
                             ></Image>{" "}
                             HTML5
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_CSS3}
                               alt="CSS 3"
                               rounded
                               className="image-style m-1"
                             ></Image>{" "}
                             CSS3
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_JAVASCRIPT}
                               alt="JavaScript"
                               rounded
                               className="image-style1 m-1"
                             ></Image>{" "}
                             JavaScript
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_FIREBASE}
                               alt="Firebase"
                               rounded
                               className="image-style1 m-1"
                             ></Image>{" "}
                             Firebase
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_BOOTSTRAP}
                               alt="bootstrap"
                               rounded
                               className="image-style1 m-1"
                             ></Image>{" "}
                             Bootstrap
                           </span>
                         </li>
                       </ul>
                     </Card.Body>
                   </Accordion.Collapse>
                 </Card>
               </Accordion>
             </div>
             <div className="d-flex justify-content-between flex-nowrap text-center">
               <UrlButton
                 href="https://expensetracker-1149f.web.app/"
                 target="_blank"
               >
                 SEE LIVE
               </UrlButton>
               <UrlButton
                 href="https://github.com/AdibaAbid/Expense-TrackerApp"
                 target="_blank"
               >
                 SOURCE CODE
               </UrlButton>
             </div>
           </div>
         </ImageEvent>
*/}

         {/* QuizApp */}
{/*
         <ImageEvent
           date="9th June, 2020"
           className="text-center"
           text="Quiz App"
           src={QuizApp}
           alt="Quizz App"
         >
           <div className="d-flex justify-content-between flex-column mt-1">
             <div>
               <Accordion>
                 <Card>
                   <Accordion.Toggle
                     as={Card.Header}
                     eventKey="0"
                     className="p-2 text-center accordian-main"
                   >
                     PROJECT DETAILS
                   </Accordion.Toggle>


                   <Accordion.Collapse eventKey="0" className="text-left">
                     <Card.Body>
                       <strong>Description:</strong> Basic Quiz app, to test
                       your computer knowledge. Also, The question and its
                       options changed in every page reload.
                       <hr />
                       <strong>Features:</strong>
                       <ul className="list-styles pt-1">
                         <li>Test your basic computer knowledge </li>
                         <li>API used for computer science quiz</li>
                         <li>Powered by JavaScript, HTML and CSS.</li>
                       </ul>
                       <hr />
                       <strong>Tech used:</strong>
                       <ul>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_HTML5}
                               alt="HTML 5"
                               rounded
                               className="image-style m-1"
                             ></Image>{" "}
                             HTML5
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_CSS3}
                               alt="CSS 3"
                               rounded
                               className="image-style m-1"
                             ></Image>{" "}
                             CSS3
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_JAVASCRIPT}
                               alt="JavaScript"
                               rounded
                               className="image-style1 m-1"
                             ></Image>{" "}
                             JavaScript
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_BOOTSTRAP}
                               alt="bootstrap"
                               rounded
                               className="image-style1 m-1"
                             ></Image>{" "}
                             Bootstrap
                           </span>
                         </li>
                       </ul>
                     </Card.Body>
                   </Accordion.Collapse>
                 </Card>
               </Accordion>
             </div>
             <div className="d-flex justify-content-between flex-nowrap text-center">
               <UrlButton
                 href="https://adibaabid.github.io/QuizzApp-JavaScript/"
                 target="_blank"
               >
                 SEE LIVE
               </UrlButton>
               <UrlButton
                 href="https://github.com/AdibaAbid/QuizzApp-JavaScript"
                 target="_blank"
               >
                 SOURCE CODE
               </UrlButton>
             </div>
           </div>
         </ImageEvent>
*/}
         {/* //MusicListApp */}
{/* 
         <ImageEvent
           date="9th June, 2020"
           className="text-center"
           text="Music List App"
           src={MusicList}
           alt="MusicList App"
         >
           <div className="d-flex justify-content-between flex-column mt-1">
             <div>
               <Accordion>
                 <Card>
                   <Accordion.Toggle
                     as={Card.Header}
                     eventKey="0"
                     className="p-2 text-center accordian-main"
                   >
                     PROJECT DETAILS
                   </Accordion.Toggle>


                   <Accordion.Collapse eventKey="0" className="text-left">
                     <Card.Body>
                       <strong>Description:</strong> If you are a Music Lover!,
                       then its the best app for you to collect your music
                       collection in one place.
                       <hr />
                       <strong>Features:</strong>
                       <ul className="list-styles pt-1">
                         <li> JavaScript CRUD operation</li>
                         <li>Attractive UI, Easy to use.</li>
                         <li>Powered by JavaScript, HTML and CSS.</li>
                       </ul>
                       <hr />
                       <strong>Tech used:</strong>
                       <ul>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_HTML5}
                               alt="HTML 5"
                               rounded
                               className="image-style m-1"
                             ></Image>{" "}
                             HTML5
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_CSS3}
                               alt="CSS 3"
                               rounded
                               className="image-style m-1"
                             ></Image>{" "}
                             CSS3
                           </span>
                         </li>
                         <li>
                           <span className="p-2">
                             <Image
                               src={L_JAVASCRIPT}
                               alt="JavaScript"
                               rounded
                               className="image-style1 m-1"
                             ></Image>{" "}
                             JavaScript
                           </span>
                         </li>
                       </ul>
                     </Card.Body>
                   </Accordion.Collapse>
                 </Card>
               </Accordion>
             </div>
             <div className="d-flex justify-content-between flex-nowrap text-center">
               <UrlButton
                 href="https://adibaabid.github.io/Music-List-App/"
                 target="_blank"
               >
                 SEE LIVE
               </UrlButton>
               <UrlButton
                 href="https://github.com/AdibaAbid/Music-List-App"
                 target="_blank"
               >
                 SOURCE CODE
               </UrlButton>
             </div>
           </div>
         </ImageEvent>
      */}   
       </Events>
     </Timeline>
   </div>
 );
};

export default ProjectTimeline;