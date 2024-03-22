import React from 'react'
import './PhotoCard.css'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function PhotoCard({ data }) {
    return (
        <div>
            <Card sx={{ width: 350, height:500 }}>
                <CardHeader
                    title={`ID Album: ${data.albumId} ID: ${data.id}`}
                />
                <CardMedia
                    component="img"
                    height={250}
                    image={data.thumbnailUrl}
                    alt="imagem não encontrada"
                />
                <CardContent>
                    <Typography>
                        {data.title}
                    </Typography>
                </CardContent>
                <CardActions> 
                    <a href={data.url} target="_blank">
                        <Button>
                            Ver imagem
                        </Button>
                    </a>
                </CardActions>
            </Card>
        </div>
    )
}

export default PhotoCard