import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
  constructor () {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: 'Watch',
          qty: 1,
          img: '',
          id: 1
        },
        {
          price: 999,
          title: 'Mobile Phone',
          qty: 10,
          img: '',
          id: 2
        },
        {
          price: 999,
          title: 'Laptop',
          qty: 4,
          img: '',
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

  render () {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}

              onIncreaseQuantity = {this.handleIncreaseQuantity}

              onDecreaseQuantity = {this.handleDecreaseQuantity}

              onDeleteProduct = {this.handleDeleteProduct}
            />
          )
        })}
      </div>
    );
  }
}

export default Cart;