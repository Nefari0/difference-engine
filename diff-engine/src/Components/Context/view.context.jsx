import { createContext, useState, useEffect } from 'react'

export const ViewContext = createContext({
    currentView:null,
    setCurrentView:() => null   
})

export const ViewProvider = ({ children }) => {
    
    const [currentView,setCurrentView] = useState(null)
    
    const value = {currentView,setCurrentView};
    
    return <ViewContext.Provider value={value}>{children}</ViewContext.Provider>

}