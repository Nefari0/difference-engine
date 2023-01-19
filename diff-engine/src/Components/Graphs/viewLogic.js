const windowSize = window.innerWidth

export const checkDeviceSize = () => {
    const size = localStorage.getItem('screenWidth')
    screenSizeExtraction(windowSize)
    try {if (size === 'null' || size === undefined) {
        return (screenSizeExtraction())
      } else {
        return (parseFloat(size))
      }
      } catch (err) {console.log('here the error',err)}
}

export const screenSizeExtraction = () => {
    if (windowSize > 620) {
        return (parseFloat(1))
    } else if (windowSize < 620 && windowSize > 400) {
        return (parseFloat(.7))
    } else if (windowSize <= 400) {
        return (parseFloat(.5))
    }
}


export const changeSize = (e,size,state,execute) => {

    // const viewScale = parseFloat(state.viewScale.toString().substring(0,3))
    const addition = state.viewScale+size
    const viewScale = parseFloat('.'+addition.toString().split('.')[1])
    const newSizeStr = size.toString().split('.')[1]

    var newVal = () => {
      return (
        execute(e,'viewScale',viewScale),
        localStorage.setItem('screenWidth',viewScale)
      )
    }
    return (size-.1 === 0 && viewScale <= .7 || size-.1 === -.2 && viewScale >=.3 ? newVal() : null)
}