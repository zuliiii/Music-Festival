import React, { Component } from 'react'
import First from './First'
import Second from './Second'
import Third from './Third'
import Fourth from './carts/Fourth'
import Fifth from './Fifth'
import Sponsors from './Sponsors'
import Footer from './Footer'
import AboutDj from './AboutDj'

import Navbar from './Navbar/Navbar'
export class Home extends Component {
    render() {
        return (
            <div>
               <First/>
              <Second/>
              <Third/>
              <Fourth/>
              <Fifth/>
              <AboutDj />
              <Sponsors/>
              <Footer/>
              {/* <AboutDj /> */}

              
            
            </div>
        )
    }
}

export default Home
