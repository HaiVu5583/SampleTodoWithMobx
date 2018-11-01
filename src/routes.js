import TodoList from '~/src/containers/TodoList'

export const routeConfig = {
    TodoList,
}

export const stackNavigatorConfig = {
    initialRouteName: 'TodoList',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}