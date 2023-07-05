import { widthParameters } from "../global.styles"

const {
  // enclosureHeight,
  enclosureWidth,
  enclosurePadding,
  // maxWidth,
  // widthPercent
  setState,
  state
} = widthParameters
const windowSize = window.innerWidth

// --- For saving selected screen size preferences on device, though this might not be implemtented.
export const checkDeviceSize = (state,setState) => {
    const savedSize = localStorage.getItem('screenWidth')
    screenSizeExtraction(windowSize)
    try {
      if (savedSize === null) {
        return (screenSizeExtraction())
      } else {
        return (parseFloat(savedSize))
      }
      } catch (err) {console.log('here the error',err)}
    const initVal = screenSizeExtraction(windowSize)
    return (setState({...state,viewScale:initVal}))
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


export const changeSize = (e,size,state,execute) => {

    const { viewScale } = state

    const maxWidth = (enclosureWidth+(enclosurePadding*4))*viewScale // Generated width
    
    var newVal = () => {

      return (
        execute(e,'viewScale',viewScale+size),
        localStorage.setItem('screenWidth',viewScale)
      )
    }
    
    // return (viewScale >= .1 && viewScale <= 1.0 ? newVal() : null)
    // --- Add width:
    if (size-.01 === 0 && windowSize > maxWidth && viewScale < 1) {
      newVal()
      // --- Subtract width
    } else if (size-.01 === -.02 && viewScale > .51) {
      newVal()
    }
    // return (size-.01 === 0 && viewScale < 1 || size-.01 === -.02 && viewScale >.51 ? newVal() : null)
}

export const verticalTranslation = (e,size,state,execute) => {

  const { verticalAdjustment } = state

  return (
    execute(e,'verticalAdjustment',verticalAdjustment-size)
    // localStorage.setItem('verticalAdjustment',verticalAdjustment) 
  )
}

export const resetSize = (e,execute) => {
  execute(e,'viewScale',.5)
  localStorage.setItem('screenWidth',.5)
}