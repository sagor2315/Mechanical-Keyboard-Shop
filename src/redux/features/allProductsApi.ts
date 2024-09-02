import { baseApi } from "../api/baseApi";

type QueryPropsTypes = {
  searchItem: string;
  minPrice: number | null;
  maxPrice: number | null;
  sortOrder: string;
};

const allProductsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: ({
        searchItem,
        minPrice,
        maxPrice,
        sortOrder,
      }: QueryPropsTypes) => {
        const queryParams = new URLSearchParams();

        if (searchItem) {
          queryParams.append("searchItem", searchItem);
        }

        if (minPrice !== null) {
          queryParams.append("minPrice", minPrice.toString());
        }

        if (maxPrice !== null) {
          queryParams.append("maxPrice", maxPrice.toString());
        }

        if (sortOrder) {
          queryParams.append("sortOrder", sortOrder);
        }

        const queryString = queryParams.toString();
        const url = queryString ? `products?${queryString}` : "products";

        return { url, method: "GET" };
      },
      providesTags: ["cart"],
    }),
  }),
});

export const { useGetAllProductsQuery } = allProductsApi;
