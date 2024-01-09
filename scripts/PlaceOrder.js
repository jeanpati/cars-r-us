import { placeOrder } from "./TransitionState.js"




export const PlaceOrder = () => {
    document.addEventListener("click", handlePlaceOrderClick)
    return "<div><button id='placeOrder'>Place Order</button></div>"
}




 /*
     Since the value of the radio buttons is the string of
     'true' and the string of 'false', you must convert the
     string to an actual boolean with JSON.parse() as seen below
 */
     const handlePlaceOrderClick = (clickEvent) => {
        if (clickEvent.target.id === 'placeOrder') { //refers to data attributes
            placeOrder()
        }
    }