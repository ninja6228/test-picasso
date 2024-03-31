import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IPost} from '../../utils/type/IPost';
import {BASE_URL} from '../../utils/constant';

export const apiPost = createApi({
  reducerPath: 'apiPost',
  baseQuery: fetchBaseQuery({baseUrl: BASE_URL}),
  endpoints: (builder) => ({
    getListPosts: builder.query<IPost[], number>({
      query: (offset: number) => `/posts?_limit=${offset}`
    }),
    getPostById: builder.query<IPost,  number>({
      query: (id: number) => `/posts/${id}`
    }),
  }),
});

export const { useGetListPostsQuery, useGetPostByIdQuery} = apiPost;