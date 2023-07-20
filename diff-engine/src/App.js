import Graph from './Components/Graphs/graph.component';
import { AppContainer,Adapter,Header,ImageContainer } from './App.styles';
import Nav from './Components/Nav/nav.component';
import MemoPad from './Components/Graphs/Memos/memo.component';
// import pic from './Components/admin_photo1.jpg'
import { ViewContext } from './Components/Context/view.context';
import { useContext,useEffect } from 'react';
import { OPEN_MEMO_NAME } from './Components/Context/view.context';

function App() {

  const { 
    setCurrentView,

    darkmode,

    openMemo,setOpenMemo
  } = useContext(ViewContext)

  const OPEN_MEMO = localStorage.getItem(OPEN_MEMO_NAME)
  // const boolState = () => {return(OPEN_MEMO === 'true' ? true : false)}

  useEffect(() => {
    try {
      if(!OPEN_MEMO) {
        localStorage.setItem(OPEN_MEMO_NAME,false)
      } else {setOpenMemo(OPEN_MEMO === 'true')}
    } catch (error) {return}
  },[])

  // console.log('when app is loaded, it should display appUpdate as a boolean value',appUpdate)

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
      {openMemo && <MemoPad />}
      <Adapter>
        <Graph />
      </Adapter>
    </AppContainer>
  );
}

export default App;
