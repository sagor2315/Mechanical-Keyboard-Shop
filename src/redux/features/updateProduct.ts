import { baseApi } from "../api/baseApi";

const updateProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProduct: builder.mutation({
      query: (productInfo) => ({
        url: `products/${productInfo?._id}`,
        method: "PUT",
        body: productInfo,
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const { useUpdateProductMutation } = updateProductApi;
