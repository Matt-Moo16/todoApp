import { StatusBar } from 'expo-status-bar';
import { Container } from './Styles/appStyles';
import Home from './Components/Home'

export default function App() {
  return (
    <Container>
      <Home />
      <StatusBar style="light" />
    </Container>
  );
}


