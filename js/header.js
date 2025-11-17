class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header class="header">
      <a href="../../index.html" class="logo">
        <img src="../../img/logo_new.png" alt="logo" />
      </a>

      <!-- Navbar container -->
      <nav class="navbar" id="navbar">
        <a href="../../index.html">home</a>
        <div class="dropdown has-dropdown">
          <a href="#" onclick="toggleDropdown(this)">about</a>
          <div class="dropdown-content">
            <a href="../../components/about/college.html">college</a>
            <a href="../../components/about/department.html">department</a>
            <a href="../../components/about/engzine.html">magazine</a>
            <a href="../../components/about/team.html">team</a>
          </div>
        </div>
        <div class="dropdown has-dropdown">
          <a href="#" onclick="toggleDropdown(this)">issues</a>
          <div class="dropdown-content">
            <a href="../../components/current_issue.html">current issue</a>
            <a href="../../components/archieves.html">archieves</a>
          </div>
        </div>
        <a href="../../components/podcast.html">podcast</a>
        <a href="../../components/editorial_board.html">Editorial board</a>
        <a href="../../components/contact.html">contact</a>
        <a href="../../components/feedback.html">feedback</a>
        <div class="dropdown has-dropdown">
          <a href="#" onclick="toggleDropdown(this)">submissions</a>
          <div class="dropdown-content">
            <a href="../../components/guidelines.html">guidelines</a>
            <a href="../../components/faq.html" style="text-transform: none;">FAQs</a>
            <a href="../../components/plagiarism_policy.html">plagiarism policy</a>
            <a href="../../components/submissions.html">submit</a>
          </div>
        </div>
      </nav>

      <div class="icons">
        <a
          href="https://www.youtube.com/@TheEngzine"
          class="btn-color-join"
          id="youtube"
        >
          <i class="fa-brands fa-youtube"></i>
        </a>
        <a
          href="https://www.instagram.com/the.engzine/?igsh=NmR4aGlzMjVwYXhl#"
          class="btn-color-join"
          id="instagram"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://x.com/The_Engzine?t=ngZ6WdzHZIxyIeOlbRZ-RA&s=09"
          class="btn-color-join"
          id="x"
        >
          <i class="fa-brands fa-x-twitter"></i>
        </a>
        <a
          href="https://open.spotify.com/show/5SPscXGmPCUH72iMSWDPuK?si=-nticEXBS_eT5nHlYgteNg"
          class="btn-color-join"
          id="spotify"
        >
          <i class="fa-brands fa-spotify"></i>
        </a>
        <!-- Hamburger Menu Icon -->
        <div class="fas fa-bars" id="menu-btn"></div>
      </div>
    </header>`;
  }
}

customElements.define("special-header", SpecialHeader);
