import { useQuery } from "@tanstack/react-query"
import { PokemonType } from "../models/PokemonType"

type GetPokemonQuery = {
    id: number
}

const QUERY_KEY = 'Pokemon';

const fetchPokemon = async (params: GetPokemonQuery) : Promise<PokemonType> => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+ params.id)
    if (!response.ok)   {
        throw new Error("Network error")
    }
    return (await response.json()) as PokemonType
}


export const useGetPokemon = (params: GetPokemonQuery) => {
    console.log(params)
    return useQuery<PokemonType, Error>({
        queryKey : [QUERY_KEY,params.id],
        queryFn :  () => fetchPokemon(params),
        enabled: !!params.id
    } );
  };