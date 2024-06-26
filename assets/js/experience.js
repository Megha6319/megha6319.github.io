//  Work experience cards
//My experience
const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Student Ambassador",
    cardImage: "https://logos-download.com/wp-content/uploads/2017/11/RMIT_University_logo.png" ,
    place: "Melbourne,Victoria, Australia",
    time: "(Jun 2023 – Nov 2023)",
    desp: "<li>Strengthened my professional network and communication skills through collaborative teamwork, enhancing my ability to effectively convey ideas.</li>",
   },
  {
    title: "Associate Software Engineer",
    cardImage: "https://logodownload.org/wp-content/uploads/2019/10/ernst-young-logo-0.png",
    place: "Bangalore Urban, Karnataka, India",    
    time: "(Oct 2022 – Jan 2023)",
    desp: "<li>Completed a comprehensive training program, delivering a top presentation on the LinkedIn Data Breach and gaining proficiency in developing robust, scalable APIs using the .NET framework.</li>",
  },
  {
    title: "Engineer Intern",
    cardImage: "https://media.licdn.com/dms/image/C560BAQETKscYgcLx3g/company-logo_200_200/0/1660656944705/redblacktree_logo?e=1727308800&v=beta&t=fZylEv2H1xEDAzxOKPbVhp1sJ3wLVRHL40ubPFEtH40",
    place: "Bangalore Urban, Karnataka, India",    
    time: "(Aug 2022 – Oct 2022)",
    desp: "<li>Completed the Mendix Rapid Developer Certification course, gaining the knowledge and practical skills necessary to leverage the Mendix platform for application development.</li>",
  },
  
  {
    title: "Software Engineer-Intern",
    cardImage: "data:image/png;base64,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",
    place: "Bangalore Urban, Karnataka, India",    
    time: "(April 2022 – May 2022)",
    desp: "<li>Learnt about Camunda modeler , also about Workflow Engine and even about REST API.</li>",
  },
  {
    title: "Web Development in Python-Intern",
    cardImage: "data:image/jpeg;base64,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",
    place: "Bangalore Urban, Karnataka, India",
    time: "(Nov 2020 – Jan 2021)",
    desp: "<li>Worked on HTML,CSS ,Python and Bootstrap.</li>",
  },
  {
    title: "Data Science and Business Analytics-Intern",
    cardImage: "https://media-exp1.licdn.com/dms/image/C560BAQFgHU3sTF4LfQ/company-logo_200_200/0/1519895156650?e=2159024400&v=beta&t=1iqBaESC2l4UUW7JjEjq0R_HQhwRTaaqyQG1k46q4bs",
    place: "Bangalore Urban, Karnataka, India",
    time: "(Dec 2020 – Jan 2021)",
    desp: "<li>Completed tasks based on Decision Tree Algorithm,Supervised-MLand Unsupervised ML  .</li>",
  },
  {
    title: "Campus Ambassador Intern",
    cardImage: "https://pbs.twimg.com/media/E3Qn_sgUcAo5KNm.jpg",
    place: "Bangalore Urban, Karnataka, India",
    time: "(Mar 2020 – Jun 2020)",
    desp:"<li>I worked as a Campus Ambasador Intern at GirlScript Summer of Code and completed the assigned works on time.</li>",
  },
  {
    title: "Web Design Intern",
    cardImage: "assets/images/experience-page/rolla.png",
    place: "Bangalore Urban, Karnataka, India",
    time: "(Nov 2020 – Feb 2021)",
    desp:"<li>Made a video testimonial which was being posted in the website of RollaOnline.Worked on HTML and CSS </li>",
  },
  {
    title: "Web Developer Intern",
    cardImage: "https://media-exp1.licdn.com/dms/image/C510BAQF6uFh25RQtFg/company-logo_200_200/0/1546951761311?e=2159024400&v=beta&t=cwiWv5oGv3LP7BLLTWILRPNYK2p_zoWLCPggILycNFI",
    place: "Bangalore Urban, Karnataka, India",
    time: "(Nov 2020 – Dec 2020)",
    desp:"<li>Worked for a music based company named jookebox for a month.It had been an amazing experience learnt a lot from it.Learnt about using ubuntu operating system and had worked on a toggle pause play music button for the website.</li>",
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
