import { emptySplitApi as api } from '../config/baseApi';
export const addTagTypes = ['Abogados'] as const;
const injectedRtkApi = api
  .enhanceEndpoints({
    addTagTypes,
  })
  .injectEndpoints({
    endpoints: (build) => ({
      postApiAbogadosCreate: build.mutation<
        PostApiAbogadosCreateApiResponse,
        PostApiAbogadosCreateApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Abogados/Create`,
          method: 'POST',
          body: queryArg.createAbogadoCommand,
        }),
        invalidatesTags: ['Abogados'],
      }),
      getApiAbogadosGetAll: build.query<
        GetApiAbogadosGetAllApiResponse,
        GetApiAbogadosGetAllApiArg
      >({
        query: () => ({ url: `/api/Abogados/GetAll` }),
        providesTags: ['Abogados'],
      }),
      getApiAbogadosGetByIdById: build.query<
        GetApiAbogadosGetByIdByIdApiResponse,
        GetApiAbogadosGetByIdByIdApiArg
      >({
        query: (queryArg) => ({ url: `/api/Abogados/GetById/${queryArg.id}` }),
        providesTags: ['Abogados'],
      }),
      putApiAbogadosUpdateById: build.mutation<
        PutApiAbogadosUpdateByIdApiResponse,
        PutApiAbogadosUpdateByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Abogados/Update/${queryArg.id}`,
          method: 'PUT',
          body: queryArg.updateAbogadoCommand,
        }),
        invalidatesTags: ['Abogados'],
      }),
      deleteApiAbogadosDeleteById: build.mutation<
        DeleteApiAbogadosDeleteByIdApiResponse,
        DeleteApiAbogadosDeleteByIdApiArg
      >({
        query: (queryArg) => ({
          url: `/api/Abogados/Delete/${queryArg.id}`,
          method: 'DELETE',
        }),
        invalidatesTags: ['Abogados'],
      }),
    }),
    overrideExisting: false,
  });
export { injectedRtkApi as abogadosApi };
export type PostApiAbogadosCreateApiResponse = /** status 200 Success */ string;
export type PostApiAbogadosCreateApiArg = {
  createAbogadoCommand: CreateAbogadoCommand;
};
export type GetApiAbogadosGetAllApiResponse =
  /** status 200 Success */ AbogadoResponse[];
export type GetApiAbogadosGetAllApiArg = void;
export type GetApiAbogadosGetByIdByIdApiResponse =
  /** status 200 Success */ AbogadoResponse;
export type GetApiAbogadosGetByIdByIdApiArg = {
  id: string;
};
export type PutApiAbogadosUpdateByIdApiResponse = unknown;
export type PutApiAbogadosUpdateByIdApiArg = {
  id: string;
  updateAbogadoCommand: UpdateAbogadoCommand;
};
export type DeleteApiAbogadosDeleteByIdApiResponse = unknown;
export type DeleteApiAbogadosDeleteByIdApiArg = {
  id: string;
};
export type CreateAbogadoCommand = {
  nombre?: string | null;
  telefono?: string | null;
  email?: string | null;
};
export type AbogadoResponse = {
  fechaCreacion?: string;
  creadoPor?: string | null;
  fechaActualizacion?: string | null;
  actualizadoPor?: string | null;
  id?: string;
  nombre?: string | null;
  telefono?: string | null;
  email?: string | null;
};
export type UpdateAbogadoCommand = {
  id?: string;
  nombre?: string | null;
  telefono?: string | null;
  email?: string | null;
};
export const {
  usePostApiAbogadosCreateMutation,
  useGetApiAbogadosGetAllQuery,
  useGetApiAbogadosGetByIdByIdQuery,
  usePutApiAbogadosUpdateByIdMutation,
  useDeleteApiAbogadosDeleteByIdMutation,
} = injectedRtkApi;
