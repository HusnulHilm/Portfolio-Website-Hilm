const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
// added [0] for temporary fixing the error "Uncaught TypeError: allSections.addEventListener is not a function at pageTransition" at line code ".addEventListener('click', (e) => {", about DOM Element 
const allSections = document.querySelectorAll('.main-content')[0];

function pageTransition() {
  //Clicked button will activate the selected class
  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener('click', function () {
      /*
      //have some error where after clicking btn many times, the active btn is not changing to green color "Uncaught TypeError: Cannot read properties of undefined (reading 'className') at HTMLDivElement.<anonymous>" at line code ".className.replace('active-btn', '');"
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += 'active-btn';
      */
      let activeBtn = document.querySelector(".active-btn");
      if (activeBtn !== null) {
        activeBtn.classList.remove("active-btn");
      }
      this.classList += " active-btn";
    })
  }

  //active class added to the sections
  allSections.addEventListener('click', (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from other buttons
      /*
      sectBtns.forEach((btn) => {
        btn.classList.remove('active')
      })
      */
      // solutions for temporary removing the bugs where the btns didnt slide down after a couple of clicks
      const btns = sectBtns[0].children;
      for (let btn of btns) {
        btn.classList.remove('active')
      }
      e.target.classList.add('active')

      //hide other sections
      sections.forEach((section) => {
        section.classList.remove('active')
      })

      const element = document.getElementById(id);
      element.classList.add('active');
    }
  })

  //toggle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode')
  })

}

pageTransition();