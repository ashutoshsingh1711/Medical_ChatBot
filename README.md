# Medical Chatbot

This project is a **Medical Chatbot** built using Flask, LangChain, and Pinecone. It allows users to ask medical questions and receive concise answers based on retrieved context from a PDF data source. The bot leverages machine learning embeddings to understand and respond to user queries.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- Chat interface for user interaction.
- Backend powered by Flask for handling API requests.
- PDF document loading and processing for contextual information.
- Utilizes Cohere for language understanding and response generation.
- Implements Pinecone for vector storage and similarity search.

## Technologies Used

- **Flask**: Web framework for building the backend.
- **LangChain**: Framework for building language model applications.
- **Cohere**: Language model for generating responses.
- **Pinecone**: Vector database for storing and retrieving embeddings.
- **Hugging Face**: Pre-trained models for embeddings.
- **dotenv**: To manage environment variables.

## Installation

### Prerequisites

Make sure you have Python 3.8 or higher installed. Also, ensure you have `pip` for package management.

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd medical-chatbot
2. Create a virtual environment:

  python -m venv venv
  source venv/bin/activate  # On Windows use `venv\Scripts\activate`

3. Install the required packages:

   pip install -r requirements.txt

4.  Create a .env file in the project root and add your API keys:

    PINECONE_API_KEY=<your_pinecone_api_key>
    COHERE_API_KEY=<your_cohere_api_key>
    
5.  Start the Flask application:

    python app.py

Access the Chatbot: Open your web browser and go to http://127.0.0.1:8080/.

Interact with the Chatbot: Type your medical question in the input field and click "Send". The chatbot will respond with concise answers based on the context retrieved from PDF documents.

Directory Structure

medical-chatbot/
├── app.py                     # Main Flask application file
├── src/
│   ├── helper.py              # Helper functions for loading data and embeddings
│   └── prompt.py              # Contains the system prompt for the chatbot
├── templates/
│   └── index.html             # HTML template for the chatbot interface
├── static/
│   ├── styles.css             # CSS styles for the chatbot UI
│   └── script.js              # JavaScript for handling chat interactions
├── requirements.txt           # List of required Python packages
└── .env                       # Environment variables file (not included in version control)


