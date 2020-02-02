import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import IconButton from './IconButton';

configure({adapter: new Adapter()});

describe('Teste do comportamento do IconButton', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<IconButton />);
    })

    it('Botao deve renderizar com o icone default (check)', () => {
        expect(wrapper.find('i').hasClass('fa fa-check')).toBeTruthy();
        expect(wrapper.find('button').prop('disabled')).toBe('')
    })

    it('Botao deve renderizar com o icone informado', () => {
        wrapper.setProps({ icon: 'trash' })
        expect(wrapper.find('i').hasClass('fa fa-trash')).toBeTruthy();
        expect(wrapper.find('button').prop('disabled')).toBe('')
    })

    it('Botao deve renderizar com o tipo default (primary)', () => {
        expect(wrapper.find('button').hasClass('btn-primary')).toBeTruthy();
        expect(wrapper.find('button').prop('disabled')).toBe('')
    })    

    it('Botao deve renderizar com o tipo informado', () => {
        wrapper.setProps({ type: 'secondary' })
        expect(wrapper.find('button').hasClass('btn-secondary')).toBeTruthy();
        expect(wrapper.find('button').prop('disabled')).toBe('')
    })

    it('Botao deve renderizar com css customizado informado', () => {
        wrapper.setProps({ className: 'mr-1' })
        expect(wrapper.find('button').hasClass('mr-1')).toBeTruthy();
        expect(wrapper.find('button').prop('disabled')).toBe('')
    })    

    it('Botao deve renderizar com o label informado', () => {
        wrapper.setProps({ label: 'Botao 01' })
        expect(wrapper.contains('Botao 01')).toBeTruthy()
        expect(wrapper.find('i').hasClass('fa fa-check')).toBeTruthy();
        expect(wrapper.find('button').prop('disabled')).toBe('')
    });

    it('Botao deve estar desabilitado eo informar a propriedade disabled igual a true', () => {
        wrapper.setProps({ disabled: true })
        expect(wrapper.find('button').prop('disabled')).toBe('disabled')
    });    

    it('Botao não deve renderizar quando hide igual a true', () => {
        wrapper.setProps({ hide: true })
        expect(wrapper.html()).toEqual('');
    });

    it('Botao deve chamar o metodo de clique recebido do pai', () => {
        const onClick = jest.fn();
        wrapper.setProps({ onClick: onClick })
        wrapper.find('button').simulate('click')
        expect(onClick).toHaveBeenCalledTimes(1);
    });
    
});