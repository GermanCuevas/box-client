import { Package } from '@/commons/interfaces/PackagesInterface';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// type Package = {
//   address?: string;
//   addressNumber?: number;
//   postalCode?: number;
//   status?: string;
//   deliveryCode?: string;
//   city?: string;
//   deadline?: Date;
//   deliveriedDate?: Date;
//   createdAt?: Date;
//   assignedDate?: Date;
//   coordinates?: number[];
//   receptorName?: string;
//   weight?: number;
//   _id?: string;
//   toggleStatus?: boolean;
// };

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
        body: { packagesIds, userId },
        credentials: 'include'
      })
    }),

    putCancelAssignedPackage: builder.mutation<Package, { packageId: any; userId: any }>({
      query: ({ packageId, userId }) => ({
        url: '/users/cancelAssignedPackage',
        method: 'PUT',
        body: { packageId, userId }
      })
    }),
    putPackageInCourse: builder.mutation<void, { packageId: any; userId: any }>({
      query: ({ packageId, userId }) => ({
        url: '/users/putPackageInCourse',
        method: 'PUT',
        body: { packageId, userId }
      })
    }),
    // putPackageInDelivered: builder.mutation<void, { PackageSingleStatusDto: any }>({
    //   query: (packageSingleStatusDto) => ({
    //     url: '/users/putPackageInDelivered',
    //     method: 'PUT',
    //     body: packageSingleStatusDto
    //   })
    // }),
    packagePendingAndInCourse: builder.query<Package[], { userId: string }>({
      query: ({ userId }) => ({
        url: `/users/packagePendingAndInCourse/${userId}`
      })
    })
  })
});

export const {
  useGetPackagesQuery,
  usePostPackageMutation,
  usePutCancelAssignedPackageMutation,
  // usePutPackageInDeliveredMutation,
  usePutPackageInCourseMutation,
  usePackagePendingAndInCourseQuery
} = packageApi;
