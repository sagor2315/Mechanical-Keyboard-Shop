import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://mechanical-keyboard-server-site-sagors-projects-47d24db0.vercel.app/api/",
  }),
  tagTypes: ["cart"],
  endpoints: () => ({}),
});
