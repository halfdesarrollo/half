import Role from '../../Models/roles'

export const createRoles = async ()=> {
try {
    const count = await Role.estimatedDocumentCount()
    if (count > 0) return;
    const values = await Promise.all([
        new Role ({name: 'client'}).save(),
        new Role ({name: 'waiter'}).save(),
        new Role ({name: 'resto'}).save(),
        new Role ({name: 'admin'}).save()

    ])

console.log(values);
} catch (error) {
    console.log(error)
}
}