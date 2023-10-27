import bcrypt from 'bcryptjs';

const users = [
    {
        name: 'Almighty Admin',
        email: 'admin@jumpstart.com',
        password: bcrypt.hashSync('admin', 10),
        isAdmin: true
    },
    {
        name: 'Jhonn Vincent Arcipe',
        email: 'jhonnvincentarcipe@gmail.com',
        password: bcrypt.hashSync('M!nat0123321', 10),
    },
    {
        name: 'Jump Start Demo',
        email: 'demo@jumpstart.com',    
        password: bcrypt.hashSync('demo', 10),
    },
]

export default users;