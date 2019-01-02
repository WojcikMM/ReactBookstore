import React from 'react';

export default class OrderView extends React.Component{

    render() {
        return (
            <div className="order-view">
                <span className="text-bold">{this.props.book.name}</span>
                <button className="btn btn-danger" onClick={(event)=> this.props.removeFromOrders(this.props.book.name)}>Remove</button>
            </div>
        )
    }

}