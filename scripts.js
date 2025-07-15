/*Scroll Button on Main*/

if (window.location.hash) {
    history.replaceState(null, null, ' ');
  }


/*Card Animation*/
function focusCard(clickedCard) {
    const allCards = document.querySelectorAll('.card');
    allCards.forEach(card => card.classList.remove('focused'));
    clickedCard.classList.add('focused');
  }
  