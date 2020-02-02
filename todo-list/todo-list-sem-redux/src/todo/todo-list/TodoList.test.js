import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import TodoList from './TodoList';
import IconButton from '../../template/icon-button/IconButton';

configure({adapter: new Adapter()});

describe('TodoList', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<TodoList />);
    })

    it('Deve criar componente com a lista vazia', () => {
        wrapper.setProps({ list: [] });
        expect(wrapper.find('table tbody tr td').at(0).text()).toEqual('Não existem tasks');
    });

    it('Deve criar componente com a lista com uma task pendente', () => {
        wrapper.setProps({ list: [{ id: 1, description: 'Task 01', done: false, }] });

        const rows = wrapper.find('table tbody tr');
        expect(rows).toHaveLength(1);

        const td0 = rows.at(0).find('td').at(0);
        expect(td0.text()).toEqual('Task 01');
        expect(td0.find('span').at(0).hasClass('done')).toBeFalsy();

        const td1 = rows.at(0).find('td').at(1);

        const btnCheck = td1.find(IconButton).at(0);
        expect(btnCheck.prop('hide')).toBe(false);

        const btnUndo = td1.find(IconButton).at(1);
        expect(btnUndo.prop('hide')).toBe(true);

        const btnTrash = td1.find(IconButton).at(2);
        expect(btnTrash.prop('hide')).toBe(true);
    });

    it('Deve criar componente com a lista com uma task finalizada', () => {
        wrapper.setProps({ list: [{ id: 1, description: 'Task 01', done: true, }] });

        const rows = wrapper.find('table tbody tr');
        expect(rows).toHaveLength(1);

        const td0 = rows.at(0).find('td').at(0);
        expect(td0.text()).toEqual('Task 01');
        expect(td0.find('span').at(0).hasClass('done')).toBeTruthy();

        const td1 = rows.at(0).find('td').at(1);

        const btnCheck = td1.find(IconButton).at(0);
        expect(btnCheck.prop('hide')).toBe(true);

        const btnUndo = td1.find(IconButton).at(1);
        expect(btnUndo.prop('hide')).toBe(false);

        const btnTrash = td1.find(IconButton).at(2);
        expect(btnTrash.prop('hide')).toBe(false);
    });  
    
    it('Deve criar componente com a lista com uma task pendente e uma finalizada', () => {
        wrapper.setProps({ list: [
            { id: 1, description: 'Task 01', done: false },
            { id: 2, description: 'Task 02', done: true },
        ] });

        const rows = wrapper.find('table tbody tr');
        expect(rows).toHaveLength(2);

        // Linha 01
        const row1 = rows.at(0);
        const td01 = row1.find('td').at(0);
        expect(td01.text()).toEqual('Task 01');
        expect(td01.find('span').at(0).hasClass('done')).toBeFalsy();

        const td02 = row1.find('td').at(1);

        const btnCheck02 = td02.find(IconButton).at(0);
        expect(btnCheck02.prop('hide')).toBe(false);

        const btnUndo02 = td02.find(IconButton).at(1);
        expect(btnUndo02.prop('hide')).toBe(true);

        const btnTrash02 = td02.find(IconButton).at(2);
        expect(btnTrash02.prop('hide')).toBe(true);

        // Linha 02
        const row2 = rows.at(1);
        const td11 = row2.find('td').at(0);
        expect(td11.text()).toEqual('Task 02');
        expect(td11.find('span').at(0).hasClass('done')).toBeTruthy();

        const td12 = row2.find('td').at(1);

        const btnCheck12 = td12.find(IconButton).at(0);
        expect(btnCheck12.prop('hide')).toBe(true);

        const btnUndo12 = td12.find(IconButton).at(1);
        expect(btnUndo12.prop('hide')).toBe(false);

        const btnTrash12 = td12.find(IconButton).at(2);
        expect(btnTrash12.prop('hide')).toBe(false);
    });

    it('Deve chamar o onChangeState quando o botão de check for clicado mudando a task para done = true', () => {
        const onChangeState = jest.fn();
        const task = { id: 1, description: 'Task 01', done: false };

        wrapper.setProps({ onChangeState });
        wrapper.setProps({ list: [ task ] });

        const rows = wrapper.find('table tbody tr');
        const td1 = rows.at(0).find('td').at(1);
        const btnCheck = td1.find(IconButton).at(0);        
        
        btnCheck.simulate('click');        

        expect(onChangeState).toHaveBeenCalledTimes(1);
        expect(onChangeState).toHaveBeenCalledWith({
            task,
            done: !task.done
        });
    });
    
    it('Deve chamar o onChangeState quando o botão de undo for clicado mudando a task para done = false', () => {
        const onChangeState = jest.fn();
        const task = { id: 1, description: 'Task 01', done: true };

        wrapper.setProps({ onChangeState });
        wrapper.setProps({ list: [ task ] });

        const rows = wrapper.find('table tbody tr');
        const td1 = rows.at(0).find('td').at(1);
        const btnUndo = td1.find(IconButton).at(1);
        
        btnUndo.simulate('click');

        expect(onChangeState).toHaveBeenCalledTimes(1);
        expect(onChangeState).toHaveBeenCalledWith({
            task,
            done: !task.done
        });
    });

    it('Deve chamar o onChangeState quando o botão de undo for clicado mudando a task para done = false', () => {
        const onDelete = jest.fn();
        const task = { id: 1, description: 'Task 01', done: true };

        wrapper.setProps({ onDelete });
        wrapper.setProps({ list: [ task ] });

        const rows = wrapper.find('table tbody tr');
        const td1 = rows.at(0).find('td').at(1);
        const btnTrash = td1.find(IconButton).at(2);
        
        btnTrash.simulate('click');

        expect(onDelete).toHaveBeenCalledTimes(1);
        expect(onDelete).toHaveBeenCalledWith(task);
    });    

});