import React from 'react';

export default class OrderView extends React.Component{

    render() {
        return (
            <div className="order-view row">
                <div className="col-xs-8">
                    <span className="text-bold">{this.props.book.name}</span>
                </div>
                <div className="col-xs-4">
                    <button className="btn btn-danger" onClick={(event)=> this.props.removeFromOrders(this.props.book.name)}>Remove</button>
                </div>
            </div>
        )
    }

}