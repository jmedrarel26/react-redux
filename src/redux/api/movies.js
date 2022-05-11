import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const headers = {
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
	'X-RapidAPI-Key': '640f6fd7b6msh33329386782425dp1c85edjsnc5a034c48c96'
};

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({ baseUrl:'https://online-movie-database.p.rapidapi.com'}),
    endpoints : (builder) => ({
        fetchMovies: builder.query({
            query: (title) => ({
                url: `/title/find?q=${title}`,
                method: 'GET',
                headers
            })
        }),
    })
});

export const {useFetchMoviesQuery} = moviesApi;

