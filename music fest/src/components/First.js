import React, { Component } from 'react'
import '../sass/style.css'
import Navbar from './Navbar/Navbar';
import CountDownTimer from './CountDownTimer';
import {Link} from 'react-router-dom';
import { useCart } from 'react-use-cart';


const First = () => {
    const {totalItems}=useCart();
 

      const hoursMinSecs = {days:16, hours:18, minutes: 20, seconds: 40}

        return (
            <div>
                <div className="first-page">
                <div class="box spin">
                  <img src="https://pngimg.com/uploads/vinyl/vinyl_PNG18.png" alt="" />
                </div>
                <h1>MUSIC FESTIVAL</h1>
                <p>Event Starts On: <span>22 July 2022</span></p>
                
<div className="cntdown">
  <CountDownTimer  hoursMinSecs={hoursMinSecs}/>
  </div>

  <div id="clockdiv">
  <div>
    <span class="hours"></span>
    <div class="smalltext">Hours</div>
  </div>
  <div>
    <span class="minutes"></span>
    <div class="smalltext">Min</div>
  </div>
  <div>
    <span class="seconds"></span>
    <div class="smalltext">Sec</div>
  </div>
</div>
                <header>
                    <div className="row">

                       <div className="col-md-6">
                       </div>

                        
                        <div className="col-md-6">
                          <div className="rightside">
                        <div align="center" class="socialbtns">
                          <ul>
                          <li><a href="#" class="fa fa-facebook"></a></li>
                          <li><a href="#" class="fa fa-lg fa-twitter"></a></li>
                           <li><a href="#" class="fa fa-lg fa-soundcloud"></a></li>
                          {/* <li> <Link  to="/Cart"> <i class="fas fa-shopping-basket"></i> </Link> </li> */}
                          <Link to="/AddToCart" id="cardbtn" type="submit"><i class="fas fa-shopping-cart me-1"></i>{totalItems} Items</Link>
                          </ul>
                          </div>
                          </div>
                        </div>
                    </div>
                </header>
                </div>
                
            </div>
        )
    }






export default First
