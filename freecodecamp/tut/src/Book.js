import React from 'react'

const Book = ({ img, title, author}) => {
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target)
    alert("Hello");
  }
  return (
    <article className='book' onMouseOver={() => console.log(author)}>
      <img src={img} alt=''/>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>Hello</button>
    </article>
    
  );
}

export default Book

