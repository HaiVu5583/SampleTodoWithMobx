import React, { Component } from 'react'
import { FlatList, View, Text, TouchableOpacity, TextInput } from 'react-native'
import TodoListItem from '~/src/components/TodoListItem'
import { TODO_STATUS } from '~/src/constants'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Header from '~/src/components/Header'

export default class TodoDetail extends Component {

    static navigationOptions = {
        title: 'New Todo',
        headerVisible: true,
        headerStyle: {
            backgroundColor: '#158ad0',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }

    constructor(props) {
        super(props)
        this.state = {
            todo: ''
        }
    }

    _handleDone = () => {
        console.log('Done: ', this.state)
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Header
                    title={'New Todo'}
                    iconLeft={'close'}
                    rightText={'Done'}
                    onPressRight={this._handleDone}
                />
                <TextInput
                    value={this.state.todo}
                    onChangeText={text => this.setState({ todo: text })}
                    underlineColorAndroid={'transparent'}
                    style={{ fontSize: 28, color: 'rgba(0, 0, 0, 0.85)' }}
                    multiline={true}
                    selectionColor={'#158ad0'}
                    placeholder={'I do ...'}
                />
            </View>
        )
    }
}
