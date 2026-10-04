// 1. Select HTML elements using their IDs
const countDisplay = document.getElementById('count');
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const resetBtn = document.getElementById('reset-btn');
const colorBtn = document.getElementById('color-btn');

// 2. Initialize state variable
let count = 0;

// 3. Define functions to update the count
function updateDisplay() {
  countDisplay.textContent = count;
}

// 4. Add Event Listeners for buttons
incrementBtn.addEventListener('click', () => {
  count++;
  updateDisplay();
});

decrementBtn.addEventListener('click', () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener('click', () => {
  count = 0;
  updateDisplay();
});

// Random background color generator function
colorBtn.addEventListener('click', () => {
  const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});