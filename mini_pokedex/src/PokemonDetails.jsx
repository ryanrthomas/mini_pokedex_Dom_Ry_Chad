import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";


export default function PokemonDetails(){
    const { pokemonName } = useParams();
    const fetchPokemon = async (name) => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
        return response.data;
    } 

    const { data, isLoading, isError } = useQuery({ 
        queryKey: ['pokemon', pokemonName],
        queryFn: () => fetchPokemon(pokemonName)
    });

    if(isLoading){
        return (<p>Loading...</p>)
    }

    if(isError){
        return (<p>Something went wrong</p>)
    }

    return (
        <div className="flex flex-col shadow-xl rounded-xl my-10 mx-auto w-[600px] h-auto items-center">
            <h1 className="font-bold text-3xl mt-5">{data.name}</h1>
            <img src={data.sprites.front_default} alt={data.name} style={{height: "300px"}}/>
            <p >Height: {data.height}</p>
            <p className="mb-7">Weight: {data.weight}</p>
        </div>
    );
}