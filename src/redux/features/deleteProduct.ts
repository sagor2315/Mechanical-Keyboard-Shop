import { baseApi } from "../api/baseApi";

const delteProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    delteProduct: builder.mutation({
      query: (productId) => ({
        url: `products/${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const { useDelteProductMutation } = delteProductApi;
