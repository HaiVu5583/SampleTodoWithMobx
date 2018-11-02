import React, { Component } from 'react'
import { FlatList, View, Text, TouchableOpacity } from 'react-native'
import TodoListItem from '~/src/components/TodoListItem'
import { TODO_STATUS } from '~/src/constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './styles'

export default class TodoList extends Component {
    static navigationOptions = {
        header: null,
    }

    constructor(props) {
        super(props)
        this.state = {
            todoList: [
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
        }
    }

    _handlePressCheckTodoItem = (item) => {
        const cloneTodoList = [...this.state.todoList]
        const itemIndex = cloneTodoList.findIndex(itemLoop => itemLoop.id == item.id)
        const newItemStatus = cloneTodoList[itemIndex]['status'] == TODO_STATUS.ACTIVE ? TODO_STATUS.DONE : TODO_STATUS.ACTIVE
        cloneTodoList[itemIndex] = {
            ...cloneTodoList[itemIndex],
            status: newItemStatus
        }
        this.setState({ todoList: cloneTodoList })
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
                    data={this.state.todoList}
                    renderItem={this._renderTodoItem}
                    keyExtractor={item => '' + item.id}
                />

                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    bottom: 16,
                    width: '100%'
                }}>
                    <TouchableOpacity onPress={this._handlePressAddTodo}>
                        <View style={{
                            elevation: 2,
                            backgroundColor: '#158ad0',
                            height: 54,
                            borderRadius: 27,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            paddingHorizontal: 50,

                        }}>
                            <Icon name={'plus'} size={25} color={'white'} />
                            <Text style={{ color: 'white', marginLeft: 5 }}>Add Todo</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
