function revealOnScroll() {
  const cards = document.querySelectorAll('.work-cards, .work-cards-2');
  const triggerBottom = window.innerHeight * 0.85;

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);
// ____________________________________________________________________________________________

function showOnScroll() {
  const project = document.querySelectorAll('.mobile-width');
  const triggerBottoms = window.innerHeight * 0.55;

  project.forEach(cards => {

    const cardTops = cards.getBoundingClientRect().top;
    
    if (cardTops < triggerBottoms) {
      cards.classList.add('visible');
    } else {
      cards.classList.remove('visible');
    }
  });
};

window.addEventListener('scroll', showOnScroll);
window.addEventListener('load', showOnScroll);
// see more and hideup and down text

// const text = document.getElementById("blurText");
// const button =document.querySelectorAll(".btn");
// const buttonEach1 =document.querySelector(".seeMore")
// const buttonEach2 =document.querySelector(".hideLess")

// button.forEach(function(btns)
// {
//   console.log(btns);
//   btns.addEventListener("click" ,(event)=>
//   {
//     let btn =event.currentTarget.classList;
    
//     if(btn.contains("seeMore"))
//     {
//       text.classList.remove("hiddinText");
//   console.log(text);
//   buttonEach1.style.display = "none";
//   buttonEach2.style.display ="inline";
//     }
//     else if(btn.contains("hideLess"))
//     {
//       text.classList.add("hiddinText");
//   console.log(text);
//   buttonEach2.style.display = "none";
//   buttonEach1.style.display ="inline";
//     }
//   })
// })
// const buttonEach3= document.querySelector(".seeMore1")
// const buttonEach4 = document.querySelector(".hideLess1")
// const button1 =document.querySelectorAll(".btn1");
// const text1 = document.getElementById("shayan1")
// console.log(text1)
// button1.forEach(function(btns)
// {
//   console.log(btns);
//   btns.addEventListener("click" ,(event)=>
//   {
//     let button1 =event.currentTarget.classList;
    
//     if(button1.contains("seeMore1"))
//     {
//       text1.classList.remove("sheikh1");
//   console.log(text);
//   buttonEach3.style.display = "none";
//   buttonEach4.style.display ="inline";
//     }
//     else if(button1.contains("hideLess1"))
//     {
//       text1.classList.add("sheikh1");
//   console.log(text);
//   buttonEach4.style.display = "none";
//   buttonEach3.style.display ="inline";
//     }
//   })
// })
const hideBtn = document.querySelector(".hide-tap")
const seeBtn = document.querySelector(".seemore-tap")
const button = document.querySelectorAll("#btn")
 console.log(button);
 
button.forEach(function(buttons)
{
  buttons.addEventListener("click", ()=>
  {
    if(buttons.classList.contains("seemore-tap"))
      {
        console.log(buttons);
        
        seeBtn.style.display = "none";
        hideBtn.style.display ="inline";
      }
      else if (buttons.classList.contains("hide-tap"))
      {
        hideBtn.style.display ="none";
        seeBtn.style.display ="inline";
      }
  });
  const hideBtn1 = document.querySelector(".hide-tap1")
const seeBtn1= document.querySelector(".seemore-tap1")
const button1 = document.querySelectorAll("#btn1")
 console.log(button);
 
button1.forEach(function(buttons1)
{
  buttons1.addEventListener("click", ()=>
  {
    if(buttons1.classList.contains("seemore-tap1"))
      {
        console.log(buttons);
        
        seeBtn1.style.display = "none";
        hideBtn1.style.display ="inline";
      }
      else if (buttons1.classList.contains("hide-tap1"))
      {
        hideBtn1.style.display ="none";
        seeBtn1.style.display ="inline";
      }
  });
//  -------------------------------- 
const hideBtn2 = document.querySelector(".hide-tap2")
const seeBtn2 = document.querySelector(".seemore-tap2")
const button2 = document.querySelectorAll("#btn2")
 
button2.forEach(function(buttons2)
{
  buttons2.addEventListener("click", ()=>
  {
    if(buttons2.classList.contains("seemore-tap2"))
      {
        console.log(buttons);
        
        seeBtn2.style.display = "none";
        hideBtn2.style.display ="inline";
      }
      else if (buttons2.classList.contains("hide-tap2"))
      {
        hideBtn2.style.display ="none";
        seeBtn2.style.display ="inline";
      }
  });

  // buttons.addEventListener("click", ()=>
  //   {
  //     buttons.style.display ="none";
  //     console.log(button);
  //   })
  //   hideBtn.addEventListener("click", (buttons)=>
  //     {
  //       buttons.style.display = "inline";
  //     })
})
// ----------------------------------------------------------

function showEducationOnScroll() {
  const educationCards = document.querySelectorAll('.education-mobile-width');
  const triggerBottom = window.innerHeight * 0.85;

  educationCards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  });
};

window.addEventListener('scroll', showEducationOnScroll);
window.addEventListener('load', showEducationOnScroll);
// -------------------------------------------------------------------

// const loading =document.getElementById("loading-spinner")
// const overallPage =document.querySelector(".overall-page")

// setTimeout(() => {
//   loading.style.display = "none";
//   document.body.style.height = "100px";
//   if(loading.style.display ==="none")
//   {
//     overallPage.style.display= "block"
//   }
// }, 2000);

const skills = document.querySelector(".logo-slider")

const showcaseBtn = document.querySelectorAll("#showcase-buttons");
const Certificates_btn = document.querySelector(".certificate")
const project_btn = document.querySelector(".projects-section")
const learnmore_btn =document.querySelector(".learn-more")
const seemore_btn =document.querySelector(".seemore-btn")
showcaseBtn.forEach((tap) => {
  tap.addEventListener("click", () => {
    if (tap.classList.contains("project-btn")) {
      console.log("correct");
      project_btn.style.display = "block";
      Certificates_btn.style.display= "none";
    } else if (tap.classList.contains("Certificates-btn")) {
      console.log("good");
      project_btn.style.display = "none";
      Certificates_btn.style.display= "block";
      skills.style.transition = "10s ease"
    } else if (tap.classList.contains("hobbies-btn")) {
      console.log("excellent");
      project_btn.style.display = "none";
      Certificates_btn.style.display= "none";
      learnmore_btn.style.display = "none";
      seemore_btn.style.padding = 0;
    } 
  });
});
});
});