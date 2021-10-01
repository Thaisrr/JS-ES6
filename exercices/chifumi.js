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

function setScore(user, pc) {
    const isWinner = user.isWinner(pc);
    if(isWinner === 1) {
        score_user++;
        $('#result').textContent = `${user.name} vs ${pc.name}, you win`;
        $('#result').style.color = 'green';

    } else if(isWinner ===2) {
        score_pc++;
        $('#result').textContent = `${user.name} vs ${pc.name}, you loose`;
        $('#result').style.color = 'red';
    } else {
        $('#result').textContent = `${user.name} vs ${pc.name}, égalité`;
        $('#result').style.color = 'orange';
    }
    $('#score').textContent = `User: ${score_user} / PC: ${score_pc}`;

}

loaded(() => {
    shapes.forEach(sh => {
        const btn = create('button');
        btn.textContent = sh.name;
        btn.className = 'game-btn';
        clic(btn, () => {
            const pc = computerPlay();
            console.log(pc.name);
            setScore(sh, pc);
        });
        $('#btn-container').appendChild(btn);
    })

});


