import bcrypt from 'bcryptjs';

 const users = [
    {
        name: "Admin",
        email: "admin@ih.com",
        password: bcrypt.hashSync(10),
        isAdmin: true
    },{
        name: "User",
        email: "user@ih.com",
        password: bcrypt.hashSync(10),
      }
]

export default users