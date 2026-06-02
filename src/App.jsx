import './App.module.css'
import { useEffect, useState } from 'react'
import { api } from './constants/api'

function App() {
  const [data, setData] = useState([])


  useEffect(() => {
    api.get('/character').then((response) => {
    setData(response.data.results)
    }).catch((error) => {
      console.error(error)
    })
  }, [])
  

  return (
    <>
      <img src="" alt="" />
      <main>
        {data.map((item, index) => {
          return(
            <div key={index}>
              <img src={item.image} alt={item.name} />
              <h2>Name: {item.name}</h2>
              <p>Species: {item.species}</p>
              {item.status === 'Dead' ? " Status: Dead 💀" : 'Alive' ? " Status: Alive 😊" : <p>Status: {item.status}</p>}
              <p>Origin: {item.origin.name}</p>
            </div>
          )
        })}
      </main>
    </>
  )
}

export default App
