import React from 'react';
import Snowfall from 'react-snowfall'
import './App.css';
import companyLogo from './images/Emmetros logo.png'

function App() {

  return (
      <div style={{height: '100%', width: '100%'}}>
      <div className="report">
      <Snowfall />
      <div className="logo">
        <img className="logoImage" src={companyLogo} alt="Logo PNG" />
      </div>
      <div className="reportContent">
        <h1 className="headers">Introduction to Emmetros</h1>
        <p className="internalText">Emmetros is a leader in inclusive and intuitive healthcare technology. Their product, SparxConnect, is a highly customizable engagement platform that aids home and healthcare providers to deliver exceptional personalized care. SparxConnect allows staff members to provide transparency regarding patient health and progress to family members through videos, photos, messages and even video calls.</p>

        <h1 className="headers">Goals</h1>
        <p className="internalText">My first goal for this work term was to extend my analytical and testing knowledgebase. I developed this goal through different variations of testing ranging from functional and edge-case testing to regression testing. My second goal was to improve my current organization and punctuality to meet deadlines. This goal was developed through the sprints that created deadlines for the testing to be completed by. Along with that, project-management tools such as Jira and Confluence were used to organize all work-related information. My final goal was to improve my ability to work in a team. This goal was developed through continuous communication and collaboration between all areas of the product side (QA, Developers and User Experience) to discuss product related issues or concerns. These issues were discussed either through the daily stand-up meetings or through Slack channels. Work was distributed throughout the QA team for each release to complete functional testing and regression testing in an efficient manner. Skills I wanted to learn included how to effectively use project-management tools, how to be organize my work and how to communicate better amongst a group. Tools I used during my work term that allowed me to achieve these skills included, but are not limited to, Jira, Confluence, Slack and Zoom.</p>

        <h1 className="headers">Job Description</h1>
        <p className="internalText">At Emmetros, I was employed as a Quality Assurance Engineer on the QA team. The QA team is responsible for assuring quality of the product through bug/defect detection through both manual and automated testing. Along with this, the QA team is also responsible for collaborating with the developers and user experience team over discrepancies to determine which solution is most suitable for the situation. The QA team consisted of three engineers, a director and two supporting quality assurance engineers. One of the many responsibilities the QA team had was to verify new builds for the product and assure proper functionality, account for invalid or uncommon input and validate that no other areas in the product are impacted by a change. This is done through extensive functional testing which incorporates edge-case testing to determine if there are any inputs that could cause the product to produce an unexpected result.</p>

        <h1 className="headers">Relation to Academic Studies</h1>
        <p className="internalText">This job enhances my academic experience as I know what skills are required to be successful in this industry along with the technologies and tools required to guide myself to be successful in this industry. Along with that, it shows me the importance of punctuality for meeting deadlines, communication amongst group members and collaboration with peers on tasks.</p>

        <h1 className="headers">Focus of the Report</h1>
        <p className="internalText">A particular aspect of my work term that has a huge application in business is the extensive process that is required to take requirements and convert them into a finished product ready for release. At Emmetros, for example, this process involved all three sub teams in product, User experience, Developers, and the QA team. The process begins with the User experience team creating mockups and wireflows for the new additions which the developers implement into the product. Upon completion, the QA team can begin functional and edge-case testing on the additions and go back-and-forth between the developers and the User experience team for any bugs and/or discrepancies in the wireflows until the testing has been completed. Once the QA team is satisfied with the testing that was done, the product is ready to be released to the customers of the business.</p>

        <h1 className="headers">Conclusion</h1>
        <p className="internalText">In conclusion, Emmetros Limited was an amazing learning opportunity and a huge step in understanding the industry and how my knowledge and skillset can be incorporated in a business’ daily tasks. As this is my first coop placement, I am very thankful for this opportunity to allow me to confidently say that this is the industry that I would love to be a part of and continue my career down this path.</p>

        <h1 className="headers">Acknowledgements</h1>
        <p className="internalText">I would like to thank first and foremost, both co-op coordinators, Laura Gatto and Kate McRoberts for all the behind the scenes work regarding the coop process and the help they provided with connecting to employers. Secondly, I would like to thank Karen Moxey for helping me with all the paperwork and onboarding for my first day at Emmetros. I would especially like to thank, my manager, Helena Dahl, for her knowledge, support and incorporation into the business’ day-to-day activities and helping me with the onboarding processes along with the 8 months that followed. I appreciate all the knowledge I was provided regarding the QA field and the importance it can have to an overall business. Last, but not least, I would love to thank Emmetros Limited as a company and all my fellow co-workers for this amazing opportunity to expand my skillset and develop new skills through technologies and tools that are commonly used within the company.</p>
      </div>
      </div>
      <footer className="footer">
        <div className="mainFooter">
          <div className="footerText">
            <ul>
              <li className="footerList"><p>Luka Vukadinovic</p></li>
              <li className="footerList"><p>Made with Skeleton.css, Normalize.css</p></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
