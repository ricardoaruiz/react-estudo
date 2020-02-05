import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Footer from '../components/template/footer/Footer';
import Logo from '../components/template/logo/Logo';
import Main from '../components/template/main/Main';
import Nav from '../components/template/nav/Nav';
import App from './App';

configure({adapter: new Adapter()});

describe('App tests', () => {

  let wrapper;

  beforeEach(() => {
      wrapper = shallow(<App />);
  });

  it('should be created', () => {
    const mainDiv = wrapper.find('div');
    expect(mainDiv.hasClass('app')).toBeTruthy();
    expect(mainDiv.childAt(0).type()).toEqual(Logo);
    expect(mainDiv.childAt(1).type()).toEqual(Nav);
    expect(mainDiv.childAt(2).type()).toEqual(Main);
    expect(mainDiv.childAt(3).type()).toEqual(Footer);
  });

});
