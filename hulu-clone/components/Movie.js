import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/solid';
import { forwardRef } from 'react';

const Movie = forwardRef(({ movie }, ref) => {

    const BASE_URL = "http://image.tmdb.org/t/p/original/";

    return (
        <div ref={ref} className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
            <Image
                layout='responsive'
                src={
                    `${BASE_URL}${movie.backdrop_path || movie.poster_path}` ||
                    `${BASE_URL}${movie.poster_path}`
                }
                height={1000} width={1920}
                alt={movie.title || movie.original_name}
            />

            <div className='p-2'>
                <p className='truncate max-w-md'>{movie.overview}</p>

                <h2 className='mt-1 text-2xl text-white transition duration-100 ease-in-out group-hover:font-bold'>
                    {movie.title || movie.original_name}
                </h2>

                <p className='flex items-center capitalize opacity-0 group-hover:opacity-100 transition-opacity duration-75 ease-in'>
                    {movie.media_type && `${movie.media_type} •`} {" "}
                    {movie.release_date || movie.first_air_date} • {" "}
                    <ThumbUpIcon className='h-5 mx-2' /> {movie.vote_count}
                </p>
            </div>
        </div>
    )
})

Movie.displayName = 'Movie';
export default Movie
