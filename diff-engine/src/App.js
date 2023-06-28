import Graph from './Components/Graphs/graph.component';
import { AppContainer,Adapter,Header,ImageContainer } from './App.styles';
import Nav from './Components/Nav/nav.component';
// import pic from './Components/admin_photo1.jpg'
import { ViewContext } from './Components/Context/view.context';
import { useContext } from 'react';

function App({appUpdate,appUpdateAvailable}) {

  const { 
    setCurrentView,

    darkmode,setDarkMode,

    setAlert,
  } = useContext(ViewContext)

  console.log('when app is loaded, it should display appUpdate as a boolean value',appUpdate)

  // if (appUpdate) {
  //   setAlert('A new version of this app is available. To download the latest updates, close all browser tabs and re-open this sited in new browser session')
  //   appUpdateAvailable(false)
  // }

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
