let cards = [
  {
    rank: "queen",
    suit: 'hearts',
    cardImage: "images/images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit:'diamonds',
    cardImage: "images/images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: 'hearts',
    cardImage: "images/images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: 'diamonds',
    cardImage: "images/images/king-of-diamonds.png"
  }
];
let cardsInPlay = []

function checkForMatch () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  alert("You found a match!");
  } else {
  alert("Sorry, try again.");
  }
}

function createBoard () {
  for (let i = 0; i < cards.length; i++) {
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/images/back.png');
    cardElement.setAttribute('data-id', i)
    cardElement.addEventListener('click', flipCards);
    document.getElementById("game-board").appendChild(cardElement)
  }
};

function flipCards () {
  let cardId = this.getAttribute('data-id')
  console.log("User flipped " + cards[cardId].rank)
  cardsInPlay.push(cards[cardId].rank)
  console.log(cards[cardId].suit)
  console.log(cards[cardId].cardImage)
  this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

createBoard();
