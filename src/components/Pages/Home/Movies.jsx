// import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import '../Shared/Navbar/navbar.css'
import MovieCard from './MovieCard';
const Movies = () => {


    // const {data: movies=[]} = useQuery({
    //     queryKey:['moviescollection'],
    //     queryFn: async () =>{
    //         const res = await fetch('moviesCollection.json')
    //         // .then(res => console.log(res.data))
    //         console.log(res);
    //         return res;
    //     }
    // })
    // console.log(movies);

    const [movies, setMovies] = useState([]);
    useEffect(() => {
        fetch('/moviesCollection.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setMovies(data)
            })
    }, [])
    // console.log(movies);
    return (

        <div className='max-w-7xl mx-auto my-12'>
            <div className=" h-20 text-white bg-[#131720] mt-14 rounded-lg px-5">
                <div className="flex items-center  pt-5 justify-between">
                    <div>
                        <select name="" id="" className='bg-[#131720] cursor-pointer mr-5'>
                            <option selected value="">All Generes</option>
                            <option value="">Action</option>
                            <option value="">Family</option>
                            <option value="">Comedy</option>
                        </select>
                        <select name="" id="" className='bg-[#131720] cursor-pointer'>

                            <option selected value="">All the year</option>
                            <option className='' value="">'90s</option>
                            <option value="">'70s</option>
                            <option value="">'80s</option>
                        </select>
                    </div>

                    <div className='bg-black py-2 rounded-xl px-3 flex justify-between space-x-5'>
                        <div className='cursor-pointer'>Fetured</div>
                        <div className='cursor-pointer'>Popular</div>
                        <div className='cursor-pointer'>Newest</div>
                    </div>

                </div>

            </div>
            <div className='mt-10 grid grid-cols-6 gap-7 '>

                {
                    movies.map(movie => <MovieCard key={movie.id} movie={movie}></MovieCard>)
                }

                
            </div>
        </div>
    );
};

export default Movies;