export default {
    todoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        minHeight: 70,
        borderBottomWidth: 1,
        borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    },
    textTodoActive: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.85)',
        flex: 1,
    },
    textTodoDone: {
        fontSize: 16,
        color: 'rgba(0, 0, 0, 0.3)',
        textDecorationLine: 'line-through',
        fontStyle: 'italic',
        flex: 1,
    }
}