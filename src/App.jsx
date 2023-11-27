import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import axios from "axios";
import chibi from './assets/chibi3.png'
import './App.css'

function App() {
  const [quote, setQuote] = useState();
  const [author, setAuthor] = useState();
  const [buttonText, setButtonText] = useState('Copy');
  const [barLoading, setBarLoading] = useState(false);

  async function fetchWaifuQuote() {
    const url = "https://waifu.it/api/quote"
    setBarLoading(true);
    try {
      const { data } = await axios.get(url, {
        headers: {
          Authorization: "40e2ac1aeec38dd18b6d076bc99da79166a576da33fd",
        }
      });
      setQuote(data.quote);
      setAuthor(data.author);
      setBarLoading(false);
    } catch (err) {
      console.error(err.message);
      setBarLoading(false);
    }
  }

  useEffect(() => {
    fetchWaifuQuote();
  }, []);

  function getNewQuote() {
    fetchWaifuQuote();
  };

  function copyQuote() {
    const quoteText = `"${quote}" - ${author}`;
    navigator.clipboard.writeText(quoteText);
    setButtonText('Copied!');
  }

  setTimeout(() => {
    setButtonText('Copy');
  }, 4000);

  return (
    <>
      <div data-bs-theme="dark">
        <div className="container mt-custom d-flex flex-column align-items-center vh-100">
          <img className="chibi-image" src={chibi} alt="chibi" />
          <h2 className="header-font mb-4">Randomize Quotes</h2>
          <div className="box bg-custom text-light border border-3 rounded-3">
            <h1 className="custom-quote text-start ps-4 mt-lg-5 fs-2">{quote}</h1>
            <h1 className="author-quote text-end pe-5 mt-lg-5 fs-1">“ {author} ”</h1>
           
          </div>
            <div className="bottom-buttons d-grid gap-2 d-md-block mt-3">
              <Button variant="primary" size="lg" active onClick={getNewQuote}>Get New Quote</Button>
              <Button className="bg-transparent border border-primary"
                style={{
                  marginLeft: '4px',
                }} variant="secondary" size="lg" active onClick={copyQuote}>{buttonText}</Button>
            </div>
          {barLoading && (
            <div className="loading-bar-container">
              <div className="loading-bar" />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;






