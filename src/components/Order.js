import React from 'react';
import OrderView from './OrderView';

class Order extends React.Component{


    render() {

        // const orders = this.props.orders.map(book => {
        //   return  <OrderView book={book} removeFromOrders={this.props.removeFromOrders} />
        // });

        return (
            <div className="order col-xs-4">
                {/* {orders} */}
            </div>
        );
    }
}

export default Order;