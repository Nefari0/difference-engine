export const rename_objects = (name) => {
    const script =
    `\nimport bpy` +
    `\n` +
    `\nfor obj in bpy.context.selected_objects:`+
    `\n    obj.name = "${name}"` +
    `\n    obj.data.name = "${name}"`
    
    return (script)
}