

export const getAllTodos = async () => {
    const { todos } = await fetch('https://dummyjson.com/todos').then(res => res.json())
    return todos
}   