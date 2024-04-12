import { createContext, useState } from 'react'
export const OPEN_MEMO_NAME = "OPEN_MEMO"

export const ViewContext = createContext({
    currentView:null, // --- Currently selected view
    setCurrentView:() => null,

    displayKeymap:false, // --- Shows details about keys,
    setDisplayKeymap:() => {},

    information:null, // --- Display documentation. Except string to indicate info type.
    setInformation:() => {},

    darkmode:true, // --- Set dark and light mode.
    setDarkMode:() => {},

    about:false,
    setAbout:() => null,

    scrollSnap:true,
    setScrollSnap:() => null,

    scrollingBar:false,
    setScrollBar:() => null,

    isLoading:false,
    setIsLoading:() => null,

    showPlotValues:false,
    setShowPlotValues:() => null,


    alert:null,
    setAlert:() => null,

    zoom:null,setZoom:() => null, // Zooming into view

    openMemo:null,setOpenMemo:() => null, // Open memo pad

    openPlayer:null,setOpenPlayer:() => null,

    isOnline:null,setIsOnline:() => null,

    scrollLock:null,setScrollLock:() => null,

    viewScale:null,setViewScale:() => null, // Changing size of app

    viewPrefs:null,openViewPrefs:() => null, // Changng view settings controller

    fullscreen:null,setFullScreen:() => null
})

export const ViewProvider = ({ children }) => {
    
    const [currentView,setCurrentView] = useState(null)
    const [displayKeymap,setDisplayKeymap] = useState(false)
    const [information,setInformation] = useState(null)
    const [darkmode,setDarkMode] = useState(true)
    const [about,setAbout] = useState(false)
    const [scrollBar,setScrollBar] = useState(false)
    const [scrollSnap,setScrollSnap] = useState(true)
    const [isLoading,setIsLoading] = useState(false)
    const [showPlotValues,setShowPlotValues] = useState(false)
    const [alert,setAlert] = useState(null)
    const [zoom,setZoom] = useState(false)
    const [openMemo,setOpenMemo] = useState(false)
    const [openPlayer,setOpenPlayer] = useState(null)
    const [isOnline,setIsOnline] = useState(null)
    const [scrollLock,setScrollLock] = useState(null)
    const [viewScale,setViewScale] = useState(1)
    const [viewPrefs,openViewPrefs] = useState(false)
    const [fullscreen,setFullScreen] = useState(false)

    const memoOpener = (param) => {
        setOpenMemo(param)
        localStorage.setItem(OPEN_MEMO_NAME,param)
    }

    const value = {
        currentView,setCurrentView,
        
        displayKeymap,setDisplayKeymap,

        information,setInformation,

        darkmode,setDarkMode,

        about,setAbout,

        scrollBar,setScrollBar,

        scrollSnap,setScrollSnap,

        isLoading,setIsLoading,

        showPlotValues,setShowPlotValues,

        alert,setAlert,

        zoom,setZoom,

        openMemo,setOpenMemo,memoOpener,

        openPlayer,setOpenPlayer,

        isOnline,setIsOnline,

        scrollLock,setScrollLock,

        viewScale,setViewScale,

        viewPrefs,openViewPrefs,

        fullscreen,setFullScreen

    };
    
    return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>

}