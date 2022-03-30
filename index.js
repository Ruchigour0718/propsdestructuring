import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const firstBook = {
  img: "https://m.media-amazon.com/images/I/41C0u4vjBUS.jpg",
  title:
    "You, Happier: The 7 Neuroscience Secrets of Feeling Good Based on Your Brain Type",
  author: " G. Amen"
};
const SecondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/51tHQcm-JTL._SX329_BO1,204,203,200_.jpg",
  title: "Change Your Brain, Change Your Life",
  author: "by Daniel G. Amen M.D. "
};
const thirdBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/41LTPLNF5tL._SX324_BO1,204,203,200_.jpg",
  title: "Train Your Brain",
  author: "by Daniel G. Amen M.D"
};
const Booklist = () => {
  return (
    <div className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          {" "}
          I Love this book is about human physcology and how human minds works
        </p>
      </Book>
      <Book
        img={SecondBook.img}
        title={SecondBook.title}
        author={SecondBook.author}
      />
      <Book
        img={thirdBook.img}
        title={thirdBook.title}
        author={thirdBook.author}
      />
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />{" "}
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />{" "}
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />{" "}
    </div>
  );
};
const Book = (props) => {
  // const Book =({ img,author,title}) =>{
  const { img, title, author, children } = props;
  return (
    <article>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{author}</p>
      {children}
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
