document.addEventListener("DOMContentLoaded", function() {
  const monthSelect = document.getElementById("month");
  const dayInput = document.getElementById("day");
  const cardContainer = document.getElementById("card-container");

  const cardData = [
    {
      month: "March",
      day: "20",
      card: "3 of Diamonds",
      description: "Primus 1",
    },
    {
      month: "March",
      day: "21",
      card: "2 of Diamonds",
      description: "Primus 2",
    },
    {
      month: "March",
      day: "22",
      card: "A of Diamonds",
      description: "Primus 3",
    },
    {
      month: "March",
      day: "23",
      card: "K of Clubs",
      description: "Primus 4",
    },
    {
      month: "March",
      day: "24",
      card: "Q of Clubs",
      description: "Primus 5",
    },
    {
      month: "March",
      day: "25",
      card: "J of Clubs",
      description: "Primus 6",
    },
    {
      month: "March",
      day: "26",
      card: "10 of Clubs",
      description: "Primus 7",
    },
    {
      month: "March",
      day: "27",
      card: "9 of Clubs",
      description: "Primus 8",
    },
    {
      month: "March",
      day: "28",
      card: "8 of Clubs",
      description: "Primus 9",
    },
    {
      month: "March",
      day: "29",
      card: "7 of Clubs",
      description: "Primus 10",
    },
    {
      month: "March",
      day: "30",
      card: "6 of Clubs",
      description: "Primus 11",
    },
    {
      month: "March",
      day: "31",
      card: "5 of Clubs",
      description: "Primus 12",
    },
    {
      month: "April",
      day: "1",
      card: "7 of Spades",
      description: "Primus 13",
    },
    {
      month: "April",
      day: "2",
      card: "6 of Spades",
      description: "Primus 14",
    },
    {
      month: "April",
      day: "3",
      card: "5 of Spades",
      description: "Primus 15",
    },
    {
      month: "April",
      day: "4",
      card: "4 of Spades",
      description: "Primus 16",
    },
    {
      month: "April",
      day: "5",
      card: "3 of Spades",
      description: "Primus 17",
    },
    {
      month: "April",
      day: "6",
      card: "2 of Spades",
      description: "Primus 18",
    },
    {
      month: "April",
      day: "7",
      card: "A of Spades",
      description: "Primus 19",
    },
    {
      month: "April",
      day: "8",
      card: "K of Diamonds",
      description: "Primus 20",
    },
    {
      month: "April",
      day: "9",
      card: "Q of Diamonds",
      description: "Primus 21",
    },
    {
      month: "April",
      day: "10",
      card: "J of Diamonds",
      description: "Primus 22",
    },
    {
      month: "April",
      day: "11",
      card: "10 of Diamonds",
      description: "Primus 23",
    },
    {
      month: "April",
      day: "12",
      card: "9 of Diamonds",
      description: "Primus 24",
    },
    {
      month: "April",
      day: "13",
      card: "8 of Diamonds",
      description: "Primus 25",
    },
    {
      month: "April",
      day: "14",
      card: "7 of Diamonds",
      description: "Primus 26",
    },
    {
      month: "April",
      day: "15",
      card: "6 of Diamonds",
      description: "Primus 27",
    },
    {
      month: "April",
      day: "16",
      card: "5 of Diamonds",
      description: "Primus 28",
    },
    {
      month: "April",
      day: "17",
      card: "4 of Diamonds",
      description: "Secundus 1",
    },
    {
      month: "April",
      day: "18",
      card: "3 of Diamonds",
      description: "Secundus 2",
    },
    {
      month: "April",
      day: "19",
      card: "2 of Diamonds",
      description: "Secundus 3",
    },
    {
      month: "April",
      day: "20",
      card: "A of Diamonds",
      description: "Secundus 4",
    },
    {
      month: "April",
      day: "21",
      card: "K of Clubs",
      description: "Secundus 5",
    },
    {
      month: "April",
      day: "22",
      card: "Q of Clubs",
      description: "Secundus 6",
    },
    {
      month: "April",
      day: "23",
      card: "J of Clubs",
      description: "Secundus 7",
    },
    {
      month: "April",
      day: "24",
      card: "10 of Clubs",
      description: "Secundus 8",
    },
    {
      month: "April",
      day: "25",
      card: "9 of Clubs",
      description: "Secundus 9",
    },
    {
      month: "April",
      day: "26",
      card: "8 of Clubs",
      description: "Secundus 10",
    },
    {
      month: "April",
      day: "27",
      card: "7 of Clubs",
      description: "Secundus 11",
    },
    {
      month: "April",
      day: "28",
      card: "6 of Clubs",
      description: "Secundus 12",
    },
    {
      month: "April",
      day: "29",
      card: "5 of Clubs",
      description: "Secundus 13",
    },
    {
      month: "April",
      day: "30",
      card: "4 of Clubs",
      description: "Secundus 14",
    },
    {
      month: "May",
      day: "1",
      card: "5 of Spades",
      description: "Secundus 15",
    },
    {
      month: "May",
      day: "2",
      card: "4 of Spades",
      description: "Secundus 16",
    },
    {
      month: "May",
      day: "3",
      card: "3 of Spades",
      description: "Secundus 17",
    },
    {
      month: "May",
      day: "4",
      card: "2 of Spades",
      description: "Secundus 18",
    },
    {
      month: "May",
      day: "5",
      card: "A of Spades",
      description: "Secundus 19",
    },
    {
      month: "May",
      day: "6",
      card: "K of Hearts",
      description: "Secundus 20",
    },
    {
      month: "May",
      day: "7",
      card: "Q of Hearts",
      description: "Secundus 21",
    },
    {
      month: "May",
      day: "8",
      card: "J of Hearts",
      description: "Secundus 22",
    },
    {
      month: "May",
      day: "9",
      card: "10 of Hearts",
      description: "Secundus 23",
    },
    {
      month: "May",
      day: "10",
      card: "9 of Hearts",
      description: "Secundus 24",
    },
    {
      month: "May",
      day: "11",
      card: "8 of Hearts",
      description: "Secundus 25",
    },
    {
      month: "May",
      day: "12",
      card: "7 of Hearts",
      description: "Secundus 26",
    },
    {
      month: "May",
      day: "13",
      card: "6 of Hearts",
      description: "Secundus 27",
    },
    {
      month: "May",
      day: "14",
      card: "5 of Hearts",
      description: "Secundus 28",
    },
    {
      month: "May",
      day: "15",
      card: "4 of Hearts",
      description: "Tertius 1",
    },
    {
      month: "May",
      day: "16",
      card: "3 of Hearts",
      description: "Tertius 2",
    },
    {
      month: "May",
      day: "17",
      card: "2 of Hearts",
      description: "Tertius 3",
    },
    {
      month: "May",
      day: "18",
      card: "A of Hearts",
      description: "Tertius 4",
    },
    {
      month: "May",
      day: "19",
      card: "K of Diamonds",
      description: "Tertius 5",
    },
    {
      month: "May",
      day: "20",
      card: "Q of Diamonds",
      description: "Tertius 6",
    },
    {
      month: "May",
      day: "21",
      card: "J of Diamonds",
      description: "Tertius 7",
    },
    {
      month: "May",
      day: "22",
      card: "10 of Diamonds",
      description: "Tertius 8",
    },
    {
      month: "May",
      day: "23",
      card: "9 of Diamonds",
      description: "Tertius 9",
    },
    {
      month: "May",
      day: "24",
      card: "8 of Diamonds",
      description: "Tertius 10",
    },
    {
      month: "May",
      day: "25",
      card: "7 of Diamonds",
      description: "Tertius 11",
    },
    {
      month: "May",
      day: "26",
      card: "6 of Diamonds",
      description: "Tertius 12",
    },
    {
      month: "May",
      day: "27",
      card: "5 of Diamonds",
      description: "Tertius 13",
    },
    {
      month: "May",
      day: "28",
      card: "4 of Diamonds",
      description: "Tertius 14",
    },
    {
      month: "May",
      day: "29",
      card: "3 of Diamonds",
      description: "Tertius 15",
    },
    {
      month: "May",
      day: "30",
      card: "2 of Diamonds",
      description: "Tertius 16",
    },
    {
      month: "May",
      day: "31",
      card: "A of Diamonds",
      description: "Tertius 17",
    },
    {
      month: "June",
      day: "1",
      card: "K of Clubs",
      description: "Tertius 18",
    },
    {
      month: "June",
      day: "2",
      card: "Q of Clubs",
      description: "Tertius 19",
    },
    {
      month: "June",
      day: "3",
      card: "J of Clubs",
      description: "Tertius 20",
    },
    {
      month: "June",
      day: "4",
      card: "10 of Clubs",
      description: "Tertius 21",
    },
    {
      month: "June",
      day: "5",
      card: "9 of Clubs",
      description: "Tertius 22",
    },
    {
      month: "June",
      day: "6",
      card: "8 of Clubs",
      description: "Tertius 23",
    },
    {
      month: "June",
      day: "7",
      card: "7 of Clubs",
      description: "Tertius 24",
    },
    {
      month: "June",
      day: "8",
      card: "6 of Clubs",
      description: "Tertius 25",
    },
    {
      month: "June",
      day: "9",
      card: "5 of Clubs",
      description: "Tertius 26",
    },
    {
      month: "June",
      day: "10",
      card: "4 of Clubs",
      description: "Tertius 27",
    },
    {
      month: "June",
      day: "11",
      card: "3 of Clubs",
      description: "Tertius 28",
    },
    {
      month: "June",
      day: "12",
      card: "2 of Clubs",
      description: "Quartus 1",
    },
    {
      month: "June",
      day: "13",
      card: "A of Clubs",
      description: "Quartus 2",
    },
    {
      month: "June",
      day: "14",
      card: "K of Spades",
      description: "Quartus 3",
    },
    {
      month: "June",
      day: "15",
      card: "Q of Spades",
      description: "Quartus 4",
    },
    {
      month: "June",
      day: "16",
      card: "J of Spades",
      description: "Quartus 5",
    },
    {
      month: "June",
      day: "17",
      card: "10 of Spades",
      description: "Quartus 6",
    },
    {
      month: "June",
      day: "18",
      card: "9 of Spades",
      description: "Quartus 7",
    },
    {
      month: "June",
      day: "19",
      card: "8 of Spades",
      description: "Quartus 8",
    },
    {
      month: "June",
      day: "20",
      card: "7 of Spades",
      description: "Quartus 9",
    },
    {
      month: "June",
      day: "21",
      card: "6 of Spades",
      description: "Quartus 10",
    },
    {
      month: "June",
      day: "22",
      card: "5 of Spades",
      description: "Quartus 11",
    },
    {
      month: "June",
      day: "23",
      card: "4 of Spades",
      description: "Quartus 12",
    },
  ];

  function displayCardData(month, day) {
    cardContainer.innerHTML = "";

    const selectedData = cardData.filter(data => data.month === month && data.day === day);

    if (selectedData.length === 0) {
      const noDataCard = document.createElement("div");
      noDataCard.classList.add("card");
      noDataCard.innerHTML = "<p>No data available for the selected date.</p>";
      cardContainer.appendChild(noDataCard);
    } else {
      selectedData.forEach(data => {
        const card = document.createElement("div");
        card.classList.add("card");

        const content = data.description || data.card; // Use description if available, otherwise use card
        card.innerHTML = `
          <p class="card-content">${data.description}</p>
          <p class="card-content">${data.card}</p>
        `;

        cardContainer.appendChild(card);
      });
    }
  }

  function handleInputChange() {
    const selectedMonth = monthSelect.value;
    const selectedDay = dayInput.value;

    displayCardData(selectedMonth, selectedDay);
  }

  monthSelect.addEventListener("change", handleInputChange);
  dayInput.addEventListener("input", handleInputChange);

// Check if user is logged in (example)
var isLoggedIn = false;

// Get the login message element
var loginMessage = document.getElementById('login-message');
// Get the login button element
var loginButton = document.getElementById('login-button');

// Show or hide the login message based on the login status
function updateLoginStatus() {
  if (isLoggedIn) {
    loginMessage.style.display = 'none';
  } else {
    loginMessage.style.display = 'block';
  }
}

// Simulate login action (example)
function login() {
  isLoggedIn = true;
  updateLoginStatus();
}

// Add event listener to the login button
loginButton.addEventListener('click', login);

// Call the function to update the login status initially
updateLoginStatus()})
