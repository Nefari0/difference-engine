# --- build_a_gear.py --- #
import bpy
from math import *
import math

z = 40 # Number of teeth
pitch = (360/z)*(3.1415926/180)
tooth_thickness_at_base = 0.10471975333333333
ref_radius = z/2
base_radius = ref_radius*.9396950000000001
rad_difference = (ref_radius-base_radius)*(.25)

name_iterator = str(len(bpy.data.objects))
profile_name = "Profile_"+name_iterator
secondary_profile = 'Profile_'+name_iterator+'.001' # Existing name
new_secondary_profile_name = 'Profile_'+name_iterator+'_'+'2'

gear_name = 'Gear_'+name_iterator
ref_cir_name = 'REFERENCE CIRCLE_'+name_iterator
thickness_cir_name = 'THICKNESS CIRCLE_'+name_iterator

# Create empty as parent element
bpy.ops.object.empty_add(type='ARROWS', location=(0, 0, 0))
bpy.data.objects['Empty'].name = gear_name

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


# Reference circle
bpy.ops.mesh.primitive_circle_add(radius=z/2,enter_editmode=False, location=(0, 0, 0))
bpy.data.objects['Circle'].name = ref_cir_name
bpy.ops.object.select_all(action='DESELECT')

# Generating Profile
createMeshFromData( profile_name, [0, 0, 0], verts1, edges1, [] )
bpy.data.objects[profile_name].select_set(True)

bpy.context.view_layer.objects.active = bpy.data.objects[profile_name]
bpy.ops.object.duplicate_move(OBJECT_OT_duplicate={"linked":False, "mode":'TRANSLATION'}, TRANSFORM_OT_translate={"value":(0, 0, 0), "orient_type":'GLOBAL', "orient_matrix":((1, 0, 0), (0, 1, 0), (0, 0, 1)), "orient_matrix_type":'GLOBAL', "constraint_axis":(False, False, False), "mirror":True, "use_proportional_edit":False, "proportional_edit_falloff":'SMOOTH', "proportional_size":1, "use_proportional_connected":False, "use_proportional_projected":False, "snap":False, "snap_target":'CLOSEST', "snap_point":(0, 0, 0), "snap_align":False, "snap_normal":(0, 0, 0), "gpencil_strokes":False, "cursor_transform":False, "texture_space":False, "remove_on_cancel":False, "release_confirm":False, "use_accurate":False})
bpy.ops.transform.rotate(value=3.14159, orient_axis='X')
bpy.data.objects[secondary_profile].name = new_secondary_profile_name

### Empty becomes parent
bpy.data.objects[profile_name].select_set(True)
#bpy.data.objects[secondary_profile.split('.')[0]].select_set(True)
bpy.data.objects[new_secondary_profile_name.split('.')[0]].select_set(True)
bpy.data.objects[ref_cir_name].select_set(True)

obj = bpy.context.window.scene.objects[gear_name]
bpy.context.view_layer.objects.active = obj
bpy.ops.object.parent_set(type='OBJECT', keep_transform=True)

bpy.ops.object.select_all(action='DESELECT')
bpy.data.objects[new_secondary_profile_name].select_set(True)

# Make 3d cursor the pivot point
bpy.context.scene.tool_settings.transform_pivot_point = 'CURSOR'
bpy.ops.transform.rotate(value=tooth_thickness_at_base, orient_axis='Z', orient_type='GLOBAL', orient_matrix=((1, 0, 0), (0, 1, 0), (0, 0, 1)))
bpy.data.objects[profile_name].select_set(True)
bpy.context.active_object.select_set(False)
for obj in bpy.context.selected_objects:
    bpy.context.view_layer.objects.active = obj

bpy.ops.object.join()
bpy.data.objects[new_secondary_profile_name].name = profile_name

#--- connecting halves
#vertexList = [1,10,11,12,3]
object = bpy.data.objects[profile_name].data.vertices
index = int((len(object)/2))-1
vertex_list = index
coords_to = object[index].co
coords_from = object[index-1].co = coords_to
bridge = object[-1].co
coords_to.y =+ bridge.y
coords_to.x =+ bridge.x

# Duplicate profile, rotate by pitch, join, set cursor to half pitch at base
bpy.ops.object.duplicate_move()
bpy.ops.transform.rotate(value=-pitch, orient_axis='Z')
bpy.data.objects[profile_name].select_set(True)
bpy.ops.object.join()
bpy.data.objects[profile_name+'.001'].name = profile_name.split('.')[0]