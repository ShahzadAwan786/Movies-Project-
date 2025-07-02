import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';


const supportedFormats = ['mp4', 'mkv', 'avi', 'mov'];
const thumbnailFormats= ['jpg','png' ]



export async function GET() {

    const movieDir = path.join(process.cwd(), "public", "Movies")
    const folders = fs.readdirSync(movieDir);

    const movies = folders.map((folder) => {
        const folderPath = path.join(movieDir, folder);
        const filePath = fs.readdirSync(folderPath);

        const videoName = filePath.find(file =>  supportedFormats.includes(path.extname(file).replace('.','').toLowerCase()));
        const thumbnailName = filePath.find(file =>  thumbnailFormats.includes(path.extname(file).replace('.','').toLowerCase())
        );

        const videoPath = path.join(folderPath, videoName)
        const thumbnailPath = path.join(folderPath,thumbnailName)

    

        if (!fs.existsSync(videoPath)) return null;
        if (!fs.existsSync(thumbnailPath)) return null;


        const stats = fs.statSync(videoPath );

        const fileSizeInBytes = Math.round((stats.size)/(1024*1024));
        const timeStamp = new Date(stats.birthtime)
        const time= timeStamp.toUTCString()
        const creationTime = time.slice(4, 16)
    
        const format = path.extname(videoName).replace('.', '');

        return {
            title: path.basename(videoPath, path.extname(videoPath)),
            videoUrl: `/Movies/${folder}/${videoName}`,
            thumbnailUrl: `/Movies/${folder}/${thumbnailName}`,
            metadata: {
                size: fileSizeInBytes,
                created_at: creationTime,
                format
            }

        }


    }).filter(Boolean)
    return NextResponse.json(movies);
}