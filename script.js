// =====================================
// Operation Dilbean 💜
// CLEAN FULL SCRIPT
// =====================================


// =========================
// ELEMENTS
// =========================

const envelope = document.getElementById("envelope");
const startButton = document.getElementById("startButton");
const map = document.getElementById("map");

const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");

const popupTitle = document.getElementById("popupTitle");
const popupText = document.getElementById("popupText");

const finalScreen = document.getElementById("finalScreen");
const replayBtn = document.getElementById("replayBtn");



// =========================
// ENVELOPE
// =========================


if(envelope){

    envelope.addEventListener("click",()=>{

        envelope.classList.toggle("open");

    });

}



if(startButton){

    startButton.addEventListener("click",(event)=>{


        event.stopPropagation();


        envelope.style.opacity="0";


        setTimeout(()=>{


            envelope.style.display="none";


            if(map){

                map.classList.remove("hidden");

            }


            // make secrets wiggle

            ["egg1","egg2","egg3"].forEach(id=>{

                const egg=document.getElementById(id);

                if(egg){

                    egg.classList.add("wiggleHint");

                }

            });


        },700);


    });

}





// =========================
// POPUPS
// =========================


function openPopup(title,text){


    if(popupTitle)
        popupTitle.innerText=title;


    if(popupText)
        popupText.innerText=text;


    overlay.classList.remove("hidden");

    popup.classList.remove("hidden");


}



function closePopup(){


    overlay.classList.add("hidden");

    popup.classList.add("hidden");


}



window.closePopup=closePopup;



if(overlay){

    overlay.onclick=closePopup;

}





// =========================
// MAIN MISSION STARS
// =========================


const missions=[


{
id:"star1",
title:"📚 IB Resits",
text:
"You are not starting again, Dilbean 💜\n\n"+
"You already climbed this mountain once.\n"+
"Now you know the route.\n\n"+
"Small steps still move forward."
},


{
id:"star2",
title:"🧠 UCAT Arc",
text:
"One question at a time.\n\n"+
"Not the whole future.\n"+
"Not every possibility.\n"+
"Just the next question.\n\n"+
"You've got this."
},


{
id:"star3",
title:"📅 November Exams",
text:
"This isn't proving you are smart.\n\n"+
"You already are.\n\n"+
"This is just showing everyone what you already know."
},


{
id:"star4",
title:"📨 December Results",
text:
"Results are information.\n\n"+
"They are not your identity.\n\n"+
"We celebrate, adjust, and keep going 💜"
},



{
id:"star5",
title:"🌟 The Fork In The Road",
text:
"Medicine 🩺\n\n"+
"or\n\n"+
"A new adventure in economics, finance, London, or somewhere unexpected.\n\n"+
"Different paths.\n"+
"Same amazing Dilbean."
}


];



missions.forEach(mission=>{


const star=document.getElementById(mission.id);


if(star){


star.onclick=()=>{


openPopup(
mission.title,
mission.text
);


if(mission.id==="star5"){


setTimeout(()=>{


closePopup();

showFinalScreen();


},3000);


}



};


}



});





// =========================
// EASTER EGGS
// =========================



const eggs=[


{
id:"egg1",
title:"👀 Psst...",
text:
"Reminder:\n\n"+
"Your girlfriend thinks you are pretty amazing.\n"+
"Unfortunately you cannot argue with her."
},


{
id:"egg2",
title:"🐆 Jaguar Approval",
text:
"The jaguar has arrived.\n\n"+
"It has no advice.\n"+
"It just supports you."
},


{
id:"egg3",
title:"💜 Secret Message",
text:
"Whatever happens next...\n\n"+
"I am still proud of you.\n\n"+
"Always."
}



];



eggs.forEach(egg=>{


const element=document.getElementById(egg.id);



if(element){


element.onclick=()=>{


openPopup(
egg.title,
egg.text
);


};


}



});






// =========================
// FLOATING PARTICLES
// =========================


const particleContainer=document.getElementById("particles");



function createParticle(){


if(!particleContainer)
return;



const particle=document.createElement("div");


particle.className="particle";


particle.style.left=Math.random()*100+"vw";


particle.style.animationDuration=
(6+Math.random()*8)+"s";



particleContainer.appendChild(particle);



setTimeout(()=>{

particle.remove();

},12000);



}



setInterval(createParticle,500);







// =========================
// JAGUAR 🐆
// =========================


function createJaguar(){


const jaguar=document.createElement("div");


jaguar.id="jaguar";


jaguar.innerHTML="🐆";


document.body.appendChild(jaguar);



}



createJaguar();







// =========================
// FINAL SCREEN
// =========================


function showFinalScreen(){


if(finalScreen){


finalScreen.classList.remove("hidden");


startConfetti();


}



}







// =========================
// CONFETTI
// =========================


const canvas=document.getElementById("confetti");


let ctx;


if(canvas){


ctx=canvas.getContext("2d");


canvas.width=window.innerWidth;

canvas.height=window.innerHeight;


}



let pieces=[];



function startConfetti(){


if(!ctx)
return;



for(let i=0;i<120;i++){


pieces.push({

x:Math.random()*canvas.width,

y:-20,

size:Math.random()*7+3,

speed:Math.random()*3+2

});


}



animateConfetti();


}





function animateConfetti(){


if(!ctx)
return;



ctx.clearRect(
0,
0,
canvas.width,
canvas.height
);



pieces.forEach(p=>{


ctx.fillRect(
p.x,
p.y,
p.size,
p.size
);



p.y+=p.speed;



if(p.y>canvas.height){

p.y=-10;

}



});



requestAnimationFrame(animateConfetti);


}








// =========================
// REPLAY
// =========================



if(replayBtn){


replayBtn.onclick=()=>{


finalScreen.classList.add("hidden");



map.classList.add("hidden");



envelope.style.display="block";


setTimeout(()=>{

envelope.style.opacity="1";

},100);



};



}
