import { useContext,useEffect } from "react"
import { ViewContext } from "../../../Context/view.context"
import { backgroundColors } from "../../global.styles"


import { 
    CogOrigin,
    CogContainer,
    ReferenceCircle,
    TipCircle,
    BaseCircle
} from "./involute.styles"

const { paper,dark } = backgroundColors

const CogDisplay = ({state}) => {

    const { involute,mathFunc } = state
    const { darkmode,setScrollBar } = useContext(ViewContext)

        // number of teeth
    const z = mathFunc
    // ref
    const refDiameter = z
    const refRadius = refDiameter/2
    // tip
    const tipDiameter = refDiameter + 2 
    const tipRadi = tipDiameter/2
    // base
    const baseDiameter = refDiameter*.9396950000000001
    const baseCircle = baseDiameter*3.1415926
    // console.log('base',baseCircle)
    // console.log('tip',tipDiameter)

    useEffect(() => {setScrollBar(false)},[])

    // --- UNDER CONSTRUCTION --- //
    const mappedGears = involute.map((el,i) => {
          var locations = {
            top: `${-el[1]}px`,
            right: `${-el[0]}px`,
            top: `${(-10-el[1])}px`,
            right: `${6*(-el[0])}px`,
            backgroundColor: `red`,
            position: "absolute",
            transition: "all 1000ms",
            width: ".5px",
            height: ".5px",
            borderRadius:'50%'
          };
          return <p style={locations} key={i}></p>;
      })
    
    return(
        <CogContainer darkmode={darkmode}>
                {/* <h1 
                style={{
                    fontSize:'30px',
                    backgroundColor:`${darkmode?dark:paper}`,
                    color:`${!darkmode?'black':'white'}`
                    }}
                >
                    Involute gear calculator
                </h1>
            <a
                href="https://www.blender.org/"
                target="_blank"
                style={{
                    position:'absolute',
                    top:'250px',fontSize:
                    '30px',zIndex:'2',
                }}
            >
                For use in Blender 2.8 + 
            </a>

            <a
                href="https://jupyter.madmodels3d.com/Involute%20Gear%20Calculator"
                target="_blank"
                style={{
                    position:'absolute',
                    top:'350px',
                    fontSize:'20px',
                    zIndex:'2',
                }}
            >
                (how to build your gear)
            </a> */}

            {/* --- STILL UNDER DEVELOPEMENT --- */}
            <CogOrigin mathFunc={mathFunc}>
                            {/* {mappedGears} */}
                    <TipCircle tipDiameter={tipDiameter}>
                        {/* <ReferenceCircle mathFunc={mathFunc}>
                        </ReferenceCircle> */}
                    </TipCircle>
                <BaseCircle mathFunc={mathFunc} baseCircle={baseCircle}>
                </BaseCircle>
            </CogOrigin>
            {/* -------------------------------- */}
        </CogContainer>
    )
}

export default CogDisplay