document.addEventListener("DOMContentLoaded", function() {
  const monthSelect = document.getElementById("month");
  const dayInput = document.getElementById("day");
  const cardContainer = document.getElementById("card-container");

  const cardData = [
    {
      month: "June",
      day: "29",
      card: "5 of Spades",
      description: "Quartus 11",
    },
    {
      month: "June",
      day: "30",
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
