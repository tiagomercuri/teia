import { useEffect, useState } from 'react'
import './App.css'
import PhotoCard from './components/PhotoCard/PhotoCard'
import getPhotos from './services/JsonApi'
import Paginator from './components/Paginator/Paginator'
import { Typography } from '@mui/material'
import TextField from '@mui/material/TextField';
import Loading from './components/Loading/Loading'

function App() {
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(false)

  function plusPage() {
    setPage(page + 1)
  }

  function minusPage() {
    setPage(page - 1)
  }

  useEffect(() => {
    setLoading(true)
    getPhotos(page, search).then(response => {
      setList(response.data)
    }).finally(() => {
      setLoading(false)
    })
  }, [page, search])

  return (
    <>
      <div className='app-box'>
        <Typography sx={{ marginTop: 10, textAlign: 'center' }} variant="h2" >TEIA Tiago Mercuri</Typography>
        <div className='campo'>
          <TextField
            value={search}
            onChange={(event) => {
              setSearch(event.target.value)
              setPage(1)
            }}
            id="outlined-basic" label="Pesquisa" variant="outlined" />
        </div>
        {loading ? (<Loading />) : (<div className='results'>
          <Paginator disableNext={list.length == 0} page={page} minusPage={minusPage} plusPage={plusPage} />
          <div className='list-box'>
            {list.map(data => {
              return (<PhotoCard data={data} key={data.id} />)
            })}
          </div>
          <Paginator disableNext={list.length == 0} page={page} minusPage={minusPage} plusPage={plusPage} />
        </div>)}
      </div>
    </>
  )
}

export default App
