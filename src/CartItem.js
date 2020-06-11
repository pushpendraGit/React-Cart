import React from 'react';

class CartItem extends React.Component {

    render(){
        return(
            <div className="cart-item ">

                <div className='left-block'>
                    <img style={style.Image} />
                </div>
                <div className='right-block'>

                    <div style={{fontSize:25}}>Phone</div>
                    <div style ={{fontSize:25}}>Rs : 999</div>
                    <div style={{fontSize:25}}>Qty: 1</div>
                    <div className='card-item-actions'>Phone</div>

                </div>
            </div>
        );
    }
}

const style = {

    Image:{

        height:110,

        width:110,

        borderRadius:4
    }
}

export default CartItem;



 