import {
  fetchBaseQuery
} from '@reduxjs/toolkit/dist/query/react';
import { createApi } from '@reduxjs/toolkit/query/react';

export const emptySplitApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:7200/api/' }),
  endpoints: () => ({}),
});
