import React from 'react'
import './Paginator.css'
import { Button, Typography } from '@mui/material'

function Paginator({ page, plusPage, minusPage, disableNext }) {
    return (
        <div className='paginator-box'>
            <Button variant="contained" disabled={page == 1} onClick={() => {
                minusPage()
            }}>Anterior</Button>
            <Typography>Página Atual: {page}</Typography>
            <Button disabled={disableNext} variant="contained" onClick={() => {
                plusPage()
            }}>Próximo</Button>
        </div>
    )
}

export default Paginator