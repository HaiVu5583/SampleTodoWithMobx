import TodoList from '~/src/containers/TodoList'
import TodoDetail from '~/src/containers/TodoDetail'

export const routeConfig = {
    TodoList,
    TodoDetail: {
        screen: TodoDetail,
    }
}

export const stackNavigatorConfig = {
    initialRouteName: 'TodoList',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    }
}