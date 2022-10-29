import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function Books(){
    useEffect(()=>{
        fetch("https://62dba4cbe56f6d82a7751334.mockapi.io/Books")
        .then((BOOK)=>{return BOOK.json();})
        .then((BOOK)=>{SetFaculty(BOOK);})
    },[]);

    const [BOOKS , SetFaculty]=useState([]);

    let DisplayBooks = BOOKS.map((BOOK)=>{
        return(
            <>
            <div className="example-1 card">
                <div className="wrapper" style={{background:`url(${BOOK.BookImage})20% 1%/cover no-repeat`}}>
                <Link to={"../BooksID/"+BOOK.id}>
                    <div className="date">
                        <span className="day">12</span>
                        <span className="month">Aug</span>
                        <span className="year">2016</span>
                    </div>
                </Link>
                <div className="data">
                    <div className="content">
                    <Link to={"../BooksID/"+BOOK.id}>
                        <span className="author">{BOOK.BookAuthor}</span>
                        <h1 className="title"><Link to="#">{BOOK.BookName}</Link></h1>
                        <p className="text">{BOOK.BookDescription}</p>
                    </Link>
                    <label for="show-menu" className="menu-button"><span></span></label>
                    </div>
                    <input type="checkbox" id="show-menu" />
                    <ul className="menu-content">
                        <li><Link to="#" className="fa fa-bookmark-o"></Link></li>
                        <li><Link to="#" className="fa fa-heart-o"><span>{BOOK.BookNoOfPages}</span></Link></li>
                        <li><Link to={"../BooksID/"+BOOK.id+"/#review"} className="fa fa-comment-o"><span>8</span></Link></li>
                    </ul>
                </div>
                </div>
            </div>
            </>
        );
    })
    return(
        <>
        <div className="container" id="Bookpage">
            <div className="title1">
                <center>
                    <h1><b>Explore the world of Books !!</b></h1>
                </center>
            </div>
            <div className="book">
                <div className="gap"></div>
                <div className="pages">
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                    <div className="page"></div>
                </div>
                <div className="flips">
                    <div className="flip flip1">
                    <div className="flip flip2">
                        <div className="flip flip3">
                        <div className="flip flip4">
                            <div className="flip flip5">
                            <div className="flip flip6">
                                <div className="flip flip7"></div>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                {DisplayBooks}
            </div>
        </div>

        </>
    );
}

export default Books;