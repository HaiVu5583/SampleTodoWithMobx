import TodoList from '~/src/containers/TodoList'
import TodoDetail from '~/src/containers/TodoDetail'
import SplashScreen from '~/src/containers/SplashScreen'

export const routeConfig = {
    SplashScreen,
    TodoList,
    TodoDetail: {
        screen: TodoDetail,
    }
}

export const stackNavigatorConfig = {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}