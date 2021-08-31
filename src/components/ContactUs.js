import React, { Component } from 'react'

 class ContactUs extends Component {
    render() {
      // function Contactus(){
        
      // }
        return (
            <div>
                <div className="container-fluid">
                    <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d24304.907147343918!2d49.8225675!3d40.4063387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2s!4v1625830103059!5m2!1str!2s" width={1446} height={500} style={{border: 0}} allowFullScreen loading="lazy" />
                    
                    <div className="about">
                        <div className="row justify-content-center">
                            <div className="col-md-4 col-lg-4">
                             <div className="infobox">
                                 <div className="infobox-icon">
                                 <i class="fas fa-phone"></i>
                                 </div>
                                 <div className="infobox-body">
                                 
                                  <h6 class="color-primary">Phone</h6>
                                  <span class="text-white">+(123)4567890</span>
                                  <span class="text-white">+(123)4567890</span>
             
                                 </div>
                             </div>
                            </div>
                            
                            <div className="col-md-4 col-lg-4">
                             <div className="infobox">
                                 <div className="infobox-icon">
                                 <i class="far fa-envelope"></i>
                                 </div>
                                 <div className="infobox-body">
                                 
                                  <h6 class="color-primary">Email</h6>
                                  <span class="text-white">example@example.com</span>
                                  <span class="text-white">example@example.com</span>
             
                                 </div>
                             </div>
                            </div>

                            <div className="col-md-4 col-lg-4">
                             <div className="infobox">
                                 <div className="infobox-icon">
                                 <i class="fas fa-map-marker-alt"></i>
                                 </div>
                                 <div className="infobox-body">
                                 
                                  <h6 class="color-primary">LOCATION</h6>
                                  <span class="text-white">123 New Yourk E Block 12670,
                                                           Street 2101 USA</span>
                                  
             
                                 </div>
                             </div>
                            </div>
                           
                        </div>
                    </div>
                    </div>

                    <div className="row">
          <h1>Have Any Questions?</h1>
        </div>
        
        <div className="row input-container">
          <div className="col-xs-12">
            <div className="styled-input wide">
              <input type="text" required />
              <label>Name</label> 
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input">
              <input type="text" required />
              <label>Email</label> 
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="styled-input" style={{float: 'right'}}>
              <input type="text" required />
              <label>Phone Number</label> 
            </div>
          </div>
          <div className="col-xs-12">
            <div className="styled-input wide">
              <textarea required defaultValue={""} />
              <label>Message</label>
            </div>
          </div>
          <div className="col-xs-12">
            <div className="btn-lrg submit-btn">Send Message</div>
          </div>
        </div>
                     
                </div>
            </div>
        )
    }
}

export default ContactUs
