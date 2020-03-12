let cards = [
  {
    rank: "queen",
    suit: 'hearts',
    cardImage: "images/queen-of-hearts.png"
  },
  {
    rank: "queen",
    suit:'diamonds',
    cardImage: "images/queen-of-diamonds.png"
  },
  {
    rank: "king",
    suit: 'hearts',
    cardImage: "images/king-of-hearts.png"
  },
  {
    rank: "king",
    suit: 'diamonds',
    cardImage: "images/king-of-diamonds.png"
  }
];
let cardsInPlay = []

function checkForMatch () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
  } else {
  console.log("Sorry, try again.");
  }
}

function flipCards (cardId) {
  console.log("User flipped " + cards[cardId].rank)
  cardsInPlay.push(cards[cardId].rank)
  console.log(cards[cardId].suit)
  console.log(cards[cardId].cardImage)
  if (cardsInPlay.length === 2) {
    checkForMatch();
  }
}

flipCards(0);
flipCards(2);
