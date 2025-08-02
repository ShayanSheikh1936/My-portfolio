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
const button = document.querySelectorAll(".btn")
const hideBtn = document.querySelector(".btn1")

button.forEach(function(buttons)
{
  buttons.addEventListener("click", ()=>
    {
      buttons.style.display ="none";
      console.log(button);
    })
    hideBtn.addEventListener("click", (buttons)=>
      {
        buttons.style.display = "inline";
      })
})


  hideBtn.addEventListener("click", (button)=>
  {
    button.preventDefault();
    
    button.style.display = "inline";
    
  })

// eduacation collapse cards
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

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

const loading =document.getElementById("loading-spinner")
const overallPage =document.querySelector(".overall-page")

setTimeout(() => {
  loading.style.display = "none";
  document.body.style.height = "100px";
  if(loading.style.display ==="none")
  {
    overallPage.style.display= "block"
  }
}, 2000);

const skills = document.querySelector(".logo-slider")

