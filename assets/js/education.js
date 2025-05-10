AOS.init();

// MOOCs Cards
const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Data Science BootCamp",
    cardImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjZgixs36L0KYTRVGX8YdjSLiege2-7KUAi8woXTSSfbonoFvKbyCuAYY23UdrqztuO5bEYyr7AfHT3yV4onCMMEmkrk3oU5uyed6SoSuOOuZ7DPyWu0JmT7NGMu2Xj4HMHMAGi6Zpw7VtVy1T993Wjm6fEYS0ocmXR_vCT4TjzVLQPxcbPPcztsg1Y/s2560/GeeksforGeeks.svg.png",
    moocLink: "https://www.linkedin.com/in/megha-chandra-shekar/details/featured/1718594761397/single-media-viewer/?profileId=ACoAACiLMMYB1qYaKcDG1VljY4aL3YnlXU2Bq00",
  },
  {
    title: "Google Analytics for Beginners",
    cardImage: "https://i1.wp.com/www.makeoverarena.com/wp-content/uploads/2021/03/Google-Analytics-Academy.jpg?fit=800%2C400&ssl=1",
    moocLink: "https://www.linkedin.com/in/megha-chandra-shekar/details/featured/1604339423220/single-media-viewer/?profileId=ACoAACiLMMYB1qYaKcDG1VljY4aL3YnlXU2Bq00",
  },
  {
    title: "Introduction to Python",
    cardImage: "assets/images/education-page/datacamp.png",
    moocLink: "https://www.linkedin.com/inmegha-chandra-shekar/details/featured/1604339531593/single-media-viewer/?profileId=ACoAACiLMMYB1qYaKcDG1VljY4aL3YnlXU2Bq00",
  },
  {
    title: "Machine Learning for Everyone",
    cardImage: "assets/images/education-page/datacamp.png",
    moocLink: "https://www.linkedin.com/in/megha-chandra-shekar/details/featured/1604339825268/single-media-viewer/?profileId=ACoAACiLMMYB1qYaKcDG1VljY4aL3YnlXU2Bq00",
  },
];

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Timeline Section
const timeline = document.querySelector(".timeline");

const timelinesection = [
  {
    heading: "RMIT University",
    image: "./assets/images/education-page/timeline-2.svg",
    subheading: "Masters in Data Science , (Feb 2023-Dec 2024)",
    description: "<li>Postgraduate Coursework: Database Concepts ; Practical Data Science with Python ; Applied Analytics ; Advanced Programming for Data Science ; Programming Fundamentals ; Time Series Analysis.</li><li>CGPA: 3.1 </li>""
  },
  {
    heading: "Sri Venkateshwara College Of Engineering",
    image: "./assets/images/education-page/timeline-1.svg",
    subheading: "Bachelors of Computer Science & Engineering, (Aug 2018-Jul 2022)",
    description: "<li>Undergraduate Coursework: Operating Systems; Databases; Algorithms; Programming Languages; Computer Architecture; Calculus III.</li><li>CGPA: 8.24</li>",
  },
];

const showCards2 = () => {
  let output = "";
  timelinesection.forEach(
    ({ heading, image, subheading, description }) =>
      (output += `
      <div class="timeline" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600">
      <div class="timeline-content">
        <h6 class="center-align font-weight-bolder pt-1">${heading}</h6>
        <div class="row">
          <div class="col-lg-4 col-md-4 col-sm-4">
            <img src="${image}" alt="" height="110"
              class=" mt-2 w-100 mx-auto">
          </div>
          <div class="col-lg-8 col-md-8 col-sm-8 px-4">
            <span style="opacity: 0.9; font-size: 15px;">
              ${subheading}
            </span>
            <h6 class="text-muted mt-2" style="font-size: small;">Details:</h6>
            <ol style="margin-top: -8px; margin-left: -10px; font-size: 12px; list-style: disc;">
              ${description}
            </ol>
          </div>
        </div>
      </div>
    </div>`)
  );
  timeline.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);
