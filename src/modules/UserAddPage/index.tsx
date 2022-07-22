import { Prisma, Role } from '@prisma/client';
import { FormEvent, useState } from 'react';

import { Input } from 'common/components';
import { pathsApi } from 'common/consts/pathsApi';

type FormElements = Readonly<
  {
    email: HTMLInputElement;
    name: HTMLInputElement;
    username: HTMLInputElement;
    imageUrl: HTMLInputElement;
    role: HTMLSelectElement;
  } & HTMLFormControlsCollection
>;

type AddUserForm = Readonly<
  {
    elements: FormElements;
  } & HTMLFormElement
>;

export const minimalInputValidation = (formElements: FormElements): boolean => {
  console.log('🔎 Log ~ minimalInputValidation ~ formElements', formElements);
  // const { email, name, username, imageUrl, roles } = formElements;
  //   const requiredFormElements => { email, name, username, imageUrl, roles } => requiredFormElements;
  // if(email.va)

  return true;
};

export const UserAddPage = () => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<AddUserForm>) => {
    event.preventDefault();

    const { email, name, username, imageUrl, role } = event.currentTarget.elements;
    if (minimalInputValidation(event.currentTarget.elements)) {
      setError('Please fill out required input fields *');
      return;
    }

    const body: Prisma.UserCreateInput = {
      email: email.value,
      name: name.value,
      username: username.value,
      imageUrl: imageUrl.value === '' ? imageUrl.value : null,
      role: role.value as Role,
    };

    fetch(pathsApi.USERS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
  };

  return (
    <div>
      <h3>➕ Add User</h3>
      <form onSubmit={handleSubmit} style={{ maxWidth: '200px' }}>
        <Input id="email" label="*Email:" />
        <Input id="name" label="*Name:" />
        <Input id="username" label="*Username:" />
        <Input id="imageUrl" label="Image URL:" />
        <div>
          <label htmlFor="role" style={{ fontStyle: 'italic', fontSize: '14px' }}>
            *Role:
          </label>
          <select
            name="role"
            id="role"
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
      {error && <div style={{ fontSize: '12px', fontStyle: 'italic', color: 'red', marginTop: '3px' }}>{error}</div>}
    </div>
  );
};
