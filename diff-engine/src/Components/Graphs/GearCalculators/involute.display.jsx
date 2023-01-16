import { 
    CogOrigin,
    CogContainer,
    ReferenceCircle,
    TipCircle
} from "./involute.styles"


const CogDisplay = ({state}) => {

    const { refRadius,involute,mathFunc } = state

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
            <h1 style={{fontSize:'30px',backgroundColor:'white'}}>Involute gear calculator</h1>
            <a
                href="https://www.blender.org/"
                target="_blank"
                style={{position:'absolute',top:'250px',fontSize:'30px',zIndex:'2'}}
            >
                For use in Blender 2.8 + 
            </a>
            <TipCircle mathFunc={mathFunc}>
                <ReferenceCircle mathFunc={mathFunc}>
                    <CogOrigin mathFunc={mathFunc}>
                            {mappedGears}
                    </CogOrigin>
                </ReferenceCircle>
            </TipCircle>
        </CogContainer>
    )
}

export default CogDisplay