import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type Package = {
  address?: string;
  addressNumber?: number;
  postalCode?: number;
  status?: string;
  deliveryCode?: string;
  city?: string;
  deadline?: Date;
  deliveriedDate?: Date;
  createdAt?: Date;
  assignedDate?: Date;
  coordinates?: number[];
  receptorName?: string;
  weight?: number;
  _id?: string;
  toggleStatus?: boolean;
};

export const packageApi = createApi({
  reducerPath: 'packageAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL + '/api',
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    getPackages: builder.query<Package[], null>({
      query: () => '/users/availablePackages'
    }),

    postPackage: builder.mutation<void, { packagesIds: any; userId: any }>({
      query: ({ packagesIds, userId }) => ({
        url: '/users/assignPackage',
        method: 'POST',
        body: { packagesIds, userId }
      })
      // getPackagesByStatus: builder.query<Package[], string>({
      //   query: (status) => `/packages?status=${status}`
      // }),
      // getPackagesById: builder.query<Package, { id: string }>({
      //   query: ({ id }) => `/packages/${id}`
      // }),
    })
  })
});

export const { useGetPackagesQuery, usePostPackageMutation } = packageApi;
