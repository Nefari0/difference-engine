import { KeyBox,BaseButton,Param,ParamInput,CloseHelp } from "../KeyPad/keypad.styles";
import { backButton,ExecuteButton } from "../SVG";
import { useEffect } from "react";
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';
import { TinyButton } from "../KeyPad/keypad.styles";

const CogKeys = (props) => {

    const {state,setState,inputHandler,execute} = props

    const { mathFunc } = state

    useEffect(() => {
        setState({
            ...state,
            mathFunc:`20`,
            displayInput:false,
            polars:false
        })
    },[])

    const goHome = (e) => {
        e.preventDefault()
        setState({
            ...state,
            mathFunc:'x^2',
            displayInput:true,
            currentView:null,
            
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
    '\nu = np.linspace(0,1,20) # matrix' +
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

    const copyVal = (val,message) => {
        navigator.clipboard.writeText(val)
        setState({
            ...state,
            alert:message
        })
    }

    return (
        <KeyBox>
            <h1>Involute Gear Calculator</h1>
            <Param>
                <i style={{fontSize:'40px'}}>Number of gear teeth:</i>
                <ParamInput
                    type='number'
                    onChange={(e) => inputHandler(e)}
                    value={mathFunc}
                    name="mathFunc"
                />
            </Param>

            <BaseButton 
                onClick={() => copyVal(gearScript,copyScriptMessage)}
                style={{right:'95px',top:'170px'}}
            >
                {ExecuteButton()}
            </BaseButton>

            <BaseButton 
                onClick={goHome}
                style={{right:'10px',top:'170px'}}
            >
                {backButton()}
            </BaseButton>

            <CloseHelp
                onClick={(e) => execute(e,'help',!state.help)}
                style={{right:'10px',top:'255px'}}
            >
                <strong>?</strong>
            </CloseHelp>

                <h2
                    style={{
                        position:'absolute',
                        left:'0px',
                        top:'150px'
                    }}
                >
                    Pitch: <InlineMath math={`${pitch}^\\circ`} />
                </h2>

                <TinyButton
                    style={{top:'210px',left:'0px'}}
                    onClick={() => copyVal(pitch,copyPitch)}
                >
                    copy pitch
                </TinyButton>

        </KeyBox>
    )
}

export default CogKeys