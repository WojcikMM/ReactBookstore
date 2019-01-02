import React from "react";
import ReactDOM from "react-dom";
import OrderView from "./OrderView";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("OrderView tests", () => {
  it("OrderView renders without a problem.", () => {
    const div = document.createElement("div");
    const book = {name: "Book title"};
    ReactDOM.render(<OrderView book={book} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it("Snapshot warches renders", () => {
    const book = {name: "Book title"};
    const wrapper = shallow(<OrderView book={book} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Title of the book is display as in props", () => {
    const book = {name: "Book title"};
    const wrapper = shallow(<OrderView book={book} />);
    expect(wrapper.find('.order-view').find('span').text()).toBe(book.name);
  });
});
