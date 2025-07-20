import React from "react";
import "./style.css"

let Books = [
  {
    img : "https://m.media-amazon.com/images/I/5165He67NEL._SY445_SX342_PQ76_.jpg",
    title : "Harry Potter",
    author : "J.K. Rowling"
  },
  {
    img : "https://m.media-amazon.com/images/I/5165He67NEL._SY445_SX342_PQ76_.jpg",
    title : "Harry Potter",
    author : "J.K. Rowling"
  },
  {
    img : "https://m.media-amazon.com/images/I/5165He67NEL._SY445_SX342_PQ76_.jpg",
    title : "Harry Potter",
    author : "J.K. Rowling"
  },
  {
    img : "https://m.media-amazon.com/images/I/5165He67NEL._SY445_SX342_PQ76_.jpg",
    title : "Harry Potter",
    author : "J.K. Rowling"
  },
  {
    img : "https://m.media-amazon.com/images/I/5165He67NEL._SY445_SX342_PQ76_.jpg",
    title : "Harry Potter",
    author : "J.K. Rowling"
  },
  {
    img : "https://m.media-amazon.com/images/I/5165He67NEL._SY445_SX342_PQ76_.jpg",
    title : "Harry Potter",
    author : "J.K. Rowling"
  },
  {
    img : "https://m.media-amazon.com/images/I/5165He67NEL._SY445_SX342_PQ76_.jpg",
    title : "Harry Potter",
    author : "J.K. Rowling"
  },
  {
    img : "https://m.media-amazon.com/images/I/5165He67NEL._SY445_SX342_PQ76_.jpg",
    title : "Harry Potter",
    author : "J.K. Rowling"
  },
  {
    img : "https://m.media-amazon.com/images/I/51jit32MN1L._SY425_.jpg",
    title : "Mahabharata",
    author : "B.R. Bhagwat "
  },

  {
    img : "https://m.media-amazon.com/images/I/81wNtZNVj7L._SL1500_.jpg",
    title : "The Wrong daughter",
    author : "Dandy Smith"
  }
]

function BookList(){
  return(
    <section className="booklist">
      
      {
        Books.map((ele,i)=>{
          return <Book img={ele.img} title={ele.title} author={ele.author} key={i}/>
        })
      }
    </section>
  )
}

const Book = (props) => {
  console.log(props);
  
  const {img, title, author} = props;
  return(
    <article className="book">
      <img src={img} alt="" />
      <h2>{title}</h2>
      <p>{author}</p>
      <button className="buy-btn" onClick={HandleClick}>Buy Now</button>
    </article>
  )
} 

function HandleClick(){
  console.log("clicked");
  
}

export default BookList;
