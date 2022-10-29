import { Link } from "react-router-dom";

function Footer(){
    return(
        <>
        <section id="contact" className="add-padding border-top-color2">
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-6 col-md-5 text-right scrollimation fade-up d1">
                        <h1 className="big-text">Contact Me</h1>
                        <p className="lead">Makda Kutubkhan</p>
                        <p className="lead">Computer Enginer</p>
                        <p>JavaScript, React js, Node.js, jQuery, HTML5, CSS3, SASS, SQL, APIs, Git, GitHub/Bitbucket, WordPress, Python ,C ,Java.</p>
                        <p>Please feel free to contact me with questions, comments or collaborations.</p>
                        <p>For more information, <Link to="" target="_blank">visit my blog.</Link></p>
                    </div>

                    <form id="contact-form" className="col-sm-6 col-md-offset-1 scrollimation fade-left d3" action="contact.php" method="post" novalidate>
                        <div className="form-group">
                            <label className="control-label" for="contact-name">Name</label>
                            <div className="controls">
                            <input id="contact-name" name="contactName" placeholder="Your name" className="form-control requiredField" data-new-placeholder="Your name" type="text" data-error-empty="Please enter your name"/>
                            <i className="fa fa-user"></i>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label" for="contact-mail">Email</label>
                            <div className=" controls">
                            <input id="contact-mail" name="email" placeholder="Your email" className="form-control requiredField" data-new-placeholder="Your email" type="email" data-error-empty="Please enter your email" data-error-invalid="Invalid email address"/>
                            <i className="fa fa-envelope"></i>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="control-label" for="contact-message">Message</label>
                            <div className="controls">
                            <textarea id="contact-message" name="comments" placeholder="Your message" className="form-control requiredField" data-new-placeholder="Your message" rows="6" data-error-empty="Please enter your message"></textarea>
                            <i className="fa fa-comment"></i>
                            </div>
                        </div>

                        <p><button name="submit" type="submit" className="btn btn-color2 btn-block" data-error-message="Error!" data-sending-message="Sending..." data-ok-message="Message Sent"><i className="fa fa-paper-plane"></i>Send Message</button></p>
                        <input type="hidden" name="submitted" id="submitted" value="true" />
                    </form>
                </div>
            </div>
        </section>

        <footer id="main-footer" className="add-padding border-top-color2">
            <div className="container">
                <p><Link to="" target="_blank">VISIT MY BLOG</Link></p><br/>
                    <ul className="social-linksfoot text-center">
                        <li><Link to="" target="_blank"><i className="fa fa-twitter"></i></Link></li>
                        <li><Link to="" target="_blank"><i className="fa fa-google-plus"></i></Link></li>
                        <li><Link to="" target="_blank"><i className="fa fa-linkedin"></i></Link></li>
                    </ul>
            </div>
        </footer>
        </>
    )
}

export default Footer;