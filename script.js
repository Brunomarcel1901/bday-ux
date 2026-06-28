/* ===================================================
   PROJECT NEBULA - HAPPY BIRTHDAY JOSH
   PHASE 3
=================================================== */

// ----------------------------
// Create Stars
// ----------------------------

const stars = document.getElementById("stars");

for (let i = 0; i < 300; i++) {

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random() * 3 + 1;

    star.style.width = size + "px";
    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "vw";
    star.style.top = Math.random() * 100 + "vh";

    star.style.animationDelay = Math.random() * 4 + "s";

    stars.appendChild(star);

}

// ----------------------------
// Elements
// ----------------------------

const identity = document.getElementById("identity");
const loading = document.getElementById("loading");
const landing = document.getElementById("landing");
const countdownScene = document.getElementById("countdownScene");

const input = document.getElementById("username");
const button = document.getElementById("continueBtn");
const message = document.getElementById("message");
const bar = document.getElementById("bar");

const story = document.getElementById("story");
const birthday = document.getElementById("birthdayTitle");
const beginJourney = document.getElementById("beginJourney");

const continueLetter = document.getElementById("continueLetter");

const hoursText = document.getElementById("hours");
const minutesText = document.getElementById("minutes");
const secondsText = document.getElementById("seconds");
const letterScene = document.getElementById("letterScene");

const typewriter = document.getElementById("typewriter");

const openGallery = document.getElementById("openGallery");
const galleryScene = document.getElementById("galleryScene");

const galleryImage = document.getElementById("galleryImage");

const galleryCaption = document.getElementById("galleryCaption");

const prevPhoto = document.getElementById("prevPhoto");

const nextPhoto = document.getElementById("nextPhoto");
const finalScene=document.getElementById("finalScene");
const introMusic = new Audio("assets/music/intro.mp3");
const memoriesMusic = new Audio("assets/music/memories.mp3");

// --------------------------------------------------
// LOGIN
// --------------------------------------------------

button.onclick = verifyUser;

input.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {

        verifyUser();

    }

});

function verifyUser() {

    const name = input.value.trim().toLowerCase();

    if (name === "josh") {

        identity.classList.add("hidden");

        loading.classList.remove("hidden");

        setTimeout(() => {

            bar.style.width = "100%";

        }, 150);

        setTimeout(() => {

            loading.classList.add("hidden");
            landing.classList.remove("hidden");

            music.playIntro();

            startStory();
        }, 3300);

    } else {

        message.innerHTML =
            "Sorry, this experience isn't meant for you.";

        input.animate([

            { transform: "translateX(-8px)" },

            { transform: "translateX(8px)" },

            { transform: "translateX(-8px)" },

            { transform: "translateX(8px)" },

            { transform: "translateX(0)" }

        ], {

            duration: 400

        });

    }

}

// --------------------------------------------------
// STORY
// --------------------------------------------------

const storyLines = [

    "Every star has a story...",

    "Every journey has a beginning...",

    "Today, we celebrate yours."

];

function startStory() {

    let index = 0;

    story.classList.remove("hidden");

    nextLine();

    function nextLine() {

        story.innerHTML = storyLines[index];

        story.classList.add("fadeIn");

        setTimeout(() => {

            story.classList.remove("fadeIn");

            story.classList.add("fadeOut");

            setTimeout(() => {

                story.classList.remove("fadeOut");

                index++;

                if (index < storyLines.length) {

                    nextLine();

                } else {

                    birthday.classList.remove("hidden");
                    beginJourney.classList.remove("hidden");

                    setTimeout(() => {

                        birthday.classList.add("fadeIn");
                        beginJourney.classList.add("fadeIn");

                    }, 150);

                }

            }, 900);

        }, 2200);

    }

}

// --------------------------------------------------
// BEGIN JOURNEY
// --------------------------------------------------

beginJourney.onclick = () => {

    landing.classList.add("hidden");

    countdownScene.classList.remove("hidden");

    startCountdown();

};

// --------------------------------------------------
// COUNTDOWN
// --------------------------------------------------

let timerStarted = false;

function startCountdown() {

    if (timerStarted) return;

    timerStarted = true;

    // CHANGE THIS TO JOSH'S BIRTHDAY
    const birthday = new Date("2026-06-28T00:00:00");

    updateCountdown();

    setInterval(updateCountdown, 1000);

    function updateCountdown() {

        const now = new Date();

        const difference = birthday - now;

        if (difference <= 0) {

            hoursText.innerHTML = "00";
            minutesText.innerHTML = "00";
            secondsText.innerHTML = "00";

            document.querySelector(".count-title").innerHTML =
                "🎉 Happy Birthday Josh!";

            continueLetter.classList.remove("hidden");
            continueLetter.classList.add("fadeIn");

            return;

        }

        const hours = Math.floor(difference / 1000 / 60 / 60);

        const minutes = Math.floor((difference / 1000 / 60) % 60);

        const seconds = Math.floor((difference / 1000) % 60);

        hoursText.innerHTML = String(hours).padStart(2, "0");

        minutesText.innerHTML = String(minutes).padStart(2, "0");

        secondsText.innerHTML = String(seconds).padStart(2, "0");

    }

}

// --------------------------------------------------
// NEXT PHASE
// --------------------------------------------------

continueLetter.onclick = () => {

    countdownScene.classList.add("hidden");

    letterScene.classList.remove("hidden");

    startLetter();

};

const letter = `Dear Josh,

Happy Birthday, my friend. 💙

First of all...

Congratulations on surviving another year of my wahala. 😂

Seriously though...

Today isn't just another date.

It's another reminder that the world became a better place the day you arrived.

Thank you for every laugh...

Every conversation...

Every encouragement...

And every memory.

As you begin another year, I pray that God continues to guide your steps, bless your dreams, protect your journey and give you peace that surpasses understanding.

Never stop believing in yourself.

Your best days are still ahead.

Keep smiling.

Keep growing.

Keep being the amazing person you are.

Happy Birthday once again, Josh.

— Sylvie 💓`;

function startLetter(){

    let index=0;

    typewriter.innerHTML="";

    const speed=45;

    const timer=setInterval(()=>{

        typewriter.innerHTML+=letter.charAt(index);

        index++;

        window.scrollTo(0,document.body.scrollHeight);

        if(index>=letter.length){

            clearInterval(timer);

            setTimeout(()=>{

                openGallery.classList.remove("hidden");

                openGallery.classList.add("fadeIn");

            },3000);

        }

    },speed);

}
// ======================
// MEMORY GALLERY
// ======================

const photos = [

{
image:"assets/images/photo1.jpg",
caption:"Every friendship begins with one unforgettable moment."
},

{
image:"assets/images/photo2.jpg",
caption:"A smile that makes every day brighter."
},

{
image:"assets/images/photo3.jpg",
caption:"Proof that the best memories are the simplest ones."
},

{
image:"assets/images/photo4.jpg",
caption:"One more chapter in an amazing journey."
},

{
image:"assets/images/photo5.jpg",
caption:"Here's to the laughter we'll never forget."
},

{
image:"assets/images/photo6.jpg",
caption:"Another memory worth holding onto forever."
},

{
image:"assets/images/photo7.jpg",
caption:"Some moments deserve to last a lifetime."
},

{
image:"assets/images/photo8.jpg",
caption:"The story isn't ending... it's only getting better."
}

];

let currentPhoto = 0;

openGallery.onclick = function(){

    window.scrollTo(0, 0); // <--- ADD THIS LINE HERE

    letterScene.classList.add("hidden");

    galleryScene.classList.remove("hidden");
    music.crossFadeToMemories();

    showPhoto();

}

function showPhoto(){

    galleryImage.style.opacity = 0;

    setTimeout(function(){

        galleryImage.src = photos[currentPhoto].image;

        galleryCaption.innerHTML = photos[currentPhoto].caption;

        galleryImage.style.opacity = 1;

    },400);

}

nextPhoto.onclick=function(){

    if(currentPhoto<photos.length-1){

        currentPhoto++;

        showPhoto();

    }else{

        galleryScene.classList.add("hidden");

        finalScene.classList.remove("hidden");
        music.fadeOutAll();

    }

}

prevPhoto.onclick = function(){

    if(currentPhoto > 0){

        currentPhoto--;

        showPhoto();

    }

}

if(currentPhoto===photos.length-1){

    nextPhoto.innerHTML="Finish ✨";

}
