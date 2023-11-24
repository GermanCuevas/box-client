import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export const userApi = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8080/'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => 'users'
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`
    })
  })
});

export const { useGetUsersQuery, useGetUserByIdQuery } = userApi;
