import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';

type Package = {
  address?: string;
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
};

export const packageApi = createApi({
  reducerPath: 'packageAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL + '/api/',
    credentials: 'include'
  }),
  endpoints: (builder) => ({
    getPackages: builder.query<Package[], null>({
      query: () => 'packages'
    }),
    getPackagesById: builder.query<Package, { id: string }>({
      query: ({ id }) => `packages/${id}`
    }),
    postPackage: builder.mutation<Package, Partial<Package>>({
      query: (newPackageData) => ({
        url: 'packages',
        method: 'POST',
        body: newPackageData
      })
    })
  })
});
