// Open the modal and show the clicked certificate
function openModal(imgElement) {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imgElement.src;
  captionText.innerHTML = imgElement.alt;
}

// Close the modal
function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Optional: Close modal by clicking outside the image
window.onclick = function(event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}

//typing animation

var typed = new Typed(".typing", {
  strings:["", "Software Engineer", "Web Designer", "Web Developer"],
  typeSpeed:120,
  BackSpeed:60,
  loop:true
})

//aside menu

const nav = document.querySelector(".nav");
const navList = nav.querySelectorAll("li");
const totalNavList = navList.length;

for(let i = 0; i < totalNavList; i++){
  
  const a = navList[i].querySelector("a");
  
  a.addEventListener("click", function(){
    for(let j = 0; j < totalNavList; j++){
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if(window.innerWidth < 1200){
      asideSectionTogglreBtn();
    }

  })
  
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click", () => {
        asideSectionTogglreBtn();
      })
      function asideSectionTogglreBtn(){
        aside.classList.toggle("open");
      }