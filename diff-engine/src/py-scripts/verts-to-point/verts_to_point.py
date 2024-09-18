import bpy
import bmesh

obj=bpy.context.object
if obj.mode == 'EDIT':
    bm=bmesh.from_edit_mesh(obj.data)
    for v in bm.verts:
        if v.select:
            v.co.x = 0
#            print(v.co)
else:
    print("Object is not in edit mode.")
