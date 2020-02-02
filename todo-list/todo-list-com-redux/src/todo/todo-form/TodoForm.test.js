import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import TodoForm from './TodoForm';

configure({adapter: new Adapter()});

describe('TodoForm', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TodoForm />);
    })

    it('Deve criar form com campo descricao vazio', () => {
        expect(wrapper.find('input').prop('value')).toBeUndefined();
    });

    it('Deve criar form com campo descricao vazio', () => {
        wrapper.setProps({ description: 'Task 1' });
        expect(wrapper.find('input').prop('value')).toEqual('Task 1');
    });

    it('Deve chamar onSearch ao pressionar o enter no campo descrição', () => {
        const onSearch = jest.fn();
        wrapper.setProps({ description: 'Task 1' });
        wrapper.setProps({ onSearch });
        wrapper.find('input').simulate('keyup', { key: 'Enter' });
        expect(onSearch).toHaveBeenCalledTimes(1);
    });

    it('Deve chamar onAdd ao pressionar o ctrl + enter no campo descrição', () => {
        const onAdd = jest.fn();
        wrapper.setProps({ description: 'Task 1' });
        wrapper.setProps({ onAdd });
        wrapper.find('input').simulate('keyup', { ctrlKey: true, key: 'Enter' });
        expect(onAdd).toHaveBeenCalledTimes(1);
    });

    it('Deve chamar onClear ao pressionar o esc no campo descrição', () => {
        const onClear = jest.fn();
        wrapper.setProps({ description: 'Task 1' });
        wrapper.setProps({ onClear });
        wrapper.find('input').simulate('keyup', { key: 'Escape' });
        expect(onClear).toHaveBeenCalledTimes(1);
    });

    it('Deve chamar onDescriptionInput ao alterar o campo descrição', () => {
        const onDescriptionInput = jest.fn();
        wrapper.setProps({ onDescriptionInput });
        wrapper.find('input').simulate('change', { target: { value: 'X'} } );
        expect(onDescriptionInput).toHaveBeenCalledTimes(1);
        expect(onDescriptionInput).toHaveBeenCalledWith('X');
    });

});