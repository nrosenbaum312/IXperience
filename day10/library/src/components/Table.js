import React, { Components, useState } from 'react';


function Table(props) {
    return ( 
         <div>
           <table className="table mt-5">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>ISBN</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>{ props.books.map((book) =>
          <tr key={book.id}>
            <td>
              {book.title}
            </td>
            <td>
              {book.author}
            </td>
            <td>
              {book.isbn}
            </td>
            <td>
              <button onClick={() => props.onBookRemove(book.id)}> 
              X
              </button>
                </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
    );
}

export default Table;