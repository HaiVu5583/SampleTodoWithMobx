import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import RoundCheckbox from '~/src/components/RoundCheckbox'
import styles from './styles'
import { TODO_STATUS } from '~/src/constants'

export default class TodoListItem extends PureComponent {
    _handlePressItem = () => {
        const { onPress } = this.props
        onPress && onPress()
    }

    _handlePressCheck = () => {
        const { onPressCheck } = this.props
        onPressCheck && onPressCheck()
    }

    render() {
        const { status, todo } = this.props
        return (
            <TouchableOpacity onPress={this._handlePressItem}>
                <View style={styles.todoRow}>
                    <TouchableOpacity onPress={this._handlePressCheck}>
                        <View style={{ padding: 5 }}>
                            <RoundCheckbox
                                checked={status == TODO_STATUS.DONE}
                            />
                        </View>
                    </TouchableOpacity>
                    <Text style={status == TODO_STATUS.DONE ? styles.textTodoDone : styles.textTodoActive}>{todo}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}
