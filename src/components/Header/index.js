import React, { PureComponent } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, TouchableOpacity, Text } from 'react-native'
import { withNavigation } from 'react-navigation'
import styles from './styles'

class Header extends PureComponent {

    _handlePressIconLeft = () => {
        const { onPressLeft } = this.props
        if (onPressLeft) {
            onPressLeft()
            return
        }
        this.props.navigation.goBack()
    }

    render() {
        const { iconLeft = 'keyboard-backspace', iconColor = '#158ad0',
            title, rightText,
            onPressRight
        } = this.props


        return (
            <View style={styles.toolbar}>
                <TouchableOpacity onPress={this._handlePressIconLeft}>
                    <View style={styles.leftContainer}>
                        <Icon
                            name={iconLeft}
                            size={24}
                            color={iconColor}
                        />
                    </View>
                </TouchableOpacity>
                {!!title &&
                    <Text style={{ fontSize: 20, color: iconColor, flex: 1, fontWeight: 'bold' }}>{title}</Text>
                }
                {!!rightText &&
                    <TouchableOpacity onPress={onPressRight}>
                        <View style={styles.rightContainer}>
                            <Text style={[styles.rightText, { color: iconColor }]}>{rightText}</Text>
                        </View>
                    </TouchableOpacity>}
            </View>
        )
    }
}

export default withNavigation(Header)
