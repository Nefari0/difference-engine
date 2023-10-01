import { ViewContext } from "../../../Context/view.context"
import { useContext,useEffect } from "react"
import { Standard,History,HistoryItem } from "./standard.styles"
import { MathComponent } from "mathjax-react"
import Button from "../../KeyPad/Button"

const clearHistButton = {
    position:'absolute',
    right:'0px',
    top:'10px',
    zIndex:'1',
    fontSize:'12px'
}

const StandarMathDisplay = ({state,execute,setState}) => {

    const { calculation,history } = state
    const { darkmode,setScrollBar } = useContext(ViewContext)

    useEffect(() => {setScrollBar(false)},[])

    const copy = () => {
        navigator.clipboard.writeText(calculation)
        setState({
            ...state,
            noticeContent:`${calculation} copied to clipboard`
        })
    }

    const mappedHistory = history.map((el,i) => {
        return <HistoryItem key={i} darkmode={darkmode} onClick={(e) => execute(e,'mathFunc',el[1].toString())}>{el[0] + ' = ' + el[1]}</HistoryItem>
    })

    return(
        <>
            <History darkmode={darkmode}>
                <Button
                    styles={clearHistButton}
                    onClick={(e) => execute(e,'history',[])}
                    text={'Clear history'}
                    buttonClass={'tiny'}
                />
                {mappedHistory}
            </History>

            <Standard darkmode={darkmode}>

                {calculation && <MathComponent tex={String.raw`${calculation}`} />}

                <Button
                    text={'copy'}
                    buttonClass={'tiny'}
                    styles={{right:'6px',top:'7px'}}
                    onClick={() => copy()}
                />

            </Standard>
        </>
    )
}

export default StandarMathDisplay