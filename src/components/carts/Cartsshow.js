import React from 'react';
import {useCart} from 'react-use-cart'


const Cartsshow = (props) => {
    const {addItem} = useCart();

    const added = () => {
      addItem(props.item)
      alert("Added successfuly!")
    }

    return (
        <div className="cartsdiv1">
        <h5><i class="fas fa-dollar-sign"></i> {props.price}</h5>
        <h6>{props.title}</h6>
        <p>{props.text}</p>
        <ul>
            <li > <i class="fas fa-check"></i> Tickets for 2 Person</li>
            <li> <i class="fas fa-check"></i> Musical Bands and Activities</li>
            <li> <i class="fas fa-check"></i> People Having Fun</li>
            <li> <i class="fas fa-check"></i> Dinner and Lunch</li>
            <li> <i class="fas fa-check"></i> Email Support</li>
        </ul>
        <button onClick={added}>GET TICKET</button>
    </div>
    )
}


export default Cartsshow
