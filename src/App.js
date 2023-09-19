import { useState } from 'react';

function App() {
  const quotes = [
    {
      "quote": "Believe in yourself. You are braver than you think, more talented than you know, and capable of more than you imagine.",
      "author": "Roy T. Bennett",
    },
    {
      "quote": "Life is like riding a bicycle. To keep your balance, you must keep moving.",
      "author": "Albert Einstein",
    },
    {
      "quote": "It is never too late to be what you might have been.",
      "author": "George Eliot",
    },
    {
      "quote": "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
      "author": "Joseph Campbell",
    },
    {
      "quote": "Concentrate all your thoughts upon the work in hand. The Sun's rays do not burn until brought to a focus.",
      "author": "Alexander Graham Bell",
    },
    {
      "quote": "I have not failed. I've just found 10,000 ways that won't work.",
      "author": "Thomas A. Edison",
    },
  ];

  const [quote, setQuote] = useState(quotes[0].quote);
  const [author, setAuthor] = useState(quotes[0].author);

  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
  }

  return (
      <div class="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
        <div id="quote-box" class="w-50 row p-5 align-items-center rounded-3 border shadow-lg">
          <h1>Random Quote Machine</h1>
          
          <div style={{minHeight: "120px", padding: "50px"}}>
            <div className="quote-text fst-italic" id="text" style={{marginBottom: "10px", fontSize: "18px"}}>
              “{quote}”
            </div>
            <div className="quote-author fw-bold" id="author">
              - {author}
            </div>
          </div>
        
          <div class="d-flex justify-content-between">
            <div class="d-flex gap-2">
            <a
              id="tweet-quote"
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)} - ${encodeURIComponent(author)}`}
              target="_blank"
              rel="noreferrer"><i class="fa-brands fa-square-twitter twitter-icon" style={{color: "#1DA1F2", fontSize: "40px"}}></i>
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(quote)} - ${encodeURIComponent(author)}`}
              target="_blank"
              rel="noreferrer"><i class="fa-brands fa-square-facebook" style={{color: "#1877F2", fontSize: "40px"}}></i>            
            </a>
            </div>
            <button type="button" id="new-quote" onClick={getRandomQuote} class="btn btn-outline-primary">New quote</button>
          </div>
          
        </div>
      </div>
    );
  }

export default App;
