
document.getElementById("secure-button").addEventListener("click", function () {
    const confirmationMessage = document.getElementById("confirmation-message");

    // Show confirmation message
    confirmationMessage.classList.remove("hidden");
    confirmationMessage.textContent = "Button clicked successfully!";

    // Hide message after 3 seconds
    setTimeout(() => {
        confirmationMessage.classList.add("hidden");
    }, 3000);
});
