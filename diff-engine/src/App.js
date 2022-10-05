import Graph from './Components/Graphs/graph.component';
import { AppContainer,Adapter } from './App.styles';

function App() {
  return (
    <AppContainer>
      <Adapter>
        <Graph />
      </Adapter>
    </AppContainer>
  );
}

export default App;
