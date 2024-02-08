import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type PackageStructure = {
  address: string;
  city: string;
  deadLine: string | Date; // O podrías usar tipo Date si prefieres
  receptorName: string;
  weight: number;
  postalCode: number;
  addressNumber: number;
};

export const adminApi = createApi({
  reducerPath: 'adminAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL + '/api/admin',
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    postAddPackage: builder.mutation<void, PackageStructure>({
      query: (body) => {
        return {
          url: 'addPackage',
          method: 'POST',
          body: body
        };
      }
    }),
    getDeliveryDetails: builder.query<any, any>({
      query: (date) => {
        return {
          url: `deliveryDetails/${date}`,
          method: 'GET'
        };
      }
    }),

    toggleHiddenHistoryAdmin: builder.mutation<void, string>({
      query: (id) => {
        return {
          url: `toggleHiddenHistoryAdmin/${id}`,
          method: 'PUT'
        };
      }
    })
  })
});

export const {
  usePostAddPackageMutation,
  useGetDeliveryDetailsQuery,
  useToggleHiddenHistoryAdminMutation
} = adminApi;
