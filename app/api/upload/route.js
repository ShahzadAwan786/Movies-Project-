import fs from 'fs';
import path from 'path';


export async function POST(request) {
  const data = await request.formData();
  const image = data.get('thumbnail');
  const video = data.get('video');
  const videoName = data.get('videoName');

const rootFolder = path.join(process.cwd(),"public", "Movies")
if (!fs.existsSync(rootFolder)){
  fs.mkdirSync(rootFolder)
}


const movieFolder = path.join(rootFolder,videoName)

if(fs.existsSync(movieFolder)){
  
 return Response.json({
  success:false,
  message:`Folder with the name ${videoName} already exist`
 })
}

fs.mkdirSync(movieFolder);

// const fileName = [image, video]
// if(!fs.existsSync(fileName)){
//   fs.writeFileSync(fileName)
// }


if(image && image.name){
  const imagePath = path.join(movieFolder,image.name)
  const buffer = Buffer.from(await image.arrayBuffer());
  fs.writeFileSync(imagePath,buffer);
  

}

if(video && video.name){
  const videoPath = path.join(movieFolder,video.name)
  const buffer = Buffer.from(await video.arrayBuffer());
  fs.writeFileSync(videoPath,buffer);
  

}


  // console.log('Thumbnail:', image);
  // console.log('Video:', video);
  // console.log('Video Name:', videoName);



  return Response.json({
    success: true,
    message: 'Thumbnail and Video Received',
    videoName: videoName
  });
}
