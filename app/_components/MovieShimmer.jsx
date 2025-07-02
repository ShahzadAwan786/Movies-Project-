import React from 'react'

const MovieShimmer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6 ">
            
           {Array.from({length:16}).map((_,i)=>(
            <div key={i} className="md:w-73 w-95 md:h-93 h-100 bg-gray-200 rounded-lg shadow-lg animate-pulse">
                   <div className="w-full h-48 bg-gray-300 rounded-t-lg animate-pulse " />
                   <div className='p-4'>
                <h2 className=" mb-1 w-2/4 h-8 bg-gray-300 animate-pulse"></h2>
                <p className="text-gray-700 flex">Size: <span className='bg-gray-300 w-17 h-5 ml-2  animate-pulse'></span> </p>
                <p className="text-gray-700 flex">Format:<span className='bg-gray-300 w-18  h-5 ml-2  animate-pulse'></span>  </p>
                <p className="text-gray-700 mb-3 flex ">Upload Date:<span className='bg-gray-300 w-22 h-5 ml-2  animate-pulse'></span>  </p>
                <a className="text-[#444646ee] cursor-pointer bg-[#6dafc1] px-13 py-3
                 rounded-2xl animate-pulse"></a>
                 </div>
            </div>
            ))}
        </div>
    )
}

export default MovieShimmer