document.addEventListener("DOMContentLoaded", function () {
    const birthdayDate = new Date("2023-07-25");
    const countdownElement = document.getElementById("countdown");
  
    function updateCountdown() {
      const now = new Date().getTime();
      const timeDifference = birthdayDate - now;
  
      if (timeDifference <= 0) {
        countdownElement.innerHTML = "Happy Birthday!";
      } else {
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        countdownElement.innerHTML = `Only ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds to go!`;
      }
    }
  
    updateCountdown(); // Call the function once to display the initial countdown
  
    // Update the countdown every second
    setInterval(updateCountdown, 1000);
  });
  