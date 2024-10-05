document
  .getElementById("send-button")
  .addEventListener("click", async function () {
    const inputField = document.getElementById("user-input");
    const userInput = inputField.value;

    if (userInput.trim() === "") {
      return; // Do not send empty messages
    }

    // Add user's message to the chat window
    appendMessage("You: " + userInput, "user-message");

    // Clear the input field
    inputField.value = "";

    try {
      // Make a POST request to the Flask server
      const response = await fetch("/get", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({ msg: userInput }),
      });

      // Check if the response is ok (status in the range 200-299)
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }

      // Get the response data
      const data = await response.text(); // You can also use response.json() if you return JSON

      // Add the bot's response to the chat window
      appendMessage("Bot: " + data, "bot-message");
    } catch (error) {
      console.error("Error:", error);
      appendMessage("Bot: Sorry, I couldn't get a response.", "bot-message");
    }
  });

// Function to append messages to the chat window
function appendMessage(message, messageType) {
  const chatWindow = document.getElementById("chat-window");
  const messageDiv = document.createElement("div");
  messageDiv.classList.add("message", messageType);
  messageDiv.textContent = message;
  chatWindow.appendChild(messageDiv);

  // Scroll to the bottom of the chat window
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
