import React, { PureComponent } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { View, TouchableOpacity, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

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
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                height: 56
            }}>
                <TouchableOpacity onPress={this._handlePressIconLeft}>
                    <View style={{ paddingLeft: 24, paddingRight: 32 }}>
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
                        <View style={{ paddingLeft: 24, paddingRight: 16 }}>
                            <Text style={{ fontSize: 16, color: iconColor }}>{rightText}</Text>
                        </View>
                    </TouchableOpacity>}
            </View>
        )
    }
}

export default withNavigation(Header)
