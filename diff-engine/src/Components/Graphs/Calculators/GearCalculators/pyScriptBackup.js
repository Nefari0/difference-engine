const gearScript2 = '\nimport bpy'+
'\nfrom math import *' +
'\nimport math' +

`\nz = ${mathFunc} # Number of teeth` +
`\nref_radius = z/2` +
`\nbase_radius = ref_radius*.9396950000000001` +    
`\nrad_difference = (ref_radius-base_radius)*(.25)` +

`\nname_iterator = str(len(bpy.data.objects))` +
`\nprofile_name = "Profile_"+name_iterator` +
`\nsecondary_profile = 'Profile_'+name_iterator+'.001' # Existing name` +
`\nnew_secondary_profile_name = 'Profile_'+name_iterator+'_'+'2'` +

`\ngear_name = 'Gear_'+name_iterator` +
`\nref_cir_name = 'REFERENCE CIRCLE_'+name_iterator` +
`\nthickness_cir_name = 'THICKNESS CIRCLE_'+name_iterator` +

'\ndef createMeshFromData(name, origin, verts, edges, faces):' +
'\n    # Create mesh and object' +
`\n    me = bpy.data.meshes.new(name+'Mesh')` +
'\n    ob = bpy.data.objects.new(name, me)' +
'\n    ob.location = origin' +
'\n    ob.show_name = False' +
'\n    # Link object to scene and make active' +
'\n    bpy.context.collection.objects.link(ob)' +
'\n    ob.select_set(True)' +

'\n# Create mesh from given verts, faces.' +
'\n    me.from_pydata(verts, edges, faces)' +

'\n# Update mesh with new data' +
'\n    me.update()' +

`\nverts1 = ${blenderCoords}` +

'\nedges1 = [[len(verts1) - 1, 0]]' +
'\nfor i in range( 0, len(verts1)-1):' +
'\n    edges1.append( [i, i+1] )' +
`\ndel edges1[0]` +

`\n# Thickness circle#` +
`\nbpy.ops.mesh.primitive_circle_add(radius=1.57,enter_editmode=False, location=(ref_radius*math.cos(0), math.sin(rad_difference), 0))` +
`\nbpy.data.objects['Circle'].name = 'THICKNESS CIRCLE'` +

`\n# Reference circle` +
`\nbpy.ops.mesh.primitive_circle_add(radius=z/2,enter_editmode=False, location=(0, 0, 0))` +
`\nbpy.data.objects['Circle'].name = 'REFERENCE CIRCLE'` +
`\nbpy.ops.object.select_all(action='DESELECT')` +

`\n# Generating Profile` +
`\ncreateMeshFromData( 'Profile', [0, 0, 0], verts1, edges1, [] )` +
`\nbpy.data.objects['Profile'].select_set(True)` +


`\nbpy.context.view_layer.objects.active = bpy.data.objects['Profile']` +
`\nbpy.ops.object.duplicate_move(OBJECT_OT_duplicate={"linked":False, "mode":'TRANSLATION'}, TRANSFORM_OT_translate={"value":(0, 0, 0), "orient_type":'GLOBAL', "orient_matrix":((1, 0, 0), (0, 1, 0), (0, 0, 1)), "orient_matrix_type":'GLOBAL', "constraint_axis":(False, False, False), "mirror":True, "use_proportional_edit":False, "proportional_edit_falloff":'SMOOTH', "proportional_size":1, "use_proportional_connected":False, "use_proportional_projected":False, "snap":False, "snap_target":'CLOSEST', "snap_point":(0, 0, 0), "snap_align":False, "snap_normal":(0, 0, 0), "gpencil_strokes":False, "cursor_transform":False, "texture_space":False, "remove_on_cancel":False, "release_confirm":False, "use_accurate":False})` +
`\nbpy.ops.transform.rotate(value=3.14159, orient_axis='X')`