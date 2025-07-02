'use client';
import { useEffect, useState } from "react";
import MovieShimmer from "./MovieShimmer";

const Movies = () => {
  const [loading,setLoading]= useState(true)
    const [movies, setMovies] = useState([]);
    useEffect( ()=>{
    fetch("/api/movies")
    .then((res)=> res.json())
    .then((data)=> setMovies(data))
    .then((shimmer)=>setLoading(shimmer))
}, [])
if (loading) return <MovieShimmer/>
  return (
    
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6"> 
  {movies.map((movies, idx )=> {
    return (
        <div key={idx} className="rounded-lg shadow-lg overflow-hidden bg-gray-200 ">
            <img src={movies.thumbnailUrl} alt={movies.title} className="w-full h-48 object-cover" />
            <div className="p-4">
                <h2 className="text-xl font-bold mb-2">{movies.title || "Untitled Movie"}</h2>
                <p className="text-gray-700">Size: {movies.metadata.size} MB</p>
                <p className="text-gray-700">Format: {movies.metadata.format}</p>
                <p className="text-gray-700 mb-4">Upload Date: {(movies.metadata.created_at)}</p>
                <a href={movies.videoUrl} className="text-[#444646ee] cursor-pointer bg-[#6dafc1] p-3
                 rounded-2xl ">Watch Video</a>
            </div>

        </div>

    )
  })}
 
    </div>
  )
}

export default Movies