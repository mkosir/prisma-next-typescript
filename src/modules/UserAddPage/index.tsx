import { Role } from '@prisma/client';
import { FormEvent } from 'react';

import { Input } from 'common/components';

// type test = Prisma.UserCreateInput;

type FormElements = Readonly<
  {
    email: HTMLInputElement;
    name: HTMLInputElement;
    username: HTMLInputElement;
    imageUrl: HTMLInputElement;
    roles: HTMLSelectElement;
  } & HTMLFormControlsCollection
>;

type AddUserForm = Readonly<
  {
    elements: FormElements;
  } & HTMLFormElement
>;

export const UserAddPage = () => {
  const handleSubmit = (event: FormEvent<AddUserForm>) => {
    event.preventDefault();

    console.log('🔎 Log ~ handleSubmit ', event.currentTarget.elements.email.value);
  };

  return (
    <div>
      <h3>➕ Add User</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: '200px' }}>
        <Input id="email" label="Email:" />
        <Input id="name" label="Name:" />
        <Input id="username" label="Username:" />
        <Input id="imageUrl" label="Image URL:" />
        <div>
          <label htmlFor="roles" style={{ fontStyle: 'italic', fontSize: '14px' }}>
            Role:
          </label>
          <select
            name="roles"
            id="roles"
            style={{ display: 'inline-block', width: '100%', fontSize: '14px', padding: '3px 3px', marginTop: '2px' }}
          >
            {Object.values(Role).map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <button
          style={{
            fontSize: '14px',
            backgroundColor: '#3d9cc23b',
            padding: '5px 14px',
            borderRadius: '5px',
            marginTop: '7px',
          }}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
};
