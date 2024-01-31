import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type createPackage = {
  city: string;
  address: string;
  package_weight: number;
  startDate: Date | null;
  deliveryCode: string;
  receptorName: string;
};

export const adminApi = createApi({
  reducerPath: 'adminAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL + '/api/admin',
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    postAddPackage: builder.mutation<void, createPackage>({
      query: (body) => ({
        url: '/addPackage',
        method: 'POST',
        body: body
      })
    })
  })
});

export const { usePostAddPackageMutation } = adminApi;
