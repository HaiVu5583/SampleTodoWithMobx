import React, { Component } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import TodoListItem from '~/src/components/TodoListItem'
import { TODO_STATUS } from '~/src/constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'
import { observer } from "mobx-react"
import TodoStore from '~/src/store/TodoStore'

@observer
export default class TodoList extends Component {
    static navigationOptions = {
        header: null,
    }

    static defaultProps = {
        todoStore: new TodoStore()
    }

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    _handlePressCheckTodoItem = (item) => {
        this.props.todoStore.toggleTodo(item.id)
    }

    _renderTodoItem = ({ item, index }) => {
        return (
            <TodoListItem
                todo={item.todo}
                status={item.status}
                onPressCheck={() => this._handlePressCheckTodoItem(item)}
            />
        )
    }

    _handlePressAddTodo = () => {
        this.props.navigation.navigate('TodoDetail')
    }

    _renderHeader = () => {
        return (
            <View style={styles.pageTitleContainer}>
                <Text style={styles.pageTitle}>TodoList</Text>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <FlatList
                    ListHeaderComponent={this._renderHeader}
                    data={this.props.todoStore.todoList}
                    renderItem={this._renderTodoItem}
                    keyExtractor={item => '' + item.id}
                />
                <View style={styles.buttonAddTodoContainer}>
                    <TouchableOpacity onPress={this._handlePressAddTodo}>
                        <View style={styles.buttonAddTodo}>
                            <Icon name={'plus'} size={25} color={'white'} />
                            <Text style={{ color: 'white', marginLeft: 5 }}>Add Todo</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
