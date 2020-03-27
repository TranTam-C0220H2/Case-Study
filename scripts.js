function Card(name, id, img) {
    this.name = name;
    this.id = id;
    this.frontFace = `hot-girl/trollface.gif`;
    this.backFace = img;
    this.status = false;
    this.getImage = function () {
        if (!this.status) {
            return `<img src=${this.frontFace} onclick="changeCard(${this.id})">`;
        } else {
            return `<img src=${this.backFace}>`;
        }
    };

    this.changeStatus = function () {
        this.status = true;
    };
}

let card1 = new Card('picture1', 1, "hot-girl/hotgirl1.jpg");
let card2 = new Card('picture2', 2, 'hot-girl/hotgirl2.jpg');
let card3 = new Card('picture3', 3, 'hot-girl/hotgirl3.jpg');
let card4 = new Card('picture4', 4, 'hot-girl/hotgirl4.jpg');
let card5 = new Card('picture5', 5, 'hot-girl/hotgirl5.jpg');
let card6 = new Card('picture6', 6, 'hot-girl/hotgirl6.jpg');
let card7 = new Card('picture7', 7, 'hot-girl/hotgirl7.jpg');
let card8 = new Card('picture8', 8, 'hot-girl/hotgirl8.jpg');
let card9 = new Card('picture1', 9, "hot-girl/hotgirl1.jpg");
let card10 = new Card('picture2', 10, 'hot-girl/hotgirl2.jpg');
let card11 = new Card('picture3', 11, 'hot-girl/hotgirl3.jpg');
let card12 = new Card('picture4', 12, 'hot-girl/hotgirl4.jpg');
let card13 = new Card('picture5', 13, 'hot-girl/hotgirl5.jpg');
let card14 = new Card('picture6', 14, 'hot-girl/hotgirl6.jpg');
let card15 = new Card('picture7', 15, 'hot-girl/hotgirl7.jpg');
let card16 = new Card('picture8', 16, 'hot-girl/hotgirl8.jpg');
let cards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16];
let doubleCards = shuffle(cards);
let dem = 0;
let check = [];
let x = [];
let checkWin = 0;
let diem = -1;
let music1 = new Audio();
music1.src = 'nhac3.mp3';

function display() {
    document.getElementById('myPicture').innerHTML = '';
    music1.play();
    for (let i = 0; i < doubleCards.length; i++) {
        document.getElementById('myPicture').innerHTML += doubleCards[i].getImage();
    }
    diem += 1;
    document.getElementById('myScore').value = diem;
    if (checkWin === 7 && check[check.length - 1] === check[check.length - 2]) {
        alert('You Win!');
    }
}

function changeCard(id) {
    for (let i = 0; i < doubleCards.length; i++) {
        if (doubleCards[i].id === id) {
            doubleCards[i].changeStatus();
            x.push(i);
            check.push(doubleCards[i].name);
            if (dem === 2) {
                if ((check.length - 3) % 2 === 0) {
                    if (check[check.length - 3] !== check[check.length - 2]) {
                        doubleCards[x[x.length - 2]].status = false;
                        doubleCards[x[x.length - 3]].status = false;
                    } else {
                        checkWin += 1;
                    }
                }
            }
        }
    }
    if (dem === 2) {
        dem = 0;
    }
    display();
    dem++;
}

function resetGame() {
   location.reload();
}


display();

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
