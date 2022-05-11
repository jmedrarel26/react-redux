const Loading = () => {
    return (
        <div className="flex items-center justify-center flex-col h-full">
            <div atyle={{borderTopColor: "transparent"}} 
            className="w-18 h-18 border-4 border-solid 
            rounded-full animate-spin"></div>
            <p className="m-3">Buscando peliculas...</p>
        </div>
    );
}

export default Loading;