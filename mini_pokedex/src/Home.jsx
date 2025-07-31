import { useState } from "react"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { Link } from "react-router-dom"

const [ page, setPage ] = useState(0);
const offset = page*20;
const fetchPokemon = async (offset) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
    return response.data;
};

const { isLoading, isError } = useQuery({
    queryKey: ['pokemon', offset],
    queryFn: () => fetchPokemon(offset)
});

if(isLoading) {
    return (<p>Loading...</p>)
}

return (<div>
        <ul>
            {data.result.map((pokemon) => {
                <li key={pokemon.name}>
                    <Link to={`/pokemon/${pokemon.name}`}>
                        {pokemon.name}
                    </Link>
                </li>
            })}
        </ul>
    </div>)