const buttonsDOM = document.querySelectorAll(`.buttons`);
const textDOM = document.querySelector(`.text`);

const npcDOM = document.querySelector(`.npc`);
const playerDOM = document.querySelector(`.player`)

const npcIndex = [`rock`,`paper`,`scissors`]

for(const buttonDOM of buttonsDOM) {
    let random = ``;
    let userInput = ``;
    buttonDOM.addEventListener(`click`, () => {
        userInput = buttonDOM.innerHTML;
        random = npcIndex[Math.floor(Math.random() * 3 )];
       
        if (userInput === random) {
            console.log(`Its a tie`);
        }else if (userInput === `Rock`) {
            if (random === `scissors`) {
                textDOM.innerHTML = `User wins`;
            } else {
                textDOM.innerHTML = `PC wins`;
            }
        }else if (userInput === `Paper`) {
            if (random === `rock`) {
                textDOM.innerHTML =`User wins`;
            } else {
                textDOM.innerHTML = `PC wins`;
            }
        } else {
          if (userInput === `Scissor`) {
            if (random === `paper`) {
                textDOM.innerHTML = `User wins`;
            } else {
                textDOM.innerHTML = `PC wins`;
            }
         } 
        } 
    })  
}








