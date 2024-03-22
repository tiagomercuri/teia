import { useEffect, useState } from 'react'
import './App.css'
import PhotoCard from './components/PhotoCard/PhotoCard'
import getPhotos from './services/JsonApi'
import Paginator from './components/Paginator/Paginator'
import { Typography } from '@mui/material'



function App() {
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)

  function plusPage(){
    setPage(page+1)
  }

  function minusPage(){
    setPage(page-1)
  }

  useEffect(() => {
    getPhotos(page).then(response => {
      setList(response.data)
    })
  }, [page])

  return (
    <>
    <div className='app-box'>
    <Typography variant="h2" >TEIA Tiago Mercuri</Typography>
    <Paginator page={page} minusPage={minusPage} plusPage={plusPage} />
      <div className='list-box'>
        {list.map(data => {
          return (<PhotoCard data={data} key={data.id} />)
        })}
      </div>
    </div>
    </>
  )
}

export default App
