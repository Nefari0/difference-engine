// import styled from "styled-components"
import { Standard,History,HistoryItem } from "./standard.styles"
import { MathComponent } from "mathjax-react"

const StandarMathDisplay = ({state,execute}) => {

    const { calculation,history } = state

    const mappedHistory = history.map((el,i) => {
        return <HistoryItem key={i} onClick={(e) => execute(e,'mathFunc',el[1].toString())}>{el[0] + ' = ' + el[1]}</HistoryItem>
    })
    
    return(
        <>
            <History>{mappedHistory}</History>
            <Standard>
                {calculation && <MathComponent tex={String.raw`${calculation}`} />}
            </Standard>
        </>
    )
}

export default StandarMathDisplay