let cards = ['queen', 'queen', 'king', 'king']
let cardsInPlay = []

function checkForMatch () {
  if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
  } else {
  console.log("Sorry, try again.");
  }
}

function flipCards (cardId) {
  console.log("User flipped " + cards[cardId])
  cardsInPlay.push(cards[cardId])

  if (cardsInPlay.length === 2) {
    checkForMatch();
    // if (cardsInPlay[0] === cardsInPlay[1]) {
    //   alert("You found a match!")
    // } else {
    //   alert("Try again")
    // }
  }
}

flipCards(0);
flipCards(2);
