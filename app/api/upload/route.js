export async function POST(request) {
  const data = await request.formData();
  const image = data.get('thumbnail');
  const video = data.get('video');
  const videoName = data.get('videoName');

  console.log('Thumbnail:', image);
  console.log('Video:', video);
  console.log('Video Name:', videoName);

  return Response.json({
    success: true,
    message: 'Thumbnail and Video Received',
    videoName: videoName
  });
}
