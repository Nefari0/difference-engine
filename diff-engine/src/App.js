import Graph from './Components/Graphs/graph.component';
import { AppContainer,Adapter,Header,Footer } from './App.styles';
import { useBooleanState } from 'webrix/hooks';
import Nav from './Components/Nav/nav.component';
import { ViewContext } from './Components/Context/view.context';
import { useContext,useEffect } from 'react';
import { OPEN_MEMO_NAME } from './Components/Context/view.context';

function App() {

  const { 
    darkmode,

    openMemo,setOpenMemo,

    setIsOnline
  } = useContext(ViewContext)

  const { value: online, setFalse: setOffline, setTrue: setOnline } = useBooleanState(navigator.onLine);
  // const OPEN_MEMO = localStorage.getItem(OPEN_MEMO_NAME)
  // const boolState = () => {return(OPEN_MEMO === 'true' ? true : false)}

  useEffect(() => {

    window.addEventListener('online', setOnline);
    window.addEventListener('offline', setOffline);
    setIsOnline(online)

    return () => {
      window.removeEventListener('online', setOnline);
      window.removeEventListener('offline', setOffline);
    };

  },[online])

  // if (appUpdate) {
  //   setAlert('A new version of this app is available. To download the latest updates, close all browser tabs and re-open this sited in new browser session')
  //   appUpdateAvailable(false)
  // }

  return (
    <AppContainer darkmode={darkmode}>

      <Header darkmode={darkmode}>
        <h1>The Difference Engine</h1>
      </Header>

      <Adapter>
        <Graph />
      </Adapter>

      <Footer>
        <Nav />
      </Footer>

    </AppContainer>
  );
}

export default App;
