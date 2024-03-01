// src/api/api.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://63e64cf37eef5b223382f966.mockapi.io/",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query<any, string>({
      query: (name) => ({
        url: `orders`,
        method: "GET",
      }),
    }),

    postTodos: builder.mutation<any, string>({
      query: (name) => ({
        url: `${name}`,
        method: "POST",
        body: name,
      }),
    }),
  }),
});

export const { useGetTodosQuery, usePostTodosMutation } = api;
