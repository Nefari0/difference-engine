import { widthParameters } from "../../../global.styles"
const { enclosureWidth } = widthParameters
const totalWidth = enclosureWidth+30
const onePercent = totalWidth/100
const windowSize = window.innerWidth

// --- For saving selected screen size preferences on device, though this might not be implemtented.
export const checkDeviceSize = (setViewScale) => {
  const savedSize = localStorage.getItem('screenWidth')
    screenSizeExtraction(windowSize)
    try {
      if (savedSize === null) {
        return (setViewScale(screenSizeExtraction()))
      } else {
        return (setViewScale(parseFloat(savedSize)))
      }
      } catch (err) {console.log('here the error',err)}
    const initVal = screenSizeExtraction()
    return (setViewScale(initVal))
}

export const screenSizeExtraction = () => {
  if (windowSize > totalWidth) {
      return (parseFloat(1.0))
  } else {
    return (parseFloat((windowSize/onePercent)/100))
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
  localStorage.removeItem('screenWidth');
}