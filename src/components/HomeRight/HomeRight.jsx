import React from 'react'
import SearchUser from '../SearchUser/SearchUser'
import PopularUsercard from './PopularUsercard';
import { Card } from '@mui/material';

const users = [1,1,1,1,1];

const HomeRight = () => {
  return (
    <div className='pr-5'>
      <SearchUser/>
      <Card>
        
      </Card>
      <div className='flex justify-between py-5 items-center'>

        <p className='font-sm opacity-70'>
          Suggestions for You
        </p>

        <p className='font-sm text-xs opacity-95'>
          View All
        </p>

      </div>

      <div className='space-y-5'>

        <PopularUsercard />


      </div>
    </div>
  )
}

export default HomeRight
