import React from "react";
import ReactDOM from "react-dom";
import BookView from "./BookView";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("BookView tests", () => {
  it("BookView renders without a problem.", () => {
    const div = document.createElement("div");
    const book = {name: "Book title"};
    ReactDOM.render(<BookView book={book} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Snapshot warches renders", () => {
    const book = {name: "Book title"};
    const wrapper = shallow(<BookView book={book} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Title of the book is display as in props", () => {
    const book = {name: "Book title",author:"Author of book"};
    const wrapper = shallow(<BookView book={book} />);
    expect(wrapper.find('div').find('b').text()).toBe(book.name);
  });

  it("Author of the book is display as in props", () => {
    const book = {name: "Book title",author:"Author of book"};
    const wrapper = shallow(<BookView book={book} />);
    expect(wrapper.find('div').find('i').text()).toBe(book.author);
  });
});
