class MyHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <header class="header">
      <a href="/index.html" class="logo">
        <img src="/img/logo_new.png" alt="logo" />
      </a>

      <nav class="navbar">
        <a href="/index.html">home</a>
        <div class="dropdown has-dropdown">
          <a href="#" onclick="toggleDropdown(this)">about</a>
          <div class="dropdown-content">
            <a href="/components/about/college.html">college</a>
            <a href="/components/about/department.html">department</a>
            <a href="/components/about/engzine.html">magazine</a>
            <a href="/components/about/team.html">team</a>
            <!-- <a href="components/about/current_issue.html">current issue</a> -->
          </div>
        </div>
        <div class="dropdown has-dropdown">
          <a href="#" onclick="toggleDropdown(this)">issues</a>

          <div class="dropdown-content">
            <a href="/components/about/current_issue.html">current issue</a>
            <a href="/components/archieves.html">archieves</a>
          </div>
        </div>
        <a href="/components/podcast.html">podcast</a>
        <a href="/components/podcast.html">Editorial board</a>
        <a href="/components/contact.html">contact</a>
        <a href="/components/feedback.html">feedback</a>
        <a href="/components/submissions.html">Submissions</a>
      </nav>

      <div class="icons">
        <a href="https://www.youtube.com/@TheEngzine" id="btn-color-join"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://www.instagram.com/the.engzine/?igsh=NmR4aGlzMjVwYXhl#" id="btn-color-join"
          ><i class="fa-brands fa-instagram"></i
        ></a>
        <a href="https://x.com/The_Engzine?t=ngZ6WdzHZIxyIeOlbRZ-RA&s=09" id="btn-color-join"
          ><i class="fa-brands fa-x-twitter"></i
        ></a>
        <div class="fas fa-bars" id="menu-btn"></div>
      </div>
    </header>
        `;
  }
}

customElements.define("my-header", MyHeader);

let navbar = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

class MyFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <footer class="footer-48201">
      <div class="container">
        <div class="row">
          <div class="col-md-4 pr-md-5">
            <a href="#" class="footer-site-logo d-block mb-4">Publisher Information</a>
            <hr>
            <h3 style="color: white;">
              Publishing Body
            </h3>
            <p>
              PG & Research Department of English,<br>
              St. Joseph’s College
            </p>
            
            <h3 style="color: white;">
              Address
            </h3>
            <p>
              St. Joseph’s College (Autonomous),<br>
              tiruchirappalli - 620002. <br>
              tamil nadu, india.
            </p>
            
            <h3 style="color: white;">
              Editor in chief
            </h3>
            <p>
              Prasanth Arokia sawy. D
            </p>
            <h3 style="color: white;">
              Contact Us
            </h3>
            <p style="text-transform: lowercase">
              +91 9994494858 <br>
              sjcengzine@mail.sjctni.edu
            </p>
            
            <hr>
          </div>
          <div class="col-md">
            <ul class="list-unstyled nav-links">
              <a href="#" class="footer-site-logo d-block mb-4">Quick Links</a><hr>
              <li><a href="/index.html">Home</a></li>
              <li><a href="/components/about/engzine.html">About Us</a></li>
              <li><a href="/components/contact.html">Contact</a></li>
              <li><a href="/components/feedback.html">feedback</a></li>
              <li><a href="/components/submissions.html">Submissions</a></li>
            </ul>
            <hr>
          </div>
          <div class="col-md">
            <ul class="list-unstyled nav-links">
              <a href="#" class="footer-site-logo d-block mb-4">Podcasts & Magazines</a><hr>
              <li><a href="/components/podcast.html">podcast</a></li>
              <li><a href="/components/issues.html">current issue</a></li>
              <li><a href="#">archieve</a></li>
              <li><a href="/components/about/team.html">team</a></li>
            </ul>
            <hr>
          </div>
          <div class="col-md">
            <ul class="list-unstyled nav-links">
              <a href="#" class="footer-site-logo d-block mb-4">Click / Scan QR to Subscribe</a><hr>
              <li><a href="https://forms.office.com/r/PyE2N6jh03"><img src="/img/qr.png" alt="" style="width: 120px; height: auto;"></a></li>
            </ul>
            
            <hr>
          </div>
          
          
        </div>

        <div class="row">
          <div class="col-12 text-center">
            <div class="copyright mt-5 pt-5">
              <p><a href="https://sjctni.edu/">
                <small style="text-transform: lowercase; color: white;"
                  >&copy; www.sjctni.edu, All Rights Reserved.</small
                >
              </p></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
        `;
  }
}

customElements.define("my-footer", MyFooter);
