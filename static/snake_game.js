// snake_game.js

// Function to initialize the Snake game
function initializeGame() {
    // Set up event listeners for keyboard input
    document.addEventListener('keydown', handleKeyDown);
    
    // Fetch initial game state from the backend
    fetchInitialState();
}

// Function to handle keyboard input for controlling the snake
function handleKeyDown(event) {
    // Map keyboard keys to directions
    const keyDirectionMap = {
        ArrowUp: 'UP',
        ArrowDown: 'DOWN',
        ArrowLeft: 'LEFT',
        ArrowRight: 'RIGHT'
    };

    // Check if the pressed key corresponds to a valid direction
    const direction = keyDirectionMap[event.key];
    if (direction) {
        // Send direction to backend API
        sendDirection(direction);
    }
}

// Function to fetch initial game state from the backend
function fetchInitialState() {
    fetch('/api/initial_state')
        .then(response => response.json())
        .then(data => {
            // Update UI with initial game state
            renderGameState(data);
        })
        .catch(error => {
            console.error('Error fetching initial game state:', error);
        });
}

// Function to send direction to backend API
function sendDirection(direction) {
    fetch('/api/move_snake', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ direction: direction })
    })
    .then(response => response.json())
    .then(data => {
        // Update UI with updated game state
        renderGameState(data);
    })
    .catch(error => {
        console.error('Error sending direction to backend:', error);
    });
}

// Function to update the UI with the current game state
function renderGameState(gameState) {
    // Get the canvas element
    const canvas = document.getElementById('snake-canvas');
    const ctx = canvas.getContext('2d');

    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Render the snake
    ctx.fillStyle = 'green';
    gameState.snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, 10, 10);
    });

    // Render the food
    ctx.fillStyle = 'red';
    ctx.fillRect(gameState.food.x, gameState.food.y, 10, 10);

    // Render the score
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score: ${gameState.score}`;
}
