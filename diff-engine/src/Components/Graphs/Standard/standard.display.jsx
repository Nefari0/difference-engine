import { Standard,History,HistoryItem } from "./standard.styles"
import { MathComponent } from "mathjax-react"
import { TinyButton } from "../KeyPad/keypad.styles"

const clearHistButton = {
    position:'absolute',
    right:'0px',
    top:'10px',
    zIndex:'1'
}

const StandarMathDisplay = ({state,execute,setState}) => {

    const { calculation,history } = state

    const copy = () => {
        navigator.clipboard.writeText(calculation)
        setState({
            ...state,
            alert:`${calculation} copied to clipboard`
        })
    }

    const mappedHistory = history.map((el,i) => {
        return <HistoryItem key={i} onClick={(e) => execute(e,'mathFunc',el[1].toString())}>{el[0] + ' = ' + el[1]}</HistoryItem>
    })

    return(
        <>
            <History>
                <TinyButton
                    onClick={(e) => execute(e,'history',[])}
                    style={clearHistButton}
                >
                    Clear history
                </TinyButton>
                {mappedHistory}
            </History>

            <Standard>

                {calculation && <MathComponent tex={String.raw`${calculation}`} />}

                <TinyButton
                    onClick={() => copy()}
                    style={{right:'6px',top:'7px'}}
                >
                    copy
                </TinyButton>

            </Standard>
        </>
    )
}

export default StandarMathDisplay