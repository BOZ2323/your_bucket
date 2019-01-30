import React, { Component } from 'react'

export default class Buybutton extends Component {

// Next steps: The axios request will look similar to this one
//
//     handleSubmit(e) {
//
//         axios.post('/register', {
//
//             first: this.state.first,
//             last:this.state.last,
//             email: this.state.email,
//             password: this.state.password,
//
//         })
//             .then(result =>{
//                 if(result.data.success) {
//                     console.log(result);
//                     location.replace('/');
//                 } else {
//                     this.setState({
//                         error : true
//                     });
//                 }
//             })
//             .catch(err => {
//                 console.log(err.message);
//             });
//     }






  render() {
    return (
      <div>
        <button className="btn" id="buy_button">Buy Now >></button>
        {/*
        with more time I would have coded the following funtion to do the axios request when the buy button is clicked.

        onHandleChange() {
        this.setState({

        })
        this.calculateSubtotal()
        }

        calculateSubtotal() {
        this.setState({
        subtotal: (this.state.tshirtQty * this.state.tshirtCost) + ()
        })
        }

        <td>{ this.state.subtotal }</td> */}
      </div>
    )
  }
}
