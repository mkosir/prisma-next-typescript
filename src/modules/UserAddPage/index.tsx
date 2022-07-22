import { Role } from '@prisma/client';
import { useState } from 'react';

import { Input } from 'common/components';

import { AddUserFormEvent, handleSubmit } from './handleSubmit';

export const UserAddPage = () => {
  const [error, setError] = useState<string | null>(null);

  return (
    <div>
      <h3>➕ Add User</h3>
      <form onSubmit={(event) => handleSubmit(event as AddUserFormEvent, setError)} style={{ maxWidth: '200px' }}>
        <Input id="email" label="*Email:" />
        <Input id="name" label="*Name:" />
        <Input id="username" label="*Username:" />
        <Input id="imageUrl" label="Image URL:" />
        <div>
          <label htmlFor="role" style={{ fontStyle: 'italic', fontSize: '14px' }}>
            Role:
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
