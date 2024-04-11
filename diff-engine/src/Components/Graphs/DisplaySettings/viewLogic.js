const windowSize = window.innerWidth

// --- For saving selected screen size preferences on device, though this might not be implemtented.
export const checkDeviceSize = (viewScale,setViewScale) => {
    const savedSize = localStorage.getItem('screenWidth')
    screenSizeExtraction(windowSize)
    try {
      if (savedSize === null) {
        return (setViewScale(screenSizeExtraction()))
      } else {
        return (setViewScale(parseFloat(savedSize)))
      }
      } catch (err) {console.log('here the error',err)}
    const initVal = screenSizeExtraction(windowSize)
    return (setViewScale(initVal))
}

export const screenSizeExtraction = () => {
    if (windowSize > 620) {
        return (parseFloat(1.0))
    } else if (windowSize < 620 && windowSize > 400) {
        return (parseFloat(.7))
    } else if (windowSize <= 400) {
        return (parseFloat(.5))
    }
}


export const changeSize = (e,viewScale,size,setViewScale) => {
    
    var newVal = () => {

      return (
        setViewScale(viewScale+size),
        localStorage.setItem('screenWidth',parseFloat(viewScale)+size)
      )
    }

    if (viewScale+size < 1 && viewScale+size > .5) {
      newVal()
    }
}

export const verticalTranslation = (e,size,state,execute) => {

  const { verticalAdjustment } = state

  return (
    execute(e,'verticalAdjustment',verticalAdjustment-size)
    // localStorage.setItem('verticalAdjustment',verticalAdjustment) 
  )
}

export const resetSize = (setViewScale) => {
  setViewScale(.5)
  localStorage.setItem('screenWidth',.5)
}