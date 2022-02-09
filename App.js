import React, {useState} from 'react'
import { StatusBar } from 'expo-status-bar';
import { Container } from './Styles/appStyles';
import Home from './Components/Home'
import AppLoading from 'expo-app-loading'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function App() {
  const initialTodos = [];

  const [ready, setReady] = useState(false);
  const [todos, setTodos] = useState(initialTodos);


  const loadTodos = () => {
    AsyncStorage.getItem('storedTodos').then(data => {
      if (data != null) {
        setTodos(JSON.parse(data))
      }
    }).catch((error) => console.log(error))
  }

  if (!ready) {
    return (
      <AppLoading 
        startAsync={loadTodos}
        onFinish={() => setReady(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <Container>
      <Home todos={todos} setTodos={setTodos}/>
      <StatusBar style="light" />
    </Container>
  );
}


