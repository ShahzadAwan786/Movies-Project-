'use client'

import { useRef, useState } from "react"


const Admin = () => {
    const [thumbnail, setThumbnail] = useState(null);
    const [video, setVideo] = useState(null);
    const [name, setName] = useState('');
    const [previewUrl, setPreviewUrl] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const form = useRef(null);


    const handleThumbnailChange = (e) => {
        
        const file = e.target.files[0];
        setThumbnail(file);

        if (file && file.type.startsWith('image/')) {
            setPreviewUrl(URL.createObjectURL(file));
        }
        else {
            setPreviewUrl('')
        }


    }

    const handleVideoChange = (e) => {
        const file = e.target.files[0]
        setVideo(file)



    }

    const handleVideoName = (e) => {
        setName(e.target.value)
    }

    const onhandleSubmit = async (e) => {

        e.preventDefault()
        setSubmitted(true)
        if (!thumbnail || !video || !name) return

        const formData = new FormData();
        formData.append('thumbnail', thumbnail)
        formData.append('video', video)
        formData.append('videoName', name)



        const res = await fetch('/api/upload', {
            method: "POST",
            body: formData,

        })
        const data = await res.json()
        if (data.success) {
            setThumbnail(null);
            setVideo(null);
            setName('');
            setPreviewUrl('');
            setSubmitted(false);
            form.current.reset();
            alert('Upload Successfully')
        }
        else {
            alert(data.message)
        }


    }



    return ( 
        <div className="p-4 max-w-md  mx-auto my-10"> 
            <form ref={form} className="space-y-4" onSubmit={onhandleSubmit}>
                <div className="">
                    <input className= {`border p-2 w-full ${submitted&&!thumbnail ? 'border-red-500':''}`} type="file" accept="image/*" onChange={handleThumbnailChange} />
                    
                    {submitted && !thumbnail && (<p className="text-red-300 text-sm">Thumbnail is required</p>)}

                </div>
                {previewUrl && (
                    <div>
                        <img src={previewUrl} alt="Preview" width={200} />

                    </div>
                )}
                <div>
                    <input type="text"
                        placeholder="Enter video name."
                        value={name}
                        onChange={handleVideoName}
                       className= {`border p-2 w-full ${submitted&&!thumbnail ? 'border-red-500':''}`} />
                    {submitted && !name && (<p className="text-red-300 text-sm">Video name is required</p>)}

                </div>
                <div>
                    <input type="file" accept="video/*" onChange={handleVideoChange} className= {`border p-2 w-full ${submitted&&!thumbnail ? 'border-red-500':''}`} />
                    {submitted && !video && (<p className="text-red-300 text-sm">Video is required</p>)}

                </div>
                <div>
                    <button type='submit' className="hover:bg-amber-200 bg-amber-100 w-full p-2 rounded font-semibold  cursor-pointer">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Admin

