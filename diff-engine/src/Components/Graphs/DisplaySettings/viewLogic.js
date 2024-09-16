import { widthParameters } from "../../../global.styles"
const { enclosureWidth,enclosureHeight } = widthParameters
const totalWidth = enclosureWidth+30
const widthOnePercent = totalWidth/100
const totalHeight = enclosureHeight+30
const heightOnePercent = totalHeight/100
const windowWidth = window.innerWidth
const windowHeight = window.innerHeight

// --- For saving selected screen size preferences on device, though this might not be implemtented.
export const checkDeviceSize = (setViewScale) => {
  const savedSize = localStorage.getItem('screenWidth')
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
  const widthScale = parseFloat((windowWidth/widthOnePercent)/100)
  const heightScale = parseFloat((windowHeight/heightOnePercent)/100)
  if (windowWidth > totalWidth && windowHeight > totalHeight) {
      return (parseFloat(1.0))
  } else {
    if (windowHeight < totalHeight && windowWidth > totalWidth) {
      return (parseFloat(1*heightScale))
    } else {
      return (parseFloat(widthScale))

    }
  }
}

export const changeSize = (e,viewScale,size,setViewScale) => {
    var newVal = () => {

      return (
        setViewScale(viewScale+size),
        localStorage.setItem('screenWidth',parseFloat(viewScale)+size)
      )
    }

    if (viewScale+size < 1 && viewScale+size > .2) {
      newVal()
    }
}

export const verticalTranslation = (e,size,state,execute) => {

  const { verticalAdjustment } = state

  return (
    execute(e,'verticalAdjustment',verticalAdjustment-size)
  )
}

export const resetSize = (setViewScale,value) => {
  setViewScale(value)
  localStorage.removeItem('screenWidth');
}