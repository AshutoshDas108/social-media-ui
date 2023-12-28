//cloudinary://816349958718245:acmKSrhDuvaCRITPabYePz-8NJE@dcbwgrpqr --> CloudAPI

const cloud_name = 'dcbwgrpqr'
const upload_preset = 'socialmediaconnect'

export const uploadToCloudniry = async (pics,fileType)=>{

    if(pics && fileType){

        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", upload_preset );
        data.append("cloud_name",  cloud_name);

        const res = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/${fileType}/upload`,
        {method:'post', body:data}
        )


        const fileData = await res.json()

        console.log("fileData", fileData.url);
        return fileData.url;

    }
    else{
        console.log('error...')
    }



}