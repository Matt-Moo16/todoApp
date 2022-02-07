import React, {useState} from 'react'
import { Text } from 'react-native';
import Header from './Header'
import ListItems  from './ListItems';
import InputModal from './InputModal';

const Home = () => {

    const initialTodos = [{
        title: "Get some snacks",
        date: "Fri, 08 Jan 2021 16:32:11 GMT",
        key: "1"
    }, {
        title: "Get some groceries",
        date: "Fri, 08 Jan 2021 16:32:11 GMT",
        key: "2"
    }, {
        title: "Prepare youtube script",
        date: "Fri, 08 Jan 2021 16:32:11 GMT",
        key: "3"
    }]

    const [todos, setTodos] = useState(initialTodos)
    const [modalVisible, setModalVisible] = useState(false)
    const [todoInputValue, setTodoInputValue] = useState()
    const [todoToBeEdited, setTodoToBeEdited] = useState(null)

    const handleClearTodos = () => {
        setTodos([])
    }

    const handleAddTodo = (todo) => {
        const newTodos = [...todos, todo];
        setTodos(newTodos);
        setModalVisible(false)
    }

    const handleTriggerEdit = (item) => {
        setTodoToBeEdited(item);
        setModalVisible(true);
        setTodoInputValue(item.title);

    }

    const handleEditTodo = (editedTodo) => {
        const newTodos = [...todos];
        const todoIndex = todos.findIndex((todo) => todo.key === editedTodo.key);
        newTodos.splice(todoIndex, 1, editedTodo)
        setTodos(newTodos);
        setTodoToBeEdited(null);
        setModalVisible(false);
    }

    return (
        <>
            <Header 
            handleClearTodos={handleClearTodos}
            />
            <ListItems 
            todos={todos}
            setTodos={setTodos}
            handleTriggerEdit={handleTriggerEdit}/>
            <InputModal 
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            todoInputValue={todoInputValue}
            setTodoInputValue={setTodoInputValue}
            handleAddTodo={handleAddTodo}
            handleTriggerEdit={handleTriggerEdit}
            todoToBeEdited={todoToBeEdited}
            setTodoToBeEdited={setTodoToBeEdited}
            handleEditTodo={handleEditTodo}
            todos={todos}
            />
        </>
        
    );
}

export default Home;