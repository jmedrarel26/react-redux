import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import movieImage from '../../assets/movie-theater.png';
import { useFetchMoviesQuery } from '../../redux/api/movies';
import Loading from './components/Loading';
import List from './components/List';


export default function Results (){
    const {title} = useParams();
    const navigate = useNavigate();
    const {data,
            error, 
            isLoading,
            isSuccess,
            isFetching} = useFetchMoviesQuery(title);

    const handleListItemClick = (movieId) => {
        navigate(`/detail/${movieId}`);
    };        

    const renderContent = () =>{
        if(error){
            return (<div className='items-center justify-center h-full flex'>
                <p className='text-xl'>{error.error}</p>
                </div>);
        } else if (isLoading || isFetching){
           return <Loading/>
        } else if (isSuccess && data?.results){
            return <List data ={data?.results} onListItemClick ={handleListItemClick}/>;
        }
    };        
     
    return(
        <div className="flex flex-row">
            <div className="w-3/5 h-screen overflow-y-auto px-10">
                {renderContent()}
            </div>
            <div className="w-2/5">
            <img src={movieImage} className="w-full h-screen object-cover" alt="movie theater bg"/>
            </div>
        </div>
    );
}