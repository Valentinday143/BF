// 🔐 LOGIN PAGE
function login(){
  const key = "blackbird"; // change this
  const input = document.getElementById("secret").value.toLowerCase();

  if(input === key){
    window.location.href = "valentine.html";
  } else {
    document.getElementById("error").innerText = 
      "Hmm… think again my love 🥺";
  }
}


// 💘 VALENTINE PAGE
function runAway(){
  const btn = document.getElementById("yes");
  btn.style.position = "absolute";
  btn.style.left = Math.random()*80 + "%";
  btn.style.top = Math.random()*80 + "%";
}

function showNext(){
  document.getElementById("music").play();
  document.getElementById("next").classList.remove("hidden");

  // Optional smooth fade
  document.getElementById("next").style.opacity = "1";
}




// 💕 QUESTIONS PAGE
function submitAnswers(e){
  e.preventDefault();

  const newEntry = {
    date: new Date().toLocaleString(),
    whyLove: document.getElementById("whyLove").value,
    wrongChoice: document.getElementById("wrongChoice").value,
    important: document.getElementById("important").value,
    importanceWay: document.getElementById("importanceWay").value,
    missTrips: document.getElementById("missTrips").value,
    youMissing: document.getElementById("youMissing").value
  };

  // Get old data
  let allAnswers = JSON.parse(localStorage.getItem("allAnswers")) || [];

  // Add new entry
  allAnswers.push(newEntry);

  // Save back
  localStorage.setItem("allAnswers", JSON.stringify(allAnswers));

  window.location.href = "memories.html";
}

let currentSlide = 0;
const slider = document.getElementById("slider");

function nextSlide(){
  if(currentSlide < slider.children.length - 1){
    currentSlide++;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
}

function prevSlide(){
  if(currentSlide > 0){
    currentSlide--;
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
}

/* VIDEO */
let currentVideo = 0;
const videoSlider = document.getElementById("videoSlider");

function nextVideo(){
  if(currentVideo < videoSlider.children.length - 1){
    currentVideo++;
    videoSlider.style.transform = `translateX(-${currentVideo * 100}%)`;
  }
}

function prevVideo(){
  if(currentVideo > 0){
    currentVideo--;
    videoSlider.style.transform = `translateX(-${currentVideo * 100}%)`;
  }
}
