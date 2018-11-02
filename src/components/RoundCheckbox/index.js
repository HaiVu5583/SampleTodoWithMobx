import React, { PureComponent } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class RoundCheckbox extends PureComponent {
    render() {
        const { checked, onPress } = this.props
        const iconName = checked ? 'checkbox-marked-circle' : 'checkbox-blank-circle-outline'
        return (
            <Icon
                onPress={onPress}
                name={iconName}
                size={25}
                color={'#158ad0'}
            />
        )
    }
}
