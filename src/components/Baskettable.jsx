import React, { Component } from 'react';
import { Table } from 'reactstrap';

export default class Baskettable extends Component {


state = {
        tshirtPrice: 1.99,
        tshirtCost: 1.99,
        tshirtQty: 1,
        capPrice: 2.99,
        capCost: 2.99,
        capQty: 1,
        shortsPrice: 2.99,
        shortsCost: 2.99,
        shortsQty: 1,
        subtotal: 0

}


  onChangeHandler = e =>{
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log('this state:', this.state)
    
    )

  }










  render() {
    return (
      <div>
          
      
    <Table>
      <thead>
        <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Qty</th>
            <th>Cost</th>
        </tr>
      </thead>

      <tbody>
        <tr>
            <td>Cotton Tshirt, medium</td>
            <td id="tshirt_price"   >1.99</td>



            <td>

                <input
                  name="tshirtQty"
                  type="number"
                  defaultValue="1"  
                  id="tshirtQty"
                  onChange={this.onChangeHandler}
                />
            </td>


            <td id="tshirt_cost" >{this.state.tshirtPrice *  this.state.tshirtQty} </td>
        </tr>

        <tr>
            <td>Baseball Cap, onesize</td>
            <td id="cap_price"   >1.99</td>



            <td>

                <input
                  name="capQty"
                  type="number"
                  defaultValue="1"  
                  id="capQty"
                  onChange={this.onChangeHandler}
                />
            </td>


            <td id="cap_cost" >{this.state.capPrice *  this.state.capQty} </td>
        </tr>
        <tr>
            <td>Swim Shorts, medium</td>
            <td id="shorts_price"   >1.99</td>



            <td>

                <input
                  name="shortsQty"
                  type="number"
                  defaultValue="1"  
                  id="shortsQty"
                  onChange={this.onChangeHandler}
                />
            </td>


            <td id="shorts_cost" >{this.state.shortsPrice *  this.state.shortsQty} </td>
        </tr>








       
      </tbody>
      <tbody>
        <tr>
              <td> Subtotal</td>

              <td id="subTotal">{
                    ((this.state.tshirtPrice * this.state.tshirtQty)+
                    (this.state.capPrice * this.state.capQty)+
                    (this.state.shortsPrice * this.state.shortsQty)
                    ).toFixed(2)
              }</td>
        </tr>
        <tr>
              <td>VAT 20%</td>
              <td id="vat">{
                   (((this.state.tshirtPrice * this.state.tshirtQty)+
                    (this.state.capPrice * this.state.capQty)+
                    (this.state.shortsPrice * this.state.shortsQty)
                    ).toFixed(2)
                   )*0.2
              }</td>
        </tr>
        <tr>
              <td>total cost</td>
              <td id="total_cost">{
                    
                    (parseInt((((this.state.tshirtPrice * this.state.tshirtQty)+
                    (this.state.capPrice * this.state.capQty)+
                    (this.state.shortsPrice * this.state.shortsQty)
                    ).toFixed(2))*0.2))

                
              }</td>
        </tr>
      </tbody>
    </Table>  
      </div>
    )
  }
}
