import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type User = {
  id_user?: string;
  name?: string;
  email?: string;
  isAdmin?: boolean;
  iat?: number;
  exp?: number;
};

export const userApi = createApi({
  reducerPath: 'userAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL + '/api/',
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], null>({
      query: () => 'users'
    }),
    getUserById: builder.query<User, { id: string }>({
      query: ({ id }) => `users/${id}`
    }),
    postUser: builder.mutation<User, Partial<User>>({
      query: (newUserData) => ({
        url: 'users',
        method: 'POST',
        body: newUserData
      })
    }),
    getProfile: builder.query<User, null>({
      query: () => 'auth/profile'
    })
  })
});

export const { useGetUsersQuery, useGetUserByIdQuery, usePostUserMutation, useGetProfileQuery } =
  userApi;
