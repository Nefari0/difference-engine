import { KeyBox } from "../../KeyPad/input.styles";
import { backButton,ExecuteButton } from "../../SVG";
import Button from "../../KeyPad/Button";
import InputField from "../../KeyPad/InputField";
import { useEffect,useContext,useState } from "react";
import { ViewContext } from "../../../Context/view.context";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { cogScale } from "./involute.display";

const CogKeys = (props) => {

    const {state,
        setState,
        inputHandler,
        close
    } = props
    const { mathFunc,uMax } = state
    const {darkmode,setAlert} = useContext(ViewContext)

    useEffect(() => {
        // gears()
        setState({
            ...state,
            mathFunc:`40`,
            displayInput:false,
            polars:true,
        })
    },[])

    const z = mathFunc;
    const ref_dia1 = z; // reference diameter
    const ref_radi = ref_dia1 / 2;
    const tip_dia1 = ref_dia1 + 2;
    const tip_radi = tip_dia1 / 2;
    const base_dia1 = ref_dia1 * 0.9396950000000001;
    const base_circ = base_dia1 * 3.1415926;

    const base_radi = base_dia1 / 2;
    const root_diameter = ref_dia1 - 2.5;
    const root_radi = root_diameter / 2;

    const gears = (increment) => {
        const u1 = [];
        const uMin = 0;
        // const uMax = 30;
        const newUMaxValue = uMax+increment
        const uStep = 50;
        for (let i = uMin; i < newUMaxValue; i++) {
        u1.push(i / uStep);
        }

    
        var invCoords = []
        const xVector = [];
        const yVector = [];

        u1.forEach((el, i) => {
            xVector.push(cogScale*((base_dia1 / 2) * (Math.cos(u1[i]) + u1[i] * Math.sin(u1[i]))));
            yVector.push(cogScale*((base_dia1 / 2) * (Math.sin(u1[i]) - u1[i] * Math.cos(u1[i]))));
        });
    
        xVector.forEach((el,i) => {
            invCoords.push([xVector[i],yVector[i]])
        })

        setState({
          ...state,
          involute:invCoords,
          uMax:newUMaxValue
        })
      }

    const pitch = 360 / mathFunc

    const copyScriptMessage = `A Python script that will generate your ${mathFunc} tooth gear tooth profile has been copied to clipboard. Paste and run this script in Blender's script editor to generate your gear tooth profile`
    const copyPitch = `${pitch} saved to clipbaord`

    var gearScript = '# --- build_a_gear.py --- #'+
    '\nimport bpy'+
    '\nimport math as math' +
    '\nimport numpy as np' +
    '\n' +
    `\nz = ${mathFunc} # Number of teeth` +
    `\nu = np.linspace(0,${uMax},20) # matrix` +
    '\nthickness = math.pi/2' +
    '\nref_radius = z/2' +
    '\nbase_radius = ref_radius*.9396950000000001' +
    '\nx = base_radius * ((np.cos(u)) + u * np.sin(u))' +
    '\ny = base_radius * ((np.sin(u)) - u * np.cos(u))' +
    '\ncoords = []' +
    '\n' +
    '\ndef createMeshFromData(name, origin, verts, edges, faces):' +
    '\n    # Create mesh and object' +
    '\n    me = bpy.data.meshes.new(name+"Mesh")' +
    '\n    ob = bpy.data.objects.new(name, me)' +
    '\n    ob.location = origin' +
    '\n    ob.show_name = False' +
    '\n    # Link object to scene and make active' +
    '\n    bpy.context.collection.objects.link(ob)' +
    '\n    ob.select_set(True)' +
    '\n    # Create mesh from given verts, faces.' +
    '\n    me.from_pydata(verts, edges, faces)' +
    '\n    # Update mesh with new data' +
    '\n    me.update()' +
    '\nfor i in range(len(x)):' +
    '\n    coords.append([x[i],y[i],0])' +
    '\n' +
    '\n# --- Thickness parameters and objects --- #' +
    '\nrad_difference = (ref_radius-base_radius)*(.25)' +
    '\n' +
    '\n# Thickness circle' +
    '\nbpy.ops.mesh.primitive_circle_add(radius=1.57,enter_editmode=False, location=(ref_radius*math.cos(0), math.sin(rad_difference), 0))' +
    '\n' +
    '\n# Pitch circle' +
    '\nbpy.ops.mesh.primitive_circle_add(radius=z/2,enter_editmode=False, location=(0, 0, 0))' +
    '\n' +
    '\n# Outside diameter' +
    '\nbpy.ops.mesh.primitive_circle_add(radius=z/2+1,enter_editmode=False, location=(0, 0, 0))' +
    '\n' +
    '\n# --- Tooth generator --- #' +
    '\nedges1 = [[len(coords) - 1, 0]]' +
    '\nfor i in range( 0, len(coords)-1):' +
    '\n    edges1.append( [i, i+1] )' +
    '\ncreateMeshFromData( "Profile", [0, 0, 0], coords, edges1, [] )'

    const copyVal = (val,name,message) => {
        navigator.clipboard.writeText(val)
        setAlert(message)
    }

    return (
        <KeyBox style={{color:`${darkmode ? '#fff':'#555'}`}} darkmode={darkmode}>

            <InputField
                type='text'
                onChange={(e) => inputHandler(e)}
                value={mathFunc}
                name="mathFunc"
                inputClass={'small'}
                i={'Number of gear teeth:'}
            />

            <Button 
                // onClick={() => copyVal(gearScript,'alert',copyScriptMessage)}
                onClick={() => gears(0)}
                style={{right:'10px',top:'90px'}}
                text={ExecuteButton()}
            />

            <Button
                text={'+'}
                style={{top:'90px',right:'90px',fontSize:'30px'}}
                onClick={() => {gears(1)}}
            />

            <Button
                text={'-'}
                style={{top:'170px',right:'90px',fontSize:'30px'}}
                onClick={() => {gears(-1)}}
            />

            <Button 
                onClick={(e) => close(e)}
                styles={{right:'10px',top:'170px'}}
                text={backButton()}
            />

                <h2
                    style={{
                        position:'absolute',
                        left:'0px',
                        top:'150px'
                    }}
                >
                    Pitch: <InlineMath math={`${pitch}^\\circ`} />
                </h2>

                <Button
                    styles={{top:'210px',left:'0px',width:'120px'}}
                    onClick={() => copyVal(pitch,'noticeContent',copyPitch)}
                    text={'copy pitch'}
                    buttonClass={'tiny'}
                />

                <a
                    style={{
                        position:'absolute',
                        left:'0px',
                        fontSize:'30px',
                        fontWeight:'200',
                        bottom:'-120px',
                    }}
                    href='https://jupyter.madmodels3d.com/Involute%20Gear%20Calculator'
                    target="_blank"
                >
                    How to build your gear
                </a>

                <a
                    style={{
                        position:'absolute',
                        left:'0px',
                        fontSize:'30px',
                        fontWeight:'200',
                        bottom:'-160px',
                    }}
                    href="https://www.blender.org/"
                    target="_blank"
                >
                    Download Blender
                </a>

        </KeyBox>
    )
}

export default CogKeys