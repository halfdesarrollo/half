import {Router} from 'express';
import Role from '../../../Models/roles';
import User from '../../../Models/user'


const router = Router();

router.get('/allusers', async(req: any, res: any, next)=>{
    
    try{
        const page : number = parseInt(req.query.page) - 1 || 0;
        const limit = parseInt(req.query.limit) || 12;
        const name = req.query.name || '';
        let sort = req.query.sort || 'username';
        let roles = req.query.roles || 'all';


        const rolesAll = await Role.find();
        console.log("hola", rolesAll)
        const rolesOptions = rolesAll.map(role => role._id);
        const rolesName = rolesAll.map(role => role.name);

        roles === 'all'
            ? (roles = [...rolesOptions])
            : (roles = req.query.roles.split(','));
        req.query.sort ? (sort = req.query.sort.split(',')) : (sort = [sort])

        let sortBy : any = {};
        if (sort[1]) {
            sortBy[sort[0]] = sort[1];
        } else {
            sortBy[sort[0]] = 'asc';
        }

        const roleArray = await Role.find({ name: roles })
        const roleId = roleArray.map(role => role._id)
        roleId.length && (roles = roleId)
        console.log("hola", roleArray)

        const users = await User.find({ username: { $regex: '.*' + name+ '.*', $options: 'i' }}) 
            .where('roles')
            .in([...roles])
            .sort(sortBy)
            .skip(page*limit)
            .limit(limit)
            .populate('roles');

        const total = await User.countDocuments({
            roles: {$in: [...roles]},
            username: {$regex: name, $options: 'i'},
        });

        const response = {
            error: false,
            total,
            page: page,
            totalPages: Math.ceil(total / limit),
            limit,
            roles: rolesName,
            users,
        };

        res.status(200).json(response)   
    } catch (error){
        next(error)
    }
})

export default router;