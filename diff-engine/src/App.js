import Graph from './Components/Graphs/graph.component';
import { AppContainer,Adapter,Header,ImageContainer } from './App.styles';
import Nav from './Components/Nav/nav.component';
import pic from './Components/admin_photo1.jpg'
import { ViewContext } from './Components/Context/view.context';
import { useContext } from 'react';

function App() {

  const { 
    setCurrentView,

    darkmode,setDarkMode
  } = useContext(ViewContext)

  return (
    <AppContainer darkmode={darkmode}>
      <Header darkmode={darkmode}>
        <Nav />
        <h1 onClick={() => setCurrentView(null)}>The Difference Engine</h1>
        {/* <ImageContainer><img src={pic} /></ImageContainer> */}
      </Header>
      <Adapter>
        <Graph />
      </Adapter>
    </AppContainer>
  );
}

export default App;
