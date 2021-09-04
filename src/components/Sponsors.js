import React, { Component } from 'react'

 class Sponsors extends Component {
    render() {
              
        function Sponsor(props){
            return <div className="slider">
            
            <div className="slide-track">
              <div className="slide">
              <img  src="http://slimhamdi.net/salimo/demos/img/logos-slider/activeden-dark-background.png" height={100} width={250} alt="" />
              </div>
              <div className="slide">
                <img src="http://slimhamdi.net/salimo/demos/img/logos-slider/audiojungle-dark-background.png" height={100} width={250} alt="" />
              </div>
              <div className="slide">
                <img src="http://slimhamdi.net/salimo/demos/img/logos-slider/codecanyon-dark-background.png" height={100} width={250} alt="" />
              </div>
              <div className="slide">
                <img src="http://slimhamdi.net/salimo/demos/img/logos-slider/graphicriver-dark-background.png" height={100} width={250} alt="" />
              </div>
              <div className="slide">
                <img src="http://slimhamdi.net/salimo/demos/img/logos-slider/themeforest-dark-background.png" height={100} width={250} alt="" />
              </div>
              <div className="slide">
                <img src="http://slimhamdi.net/salimo/demos/img/logos-slider/3docean-dark-background.png" height={100} width={250} alt="" />
              </div>
              <div className="slide">
                <img src="http://slimhamdi.net/salimo/demos/img/logos-slider/activeden-dark-background.png" height={100} width={250} alt="" />
              </div>
            </div>
          </div>
        }

        return (
            <div>
               <section className="container">

                   < Sponsor  /> 
                   
        
      </section>
            </div>
        )
    }
}

export default Sponsors
