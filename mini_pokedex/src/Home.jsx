import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { NavLink } from "react-router-dom"
import './App.css'

export default function Home() {
    const [ page, setPage ] = useState(0);
    const offset = page*20;
    const fetchPokemon = async (offset) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
        return response.data;
    };

    const { isLoading, data, isError } = useQuery({
        queryKey: ['pokemon', offset],
        queryFn: () => fetchPokemon(offset)
    });

    if(isLoading) {
        return (<p>Loading...</p>)
    }

    
    if(isError){
        return (<p>Something went wrong</p>)
    }

    return (
        <div className="flex flex-col items-center">
            <ul className="grid grid-cols-3 gap-5 mb-8">
                {data.results.map((pokemon) => (
                    <li key={pokemon.name} className="w-1/3 p-1">
                        <NavLink to={`/pokemon/${pokemon.name}`} className="text-blue-600 underline hover:text-blue-800">
                            {pokemon.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
            <div className="flex items-center gap-8">
                <button 
                    onClick={() => setPage((p) => Math.max(p-1,0))} 
                    disabled={page === 0} 
                    className="w-1/8 p-2  bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded"
                >
                    Previous
                </button>
                <span>
                    Page {page+1}
                </span>
                <button 
                    onClick={() => setPage((p) => p+1)} 
                    disabled={!data.next} 
                    className="w-1/8 p-2 bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded"
                >
                    Next
                </button>
            </div>
        </div>
    )
}