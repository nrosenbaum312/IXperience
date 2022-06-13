import React, { Components, useState } from 'react';

function Library(props) {

    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [isbn, setISBN] = useState("");

    function onBookFromSubmit(e){
      e.preventDefault();

      props.onBookCreate(title, author, isbn);

      setTitle('');
      setAuthor('');
      setISBN('');
    }


    return (
    <div>
      <form onSubmit={onBookFromSubmit}>
        <input
            value = {title}
            onChange ={(e) => setTitle(e.target.value)}

            type="text"
            className="form-control mb-3"
            placeholder="Title"
          />
          <input

            value = {author}
            onChange = {(e) => setAuthor(e.target.value)}

            type="text"
            className="form-control  mb-3"
            placeholder="Author"
          />
          <input

            value={isbn}
            onChange = {(e) => setISBN(e.target.value)}

            type="text"
            className="form-control  mb-3"
            placeholder="ISBN"
          /> 

        <div class="d-grid gap-2 mt-4">
          <button className="btn btn-outline-primary" type="submit">
            Add Book
          </button>
        </div>
    
      </form>

    </div>  );
}

export default Library;