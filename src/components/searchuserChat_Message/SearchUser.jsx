import { Avatar, Card, CardHeader } from '@mui/material';
import React, { useState } from 'react'

const SearchUser = () => {

    const [username, setUsername] = useState("");

    const handleSearchUser = (e) => {
       setUsername(e.target.value);
        console.log('Search user');
    };

    const handleClick = (id) => {
        console.log(id)
    };

  return (
    <div>
    <div className='py-5 relative'>

        <input className='bg-transparent border border-[#3b4054]
           outline-none w-full px-5 py-3 rounded-full'
           placeholder='search user...'
           onChange={handleSearchUser}
         type='text'/>

{
       username && <Card className='absolute w-full z-10 top-[4.5rem] cursor-pointer'> 

          <CardHeader onClick={()=>{
            handleClick()
            setUsername("")
          }}
           avatar = {<Avatar src=''/>}
           title='Sudeepta Sagarika'
           subheader={"suddepta"}
          />

       </Card>

         

    }
      
    </div>
   
    </div>
  )
}

export default SearchUser
