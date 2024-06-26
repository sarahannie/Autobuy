import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://autobuy-server.onrender.com/seller',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem('auth');
    if (token) {
      
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }
});

export const productApi = createApi({
  reducerPath: 'productApi',
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    addProduct: builder.mutation({
      query: (formData) => ({
        url: '/add-product',
        method: 'POST',
        body: formData
      })
    }),
    editProduct: builder.mutation({
      query: ( {  ...formData  }) => ({
        url: '/edit-product',
        method: 'PUT',
        body: {  ...formData }
      })
    }),
    getProducts: builder.query({
      query: () => ({
        url: '/profile',
        method: 'GET'
      })
    }),
    deleteProduct: builder.mutation({
      query: (productTag) => ({
        url: `/delete-product`,
        method: 'DELETE',
        body: { productTag }
      })
    })
  })
});

export const { useAddProductMutation, useGetProductsQuery, useEditProductMutation, useDeleteProductMutation } = productApi;
