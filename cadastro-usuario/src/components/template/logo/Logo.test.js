import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Logo from './Logo';

configure({adapter: new Adapter()});

describe('Logo tests', () => {

    let wrapper;
  
    beforeEach(() => {
        wrapper = shallow(<Logo />);
    });
  
    it('should be created wiht default values', () => {
        const main = wrapper.find('aside');
        const logo = main.find('i');

        expect(main.hasClass('logo')).toBeTruthy();
        expect(logo).toHaveLength(1);
        expect(logo.hasClass('fa fa-question')).toBe(true);
        expect(logo.hasClass('medium')).toBe(true);
    });

    it('should be created wiht custom logo', () => {
        const image = 'check';
        const size = 'large';
        const className = 'logo-test';
        wrapper.setProps({ image })
        wrapper.setProps({ size })
        wrapper.setProps({ className })

        const main = wrapper.find('aside');
        const logo = main.find('i');

        expect(main.hasClass('logo')).toBeTruthy();
        expect(logo).toHaveLength(1);
        expect(logo.hasClass(`fa fa-${image}`)).toBe(true);
        expect(logo.hasClass(size)).toBe(true);
        expect(logo.hasClass(className)).toBe(true);
    });
  })
  