import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';

import Order from './Order';

configure({ adapter: new Adapter() });

describe("Order tests", () => {
  it("Order renders without a problem.", () => {
    const div = document.createElement("div");
    const orders = [];
    ReactDOM.render(<Order orders={orders} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it("Snapshot warches renders", () => {
    const orders = [];
    const wrapper = shallow(<Order orders={orders}  />);
    expect(wrapper).toMatchSnapshot();
  });
});
