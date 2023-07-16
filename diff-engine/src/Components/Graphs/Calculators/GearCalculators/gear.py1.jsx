export const Py1 = (state) => {
    const { mathFunc,blenderCoords,degrees } = state
    var gearScript = '# --- build_a_gear.py --- #'+
    '\nimport bpy'+
    '\nfrom math import *' +
    '\nimport math' +
    `\n` + 
    `\nz = ${mathFunc} # Number of teeth` +
    `\npitch = (360/z)*(3.1415926/180)` +
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
    `\nbpy.ops.object.duplicate_move()` +
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
    `\nbpy.ops.transform.rotate(value=-tooth_thickness_at_base, orient_axis='Z')` +
    `\nbpy.data.objects[profile_name].select_set(True)` +
    `\nbpy.context.active_object.select_set(False)` +
    `\nfor obj in bpy.context.selected_objects:` +
    `\n    bpy.context.view_layer.objects.active = obj` +
    `\n` +
    `\nbpy.ops.object.join()` +
    `\nbpy.data.objects[new_secondary_profile_name].name = profile_name` +
    `\n` +
    `\n#--- connecting halves` +
    `\n#vertexList = [1,10,11,12,3]` +
    `\nobject = bpy.data.objects[profile_name].data.vertices` +
    `\nindex = int((len(object)/2))-1` +
    `\nvertex_list = index` +
    `\ncoords_to = object[index].co` +
    `\ncoords_from = object[index-1].co = coords_to` +
    `\nbridge = object[-1].co` +
    `\ncoords_to.y =+ bridge.y` +
    `\ncoords_to.x =+ bridge.x` +
    `\n` +
    // `\n# Duplicate profile, rotate by pitch, join, set cursor to half pitch at base` +   
    `\nbpy.ops.object.duplicate_move()` + 
    `\nbpy.ops.transform.rotate(value=-pitch, orient_axis='Z')` +
    `\nbpy.data.objects[profile_name].select_set(True)` +
    `\nbpy.ops.object.join()` +
    `\nbpy.data.objects[profile_name+'.001'].name = profile_name.split('.')[0]`
    // `\nbpy.ops.object.editmode_toggle()`
    return (gearScript)
}
