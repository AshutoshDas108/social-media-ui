export const likedByReqUser = (post, reqUserId)=>{
    for(let user of post.liked){

        if(reqUserId===user.id){
            return true;
        }

    }
}