import { useContext,useEffect } from "react";
import { ViewContext } from "../../Context/view.context";
import Button from "../KeyPad/Button";
import { backgroundColors } from "../global.styles";

import {
  ViewSettingsPanel,
  ResetViewButton,
  AboutButton,
  DarkmodeButton,
} from "./view-settings.styles";

const { blue,red } = backgroundColors

const ViewSettings = (props) => {

    const {
      about,setAbout,

      darkmode,setDarkMode,

      setScrollLock,scrollLock,

      viewPrefs,openViewPrefs,

      fullscreen,setFullScreen

    } = useContext(ViewContext)

    useEffect(() => {getSavedViewSettings()},[])

    // --- Updates state to settings saved in the browser (if applicable)
    const getSavedViewSettings = () => {
      try {
        const savedMode = localStorage.getItem('DARKMODE')
        const fullscreen = localStorage.getItem('FULLSCREEN')
        if (savedMode) {setDarkMode(JSON.parse(savedMode))}
        if (fullscreen) {setFullScreen(JSON.parse(fullscreen))}

      } catch (error) {return}
    }

    // --- This changes the settings saved in the browser, and updates state to those settings on useEffect
    // --- Prop should be string. val is the current state/context item. setFunction updates the current state/context item
    const saveSettings = (prop,val,setFunction) => {
      localStorage.setItem(`${prop}`,!val)
      setFunction(!val)
    }

    return (
        <ViewSettingsPanel>

        <ResetViewButton
          onClick={() => openViewPrefs(!viewPrefs)}
        >
          preferences
        </ResetViewButton>

        <DarkmodeButton
          onClick={() => saveSettings('DARKMODE',darkmode,setDarkMode)}
        >
          {!darkmode ? 'dark mode' : 'light mode'}
        </DarkmodeButton>

        {/* --- OPEN ABOUT PAGE --- */}
        <AboutButton
          onClick={() => setAbout(!about)}
        >
          about
        </AboutButton>

        {/* --- SCROLLING LOCK --- */}
        <Button 
          style={{left:'105px',
          height:'30px',
          width:'100px',
          backgroundColor:`${scrollLock ? red : blue}`,
          color:'#fff',
          fontSize:'12px',
          letterSpacing:'1px',
        }}
          onClick={() => setScrollLock(!scrollLock)}
          text={scrollLock ? 'locked' : 'unlocked '}
          p={`scroll lock ${scrollLock? 'on' : 'off'}`}
        />

      </ViewSettingsPanel>
    )
}

export default ViewSettings