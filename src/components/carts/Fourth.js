import React, { Component } from 'react'
import Cartsshow from './Cartsshow'
import Cartsdata from './Cartsdata'
export class Fourth extends Component {
    render() {
        return (
            <div className="fourth">
                <div className="fourthhed">
                <h3>FESTIVAL PACKAGES</h3>
                <p>Relive the moments and the music 2022</p>
                </div>
                <div className="cartsdiv">
                    {Cartsdata.ticketData.map((item, index) => {
                        return (
                            <Cartsshow price ={item.price} 
                            title={item.title} 
                            text ={item.text} 
                            item={item} 
                            key={index} 
                            />
                        )
                    })}
             


                </div>

            </div>
        )
    }
}

export default Fourth
