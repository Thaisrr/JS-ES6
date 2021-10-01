class Shape {
    name; // Pierre, feuille, ciseau
    winAgainst; // Une autre forme

    constructor(name) {
        this.name = name;
    } 

    setEnnemy(shape) {
        if(shape !== this) {
            this.winAgainst = shape;
        }
    }

    isWinner(ennemy) {
        if(this === ennemy) return -1;
        return (this.winAgainst === ennemy) ? 1 : 0;
    }
}

const paper = new Shape('Feuille');
const rock = new Shape('Pierre');
const scissors = new Shape('Ciseaux');
paper.setEnnemy(rock); 
// paper.winAgainst = rock;
rock.setEnnemy(scissors);
scissors.setEnnemy(paper);

// paper.isWinner(scissors);

const shapes = [paper, rock, scissors];
let score_user = 0;
let score_pc = 0;


function computerPlay() {
    const index = Math.floor(Math.random() * 3);
    return shapes[index];
}

function result(user, pc) {
    console.log('user : ', user.name);
    console.log('PC : ', pc.name);
    const res = user.isWinner(pc);
    if(res === -1) {
        console.log('égalité');
    } else if( res === 1) {
        score_user++;
        const score = document.getElementById('u');
        score.textContent = score_user;
    } else {
        score_pc++;
        const score = document.getElementById('pc');
        score.textContent = score_pc;
    }
    if(score_pc >= 5 || score_user >= 5) {
        endGame();
    }
}

function endGame() {
    // si un des scores est sup à 5
    // Alert gagné / perdu
    // Remet à 0
    if(score_user > score_pc) {
        alert(`Félicitations, vous avez gagné ${score_user} à ${score_pc}`);
    } else {
        alert(`Oups, vous avez perdu ${score_user} contre ${score_pc}`);
    }
    score_pc = 0;
    score_user = 0;
    let scorePC = document.getElementById('pc');
    scorePC.textContent = score_pc;
    let scoreU = document.getElementById('u');
    scoreU.textContent = score_user;

}

document.addEventListener('DOMContentLoaded', () => {
    
    shapes.forEach(sh => {
        const btn = document.createElement('button');
        btn.textContent = sh.name;
        btn.addEventListener('click', () => {
            const pc_shape = computerPlay();
            result(sh, pc_shape);

        });

        const container = document.getElementById('btn-container');
        container.appendChild(btn);

    })
})


