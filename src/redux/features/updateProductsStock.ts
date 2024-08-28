import { baseApi } from "../api/baseApi";

const updateProductsStock = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    updateProductStock: builder.mutation({
      query: (productInfo) => ({
        url: "products",
        method: "PATCH",
        body: productInfo,
      }),
      invalidatesTags: ["cart"],
    }),
  }),
});

export const { useUpdateProductStockMutation } = updateProductsStock;
