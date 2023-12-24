import { Box, TextField } from '@mui/material'
import React from 'react'

const SearchUser = () => {
  return (
    <div className='items-center'>
      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField className='rounded-lg'
      id="outlined-basic" label="search popular user" variant="outlined" />
      </Box>
    </div>
  )
}

export default SearchUser
