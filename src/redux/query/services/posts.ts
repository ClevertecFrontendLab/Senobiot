import { ApiEndpoints } from '../constants/api';
import { ApiGroupNames } from '../constants/api-group-names';
import { EndpointNames } from '../constants/endpoint-names';
import { Tags } from '../constants/tags';
import { apiSlice } from '../create-api';

export const postsApiSlice = apiSlice
    .enhanceEndpoints({
        addTagTypes: [Tags.POSTS],
    })
    .injectEndpoints({
        endpoints: (builder) => ({
            getPosts: builder.query<void, void>({
                query: () => ({
                    url: ApiEndpoints.POSTS,
                    method: 'GET',
                    apiGroupName: ApiGroupNames.POSTS,
                    name: EndpointNames.GET_POSTS,
                }),
                providesTags: [Tags.POSTS],
            }),
        }),
    });

export const { useGetPostsQuery } = postsApiSlice;
