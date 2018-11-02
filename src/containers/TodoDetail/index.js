import React, { Component } from 'react'
import { DatePickerAndroid, View, Text, TextInput } from 'react-native'
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
            todo: '',
            date: ''
        }
    }

    _handleDone = () => {
        console.log('Done: ', this.state)
    }

    _handlePressCalendar = async () => {
        try {
            const dateSplit = this.state.date.split('/')
            const setYear = dateSplit && dateSplit.length > 0 ? dateSplit[0] : 0
            const setMonth = dateSplit && dateSplit.length > 0 ? dateSplit[1] - 1 : 0
            const setDay = dateSplit && dateSplit.length > 0 ? dateSplit[2] : 0
            const { action, year, month, day } = await DatePickerAndroid.open({
                mode: 'calendar',
                date: setYear > 0 ? new Date(setYear, setMonth, setDay) : new Date()
            });
            console.log('Action', action)
            console.log('Value', `${year}/${month + 1}/${day}`)
            if (action !== DatePickerAndroid.dismissedAction) {
                // Selected year, month (0-11), day
                this.setState({ date: `${year}/${month + 1}/${day}` })
            }
        } catch ({ code, message }) {
            console.warn('Cannot open date picker', message);
        }
    }

    render() {
        console.log('Rerender', this.state)
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <Header
                    title={'New Todo'}
                    iconLeft={'close'}
                    rightText={'Done'}
                    onPressRight={this._handleDone}
                />
                <View style={{ padding: 10 }}>
                    <TextInput
                        value={this.state.todo}
                        onChangeText={text => this.setState({ todo: text })}
                        underlineColorAndroid={'transparent'}
                        style={{ fontSize: 28, color: 'rgba(0, 0, 0, 0.85)' }}
                        multiline={true}
                        selectionColor={'#158ad0'}
                        placeholder={'I do ...'}
                    />
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon
                            name={'calendar'}
                            size={30}
                            color={'#158ad0'}
                            onPress={this._handlePressCalendar}
                        />
                        <Text style={{ marginLeft: 5, flex: 1 }}>{this.state.date || 'No deadline'}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
