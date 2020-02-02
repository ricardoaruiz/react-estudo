import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import Todo from './Todo';
import TodoService from './TodoService';

configure({adapter: new Adapter()});

describe('Todo', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Todo />);
    })

    it('Não deve adicionar uma task pois a description não foi informada', () => {
        TodoService.create = jest.fn();
        wrapper.instance().handleAdd();
        expect(TodoService.create).not.toHaveBeenCalled();
    });

    it('Deve adicionar uma task pois a description foi informada', async () => {
        TodoService.create = jest.fn().mockImplementation(() => Promise.resolve());
        wrapper.setState({ description: 'Task 01' });
        
        wrapper.instance().search = jest.fn();
        wrapper.instance().handleAdd();

        expect(TodoService.create).toHaveBeenCalledTimes(1);
        expect(TodoService.create).toHaveBeenCalledWith({
            description: wrapper.state().description,
            done: false,
            date: new Date().toLocaleString()
        });

        await Promise.resolve();
        expect(wrapper.state().description).toBe('');
        expect(wrapper.instance().search).toHaveBeenCalled();

    });

    it('Não deve adicionar uma task por erro na api', async () => {
        TodoService.create = jest.fn().mockImplementation(() => Promise.reject());
        wrapper.setState({ description: 'Task 01' });

        wrapper.instance().search = jest.fn();
        wrapper.instance().handleAdd();

        expect(TodoService.create).toHaveBeenCalledTimes(1);
        expect(TodoService.create).toHaveBeenCalledWith({
            description: wrapper.state().description,
            done: false,
            date: new Date().toLocaleString()
        });

        await Promise.resolve();
        expect(wrapper.state().description).toBe('Task 01');
        expect(wrapper.instance().search).not.toHaveBeenCalled();
    });

    it('Deve remover uma task', async () => {
        TodoService.delete = jest.fn().mockImplementation(() => Promise.resolve());
        const task = { id: 1, description: 'Task 01', done: false };

        wrapper.instance().search = jest.fn();
        wrapper.instance().handleDelete(task);

        expect(TodoService.delete).toHaveBeenCalledTimes(1);
        expect(TodoService.delete).toHaveBeenCalledWith(task);

        await Promise.resolve();
        expect(wrapper.instance().search).toHaveBeenCalledTimes(1);
    })

    it('Não deve remover uma task por erro na api', async () => {
        TodoService.delete = jest.fn().mockImplementation(() => Promise.reject());
        const task = { id: 1, description: 'Task 01', done: false };

        wrapper.instance().search = jest.fn();
        wrapper.instance().handleDelete(task);
        
        expect(TodoService.delete).toHaveBeenCalledTimes(1);
        expect(TodoService.delete).toHaveBeenCalledWith(task);

        await Promise.resolve();
        expect(wrapper.instance().search).not.toHaveBeenCalledTimes(1);
    })

});