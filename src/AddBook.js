import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddBook(){
    const navigate = useNavigate();
    const param = useParams();

    useEffect(() => {
        if (param.id > 0) {
          fetch(
            "https://62dba4cbe56f6d82a7751334.mockapi.io/Books/" + param.id,{method: "GET"}
          )
            .then((BookID) => {
              return BookID.json();
            })
            .then((BookID) => {
              setData(BookID);
            });
        }
      }, []);

      const [data, setData] = useState({});
    return(
        <>
        <div class="container Add">
            <div className="formt">
                <h1>Fill Book Details</h1>
            </div>
            <div class="row Add">
                <div class="col-10">
                    <label for="Book Name">Book Name:</label>
                </div>
                <div class="col-90">
                    <input type="text" id="text" name="Book Name" placeholder="Enter your first name" 
                    value={data.BookName}
                    onChange={(e) => {
                      setData({ ...data, BookName: e.target.value });
                    }}/>
                </div>
            </div>
            <div class="row Add">
                <div class="col-10">
                    <label for="Author Name">Author Name:</label>
                </div>
                <div class="col-90">
                    <input type="text" id="text" name="Author Name" placeholder="Enter your last name"
                    value={data.BookAuthor}
                    onChange={(e) => {
                      setData({ ...data, BookAuthor: e.target.value });
                    }}/>
                </div>
            </div>
            <div class="row Add">
                <div class="col-10">
                    <label for="price">price:</label>
                </div>
                <div class="col-90">
                    <input type="number" id="text" name="price" placeholder="it should be in rupees ₹"
                    value={data.BookPrice}
                    onChange={(e) => {
                      setData({ ...data, BookPrice: e.target.value });
                    }}/>
                </div>
            </div>
            <div class="row Add">
                <div class="col-10">
                    <label for="No.of pages">No.of pages:</label>
                </div>
                <div class="col-90">
                    <input type="text" id="text" name="No.of pages" placeholder="only digits are allowed"
                    value={data.BookNoOfPages}
                    onChange={(e) => {
                      setData({ ...data, BookNoOfPages: e.target.value });
                    }}/>
                </div>
            </div>
            <div class="row Add">
                <div class="col-10">
                    <label for="Description">Description:</label>
                </div>
                <div class="col-90">
                    <textarea name="Description" id="Description" cols="30" row Adds="10"
                    value={data.BookDescription}
                    onChange={(e) => {
                      setData({ ...data, BookDescription: e.target.value });
                    }}></textarea>
                </div>
            </div>
            <div class="row Add">
                <div class="col-10">
                    <label for="Book Image">Book Image:</label>
                </div>
                <div class="col-90">
                    <input type="text" id="text" name="Book Image" placeholder="only Image url"
                    value={data.BookImage}
                    onChange={(e) => {
                      setData({ ...data, BookImage: e.target.value });
                    }}/>
                </div>
            </div>
            <div class="row Add">
                <button className="round-black-btn" 
                onClick={() => {
                    if (param.id > 0) {
                      fetch(
                        "https://62dba4cbe56f6d82a7751334.mockapi.io/Books/" +
                          param.id,
                        {
                          method: "PUT",
                          body: JSON.stringify(data),
                          headers: {
                            "Content-Type": "application/json"
                          }
                        }
                      ).then(() => {
                        navigate("/BooksID/"+param.id);
                      });
                    } else {
                      fetch(
                        "https://62dba4cbe56f6d82a7751334.mockapi.io/Books/",
                        {
                          method: "POST",
                          body: JSON.stringify(data),
                          headers: {
                            "Content-Type": "application/json"
                          }
                        }
                      ).then(() => {
                        navigate("/Books");
                      });
                    }
                  }}>{param.id > 0 && "UPDATE "}{!(param.id > 0) && "ADD "} BOOK</button>
            </div>  
        </div>  
        </>
    )
}

export default AddBook;