import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

function BooksID(){
    let param = useParams();
    const Navigate = useNavigate();
    useEffect(() => {
        fetch(
        "https://62dba4cbe56f6d82a7751334.mockapi.io/Books/" + param.id,{method:"GET"}
        )
        .then((BookID) => {
            return BookID.json();
        })
        .then((BookID) => {
            SetFaculty(BookID);
        });
    }, []);

    const [BookID, SetFaculty] = useState([]);

    return(
        <>
        <div class="pd-wrap">
        <div class="container">
            <div class="heading-section">
            <h2>Book Details</h2>
            </div>
            <div class="row">
            <div class="col-md-5">
                <center>
                    <img src={BookID.BookImage} alt="img"/>
                </center>
            </div>
            <div class="col-md-7">
                <div class="product-dtl">
                <div class="product-info">
                    <div class="product-name">{BookID.BookName}</div>
                    <div class="product-authername">By {BookID.BookAuthor}</div>
                    <div class="reviews-counter">
                    <div class="rate">
                        <input type="radio" id="star5" name="rate" value="5" checked />
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" checked />
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" checked />
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text">1 star</label>
                    </div>
                    <span>3 Reviews</span>
                    </div>
                    <div class="product-price-discount"><span>₹{BookID.BookPrice}</span><span class="line-through">$29.00</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><lord-icon src="https://cdn.lordicon.com/zjptfwtq.json" trigger="morph" colors="primary:#121331"></lord-icon>&nbsp;&nbsp;{BookID.BookNoOfPages} pages</span></div>
                </div>
                <p>{BookID.BookDescription}</p>
                <div class="product-count">
                    <label for="size">Quantity</label>
                    <form action="#" class="display-flex">
                    <div class="qtyminus">-</div>
                    <input type="text" name="quantity" value="1" class="qty"/>
                    <div class="qtyplus">+</div>
                    </form>
                    <Link to={"/Payment/"+param.id} class="round-black-btn" id="addtocart"><lord-icon src="https://cdn.lordicon.com/cllunfud.json" trigger="hover" colors="outline:#ffffff,primary:#ffffff,secondary:#ffffff"></lord-icon> Add to Cart</Link>
                    <Link to={"/Update/"+param.id} class="round-black-btn" id="update"><lord-icon src="https://cdn.lordicon.com/alzqexpi.json" trigger="hover" colors="primary:#121331,secondary:#646e78,tertiary:#ffffff,quaternary:#ffffff,quinary:#ebe6ef"></lord-icon> Update</Link>
                    <Link to={""} onClick={()=>{
                         fetch(
                            "https://62dba4cbe56f6d82a7751334.mockapi.io/Books/" + param.id,{method:"DELETE"}
                            )
                            .then(() => {
                                Navigate("/Books");
                            });
                    }} class="round-black-btn" id="delete"><span><lord-icon src="https://cdn.lordicon.com/qsloqzpf.json" trigger="hover"  colors="primary:#ffffff"></lord-icon></span> Delete</Link>
                </div>
                </div>
            </div>
            </div>
            <div class="product-info-tabs">
            <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item">
                <a class="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Description</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" id="review-tab" data-toggle="tab" href="#review" role="tab" aria-controls="review" aria-selected="false">Reviews (0)</a>
                </li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="description" role="tabpanel" aria-labelledby="description-tab">
                {BookID.BookDescription}
                </div>
                <div class="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                <div class="review-heading">REVIEWS</div>
                <p class="mb-20">There are no reviews yet.</p>
                <form class="review-form">
                    <div class="form-group">
                    <label>Your rating</label>
                    <div class="reviews-counter">
                        <div class="rate">
                        <input type="radio" id="star5" name="rate" value="5" />
                        <label for="star5" title="text">5 stars</label>
                        <input type="radio" id="star4" name="rate" value="4" />
                        <label for="star4" title="text">4 stars</label>
                        <input type="radio" id="star3" name="rate" value="3" />
                        <label for="star3" title="text">3 stars</label>
                        <input type="radio" id="star2" name="rate" value="2" />
                        <label for="star2" title="text">2 stars</label>
                        <input type="radio" id="star1" name="rate" value="1" />
                        <label for="star1" title="text">1 star</label>
                        </div>
                    </div>
                    </div>
                    <div class="form-group">
                    <label>Your message</label>
                    <textarea class="form-control" rows="10"></textarea>
                    </div>
                    <div class="row">
                    <div class="col-md-6">
                        <div class="form-group">
                        <input type="text" name="" class="form-control" placeholder="Name*"/>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                        <input type="text" name="" class="form-control" placeholder="Email Id*"/>
                        </div>
                    </div>
                    </div>
                    <button class="round-black-btn">Submit Review</button>
                </form>
                </div>
            </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default BooksID;