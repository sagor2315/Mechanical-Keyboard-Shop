import { baseApi } from "../api/baseApi";

const createProductApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createNewProduct: builder.mutation({
      query: (productInfo) => ({
        url: "products/create-product",
        method: "POST",
        body: productInfo,
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const { useCreateNewProductMutation } = createProductApi;
