import React from "react";

// import CartItem from './CartItem';
import Cart from "./Cart";
import Navbar from "./Navbar";
import * as firebase from "firebase";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };

    this.db = firebase.firestore();
  }

  /* componentDidMount() {
     firebase
       .firestore()
       .collection("products")
       .get()
       .then(snapshot => {
       const products = snapshot.docs.map(doc => {
           const data = doc.data();
          data["id"] = doc.id;
           return data;
        });
         this.setState({ products: products, loading: false });
  //     });
   }*/




  
  componentDidMount() {
    this.db
      .collection("products")
      .onSnapshot(snapshot => {
        const products = snapshot.docs.map(doc => {
          const data = doc.data();
          data["id"] = doc.id;
          return data;
        });
        this.setState({ products: products, loading: false });
      });
  }


  handleIncreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products
    // });


    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty:products[index].qty+1
    })
    .then(()=>{
      console.log('Updated Successfully');
    })
    .catch((error)=>{
      console.log('Error in updating the product');
    })
  };

  handleDecreaseQuantity = product => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty:products[index].qty-1
    })
    .then(()=>{

      //console.log('Product decreases successfully')
    })
    .catch((error)=>{

      //console.log('Error in updating the poduct');
    })


  };

  handleDeleteProduct = id => {
    const { products } = this.state;

    // const items = products.filter(product => product.id !== id);

    // this.setState({
    //   products: items
    // });

    const docRef = this.db.collection("products").doc(id);

    docRef
    .delete()
        .then(()=>{

          
        })
        .catch((error)=>{

          //console.log('Error in deteting the product from firebase', error);
        })
  };

  getcountOfCartItems = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach(product => {
      count += product.qty;
    });

    return count;
  };

  getcartTotal = () => {
    const { products } = this.state;
    let cartTotal = 0;

    products.map(product => {
      if (product.qty > 0) {
        cartTotal = cartTotal + product.qty * product.price;
      }
      return "";
    });

    return cartTotal;
  };

  addProduct = () => {
    this.db
      .collection("products")
      .add({
        img: "data:image/jpeg;base64,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",
        price: 900,
        qty: 3,
        title: "Washing Machine"
      })
      .then(docRef => {
        docRef.get().then(snapshot => {
          console.log("Product has been added", snapshot.data());
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getcountOfCartItems()} />
        <button onClick = {this.addProduct} >ADD To Cart</button>
        <Cart
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
          products={products}
        />
        {loading && <h1>Loading Products...</h1>}
        <div style={{ padding: 10, fontSize: 20 }}>
          TOTAL : {this.getcartTotal()}
        </div>
      </div>
    );
  }
}

export default App;
