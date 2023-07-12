export const Py1 = (state) => {
    const { mathFunc,blenderCoords,degrees } = state
    var gearScript = '# --- build_a_gear.py --- #'+
    '\nimport bpy'+
    '\nfrom math import *' +
    '\nimport math' +
    `\n` + 
    `\nz = ${mathFunc} # Number of teeth` +
    `\ntooth_thickness_at_base = ${Math.abs(degrees)*(3.1415926/180)}` +
    `\nref_radius = z/2` +
    `\nbase_radius = ref_radius*.9396950000000001` +    
    `\nrad_difference = (ref_radius-base_radius)*(.25)` +
    `\n` + 
    `\nname_iterator = str(len(bpy.data.objects))` +
    `\nprofile_name = "Profile_"+name_iterator` +
    `\nsecondary_profile = 'Profile_'+name_iterator+'.001' # Existing name` +
    `\nnew_secondary_profile_name = 'Profile_'+name_iterator+'_'+'2'` +
    `\n` + 
    `\ngear_name = 'Gear_'+name_iterator` +
    `\nref_cir_name = 'REFERENCE CIRCLE_'+name_iterator` +
    `\nthickness_cir_name = 'THICKNESS CIRCLE_'+name_iterator` +
    `\n` + 
    `\n# Create empty as parent element` +
    `\nbpy.ops.object.empty_add(type='ARROWS', location=(0, 0, 0))` +
    `\nbpy.data.objects['Empty'].name = gear_name` +
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
    '\n# Create mesh from given verts, faces.' +
    '\n    me.from_pydata(verts, edges, faces)' +
    `\n` + 
    '\n# Update mesh with new data' +
    '\n    me.update()' +
    `\n` + 
    `\nverts1 = ${blenderCoords}` +
    `\n` + 
    '\nedges1 = [[len(verts1) - 1, 0]]' +
    '\nfor i in range( 0, len(verts1)-1):' +
    '\n    edges1.append( [i, i+1] )' +
    `\ndel edges1[0]` +
    `\n` + 
    `\n` + 
    `\n# Reference circle` +
    `\nbpy.ops.mesh.primitive_circle_add(radius=z/2,enter_editmode=False, location=(0, 0, 0))` +
    `\nbpy.data.objects['Circle'].name = ref_cir_name` +
    `\nbpy.ops.object.select_all(action='DESELECT')` +
    `\n` + 
    `\n# Generating Profile` +
    `\ncreateMeshFromData( profile_name, [0, 0, 0], verts1, edges1, [] )` +
    `\nbpy.data.objects[profile_name].select_set(True)` +
    `\n` + 
    `\nbpy.context.view_layer.objects.active = bpy.data.objects[profile_name]` +
    `\nbpy.ops.object.duplicate_move(OBJECT_OT_duplicate={"linked":False, "mode":'TRANSLATION'}, TRANSFORM_OT_translate={"value":(0, 0, 0), "orient_type":'GLOBAL', "orient_matrix":((1, 0, 0), (0, 1, 0), (0, 0, 1)), "orient_matrix_type":'GLOBAL', "constraint_axis":(False, False, False), "mirror":True, "use_proportional_edit":False, "proportional_edit_falloff":'SMOOTH', "proportional_size":1, "use_proportional_connected":False, "use_proportional_projected":False, "snap":False, "snap_target":'CLOSEST', "snap_point":(0, 0, 0), "snap_align":False, "snap_normal":(0, 0, 0), "gpencil_strokes":False, "cursor_transform":False, "texture_space":False, "remove_on_cancel":False, "release_confirm":False, "use_accurate":False})` +
    `\nbpy.ops.transform.rotate(value=3.14159, orient_axis='X')` +
    `\nbpy.data.objects[secondary_profile].name = new_secondary_profile_name` +
    `\n` + 
    `\n### Empty becomes parent` +
    `\nbpy.data.objects[profile_name].select_set(True)` +
    `\n#bpy.data.objects[secondary_profile.split('.')[0]].select_set(True)` +
    `\nbpy.data.objects[new_secondary_profile_name.split('.')[0]].select_set(True)` +
    `\nbpy.data.objects[ref_cir_name].select_set(True)` +
    `\n` + 
    `\nobj = bpy.context.window.scene.objects[gear_name]` +
    `\nbpy.context.view_layer.objects.active = obj` +
    `\nbpy.ops.object.parent_set(type='OBJECT', keep_transform=True)` +
    `\n` +
    `\nbpy.ops.object.select_all(action='DESELECT')` +
    `\nbpy.data.objects[new_secondary_profile_name].select_set(True)` +
    `\n` +
    `\n# Make 3d cursor the pivot point` +
    `\nbpy.context.scene.tool_settings.transform_pivot_point = 'CURSOR'` +
    `\nbpy.ops.transform.rotate(value=tooth_thickness_at_base, orient_axis='Z', orient_type='GLOBAL', orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)), orient_matrix_type='GLOBAL', constraint_axis=(False, False, True), mirror=True, use_proportional_edit=False, proportional_edit_falloff='SMOOTH', proportional_size=1, use_proportional_connected=False, use_proportional_projected=False)`
    return (gearScript)
}
