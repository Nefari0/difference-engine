import Graph from './Components/Graphs/graph.component';
import { AppContainer,Adapter,Header,ImageContainer } from './App.styles';
import Nav from './Components/Nav/nav.component';
import pic from './Components/admin_photo1.jpg'

function App() {
  return (
    <AppContainer>
      <Header>
        <Nav />
        <h1>The Difference Engine</h1>
        {/* <ImageContainer><img src={pic} /></ImageContainer> */}
      </Header>
      <Adapter>
        <Graph />
      </Adapter>
    </AppContainer>
  );
}

export default App;
