import React from "react";
import "./App.css";
import {
  BOOKS,
  ARTICLES,
  PODCASTS,
  INTERVIEWS_LECTURES,
  DOCUMENTARIES,
} from "./data";

function App() {
  return (
    <div className="page">
      <h1>anti-racist starter pack</h1>

      <div className="selectionby">
        a selection by Danah Kowdan /{" "}
        <a
          className="selectionbylink"
          href="https://www.instagram.com/danahkowdan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @danahkowdan
        </a>
      </div>

      <div className="contributionsby">
        contributions by Jalyse Cuff and Fatima Kowdan
      </div>

      <h2>books</h2>
      {BOOKS.map((item) => (
        <div className="item" key={item.title}>
          <a
            className="link"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <b>{item.title}</b> by {item.author}
          </a>
        </div>
      ))}

      <h2>articles</h2>
      {ARTICLES.map((item) => {
        const author = item.author ? ` by ${item.author}` : ``;
        return (
          <div className="item" key={item.title}>
            <a
              className="link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>{item.title}</b>
              {author}
            </a>
          </div>
        );
      })}

      <h2>podcasts</h2>
      {PODCASTS.map((item) => {
        const author = item.author ? ` - ${item.author}` : ``;
        return (
          <div className="item" key={item.title}>
            <a
              className="link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>{item.title}</b>
              {author}
            </a>
          </div>
        );
      })}

      <h2>interviews/lectures</h2>
      {INTERVIEWS_LECTURES.map((item) => {
        const author = item.author ? ` - ${item.author}` : ``;
        return (
          <div className="item" key={item.title}>
            <a
              className="link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>{item.title}</b>
              {author}
            </a>
          </div>
        );
      })}

      <h2>documentaries</h2>
      {DOCUMENTARIES.map((item) => {
        return (
          <div className="item" key={item.title}>
            <a
              className="link"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <b>{item.title}</b>
            </a>
          </div>
        );
      })}

      <a
        className="builtby"
        href="https://github.com/KathrynBrusewitz"
        target="_blank"
        rel="noopener noreferrer"
      >
        built by @kathrynbrusewitz
      </a>
    </div>
  );
}

export default App;