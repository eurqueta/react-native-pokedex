import { useQuery } from "@tanstack/react-query"
import { PokemonType } from "../models/PokemonType"
import { PokemonSpeciesType } from "../models/PokemonSpeciesType";

type GetPokemonSpeciesQuery = {
    url?: string
}

const QUERY_KEY = 'Pokemon';

const fetchPokemonSpecie = async (params: GetPokemonSpeciesQuery) : Promise<PokemonSpeciesType> => {
    const response = await fetch(params.url ?? "")
    if (!response.ok)   {
        throw new Error("Network error")
    }
    return (await response.json()) as PokemonSpeciesType
}


export const useGetSpeciesPokemon = (params: GetPokemonSpeciesQuery) => {
    return useQuery<PokemonSpeciesType, Error>({
        queryKey : [QUERY_KEY,params.url],
        queryFn :  () => fetchPokemonSpecie(params),
        enabled: !!params.url
    } );
  };