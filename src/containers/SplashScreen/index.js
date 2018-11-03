import React, { Component } from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { StackActions, NavigationActions } from 'react-navigation'

export default class SplashScreen extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        setTimeout(() => {
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'TodoList' })],
            });
            this.props.navigation.dispatch(resetAction);
        }, 1200)
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                <Icon name={'format-list-checks'} size={100} color={'#158ad0'} />
            </View>
        )
    }

}
