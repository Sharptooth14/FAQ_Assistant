# AI FAQ Assistant

A sophisticated FAQ assistant that leverages AI to provide accurate, context-aware responses to user queries. Built with React.js frontend and Python/Flask backend, utilizing RAG (Retrieval Augmented Generation) for intelligent answer generation.



## Overview

### Key Features
- RAG-Based Question Answering: Utilizes Retrieval-Augmented Generation for accurate responses
- Context-aware answer generation
- Typewriter effect for responses
- Responsive chat interface
- Error handling and retry mechanisms
- Message history management
- Loading states and user feedback

### Tech Stack
- **Frontend**: React.js, CSS3
- **Backend**: Python, Flask
- **Database**: ChromaDB (Vector Database)
- **AI Model**: Groq LLM
- **API**: RESTful architecture




## System Architecture

### Backend Components

1. **Document Processing Pipeline**
   - JSON document loading using LangChain's JSONLoader
   - Document chunking with RecursiveCharacterTextSplitter
   - Vector embeddings generation using SentenceTransformer

2. **Vector Database**
   - Chroma DB for storing and retrieving document embeddings
   - Similarity-based search functionality
   - Persistent storage in local directory

3. **LLM Integration**
   - Groq LLM integration (llama-3.3-70b-versatile model)
   - Configurable temperature and retry settings
   - System prompts for consistent response formatting

### Frontend Components
 **Chat Interface** 
   - State Management
   - Auto-Scrolling
   - Typing Animation Control
   - Real-time Input Validation
   - Empty message prevention
   - Disabled states during processing
   - Loading state indicators

## Backend Setup

### Required Python version
Python 3.8+

### Required packages
```bash
langchain-community 
langchain-groq 
chromadb
sentence-transformers 
flask 
flask-cors 
python-dotenv
 ```


### Environment Variables
Create a `.env` file in the backend directory:

``` GROQ_API_KEY=your_groq_api_key ```

### Installation Steps

1. Clone the repository:

```bash
git clone [repository-url]

cd backend
```

2. Create and activate virtual environment:
```bash
python -m venv venv

venv\Scripts\activate
```

3. Install dependencies:
```bash
pip install -r requirements.txt
```
4. start the backend API:
```bash
python app.python
```

## Frontend Setup

### Required packages
```bash
axios 
tailwindcss 
postcss 
autoprefixer 
react-router-dom
 ```
### Installation Steps

1. Clone the repository:

```bash
git clone [repository-url]

cd frontend
```

3. Install dependencies:

```bash
 yarn add axios tailwindcss postcss autoprefixer react-router-dom
 ```
4. Start react app:
```bash
npm start
```
## Screenshots

![App Screenshot](https://github.com/Sharptooth14/FAQ_Assistant/blob/main/screenshots/Screenshot%202025-01-28%20233943.png)


![App Screenshot](https://github.com/Sharptooth14/FAQ_Assistant/blob/main/screenshots/Screenshot%202025-01-28%20234017.png)

![App Screenshot](https://github.com/Sharptooth14/FAQ_Assistant/blob/main/screenshots/Screenshot%202025-01-28%20234310.png)

![App Screenshot](https://github.com/Sharptooth14/FAQ_Assistant/blob/main/screenshots/Screenshot%202025-01-29%20123705.png)
