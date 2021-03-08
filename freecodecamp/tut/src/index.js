import React from 'react';
import ReactDOM from 'react-dom';
import  './index.css'

//JSX Rules
// return single element
// div / section / article or Fragment
// use cameCase for html attributes
// className instead of class
// close every element
// formatting

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
    
  );
}

const Image = () => (
    <img src='https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL._AC_US218_.jpg' alt=''/>
  );

const Title = () => <h1>I Love You to the Moon and Back</h1>

const Author = () => <h4 style={{ color: '617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Amelia Hepworth</h4>
ReactDOM.render(
  <BookList />,
  document.getElementById('root')
);
