const MotorGen = (props) => {
    const { name } = props
    const motorScript = `motor_generator`+
    `\nimport bpy`+
    `\nfrom math import radians` +
    `\n`+
    `\n# location for added objects` +
    `\nmy_cursor_location = bpy.context.scene.cursor.location`+
    `\n` +
    `\n# object name variables` +
    `\nAxle = "axle"` +
    `\nHinge = "hinge"`+
    `\nMotor = "motor"`+
    `\nMain = "${name}"`+
    `\n`+
    `\n# motor rotation`+
    `\nmotorRotation = radians(-90)` +
    `\n` +
    `\n#adds cube for testing purposes only `+
    `\n#bpy.ops.mesh.primitive_cube_add(enter_editmode=False, location=(my_cursor_location))`+
    `\n#for obj in bpy.context.selected_objects:`+
    `\n#    obj.name = "Cube"`+
    `\n#    obj.data.name = "Cube"`+
    `\n#bpy.context.object.location[2] = 2` +
    `\n` +
    `\n#----------------------------------------------------------------------------------------`+
    `\n#       adds axle`+
    `\n#----------------------------------------------------------------------------------------`+
    `\n`+
    `\n# adds cylinder as Axle`+
    `\nbpy.ops.mesh.primitive_cylinder_add(vertices=32, radius=1, depth=2, end_fill_type='NGON', calc_uvs=True, enter_editmode=False, align='WORLD', location=(my_cursor_location), rotation=(0, 0, 0))`+
    `\nfor obj in bpy.context.selected_objects:`+
    `\n    obj.name = Axle`+
    `\n    obj.data.name = "Axledata"`+
    `\n`+
    `\n# moves down in z # applies transform`+
    `\nbpy.context.object.location[2] = -2`+
    `\nbpy.ops.object.transform_apply(location=False, rotation=True, scale=True)`+
    `\n`+
    `\n# gives rigidbody properties`+
    `\nbpy.ops.rigidbody.object_add()`+
    `\nbpy.context.object.rigid_body.type = 'PASSIVE'`+
    `\n`+
    `\n#----------------------------------------------------------------------------------------`+
    `\n#       adds hinge`+
    `\n#----------------------------------------------------------------------------------------`+
    `\n`+
    `\n# adds empty as Hinge`+
    `\nbpy.ops.object.empty_add(type='ARROWS', location=(my_cursor_location))`+
    `\nfor obj in bpy.context.selected_objects:`+
    `\n    obj.name = Hinge`+
    `\n`+
    `\n# moves down in z`+
    `\nbpy.context.object.location[2] = -6`+
    `\n`+
    `\n# gives rigid bod properties`+
    `\nbpy.ops.rigidbody.constraint_add()`+
    `\nbpy.context.object.rigid_body_constraint.type = 'HINGE'`+
    `\n# set first object`+
    `\nbpy.context.object.rigid_body_constraint.object1 = bpy.data.objects[Main]`+
    `\n# set second object`+
    `\nbpy.context.object.rigid_body_constraint.object2 = bpy.data.objects[Axle]`+
    `\n`+
    `\n#----------------------------------------------------------------------------------------`+
    `\n#       adds motor`+
    `\n#----------------------------------------------------------------------------------------`+
    `\n`+
    `\n# adds empty as Motor`+
    `\nbpy.ops.object.empty_add(type='ARROWS', location=(my_cursor_location))`+
    `\nfor obj in bpy.context.selected_objects:`+
    `\n    obj.name = Motor`+
    `\n`+
    `\n# moves down in z`+
    `\nbpy.context.object.location[2] = -10`+
    `\n# rotates 1.5708`+
    `\nbpy.context.object.rotation_euler[1] = motorRotation`+
    `\n# add rigidbody properties/motor`+
    `\nbpy.ops.rigidbody.constraint_add()`+
    `\nbpy.context.object.rigid_body_constraint.type = 'MOTOR'`+
    `\nbpy.context.object.rigid_body_constraint.use_motor_ang = True`+
    `\n# set first object`+
    `\nbpy.context.object.rigid_body_constraint.object1 = bpy.data.objects[Main]`+
    `\n# set second object`+
    `\nbpy.context.object.rigid_body_constraint.object2 = bpy.data.objects[Axle]`+
    `\n`+
    `\n#----------------------------------------------------------------------------------------`+
    `\n#       parents items`+
    `\n#----------------------------------------------------------------------------------------`+
    `\n` +
    `\n# Selects objects`+
    `\nbpy.data.objects[Hinge].select_set(True)`+
    `\nbpy.data.objects[Axle].select_set(True)`+
    `\n# makes Axle active`+
    `\nobj = bpy.context.window.scene.objects[Axle]`+
    `\nbpy.context.view_layer.objects.active = obj`+
    `\n# parents objects to Axle`+
    `\nbpy.ops.object.parent_set(type='OBJECT', keep_transform=True)`
    return (motorScript)
}