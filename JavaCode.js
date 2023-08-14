document.addEventListener("DOMContentLoaded", function() {
  const monthSelect = document.getElementById("month");
  const dayInput = document.getElementById("day");
  const cardContainer = document.getElementById("card-container");

  const cardData = [
    {
      month: "August",
      day: "1",
      card: "Queen of Diamonds",
      description: "Quintiles 23",
    },
    {
      month: "August",
      day: "2",
      card: "Jack of Diamonds",
      description: "Quintiles 24",
    },
    {
      month: "August",
      day: "3",
      card: "Ten of Diamonds",
      description: "Quintiles 25",
    },
    {
      month: "August",
      day: "4",
      card: "9 of Diamonds",
      description: "Quintiles 26",
    },
    {
      month: "August",
      day: "5",
      card: "8 of Diamonds",
      description: "Quintiles 27",
    },
    {
      month: "August",
      day: "6",
      card: "7 of Diamonds",
      description: "Quintiles 28",
      week: "8 of Clubs Week Start Week 32",
    },
    {
      month: "August",
      day: "7",
      card: "6 of Diamonds",
      description: "Sextilis 1",
    },
    {
      month: "August",
      day: "8",
      card: "5 of Diamonds",
      description: "Sextilis 2",
    },
    {
      month: "August",
      day: "9",
      card: "4 of Diamonds",
      description: "Sextilis 3, Cancer Leaves",
    },
    {
      month: "August",
      day: "10",
      card: "3 of Diamonds",
      description: "Sextilis 4, Leo Enters",
    },
    {
      month: "August",
      day: "11",
      card: "2 of Diamonds",
      description: "Sextilis 5",
    },
    {
      month: "August",
      day: "12",
      card: "Ace of Diamonds",
      description: "Sextilis 6",
    },
    {
      month: "August",
      day: "13",
      card: "King of Clubs",
      description: "Sextilis 7, 7 of Clubs Week Start Week 33 ",
    },
    {
      month: "August",
      day: "14",
      card: "Queen of Clubs",
      description: "Sextilis 8",
    },
    {
      month: "August",
      day: "15",
      card: "Jack of Clubs",
      description: "Sextilis 9",
    },
    {
      month: "August",
      day: "16",
      card: "Ten of Clubs",
      description: "Sextilis 10",
    },
    {
      month: "August",
      day: "17",
      card: "9 of Clubs",
      description: "Sextilis 11",
    },
    {
      month: "August",
      day: "18",
      card: "8 of Clubs",
      description: "Sextilis 12",
    },
    {
      month: "August",
      day: "19",
      card: "7 of Clubs",
      description: "Sextilis 13",
    },
    {
      month: "August",
      day: "20",
      card: "6 of Clubs",
      description: "Sextilis 14, 6 of Clubs Week Start Week 34",
    },
    {
      month: "August",
      day: "21",
      card: "5 of Clubs",
      description: "Sextilis 15",
    },
    {
      month: "August",
      day: "22",
      card: "4 of Clubs",
      description: "Sextilis 16",
    },
    {
      month: "August",
      day: "23",
      card: "3 of Clubs",
      description: "Sextilis 17",
    },
    {
      month: "August",
      day: "24",
      card: "2 of Clubs",
      description: "Sextilis 18",
    },
    {
      month: "August",
      day: "25",
      card: "Ace of Clubs",
      description: "Sextilis 19",
    },
    {
      month: "August",
      day: "26",
      card: "King of Hearts",
      description: "Sextilis 20",
    },
    {
      month: "August",
      day: "27",
      card: "Queen of Hearts",
      description: "Sextilis 21, 5 or Clubs Week Start Week 35",
    },
    {
      month: "August",
      day: "28",
      card: "Jack of Hearts",
      description: "Sextilis 22",
    },
    {
      month: "August",
      day: "29",
      card: "Ten of Hearts",
      description: "Sextilis 23",
    },
    {
      month: "August",
      day: "30",
      card: "9 of Hearts",
      description: "Sextilis 24",
    },
    {
      month: "August",
      day: "31",
      card: "8 of Hearts",
      description: "Sextilis 25",
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
          <p class="card-content">${data.week}</p>
        `;

        cardContainer.appendChild(card);
      });
    }
  }

  function handleInputChange() {
    const selectedMonth = monthSelect.value;
    const selectedDay = dayInput.value;

    if (isLoggedIn) {
      displayCardData(selectedMonth, selectedDay);
    } else {
      cardContainer.innerHTML = ""; // Clear card display when not logged in
    }
  }

  monthSelect.addEventListener("change", handleInputChange);
  dayInput.addEventListener("input", handleInputChange);

  // Get the login message element
  var loginMessage = document.getElementById('login-message');
  // Get the login button element
  var loginButton = document.getElementById('login-button');
  // Get the login prompt element
  var loginPrompt = document.getElementById('login-prompt');

  // Show or hide the login message based on the login status
  function updateLoginStatus() {
    if (isLoggedIn) {
      loginMessage.style.display = 'none';
      monthSelect.disabled = false; // Enable the month select field
      dayInput.disabled = false; // Enable the day input field
      handleInputChange(); // Display card data when logged in
    } else {
      loginMessage.style.display = 'block';
      cardContainer.innerHTML = ""; // Clear card display when not logged in
      monthSelect.disabled = true; // Disable the month select field
      dayInput.disabled = true; // Disable the day input field
    }
  }

  // Handle login form submission
  function handleLoginFormSubmit(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
      isLoggedIn = true;
      hideLoginForm();
      updateLoginStatus();
    } else {
      Swal.fire('Error', 'Please enter username and password', 'error');
    }
  }

  // Add event listener to the login button
  loginButton.addEventListener('click', function() {
    showLoginForm();
  });

  // Add event listener to the login form
  var loginFormElement = document.querySelector('#login-prompt form');
  loginFormElement.addEventListener('submit', handleLoginFormSubmit);

  // Show login form
  function showLoginForm() {
    loginPrompt.style.display = 'block';
  }

  // Hide login form
  function hideLoginForm() {
    loginPrompt.style.display = 'none';
    loginFormElement.reset();
  }

  // Check if user is logged in (example)
  var isLoggedIn = false;

  // Call the function to update the login status initially
  updateLoginStatus();

  // Get today's date
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentDay = currentDate.getDate();

  // Set the month and day fields to today's date
  monthSelect.value = currentMonth;
  dayInput.value = currentDay;
});
