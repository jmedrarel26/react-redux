import { createAction } from "@reduxjs/toolkit";

const BASE_URL = "https://online-movie-database.p.rapidapi.com/title";
const  headers = {
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
    'X-RapidAPI-Key': '640f6fd7b6msh33329386782425dp1c85edjsnc5a034c48c96'
}

export const startFetchMovieRatings = createAction('START_FETCH_MOVIE_RATINGS');
export const successFetchMovieRatings = createAction('SUCCESS_FETCH_MOVIE_RATINGS');
export const errorFetchMovieRatings = createAction('ERROR_FETCH_MOVIE_RATINGS');

export const fetchMovieRatings = (movieId) => async (dispatch) =>{
    try{
        dispatch(startFetchMovieRatings());   
        const response = await fetch(`${BASE_URL}/get-ratings?tconst=${movieId}`, {headers});
        const data = await response.json();
        dispatch(successFetchMovieRatings({data}));
    } catch (error){
        dispatch(errorFetchMovieRatings(error));
    }
}

export const startFetchMovieDetails = createAction('START_FETCH_MOVIE_DETAIL');
export const successFetchMovieDetails = createAction('SUCCESS_FETCH_MOVIE_DETAIL');
export const errorFetchMovieDetails = createAction('ERROR_FETCH_MOVIE_DETAIL');


export const fetchMovieDetail = (movieId) => async (dispatch) => {
    try {
        dispatch(startFetchMovieDetails());

        const overviewDetailsResponse = await fetch(`${BASE_URL}/get-overview-details?tconst=${movieId}`, { headers });
        const overviewDetailsData = await overviewDetailsResponse.json();

        const topCastResponse = await fetch(`${BASE_URL}/get-top-cast?tconst=${movieId}`, { headers });
        const topCastData = await topCastResponse.json();

        const detailsResponse = await fetch(`${BASE_URL}/get-details?tconst=${movieId}`, { headers });
        const detailsData = await detailsResponse.json();

        const fullCreditsResponse = await fetch(`${BASE_URL}/get-full-credits?tconst=${movieId}`, { headers });
        const fullCreditsData = await fullCreditsResponse.json();

        dispatch(successFetchMovieDetails({
            overview: overviewDetailsData,
            topCast: topCastData,
            details: detailsData,
            fullCredits: fullCreditsData,
           }));
    }catch (error){
        dispatch(errorFetchMovieDetails({ error }));
    }
    
}