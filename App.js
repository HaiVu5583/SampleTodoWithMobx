import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation'
import { StatusBar, View } from 'react-native'
import { routeConfig, stackNavigatorConfig } from '~/src/routes'
import { Provider as PaperProvider } from 'react-native-paper'

const RootStack = createStackNavigator(routeConfig, stackNavigatorConfig)
export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <StatusBar
                    backgroundColor="#0e5e8c"
                    barStyle="light-content"
                />
                <RootStack />
            </View>
        )
    }
}
