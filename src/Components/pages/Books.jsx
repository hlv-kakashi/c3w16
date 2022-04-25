import React from "react";
import { useEffect, useState } from "react";

import { BookCard } from "./BookCard";
import styled, { css } from "styled-components";

export const Grid = styled.div`
 add required style here
`;

const Books = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async() => {
 // make a GET request to http://localhost:8080/books to get all the books data
 const response = await fetch("http://localhost:8080/books");
 const data = await response.json();
 console.log(data);
 setData([...data]);
    }
   
    getData();
  

  }, []);

  return (
    <>
      <h1>Books</h1>
      <Grid data-testid="books-container">
        {/* {!!data && 
          // map thorugh the data and use <BookCard/> component to display each book
          } */}
          {
            data.map((e) => (
              <BookCard key={e.id} title={e.title} thumbnailUrl={e.thumbnailUrl} isbn={e.isbn} id={e.id} />
            ))
          }
      </Grid>
    </>
  );
};
export default Books;


// id, title, isbn, pageCount, thumbnailUrl
