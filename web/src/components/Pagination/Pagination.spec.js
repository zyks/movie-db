import React from 'react';
import ReactDOM from 'react-dom';
import { mount, shallow } from 'enzyme';
import sinon from 'sinon';
import Pagination from './Pagination';
import PageNumber from "./PageNumber";
 
 
const props = {
    pagesNumber: 8,
    currentPage: 3,
    callback: () => {},
};
 
it('renders eight <PageNumber /> components', () => {
    const wrapper = shallow(<Pagination {...props} />);
    expect(wrapper.find(PageNumber).length).toBe(8);
});
 
it('renders correctly active <PageNumber /> components', () => {
    const wrapper = mount(<Pagination {...props} />);
    expect(wrapper.find(".active").text()).toBe("3");
});
 
it('calls callback on page number click', () => {
    const callback = sinon.spy();
    const wrapper = mount(<Pagination {...props} callback={callback} />);
    wrapper.findWhere(node => node.key() === "7").simulate('click');    
    expect(callback.callCount).toBe(1);
});
