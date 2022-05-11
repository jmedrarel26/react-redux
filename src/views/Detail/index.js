import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import {fetchMovieDetail, fetchMovieRatings} from "../../redux/actions/movies";
import yellowStar from '../../assets/yellow-star.png'

const Detail = () => {
    const { movieId } = useParams();
    const dispatch = useDispatch();
    const { 
     isFetchingMovieRatings,
     isFetchingMovieDetail,
     isLoading,
     errorFetchingMovieDetail,
     errorFetchingMovieRatings,
     ratings,
     movieDetail,
     } = useSelector((state) => state.moviesReducer);
   
    useEffect(() => {
     dispatch(fetchMovieRatings(movieId));
    }, [dispatch, movieId]);
   
    useEffect(() => {
     dispatch(fetchMovieDetail(movieId));
    }, [dispatch, movieId]);

    console.log("movieDetailinfo")
    console.log(ratings);

    return(
        <div className="flex flex-row px-16 h-screen items-center justify-center">
            <div className="w-1/3 flex justify-center">
                <img src={movieDetail?.details?.image?.url} alt="movie-details" className="w-80"/>
            </div>
            <div className="flex flex-col w-2/3 items-start overflow-y-auto my-16 justify-center">
            <h2 className="text-4xl font-bold my-1">
                {`${movieDetail?.details?.title} (${movieDetail?.details?.year})`}
                </h2>
            <div className="flex flex-row my-1 tiems-center">
                <span className="text-xl font-bold w-full">{ratings?.rating}</span>
                <img src={yellowStar} alt = "rating-star" className="ml-1 w-6 h-6"/>
            </div>
                <p className="text-left">{movieDetail?.overview?.text}</p>
                <div className="flex flex-row my-1">
                    <span className="font-bold mr-1">Genero:</span>
                    {movieDetail?.overview?.genres?.map((value, index) => (
                        <span key={index}>
                            {`${value}${index !== movieDetail?.overview?.genres.length -1 ? ',' : ''}`}
                        </span>
                    ))}
                </div>
                <div className="flex flex-row my-1  flex-warp">
                    <span className="font-bold mr-1">Cast:</span>
                        {movieDetail?.fullcredits?.cast?.map((name, index) => (
                        <span key={index} className="mr-1">
                            {`${name}${index !== movieDetail?.fullcredits?.cast?.length -1 ? ',' : ''}`}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Detail;