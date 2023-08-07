export const studio_setup = () => {
    const script = 
    `\nimport bpy`+

    `\n#---------------------------------------------------------------------------` +
    `\n#   this section adds in the plane` + 
    `\n#---------------------------------------------------------------------------` +

    `\n# construct a filled planar mesh with 4 vertices` +
    `\nbpy.ops.mesh.primitive_plane_add(size=15, enter_editmode=False, location=(0, 0, 0))` +

    `\n# for loop will rename selected objects with given name` +
    `\nfor obj in bpy.context.selected_objects:`+
    `\n    obj.name = "theBackground"`+
    `\n    obj.data.name = "theBackground"` +

    `\n# sets specified object interaction mode` +
    `\nbpy.ops.object.mode_set(mode='EDIT')` +

    `\n# subdevide selected mesh` +
    `\nbpy.ops.mesh.subdivide(number_cuts=3, quadcorner='INNERVERT')`+

    `\n# set the objects interaction mode` +
    `\nbpy.ops.object.mode_set(mode='OBJECT')`+

    `\n# creates a list of vertex numbers to be moved`+
    `\nvertexList = [1,10,11,12,3]` +

    `\n# for loop that references the list of vertex numbers moved in objext` +
    `\nfor num in vertexList:` +
    `\n    bpy.data.objects["theBackground"].data.vertices[num].co.z=+8` +

    `\n# set a devision surface level of 2 on mesh`+
    `\nbpy.ops.object.subdivision_set(level=2, relative=False)` +

    `\n# render and display shaded faces smooth`+
    `\nbpy.ops.object.shade_smooth`+

    `\n#---------------------------------------------------------------------------`+
    `\n#   this section adds camera`+
    `\n#---------------------------------------------------------------------------`+

    `\nbpy.ops.object.camera_add(enter_editmode=False, align='VIEW', location=(-10.7447, 0.163963, 4.48385), rotation=(1.44513, 0.0, 4.69843))`+

    `\n#---------------------------------------------------------------------------`+
    `\n#   this section adds monkey` +
    `\n#---------------------------------------------------------------------------` +

    `\nbpy.ops.mesh.primitive_monkey_add(size=2.0, calc_uvs=True, enter_editmode=False, align='WORLD', location=(0.0, 0.0, 2.96913), rotation=(0.0, 0.0, 4.71239))`+

    `\n# set a devision surface level of 2 on mesh`+
    `\nbpy.ops.object.subdivision_set(level=2, relative=False)`+

    `\n# render and display shaded faces smooth`+
    `\nbpy.ops.object.shade_smooth`+

    `\n#---------------------------------------------------------------------------`+
    `\n#   this section adds light` +
    `\n#---------------------------------------------------------------------------`+

    `\nbpy.ops.object.light_add(type='AREA', radius=1.0, align='WORLD', location=(-4.14292, 0.0, 6.99893), rotation=(0.0, -0.216462, 0.0))`+
    `\nbpy.context.object.data.energy = 200`+

    `\n# for loop will rename selected objects with given name`+
    `\nfor obj in bpy.context.selected_objects:` +
    `\n    obj.name = "keyLight"` +
    `\n    obj.data.name = "Keylight"`
    
    return (script)
}