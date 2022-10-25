import { Standard,History,HistoryItem } from "./standard.styles"
import { MathComponent } from "mathjax-react"
import { TinyButton } from "../KeyPad/keypad.styles"
import { useState } from "react"

const clearHistButton = {
    position:'absolute',
    left:'250px',
    top:'10px',
    zIndex:'1'
}

const StandarMathDisplay = ({state,execute}) => {

    const { calculation,history,mathFunc } = state

    const mappedHistory = history.map((el,i) => {
        return <HistoryItem key={i} onClick={(e) => execute(e,'mathFunc',el[1].toString())}>{el[0] + ' = ' + el[1]}</HistoryItem>
    })

    return(
        <>

            <TinyButton
                onClick={(e) => execute(e,'history',[])}
                style={clearHistButton}
            >
                Clear history
            </TinyButton>

            <History>{mappedHistory}</History>
            <Standard>

                {calculation && <MathComponent tex={String.raw`${calculation}`} />}

                <TinyButton
                    // onClick={copy}
                    onClick={() => {navigator.clipboard.writeText(calculation)}}
                    style={{right:'6px',top:'7px'}}
                >
                    copy
                </TinyButton>

            </Standard>
        </>
    )
}

export default StandarMathDisplay