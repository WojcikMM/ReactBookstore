import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import ReactDOM from 'react-dom';

import Order from './Order';

configure({ adapter: new Adapter() });

describe("Order tests", () => {
  it("Order renders without a problem.", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Order />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Order renders text: 'Zamowienia'", () => {
      const wrapper = shallow(<Order />);
     // console.log(wrapper.debug());
      expect(wrapper.find('div').text()).toBe('Zamowienia');
  });

  it("Snapshot warches renders", () => {
    const wrapper = shallow(<Order />);
    expect(wrapper).toMatchSnapshot();
  });
});
