export const create_mesh = (name,origin,verts,edges,faces) => {

    const script = 
    `\n` + 
    '\ndef createMeshFromData(name, origin, verts, edges, faces):' +
    '\n    # Create mesh and object' +
    `\n    me = bpy.data.meshes.new(name+'Mesh')` +
    '\n    ob = bpy.data.objects.new(name, me)' +
    '\n    ob.location = origin' +
    '\n    ob.show_name = False' +
    '\n    # Link object to scene and make active' +
    '\n    bpy.context.collection.objects.link(ob)' +
    '\n    ob.select_set(True)' +
    `\n` +
    `\n` + 
    '\n# Create mesh from given verts, faces.' +
    '\n    me.from_pydata(verts, edges, faces)' +
    `\n` + 
    '\n# Update mesh with new data' +
    '\n    me.update()' +
    `\n` +
    `\nedges1 = [[len(verts1) - 1, 0]]` +
    `\nfor i in range( 0, len(verts1)-1):` +
    `\n    edges1.append( [i, i+1] )`+
    `\ndel edges1[0]`

    return (
        script
    )
}

// Example of how edges are generated:
// edges1 = [[len(verts1) - 1, 0]]
// for i in range( 0, len(verts1)-1):
//     edges1.append( [i, i+1] )
// del edges1[0]