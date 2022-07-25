import { Prisma, Role } from '@prisma/client';
import Router from 'next/router';
import { Dispatch, FormEvent, SetStateAction } from 'react';

import { paths } from 'common/consts/paths';
import { pathsApiV1 } from 'common/consts/pathsApi';

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

export type AddUserFormEvent = FormEvent<AddUserForm>;

export const handleSubmit = async (event: AddUserFormEvent, setError: Dispatch<SetStateAction<string | null>>) => {
  event.preventDefault();
  setError(null);

  if (minimalInputValidation(event.currentTarget.elements)) {
    setError('Please fill out required input fields *');
    return;
  }

  const { email, name, username, imageUrl, role } = event.currentTarget.elements;
  const body: Prisma.UserCreateInput = {
    email: email.value,
    name: name.value,
    username: username.value,
    imageUrl: imageUrl.value.trim().length ? imageUrl.value : null,
    role: role.value as Role,
  };

  const response = await fetch(pathsApiV1.USERS, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const data = await response.json();
    setError(data?.message ?? 'Network error occurred');
    return;
  }

  Router.push(paths.USERS);
};

const minimalInputValidation = (formElements: FormElements): boolean => {
  const { email, name, username } = formElements;

  if ((email.value === '' || name.value === '', username.value === '')) {
    return true;
  }

  return false;
};
