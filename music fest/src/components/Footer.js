import React, { Component } from 'react'

 class Footer extends Component {
    render() {
        return (
            <div>
                <footer>
                <div className="footer">
                    <h5>Get In Touch</h5>
                    <p>Subscribe to our mailing list to<span> get the updates </span>   to your email inbox.</p>

                  <div className="input">
                    <input type="text" placeholder="Email Address" />
                    <button><i class="far fa-paper-plane"></i></button>
                    </div>

                    <div className="social">
                    <ul class="social-icons">
                      <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
                      <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a class="soundcloud" href="#"><i class="fa fa-soundcloud"></i></a></li>
                      {/* <li><a class="instagram" href="#"><i class="fa fa-instagram"></i></a></li>    */}
                    </ul>
                    </div>
                </div>
                </footer>
            </div>
        )
    }
}

export default Footer
