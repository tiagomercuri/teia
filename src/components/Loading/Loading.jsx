import React from 'react'
import './Loading.css'
import { CircularProgress, Typography } from '@mui/material'

function Loading() {
  return (
    <div>
        <Typography>
            Carregando Fotos
        </Typography>
        <CircularProgress />
    </div>
  )
}

export default Loading