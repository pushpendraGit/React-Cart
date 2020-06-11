import React from 'react';

class CartItem extends React.Component {

    constructor(){
        super();
        this.state={

            price:999,
            title:'Mobile Phone',

            qty:1,
            img:''

            
        }
    }

    render(){
        const{price, title, qty} = this.state
        return(
            <div className="cart-item ">

                <div className='left-block'>
                    <img style={style.Image} />
                </div>
                <div className='right-block'>

        <div style={{fontSize:25}}>{title}</div>
        <div style ={{color:"#777"}}>Price : {price}</div>
        <div style={{color:'#777'}}>Qty : {qty}</div>
                    <div className='card-item-actions'>
                        <img alt='increase' className='action-icons' src='https://www.flaticon.com/premium-icon/icons/svg/2956/2956929.svg'/>
                        <img alt='decrease' className='action-icons' src='https://as2.ftcdn.net/jpg/03/51/18/85/500_F_351188596_rBQwfSx3MgDI1RhmyrJcVGFfP4lVg1VN.jpg'/>
                        <img alt='delete' className='action-icons' src='https://www.flaticon.com/premium-icon/icons/svg/2821/2821436.svg'/>






                    </div>

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



 