import Chairs from "../../assets/chairs.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home (){
    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const handleInputChange = ({target: {value}}) =>{
        setSearch(value);
    };

    const handleCleanClick = () =>{
        setSearch('');
    };

    const handleSearchClick = () =>{
        navigate(`/results/${search.trim()}`)
    };


    return(
        <div className="flex h-screen overflow-hidden">
            <div className="w-2/5">
                <img src={Chairs} className="w-full h-full object-cover" alt="movie chairs bg"/>
            </div>
            <div className="w-3/5 flex justify-center items-center flex-col px-10" >
                <h2 className=" text-4xl font-bold font-lato">Busca tu Película...</h2>
                <input className="bg-special-gray font-lato w-full my-3 h-9 p-1 
                                    border focus:outline-none focus:ring-2 focus:ring-gray-500 rounded"
                                    value={search}
                                    onChange={handleInputChange}/>
                <div className="flex w-full justify-between text-2xl">
                    <button className=" h-9 bg-red-light hover:bg-red-dark 
                                        text-white font-lato w-full shadow-lg " 
                                        style={{width: "48%"}}
                                        onClick={handleSearchClick}>Buscar</button>
                    <button className=" h-9 bg-red-light hover:bg-red-dark 
                                        text-white font-lato w-full shadow-lg" 
                                        style={{width: "48%"}}
                                        onClick={handleCleanClick}
                                        >Limpiar</button>
                </div>
            </div>
        </div>
    );
}