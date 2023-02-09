import { useContext } from "react"
import { ViewContext } from "../../Context/view.context"
import { backgroundColors } from "../global.styles"


import { 
    CogOrigin,
    CogContainer,
    ReferenceCircle,
    TipCircle
} from "./involute.styles"

const { paper,dark } = backgroundColors

const CogDisplay = ({state}) => {

    const { refRadius,involute,mathFunc } = state

    const { darkmode } = useContext(ViewContext)

    const mappedGears = involute.map((el,i) => {
          var locations = {
            // top: `${-el[1]}px`,
            // right: `${-el[0]}px`,
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
        <CogContainer>
            <h1 
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
                    textDecoration:'none'
                }}
            >
                For use in Blender 2.8 + 
            </a>

            <a
                href="https://jupyter.madmodels3d.com/blog/3d%20Modeling%20&%20Printing/Involute%20Gear%20Calculator"
                target="_blank"
                style={{
                    position:'absolute',
                    top:'350px',
                    fontSize:'20px',
                    zIndex:'2',
                    textDecoration:'none'
                }}
            >
                (how to build your gear)
            </a>

            {/* --- STILL UNDER DEVELOPEMENT --- */}
            {/* <TipCircle mathFunc={mathFunc}>
                <ReferenceCircle mathFunc={mathFunc}>
                    <CogOrigin mathFunc={mathFunc}>
                            {mappedGears}
                    </CogOrigin>
                </ReferenceCircle>
            </TipCircle> */}
            {/* -------------------------------- */}
        </CogContainer>
    )
}

export default CogDisplay