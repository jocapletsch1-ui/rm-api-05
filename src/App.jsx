import s from './App.module.css'
import { useEffect, useState } from 'react'
import { api } from './constants/api'

import logo from '/logo-removebg-preview.png'

function App() {
  const [data, setData] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    api.get(`/character/?page=${page}`).then((response) => {
    setData(response.data.results)
    }).catch((error) => {
      console.error(error)
    })
  }, [page])
  

  return (
    <>
      <div>
        <label>Digite a página desejada:</label>
        <input
          type="number" placeholder='1-42' min={1} max={42} value={page} onChange={(e) => setPage(e.target.value)}
        />
      </div>
      <img className={s.logo} src={logo} alt="Logo" />
      <main>
        {data.map((item, index) => {
          return(
            <div className={s.character} key={index}>
            <div className={s.imagem}>
              <img src={item.image} alt={item.name} />
            </div>
            <div className={s.infos}>  
              <h2>Name: {item.name}</h2>
              <p>Species: {item.species}</p>
              {item.status === 'Dead' ? " Status: Dead 💀" : item.status === 'Alive' ? " Status: Alive 😊" : <p>Status: {item.status}</p>}
              <p>Origin: {item.origin.name}</p>
            </div>
            </div>
          )     
        })}
      </main>
    </>
  )
}

export default App
