import { User } from '@prisma/client';

// let user = new User();

// const userRepository = getRepository(User);

// user.username = 'Heisenberg';
// user.name = 'Walter White';
// user.email = 'admin@admin.com';
// user.password = 'pass1';
// user.hashPassword();
// user.role = 'ADMINISTRATOR' as Role;
// await userRepository.save(user);

export const users: User[] = [
  {
    id: '8f008731-4645-43de-8af9-3060d4086df1',
    createdAt: new Date(), //
    updatedAt: new Date(), //
    email: 'walter.white@admin.com',
    name: 'Walter White',
    username: 'Heisenberg',
    imageUrl: '', //
    role: 'ADMINISTRATOR',
  },
];
