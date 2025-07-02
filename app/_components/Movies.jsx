'use client';
import { useEffect, useState } from "react";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    useEffect( ()=>{
    fetch("/api/movies")
    .then((res)=> res.json())
    .then((data)=> setMovies(data))
}, [])
  return (
    <div className="grid grid-cols-4 gap-4 p-6"> 
  {movies.map((movies, idx )=> {
    return (
        <div key={idx} className="rounded-lg shadow-lg overflow-hidden bg-gray-200">
            <img src={movies.thumbnailUrl} alt={movies.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{movies.title || "Untitled Movie"}</h2>
                <p className="text-gray-700">Size: {movies.metadata.size} MB</p>
                <p className="text-gray-700">Format: {movies.metadata.format}</p>
                <p className="text-gray-700 mb-3">Created_at: {(movies.metadata.created_at)}</p>
                <a href={movies.videoUrl} className="text-[#444646ee] cursor-pointer bg-[#6dafc1] p-3
                 rounded-2xl">Watch Video</a>
            </div>

        </div>

    )
  })}
 
    </div>
  )
}

export default Movies