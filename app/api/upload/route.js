const axios = require('axios');
const JWT = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiYTI4MGI2Ni1hNTEwLTRiYmEtOWI1NS1iNjRlNGY5NGRmMDAiLCJlbWFpbCI6ImhlcmFtYi5iaG9vZGhhckBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiYWE5MTY4NDQ2NWNjYzg5YWFlM2MiLCJzY29wZWRLZXlTZWNyZXQiOiJmNTQ3MTk1Mzk5YjNkOGJiZmRhNDFiNzMzZjE4YWE4NGJhNjMzN2NmMGZmMjEzYjE1ZWQ1OWQ3Yjk1ZmRjMjFlIiwiaWF0IjoxNzA3NjIxNzM3fQ.WVXQQ3D9zu1SofPAWwYYVSx_T2X7H61fBZbQcfz4yg0';


export const POST = async(req,res)=>{
    try {
        const data = await req.json();
     
        await pinJSONToIPFS(data);
        return new Response(JSON.stringify(data), { status: 200 });
      } catch (error) {
        console.error(error);
        return new Response('Failed to fetch posts', { status: 500 });
      }
   
}
const pinJSONToIPFS = async (jsonData) => {
    // Your JSON data
  console.log(jsonData);
   try {
      const res = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", jsonData, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${JWT}`
        }
      });
      console.log(res.data);
    } catch (error) {
      console.error(error);
    }
  }
// pinJSONToIPFS({"hi":123,"hello":1234});
