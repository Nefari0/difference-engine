import { useContext,useEffect } from "react"
import { ViewContext } from "../../../../Context/view.context"
import ToothAlignment from "./Alignment/alignment.component"
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

    const { involute,mathFunc,gearBuildingStep } = state
    const { darkmode,setScrollBar } = useContext(ViewContext)
    const z = parseFloat(mathFunc) // number of teeth
    const refDiameter = cogScale*z
    const tipDiameter = (refDiameter + (cogScale*2))
    const baseDiameter = refDiameter*.9396950000000001

    // const thicknessCircleLength = (refDiameter/2)
    const radDifference = (((refDiameter/2)-(baseDiameter/2)))*(.25)

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

    const mappedGears2 = involute.map((el,i) => {
        var locations = {
            left:`${el[0]}px`,
            bottom:`${(-15 + -el[1])}px`,
            backgroundColor: `${darkmode ? 'yellow' : 'red'}`,
            // backgroundColor: `orange`,
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
                <GearTitle darkmode={darkmode}>
                    <h1>Gear calculator</h1>
                    <a
                        href="https://www.blender.org/"
                        target="_blank"
                    >For use in Blender 3.6+</a>
                </GearTitle>
                <ShiftWrapper tipDiameter={tipDiameter}>
                    {gearBuildingStep != 'step_3' && mappedGears}

                    <ToothAlignment state={state} mappedGears2={mappedGears2} />
                    {gearBuildingStep === 'step_2' && <TipCircle tipDiameter={tipDiameter}></TipCircle>}

                    {gearBuildingStep === 'step_3' && 
                    <ReferenceCircle refDiameter={refDiameter}>
                        <div
                            style={{
                                position:'absolute',
                                height:`${3.1415926*cogScale}px`,
                                width:`${3.1415926*cogScale}px`,
                                borderTop:'solid 2px blue',
                                right:`${0}px`,
                                bottom:`${((refDiameter/2)+1)+radDifference}px`,
                                transform: `translate(50%, 50%)`
                            }}
                        >
                            {/* <div style={{position:'relative',width:'6px',height:'6px',backgroundColor:'blue',top:'0px'}}></div> */}
                        </div>
                    </ReferenceCircle>}
                    <BaseCircle mathFunc={mathFunc} baseDiameter={baseDiameter}></BaseCircle>
                </ShiftWrapper>
            </CogOrigin>
        </CogContainer>
    )
}

export default CogDisplay