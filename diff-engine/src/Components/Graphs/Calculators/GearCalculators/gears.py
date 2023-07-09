
import bpy
from math import *
import math
z = 30 # Number of teeth
ref_radius = z/2
base_radius = ref_radius*.9396950000000001
rad_difference = (ref_radius-base_radius)*(.25)

# empty will be parant folder
#try:
#    existingName = str(type(bpy.data.objects['Gear']))
#except:
#    print('exists')

name_iterator = str(len(bpy.data.objects))
profile_name = "Profile_"+name_iterator
secondary_profile = 'Profile_'+name_iterator+'.001' # Existing name
new_secondary_profile_name = 'Profile_'+name_iterator+'_'+'2'

gear_name = 'Gear_'+name_iterator
ref_cir_name = 'REFERENCE CIRCLE_'+name_iterator
thickness_cir_name = 'THICKNESS CIRCLE_'+name_iterator

print('GEAR NAME',name_iterator)
bpy.ops.object.empty_add(type='ARROWS', location=(0, 0, 0))
bpy.data.objects['Empty'].name = 'Gear_' + name_iterator
#print(bpy.data.objects['Circle'])
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
verts1 = [[14.095425,0,0],[14.098243803097764,0.00003758629650951216,0],[14.106696829864921,0.00030065429036525135,0],[14.12077393497801,0.0010145052935547972,0],[14.140458217079834,0.002404079955578056,0],[14.165726030047926,0.004693778202715955,0],[14.196546998761534,0.008107279501758349,0],[14.232884039358305,0.012867363556065482,0],[14.274693383969396,0.019195731541624492,0],[14.321924609919034,0.02731282799045654,0],[14.37452067337228,0.03743766342839902,0],[14.432417947412077,0.0497876378738755,0],[14.495546264524279,0.06457836530381254,0],[14.563828963466836,0.08202349919234574,0],[14.637182940496908,0.10233455922737564,0],[14.715518704927117,0.1257207593094239,0],[14.798740438979872,0.1523888369365411,0],[14.886746061906129,0.1825428840782764,0],[14.979427298332705,0.21638417964093543,0],[15.076669750799718,0.2541110236254993,0],[15.178352976447481,0.295918573078663,0],[15.284350567809835,0.3419986799365127,0],[15.394530237668537,0.3925397308593265,0],[15.50875390792098,0.4477264891549478,0],[15.62687780241146,0.5077399388870352,0],[15.74875254367368,0.5727571312633445,0],[15.874223253530186,0.642951033397977,0],[16.00312965749211,0.7184903795402345,0]]
edges1 = [[len(verts1) - 1, 0]]
for i in range( 0, len(verts1)-1):
    edges1.append( [i, i+1] )
del edges1[0]
# Thickness circle#
bpy.ops.mesh.primitive_circle_add(radius=1.57,enter_editmode=False, location=(ref_radius*math.cos(0), math.sin(rad_difference), 0))
bpy.data.objects['Circle'].name = thickness_cir_name
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
#find named elements
#secondary_profile = 'Profile_'+name_iterator+'.001'
bpy.data.objects[secondary_profile].name = new_secondary_profile_name
#Profile_0.001
#secondary_profile 


### Selects objects
#main_profile = 'Profile_'+name_iterator
#ref_circ = 
bpy.data.objects[profile_name].select_set(True)
#bpy.data.objects[secondary_profile.split('.')[0]].select_set(True)
bpy.data.objects[new_secondary_profile_name.split('.')[0]].select_set(True)
bpy.data.objects[ref_cir_name].select_set(True)
bpy.data.objects[thickness_cir_name].select_set(True)

obj = bpy.context.window.scene.objects[gear_name]
bpy.context.view_layer.objects.active = obj
bpy.ops.object.parent_set(type='OBJECT', keep_transform=True)

bpy.ops.object.select_all(action='DESELECT')
bpy.data.objects[new_secondary_profile_name].select_set(True)
