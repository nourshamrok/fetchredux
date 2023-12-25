import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface GetDataResponse {
  data: string;
}

// Create an API using createApi
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/users/hadley/",
  }),
  endpoints: (builder) => ({
    getData: builder.query({
      query: () => "orgs",
    }),
  }),
});

export const { useGetDataQuery } = api;
