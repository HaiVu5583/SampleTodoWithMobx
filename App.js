import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'
import { routeConfig, stackNavigatorConfig } from '~/src/routes'

const RootStack = createStackNavigator(routeConfig, stackNavigatorConfig)
export default class App extends Component {
    render() {
        return (
            <RootStack />
        )
    }
}
