import { useContext,useEffect } from "react"
import { ViewContext } from "../../../../Context/view.context"
import { 
    CogOrigin,
    CogContainer,
    ReferenceCircle,
    TipCircle,
    BaseCircle,
    ShiftWrapper,
    GearTitle
} from "./display.styles"
export const cogScale = 40

const CogDisplay = ({state}) => {

    const { involute,mathFunc } = state
    const { darkmode,setScrollBar } = useContext(ViewContext)
    const z = parseFloat(mathFunc) // number of teeth
    const refDiameter = cogScale*z
    const tipDiameter = (refDiameter + (cogScale*2))
    const baseDiameter = refDiameter*.9396950000000001

    useEffect(() => {setScrollBar(false)},[])

    const mappedGears = involute.map((el,i) => {
          var locations = {
            left:`${el[0]}px`,
            bottom:`${(-15 + el[1])}px`,
            backgroundColor: `${darkmode ? 'yellow' : 'red'}`,
            position: "absolute",
            transition: "all 1000ms",
            width: "3px",
            height: "3px",
            borderRadius:'50%'
          };
          return <p style={locations} key={i}></p>;
      })
    
    
    return(
        <CogContainer darkmode={darkmode}>
            <CogOrigin mathFunc={mathFunc}>
            <GearTitle darkmode={darkmode}>Gear calculator</GearTitle>
                <ShiftWrapper tipDiameter={tipDiameter}>
                {mappedGears}
                <TipCircle tipDiameter={tipDiameter}></TipCircle>
                <ReferenceCircle refDiameter={refDiameter}></ReferenceCircle>
                <BaseCircle mathFunc={mathFunc} baseDiameter={baseDiameter}></BaseCircle>
                </ShiftWrapper>
            </CogOrigin>
        </CogContainer>
    )
}

export default CogDisplay