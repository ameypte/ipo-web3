const axios = require('axios')
const FormData = require('form-data')
const fs = require('fs')
const JWT = 'Bearer PASTE_YOUR_PINATA_JWT'

export const GET = async(req,res)=>{
    try {
        await pinFileToIPFS(res);
    
        const posts = await Post.find().populate('creator').sort({ timestamp: -1 });
        console.log("Received all posts request");
    
        if (!posts) return new Response('Posts not found', { status: 404 });
    
        return new Response(JSON.stringify(posts), { status: 200 });
      } catch (error) {
        console.error(error);
        return new Response('Failed to fetch posts', { status: 500 });
      }
}
const pinFileToIPFS = async (res) => {
    const formData = new FormData();
    const src = "path/to/file.png";
    
    const file = fs.createReadStream(src)
    formData.append('file', file)
    
    const pinataMetadata = JSON.stringify({
      name: 'File name',
    });
    formData.append('pinataMetadata', pinataMetadata);
    
    const pinataOptions = JSON.stringify({
      cidVersion: 0,
    })
    formData.append('pinataOptions', pinataOptions);

    try{
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        maxBodyLength: "Infinity",
        headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
          Authorization: JWT
        }
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
}
