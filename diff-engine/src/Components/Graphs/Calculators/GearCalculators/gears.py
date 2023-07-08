
import bpy
from math import *
import math

bpy.context.scene.cursor.location[0] = 0
bpy.context.scene.cursor.location[1] = 0
bpy.context.scene.cursor.location[2] = 0

z = 40 # Number of teeth
ref_radius = z/2
base_radius = ref_radius*.9396950000000001
rad_difference = (ref_radius-base_radius)*(.25)
def createMeshFromData(name, origin, verts, edges, faces):
    # Create mesh and object
    me = bpy.data.meshes.new(name+'Mesh')
    ob = bpy.data.objects.new(name, me)
    ob.location = origin
    ob.show_name = False
    # Link object to scene and make active
    bpy.context.collection.objects.link(ob)
    ob.select_set(True)
# Create mesh from given verts, faces.
    me.from_pydata(verts, edges, faces)
# Update mesh with new data
    me.update()
verts1 = [[18.7939,0,0],[18.797658404130352,0.00005011506201268288,0],[18.808929106486563,0.0004008723871536684,0],[18.82769857997068,0.0013526737247397296,0],[18.85394428943978,0.0032054399407707413,0],[18.88763470673057,0.006258370936954608,0],[18.928729331682046,0.010809706002344465,0],[18.977178719144405,0.01715648474142064,0],[19.03292451195919,0.025594308722165993,0],[19.095899479892044,0.03641710398727539,0],[19.166027564496375,0.049916884571198694,0],[19.24322392988277,0.06638351716516733,0],[19.327395019365706,0.08610448707175006,0],[19.41843861795578,0.10936466558979432,0],[19.516243920662543,0.13644607896983418,0],[19.62069160656949,0.16762767907923184,0],[19.73165391863983,0.20318511591538807,0],[19.848994749208174,0.24339051210436854,0],[19.972569731110276,0.28851223952124716,0],[20.102226334399624,0.3388146981673324,0],[20.23780396859664,0.3945580974382173,0],[20.379134090413118,0.45599823991535027,0],[20.526040316891383,0.5233863078124353,0],[20.67833854389464,0.5969686522065969,0],[20.835837069881944,0.6769865851827136,0],[20.99833672489824,0.7636761750177926,0]]
edges1 = [[len(verts1) - 1, 0]]
for i in range( 0, len(verts1)-1):
    edges1.append( [i, i+1] )
del edges1[0]
# Thickness circle#
bpy.ops.mesh.primitive_circle_add(radius=1.57,enter_editmode=False, location=(ref_radius*math.cos(0), math.sin(rad_difference), 0))
createMeshFromData( 'Profile', [0, 0, 0], verts1, edges1, [] )
bpy.data.objects['Circle'].select_set(False)
bpy.data.objects['Profile'].select_set(True)
bpy.context.view_layer.objects.active = bpy.data.objects['Profile']

bpy.ops.object.duplicate_move(OBJECT_OT_duplicate={"linked":False, "mode":'TRANSLATION'}, TRANSFORM_OT_translate={"value":(0, 0, 0), "orient_type":'GLOBAL', "orient_matrix":((1, 0, 0), (0, 1, 0), (0, 0, 1)), "orient_matrix_type":'GLOBAL', "constraint_axis":(False, False, False), "mirror":True, "use_proportional_edit":False, "proportional_edit_falloff":'SMOOTH', "proportional_size":1, "use_proportional_connected":False, "use_proportional_projected":False, "snap":False, "snap_target":'CLOSEST', "snap_point":(0, 0, 0), "snap_align":False, "snap_normal":(0, 0, 0), "gpencil_strokes":False, "cursor_transform":False, "texture_space":False, "remove_on_cancel":False, "release_confirm":False, "use_accurate":False})


#bpy.ops.object.editmode_toggle()

#bpy.ops.mesh.duplicate_move(MESH_OT_duplicate={"mode":1}, TRANSFORM_OT_translate={"value":(0, 0, -0), "orient_type":'GLOBAL', "orient_matrix":((1, 0, 0), (0, 1, 0), (0, 0, 1)), "orient_matrix_type":'GLOBAL', "constraint_axis":(False, False, False), "mirror":False, "use_proportional_edit":False, "proportional_edit_falloff":'SMOOTH', "proportional_size":1, "use_proportional_connected":False, "use_proportional_projected":False, "snap":False, "snap_target":'CLOSEST', "snap_point":(0, 0, 0), "snap_align":False, "snap_normal":(0, 0, 0), "gpencil_strokes":False, "cursor_transform":False, "texture_space":False, "remove_on_cancel":False, "release_confirm":False, "use_accurate":False})

bpy.ops.transform.rotate(value=3.14159, orient_axis='X', orient_type='GLOBAL', orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)), orient_matrix_type='GLOBAL', constraint_axis=(True, False, False), mirror=True, use_proportional_edit=False, proportional_edit_falloff='SMOOTH', proportional_size=1, use_proportional_connected=False, use_proportional_projected=False)
        