//common side navbar call
$(document).ready(function () {
  $(".sidenav").sidenav();
});
//Get the top button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  
  if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) 
  {
    mybutton.style.display = "block";
  } 
  else 
  {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
//Footer and Navbar
let header = $(`
<nav class="black">
<div class="nav-wrapper">
    <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger"><i
            class="material-icons">menu</i></a>
    <ul class="right hide-on-med-and-down">
        <li><a class="white-text" href="index.html">Home</a></li>
        <li><a class="white-text" href="experience.html">Experience</a></li>
        <li><a class="white-text" href="projects.html">Projects</a></li>
       
        <li><a class="white-text" href="education.html">Education</a></li>
       
    
        <li><a class="white-text" href="assets/RESUME.pdf" target="_blank"> Resume</a></li>
         
        <!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch" name="theme" />
          <div class='toggle-slot'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
    </ul>
</div>
</nav>
<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">
<li><a href="index.html">Home</a></li>
<li><a href="experience.html">Experience</a></li>
<li><a href="projects.html">Projects</a></li>
<li><a href="education.html">Education</a></li>
<li><a href="https://assets/RESUME.pdf" target="_blank"> Resume</a></li>
 <li><a class="white-text" href="assets/COVER LETTER.pdf" target="_blank"> Cover Letter </a></li>
<!--TOGGLE FOR LIGHT/DARK MODE-->
        <li>
        <label for="switch" class="theme-switch">
        <input class="toggle-checkbox" type="checkbox" id="switch" name="theme" />
          <div class='toggle-slot side-toggle'>
          <div class='sun-icon-wrapper'>
          <div class="iconify sun-icon" data-icon="feather-sun" data-inline="false"> </div>
          </div>
          <div class='toggle-button'></div>
          <div class='moon-icon-wrapper'>
          <div class="iconify moon-icon" data-icon="feather-moon" data-inline="false"> </div>
          </div>
          </div>
          </label>
        </li>
</ul>`);
let footer = $(`
<footer class="webintern-footer">
<div class="webintern-footer-inner">
  <div class="container">
    <div class="row">
      <div class="col-lg-7 col-md-6 pt-3" >
      <div class="col-sm-6 col-md-7">
        <a class="webintern-footer-logo" href="#">
    
        </a>
    </div>
    <!-- Social media icons for footer -->
<div class="social-icons-footer">
    <a href="https://www.linkedin.com/in/meghac-4b297416b/" target="_blank">
        <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F1000logos.net%2Fwp-content%2Fuploads%2F2017%2F03%2FColor-of-the-LinkedIn-Logo.jpg&f=1&nofb=1&ipt=87d910146bfaa2b2244db77374cdc8a18d559692707158a3546f0a351073f81a&ipo=images" alt="LinkedIn" style="width: 35px; height: 32px; border-radius: 50%; margin-right: 10px;">
    </a>
    <a href="https://github.com/megha6319" target="_blank">
        <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F128-1280192_github-logo-png-github-png-transparent-png.png&f=1&nofb=1&ipt=a2d94e338d5810def10844dbecbb0186e876a6d26529e7d322704dccebb4da9d&ipo=images" alt="GitHub" style="width: 35px; height: 32px; border-radius: 50%;">
    </a>
    <br>
</div>
    </div>
      <div class="col-sm-6 col-md-5 pt-3 footer-2">
        <!-- footer_title -->
        <h4 class="webintern_footer_title h5">
          <small>Get In Touch</small>
        </h4>
        <p style="color:white;">
        <a style="color:white;" href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=meghabendre21@gmail.com" target="_blank">meghabendre21@gmail.com</a>
        </p>
        <div class="empty-space marg-lg-b30"></div>
      </div>
    </div>
  </div>
</div>
<div class="tt-copy">
  <div class="container col-sm-6">
   <!-- <center class="text-animation">Made with <i class="fa fa-heart" style="color: red;"></i></center>-->
  </div>
</div>
</footer>`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);
/*JavaScript for toggle for light/dark mode*/
var checkbox = document.querySelector('input[name=theme]');
if(checkbox)
 {
 checkbox.addEventListener('change', function(){
   if(this.checked)
   {
     trans()
     document.documentElement.setAttribute('data-theme', 'dark')
   }
   else
   {
     trans()
     document.documentElement.setAttribute('data-theme', 'light')
   }
 });
 let trans = () => {
   document.documentElement.classList.add('transition');
   window.setTimeout(() => {
     document.documentElement.classList.remove('transition')
   }, 1000)
 }}
