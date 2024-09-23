export const verts_to_point = () => {
    const script =
    `import bpy` +
    `\nimport bmesh` +

    `\nobj=bpy.context.object` +
    `\nif obj.mode == 'EDIT':` +
    `\n    bm=bmesh.from_edit_mesh(obj.data)` +
    `\n    for v in bm.verts:` +
    `\n        if v.select:` +
    `\n            v.co.x = 0` +
    `\n#            print(v.co)` +
    `\nelse:` +
    `\n    print("Object is not in edit mode.")`

    return (script)

}