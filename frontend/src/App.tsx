import React from 'react';
import './App.css';
import useArspApi from './useArspApi';
import { Book, Article, Documentary, Podcast, Talk } from './types';

// ENDPOINTS
const BOOKS_URL = 'https://arsp-cms.herokuapp.com/books';
const ARTICLES_URL = 'https://arsp-cms.herokuapp.com/articles';
const DOCS_URL = 'https://arsp-cms.herokuapp.com/documentaries';
const PODCASTS_URL = 'https://arsp-cms.herokuapp.com/podcasts';
const TALKS_URL = 'https://arsp-cms.herokuapp.com/talks';

function App() {
  const [books] = useArspApi(BOOKS_URL);
  const [articles] = useArspApi(ARTICLES_URL);
  const [docs] = useArspApi(DOCS_URL);
  const [podcasts] = useArspApi(PODCASTS_URL);
  const [talks] = useArspApi(TALKS_URL);

  return (
    <div className='page'>
      <h1>anti-racist starter pack</h1>

      <div className='selectionby'>
        a selection by Danah Kowdan /{' '}
        <a
          className='selectionbylink'
          href='https://www.instagram.com/danahkowdan/'
          target='_blank'
          rel='noopener noreferrer'
        >
          @danahkowdan
        </a>
      </div>

      <div className='contributionsby'>contributions by Jalyse Cuff and Fatima Kowdan</div>

      <h2>books</h2>
      {books.isFetching && <p>Loading books...</p>}
      {books.data.map((item: Book) => (
        <div className='item' key={item.id}>
          <a className='link' href={item.link} target='_blank' rel='noopener noreferrer'>
            <b>{item.title}</b> by {item.author}
          </a>
        </div>
      ))}

      <h2>articles</h2>
      {articles.isFetching && <p>Loading articles...</p>}
      {articles.data.map((item: Article) => {
        const author = item.author ? ` by ${item.author}` : ``;
        return (
          <div className='item' key={item.id}>
            <a className='link' href={item.link} target='_blank' rel='noopener noreferrer'>
              <b>{item.title}</b>
              {author}
            </a>
          </div>
        );
      })}

      <h2>podcasts</h2>
      {podcasts.isFetching && <p>Loading podcasts...</p>}
      {podcasts.data.map((item: Podcast) => {
        const author = item.author ? ` - ${item.author}` : ``;
        return (
          <div className='item' key={item.id}>
            <a className='link' href={item.link} target='_blank' rel='noopener noreferrer'>
              <b>{item.title}</b>
              {author}
            </a>
          </div>
        );
      })}

      <h2>interviews/lectures</h2>
      {talks.isFetching && <p>Loading interviews and lectures...</p>}
      {talks.data.map((item: Talk) => {
        const author = item.author ? ` - ${item.author}` : ``;
        return (
          <div className='item' key={item.id}>
            <a className='link' href={item.link} target='_blank' rel='noopener noreferrer'>
              <b>{item.title}</b>
              {author}
            </a>
          </div>
        );
      })}

      <h2>documentaries</h2>
      {docs.isFetching && <p>Loading documentaries...</p>}
      {docs.data.map((item: Documentary) => {
        return (
          <div className='item' key={item.id}>
            <a className='link' href={item.link} target='_blank' rel='noopener noreferrer'>
              <b>{item.title}</b>
            </a>
          </div>
        );
      })}

      <a className='builtby' href='https://github.com/KathrynBrusewitz' target='_blank' rel='noopener noreferrer'>
        built by @kathrynbrusewitz
      </a>
    </div>
  );
}

export default App;
