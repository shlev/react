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


const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/517h-u1AQlL._SX482_BO1,204,203,200_.jpg', 
  title: 'I Love You to the Moon and Back', 
  author: 'Amelia Hepworth'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51wGNqaSIbL._SX373_BO1,204,203,200_.jpg', 
  title: 'What Should Danny Do?', 
  author: 'Adir Levy'
}

function BookList() {
  return (
    <section className='booklist'>
      <Book 
        img={firstBook.img} 
        title={firstBook.title}
        author={firstBook.author}
        />

        <Book 
        img={secondBook.img} 
        title={secondBook.title}
        author={secondBook.author}
        />
    </section>
  )
}

const Book = (props) => {
  const { img, title, author} = props
  return (
    <article className='book'>
      <img src={img} alt=''/>
      <h1>{title}</h1>
      <h4>{author}</h4>
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
