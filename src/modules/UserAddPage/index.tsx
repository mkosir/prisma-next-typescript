import { Role } from '@prisma/client';

import { Input } from 'common/components';

export const UserAddPage = () => {
  return (
    <div style={{ maxWidth: '200px' }}>
      <h3>➕ Add User</h3>
      <Input label="Email:" />
      <Input label="Name:" />
      <Input label="Username:" />
      <Input label="Image URL:" />
      <div>
        <label htmlFor="roles" style={{ fontStyle: 'italic', color: 'gray' }}>
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
      >
        Add
      </button>
    </div>
  );
};
