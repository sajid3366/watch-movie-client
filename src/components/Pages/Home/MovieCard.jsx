import './Movie.css'
const MovieCard = ({ movie }) => {
    const { id, image, movieTitle, type, genre, year } = movie;
    // console.log(object);
    return (
        <div className="card text-white cursor-pointer ">
            <img className="h-[300px] rounded-xl mb-3 effect" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
            <h2 className="text-xl font-semibold">{movieTitle}</h2>
            <div className=" flex gap-x-3 mt-2 text-sm text-[#e0e0e0]" >
                <p>{type}</p>
                <p>{genre}</p>
                <p>{year}</p>

            </div>
        </div>
    );
};

export default MovieCard;