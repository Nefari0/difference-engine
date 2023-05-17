import styled from "styled-components";

const scale = 200

// export const ToothWidthContainer = styled.section`
//     position:absolute;
//     font-size:20px;
//     bottom:40px;
//     width:40%;
//     height:40%;
//     background-color:#fff;
//     border: solid 1px;
//     border-radius:5px;
//     z-index:1;

//     p {
//         font-size:40px;
//     }
// `

export const CogContainer = styled.div`
    position:relative;
    top:-215px;
    left:-200px;
    right:400px;
    height:400px;
    width:400px;
    display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: center;
	align-items: center;
	align-content: stretch;
    // background-color:green;

    h1 {
        font-family: 'Silkscreen', cursive;
        font-weight:400;
    }

    a {color:blue;}
`

export const ReferenceCircle = styled.div`
    // position:relative;
    position:absolute;
    width: ${({mathFunc}) => (mathFunc)}px;
    height: ${({mathFunc}) => (mathFunc)}px;
    left:${({mathFunc}) => -mathFunc/2}px;
    top:${({mathFunc}) => -mathFunc/2}px;
    // border: solid;
    border: solid .5px;
    border-radius:50%;
    // margin-left:auto;
    // margin-right:auto;
    // margin-top:${scale-180}px;
`

export const BaseCircle = styled(ReferenceCircle)

export const TipCircle = styled.div`
    // position:relative;
    position:absolute;
    background-color:purple;
    width: ${({mathFunc}) => 25+(mathFunc*2)}px;
    height: ${({mathFunc}) => 25+(mathFunc*2)}px;
    left: ${({mathFunc}) => -25-(mathFunc)/2}px;
    // left:-20px;
    border: solid .5px;
    border-radius:50%;
    margin:auto;
    `
    // transform: scale(2.60);

export const CogOrigin = styled.div`
    height:1px;
    width:1px;
    z-index:1000;
    background-color:blue;
    border-radius:50%;
    // right:${1*.9396950000000001}px;
    // top:50%;
    // top:30%;
    position:absolute;
    // transform: rotate(30deg);
`