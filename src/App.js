import React, { useEffect, useState } from 'react'
import Header from './Components/ui/Header'
import Search from './Components/ui/Search'
import CharaterGrid from './Components/characters/CharaterGrid'
import axios from 'axios'

const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      setItems(result.data)
      setIsLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <Search
        getQuery={(q) => setQuery(q)}
      />
      <CharaterGrid
        isLoading={isLoading}
        items={items}
      />
    </div>
  )
}

export default App