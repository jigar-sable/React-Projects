import React from 'react'
import Movie from './Movie';
import FlipMove from 'react-flip-move';

const Movies = ({ movies }) => {
    return (
        <FlipMove className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {
                movies.map((movie) => (
                    <Movie key={movie.id} movie={movie} />
                ))
            }
        </FlipMove>
    )
}

export default Movies
