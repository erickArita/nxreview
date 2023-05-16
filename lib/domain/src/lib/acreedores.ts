import { emptySplitApi as api } from '../config/baseApi';
export const addTagTypes = ['Acreedor'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      postApiAcreedorCreate: build.mutation<
        PostApiAcreedorCreateApiResponse,
        PostApiAcreedorCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Acreedor/Create`,
          method: 'POST',
          body: queryArg.createAcreedorCommand,
        }),
        invalidatesTags: ['Acreedor'],
      }),
      getApiAcreedorGetAll: build.query<
        GetApiAcreedorGetAllApiResponse,
        GetApiAcreedorGetAllApiArg
      >({
        query: () => ({ url: `/api/Acreedor/GetAll` }),
        providesTags: ['Acreedor'],
      }),
      getApiAcreedorGetByIdById: build.query<
        GetApiAcreedorGetByIdByIdApiResponse,
        GetApiAcreedorGetByIdByIdApiArg
      >({
        query: (queryArg) => ({ url: `/api/Acreedor/GetById/${queryArg.id}` }),
        providesTags: ['Acreedor'],
      }),
      putApiAcreedorUpdateById: build.mutation<
        PutApiAcreedorUpdateByIdApiResponse,
        PutApiAcreedorUpdateByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Acreedor/Update/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.updateAcreedorCommand,
        }),
        invalidatesTags: ['Acreedor'],
      }),
      deleteApiAcreedorDeleteById: build.mutation<
        DeleteApiAcreedorDeleteByIdApiResponse,
        DeleteApiAcreedorDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Acreedor/Delete/${queryArg.id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Acreedor'],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as acreedoresApi };
export type PostApiAcreedorCreateApiResponse = /** status 200 Success */ string;
export type PostApiAcreedorCreateApiArg = {
  createAcreedorCommand: CreateAcreedorCommand;
};
export type GetApiAcreedorGetAllApiResponse =
  /** status 200 Success */ AcreedorResponse[];
export type GetApiAcreedorGetAllApiArg = void;
export type GetApiAcreedorGetByIdByIdApiResponse =
  /** status 200 Success */ AcreedorResponse;
export type GetApiAcreedorGetByIdByIdApiArg = {
  id: string;
};
export type PutApiAcreedorUpdateByIdApiResponse = unknown;
export type PutApiAcreedorUpdateByIdApiArg = {
  id: string;
  updateAcreedorCommand: UpdateAcreedorCommand;
};
export type DeleteApiAcreedorDeleteByIdApiResponse = unknown;
export type DeleteApiAcreedorDeleteByIdApiArg = {
  id: string;
};
export type CreateAcreedorCommand = {
  codigo?: number;
  nombre?: string | null;
  identificacion?: string | null;
};
export type AcreedorResponse = {
  fechaCreacion?: string;
  creadoPor?: string | null;
  fechaActualizacion?: string | null;
  actualizadoPor?: string | null;
  id?: string;
  codigo?: number;
  nombre?: string | null;
  identificacion?: string | null;
};
export type UpdateAcreedorCommand = {
  id?: string;
  nombre?: string | null;
  identificacion?: string | null;
};
export const {
  usePostApiAcreedorCreateMutation,
  useGetApiAcreedorGetAllQuery,
  useGetApiAcreedorGetByIdByIdQuery,
  usePutApiAcreedorUpdateByIdMutation,
  useDeleteApiAcreedorDeleteByIdMutation,
} = injectedRtkApi;
