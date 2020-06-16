import React from 'react';

import Cart from './Cart'

import Navbar from './Navbar';



class App extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: 'https://images.unsplash.com/photo-1566829965538-fc82e475a2b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: 'https://images.unsplash.com/photo-1575024357670-2b5164f470c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
          id: 3
        }
      ]
    }
    // this.increaseQuantity = this.increaseQuantity.bind(this);
    // this.testing();
  }

  handleIncreaseQuantity = (product) =>{

   

    const { products } = this.state;

    const index = products.indexOf(product);

    products[index].qty +=1 ;

    this.setState({
      products:products
    })


  }

  handleDecreaseQuantity = (product) => {

    const {products} = this.state;

    const index = products.indexOf(product);

    const {qty} = products[index].qty;

    if(products[index].qty === 0)
    {
      return;
    }

    products[index].qty -=1;

    this.setState({

      products:products
    })
  }


  //this function is for handle delete property

  handleDeleteProduct = (id) => {

    const {products} = this.state;

    const items = products.filter((item) => item.id != id);

    //now we will set state except that id item


    this.setState({

      products:items
    })
  }

  getCartCount = () => {

    const {products} = this.state

    let count = 0;

    products.forEach((product)=>{

      count += product.qty;
    })

    return count;
  }


  getCartTotal = ()=>{

    const {products} = this.state;

    let cartTotal = 0;

    products.map((product)=>{
      cartTotal = cartTotal+(product.qty)*product.price;
    })


    return cartTotal;
  }
  render(){

    const {products} = this.state;

  return (
    <div className="App">
       <Navbar  count = {this.getCartCount()} />
        <Cart 

        products={products}
         onIncreaseQuantity = {this.handleIncreaseQuantity}

          onDecreaseQuantity = {this.handleDecreaseQuantity}

          onDeleteProduct = {this.handleDeleteProduct} />

  <div  style={{padding:10, fontSize:20} }>Total: {this.getCartTotal()}</div>
    </div>
  );
  }
}

export default App;
