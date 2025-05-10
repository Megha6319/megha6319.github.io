//  Work experience cards
//My experience
const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Associate Software Engineer",
    cardImage: "https://logodownload.org/wp-content/uploads/2019/10/ernst-young-logo-0.png",
    place: "Bangalore Urban, Karnataka, India",    
    time: "(Oct 2022 – Jan 2023)",
    desp: "<li>Full-Stack Development: Enhanced an employee onboarding portal by optimizing .NET-based backend workflows and integrating SQL-driven data forms. Reduced form submission latency by 15% and added new RESTful endpoints for role-based user access.</li>",
  },
  {
    title: "Engineer Intern",
    cardImage: "https://media.licdn.com/dms/image/C560BAQETKscYgcLx3g/company-logo_200_200/0/1660656944705/redblacktree_logo?e=1727308800&v=beta&t=fZylEv2H1xEDAzxOKPbVhp1sJ3wLVRHL40ubPFEtH40",
    place: "Bangalore Urban, Karnataka, India",    
    time: "(Aug 2022 – Oct 2022)",
    desp: "<li>Low-Code Full-Stack Development: Designed and developed a task management system using Mendix, reducing overall development time by 30% compared to traditional coding approaches.</li> <li>Workflow and UI Logic Automation: Automated form validation and navigation through Mendix’s visual logic, improving UI/UX efficiency by 40% and minimizing user input errors.</li>",
  },
  
  {
    title: "Software Engineer-Intern",
    cardImage: "data:image/png;base64,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",
    place: "Bangalore Urban, Karnataka, India",    
    time: "(April 2022 – May 2022)",
    desp: "<li>Process Automation and Efficiency: Mastered Camunda BPMN and DMN process modeling, achieving a 30% increase in workflow efficiency and a 25% reduction in manual reporting errors.</li> <li>Real-Time Incident Reporting System: Led the creation of an automated system with email and message notifications, reducing emergency response times by 40% and improving coordination between hospitals and police stations.</li>",
  },

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
// ];
//
// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `
//       <div class="card volunteerCard" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2>
//           <p class="copy">${description}</p></div>
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);
//
//
// // Mentorship Card
//
//
// const mentorshipcards = document.querySelector(".mentorship-cards");
// const mentor = [
//   {
//     title: "HakinCode",
//     image: "assets/images/experience-page/hakin.png",
//     time: "06/2020 - 08/2020",
//     desp: "<li>It is an open source community where students and mentors can apply.</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
//   },
// ];
//
// const showCards3 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, time, desp}) =>
//       (output += `
//       <div class="column mentorshipCard">
//       <div class="card card2">
//         <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
//         <div class="information">
//         <div class="card-body">
//           <h5 class="card-title">${title}</h5>
//           <p class=""sub-title">${time}</p>
//         </div>
//         <div class="more-information">
//         <ul class="list-group list-group-flush p-0 right-aligned">
//           <div class="list-group-item card2 disclaimer">${desp}</div>
//         </ul>
//         </div>
//         </div>
//       </div>
//       </div>
//       `)
//   );
//   mentorshipcards.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards3);
