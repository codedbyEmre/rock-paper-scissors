const rules = document.getElementById('rules');
const modal = document.getElementById('modal');
const close_modal = document.getElementById('close-modal');
const shapes = document.querySelectorAll('.shape');
const score = document.getElementById('score');
const triangle = document.getElementById('triangle');
const result = document.getElementById('result');

// Opening modal
const openModal = () => {
    modal.style.display = 'block';
}

// Closing modal
const closeModal = () => {
    modal.style.display = 'none';
}

// Play rock,paper,scsissors game
const game = (e) => {
    const player = e.target.id;
    const opponent = getOpponent();
    const winner = getWinner(player, opponent);
    displayWinner(player, opponent, winner);
    console.log(player, opponent, winner);
}

// Get opponent's random move
const getOpponent = () => {
    const rnd = Math.random();
    if (rnd < 0.34) {
        return 'rock';
      } else if (rnd <= 0.67) {
        return 'paper';
      } else {
        return 'scissors';
      }
}

// Deciding who is winner
const getWinner = (player, opponent) => {
    if (player === opponent) {
        return 'draw';
      } else if (player === 'rock') {
        if (opponent === 'paper') {
          return 'opponent';
        } else {
          return 'player';
        }
      } else if (player === 'paper') {
        if (opponent === 'scissors') {
          return 'opponent';
        } else {
          return 'player';
        }
      } else if (player === 'scissors') {
        if (opponent === 'rock') {
          return 'opponent';
        } else {
          return 'player';
        }
      }
}

// Displaying who is winner
const displayWinner = (player, opponent, winner) => {
    if(winner === 'player'){
        score.innerHTML++;
        triangle.style.display = 'none';
        result.style.display = 'block';
        result.innerHTML = `
        <div class="triangle-bg">
          <div class="shapes">
            <div class = 'player-choice'>
                <h2>You picked</h2>
                <div class="${player} shape"></div> 
            </div>
            <div class = 'middle-section'>
              <h2 class = 'winner'>Winner: ${winner}</h2>
              <div class = 'restart' onclick = 'restart()'>Play again</div>
            </div>
            <div class = 'opponent-choice'>
                <h2>The house picked</h2>
                <div class="${opponent} shape">
            </div>
          </div>
          </div>
        </div>
        `;
    }else if(winner === 'opponent'){
        score.innerHTML--;
        triangle.style.display = 'none';
        result.style.display = 'block';
        result.innerHTML = `
        <div class="triangle-bg">
          <div class="shapes">
            <div class = 'player-choice'>
                <h2>You picked</h2>
                <div class="${player} shape"></div> 
            </div>
            <div class = 'middle-section'>
              <h2 class = 'winner'>Winner: ${winner}</h2>
              <div class = 'restart' onclick = 'restart()'>Play again</div>
            </div>
            <div class = 'opponent-choice'>
                <h2>The house picked</h2>
                <div class="${opponent} shape">
            </div>
          </div>
          </div>
        </div>
        `;
    }else{
        triangle.style.display = 'none';
        result.style.display = 'block';
        result.innerHTML = `
        <div class="triangle-bg">
          <div class="shapes">
            <div class = 'player-choice'>
                <h2>You picked</h2>
                <div class="${player} shape"></div> 
            </div>
            <div class = 'middle-section'>
              <h2 class = 'winner'>Winner: ${winner}</h2>
              <div class = 'restart' onclick = 'restart()'>Play again</div>
            </div>
            <div class = 'opponent-choice'>
                <h2>The house picked</h2>
                <div class="${opponent} shape">
            </div>
          </div>
          </div>
        </div>
        `;
    }
}

const restart = () => {
    triangle.style.display = 'block';
    result.style.display = 'none';
}

// Event listeners
rules.addEventListener('click', openModal);
close_modal.addEventListener('click', closeModal);
window.addEventListener('click', e => {
    if(e.target === modal){
        modal.style.display = 'none';
    }
});
shapes.forEach(shape => {
    shape.addEventListener('click', game);
})
