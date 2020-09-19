import React, { useState, useEffect } from 'react';
import axios from './axios';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            console.table(request);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    console.log(movies);

    return(
        <div className="row">
            {/* Title */}
            <h2>{title}</h2>

            <div className="row__posters">
                {/* several row__poster */}
                {movies.map(movie => (
                    <img 
                    className="row__poster"
                    src={`${base_url}${movie.poster_path}`} 
                    alt={movie.name} />
                ))}
            </div>
            {/* Container -> posters */}
            
        </div>
    )
}

export default Row