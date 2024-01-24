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
    })
    // getPackagesById: builder.query<Package, { id: string }>({
    //   query: ({ id }) => `/packages/${id}`
    // }),
    // postPackage: builder.mutation<Package, Partial<Package>>({
    //   query: (newPackageData) => ({
    //     url: '/packages',
    //     method: 'POST',
    //     body: newPackageData
    //   })
    // })
  })
});

export const { useGetPackagesQuery } = packageApi;
