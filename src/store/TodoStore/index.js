import { observable, action, computed } from 'mobx'
import { TODO_STATUS } from '~/src/constants'

export default class TodoStore {
    @observable todos = [
        {
            id: 1,
            status: TODO_STATUS.ACTIVE,
            todo: 'Check mail'
        },
        {
            id: 2,
            status: TODO_STATUS.DONE,
            todo: 'Update prevent multiple click'
        },
        {
            id: 3,
            status: TODO_STATUS.ACTIVE,
            todo: 'Create sample app with Mobx'
        },
        {
            id: 4,
            status: TODO_STATUS.ACTIVE,
            todo: 'Hôm nay đéo biết làm cái gì cả. Đây là một ghi chú rất dài.'
        }
    ]
    @computed get todoList() {
        return this.todos
    }
    @action toggleTodo(id) {
        const itemIndex = this.todos.findIndex(itemLoop => itemLoop.id == id)
        const newItemStatus = this.todos[itemIndex]['status'] == TODO_STATUS.ACTIVE ? TODO_STATUS.DONE : TODO_STATUS.ACTIVE
        this.todos[itemIndex] = {
            ...this.todos[itemIndex],
            status: newItemStatus
        }
    }

    @action updateTodo() {

    }

}