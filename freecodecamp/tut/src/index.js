import React from 'react';
import ReactDOM from 'react-dom';

import  './index.css'

import {books} from './books';

import Book from './Book';

//JSX Rules
// return single element
// div / section / article or Fragment
// use cameCase for html attributes
// className instead of class
// close every element
// formatting




const names = ['shlomy', 'naama', 'yosef'];

const newNames = names.map( name => {
  return <h1>{name}</h1>
})

console.log(newNames)

function BookList() {
  return (
    <section className='booklist'>
     { books.map( (book)  => {
        return (
          <Book key= {book.id} {...book} />
        );

     })}
    </section>
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
