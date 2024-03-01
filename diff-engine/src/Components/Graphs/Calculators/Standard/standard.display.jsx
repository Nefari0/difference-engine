import { dataTypes } from "../../data-types"
import { ViewContext } from "../../../Context/view.context"
import { useContext,useEffect } from "react"
import { Standard,History,HistoryItem,StandardToolbar } from "./standard.styles"
import { MathComponent } from "mathjax-react"
import Button from "../../KeyPad/Button"
import { useState } from "react"
import { baseNumbers } from "./baseNumbers.data"

const { DIFF_ENGINE_HISTORY } = dataTypes
const clearHistButton = {
    position:'fixed',
    right:'0px',
    top:'10px',
    zIndex:'1',
    fontSize:'12px'
}

const StandarMathDisplay = ({state,execute,setState}) => {

    const [ localState, setLocalState ] = useState({
        view:'history',
        baseTypeSelected:'Decimal'
    });

    const { view,baseTypeSelected } = localState;
    const { calculation,history,mathFunc } = state;
    const { darkmode,setScrollBar } = useContext(ViewContext);
    const savedHistory = localStorage.getItem(DIFF_ENGINE_HISTORY);

    useEffect(() => {
        setScrollBar(false)
        baseNumbers[0].function(calculation)
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

    function factorInts() {
        var longestArrayLength = 5000000;
        var base = calculation
        if (calculation <= 1) {base = base*-1} 
        return (base < longestArrayLength ? Array.from(Array(parseInt(base)), (x, i) => i + 1).filter((el,i) => base % el === 0) : ['Value cannot be factored'])
    }

    const mappedIntegers = factorInts().map((el,i) => {
        return <HistoryItem key={i} darkmode={darkmode}>{el}</HistoryItem>
    })

    
    const mappedHistory = history.map((el,i) => {
        return <HistoryItem key={i} darkmode={darkmode} onClick={(e) => execute(e,'mathFunc',mathFunc+el[1].toString())}>{el[0] + ' = ' + el[1]}</HistoryItem>
    })

    // --- Base numbers --- //
    const mappedBaseNumbers = baseNumbers.map((el,i) => {
        return (baseTypeSelected != el.type && <HistoryItem key={i}>{el.type + ` value: ${el.function(calculation)}`}</HistoryItem>)
    })

    const baseNumberSelectionButtons = baseNumbers.map((el,i) => {
        return (
         <Button
            key={i}
            text={`${el.type}`}
            styles={{position:'relative',margin:'2px'}}
            buttonClass={'tiny'}
            selected={baseTypeSelected === el.type}
            buttonType={'textage'}
            onClick={() => setLocalState({...localState,baseTypeSelected:el.type})}
        />
        )
    })
    // --------------- //


    return(
        <>
            <History darkmode={darkmode}>

                <aside>
                {view === 'history' && 
                <Button
                    styles={clearHistButton}
                    onClick={(e) => clearHistory(e)}
                    text={'Clear history'}
                    buttonClass={'tiny'}
                />}
                {
                    view === 'base' &&
                    baseNumberSelectionButtons
                }
                </aside>

                {view === 'history' && mappedHistory}
                {view === 'factors' && mappedIntegers}
                {view === 'base' && mappedBaseNumbers}

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

            <StandardToolbar darkmode={darkmode}>
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

                <Button 
                    text={'base'}
                    buttonClass={'translucent'}
                    selected={view === 'base'}
                    onClick={() => setLocalState({...localState,view:'base'})}
                />
            </StandardToolbar>
        </>
    )
}

export default StandarMathDisplay