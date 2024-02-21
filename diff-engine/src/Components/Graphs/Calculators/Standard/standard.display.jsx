import { dataTypes } from "../../data-types"
import { ViewContext } from "../../../Context/view.context"
import { useContext,useEffect } from "react"
import { Standard,History,HistoryItem,StandardToolbar } from "./standard.styles"
import { MathComponent } from "mathjax-react"
import Button from "../../KeyPad/Button"
import { useState } from "react"
// import { StandardToolbar } from "./toolbar.styles"

const { DIFF_ENGINE_HISTORY } = dataTypes
const clearHistButton = {
    position:'fixed',
    right:'0px',
    top:'10px',
    zIndex:'1',
    fontSize:'12px'
}

const StandarMathDisplay = ({state,execute,setState}) => {

    const [ localState, setLocalState ] = useState({view:'history'})
    const { view } = localState
    const { calculation,history,mathFunc } = state
    const { darkmode,setScrollBar } = useContext(ViewContext)
    const savedHistory = localStorage.getItem(DIFF_ENGINE_HISTORY)

    useEffect(() => {
        setScrollBar(false)
        var historyArray = []
        try {
            if (!savedHistory) {
                localStorage.setItem(DIFF_ENGINE_HISTORY ,[])
            } else {
                historyArray = JSON.parse(savedHistory)
            }
        } catch (error) {
            return(null)
        }
        setState({
            ...state, 
            history:historyArray,
            mathFunc:``,
            polars:false,
        })
    },[])

    function copy() {
        navigator.clipboard.writeText(calculation)
        setState({
            ...state,
            noticeContent:`${calculation} copied to clipboard`
        })
    }

    function clearHistory(e) {
        localStorage.setItem(DIFF_ENGINE_HISTORY,[])
        execute(e,'history',[])
    }

    const longestArrayLength = 5000000;
    const factorInts = calculation < longestArrayLength ? Array.from(Array(parseInt(calculation)), (x, i) => i + 1).filter((el,i) => calculation % el === 0) : ['Value too large to compute']

    const mappedIntegers = factorInts.map((el,i) => {
        return <HistoryItem key={i} darkmode={darkmode} onClick={(e) => execute(e,'mathFunc',mathFunc+el[1].toString())}>{el}</HistoryItem>
    })

    const mappedHistory = history.map((el,i) => {
        return <HistoryItem key={i} darkmode={darkmode} onClick={(e) => execute(e,'mathFunc',mathFunc+el[1].toString())}>{el[0] + ' = ' + el[1]}</HistoryItem>
    })


    return(
        <>
            <History darkmode={darkmode}>
                <Button
                    styles={clearHistButton}
                    onClick={(e) => clearHistory(e)}
                    text={'Clear history'}
                    buttonClass={'tiny'}
                />
                {view === 'history' && mappedHistory}
                {view === 'factors' && mappedIntegers}
            </History>

            <Standard darkmode={darkmode}>

                {calculation && <MathComponent tex={String.raw`${calculation}`} />}


                <Button
                    text={'copy'}
                    buttonClass={'tiny'}
                    styles={{right:'6px',top:'17px'}}
                    onClick={() => copy()}
                />

            </Standard>

            <StandardToolbar>
                <Button 
                    text={'factors'}
                    buttonClass={'translucent'}
                    selected={view === 'factors'}
                    onClick={() => setLocalState({...localState,view:'factors'})}
                />

                <Button 
                    text={'history'}
                    buttonClass={'translucent'}
                    selected={view === 'history'}
                    onClick={() => setLocalState({...localState,view:'history'})}
                />
            </StandardToolbar>
        </>
    )
}

export default StandarMathDisplay