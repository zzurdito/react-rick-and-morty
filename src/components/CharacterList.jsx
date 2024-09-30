/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react'
import Character from'./Character'

function NavPage(props){
    return (
        <header className='d-flex justify-content-between align-items-center'>
            <p>Page: {props.page}</p>
            <button className='btn btn-primary btn-sm'
            onClick={() => {
                props.setPage(props.page +1)
            }}>
                Page: {props.page +1}
            </button>
        </header>
    )
}

function CharacterList() {
    
    const [characters,setCharacters] = useState([])
    const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(1)
    useEffect(() => {
      async function fetchData() {
        const response = await fetch('https://rickandmortyapi.com/api/character?page=' + page)
        const data = await response.json()
        setLoading(false);
        setCharacters(data.results);
      }
      fetchData();
    }, [page])


  return (
    <div className='container bg-danger'>

        <NavPage page={page} setPage={setPage}/>
        {
            loading ? (<h1>Loading...</h1>) 
            : (
                <div className='row'>
                {
                    characters.map(character => {
                    return(
                        <div className='col-md-4' key={character.id}>
                            <Character name={character.name} image={character.image}/>
                        </div>
                    )           
                    })
                }  
                </div>
            )
        }
        <NavPage page={page} setPage={setPage}/>
        
  </div>
  )
}

export default CharacterList