import React, { useEffect, useState } from "react"
import { Image, Text } from "react-native"
import { Section } from "../components/section"
import { FlavorTextEntryType } from "../pokeapi/models/FlavorTextEntryType"
import { useGetPokemon } from "../pokeapi/apis/useGetPokemon"
import { useGetSpeciesPokemon } from "../pokeapi/apis/useGetSpeciesPokemon"

type PokemonProps = {
    id: number
}


function spanishFlavorText (flavors: FlavorTextEntryType[] ): string  {

    let spanishFlavor = flavors.filter(f => f.language.name == 'es')[0];
    return spanishFlavor.flavor_text
  }
  

export const PokemonPage: React.FC<PokemonProps> = ({id}) => {

    const [flavorText, setFlavorText] = useState("");
    const {data: pokemon,isSuccess: isPokemonSuccess} = useGetPokemon({id})
    const {data: pokemonSpecies,isSuccess: isFlavorSuccess} = useGetSpeciesPokemon({url: pokemon?.species.url})

     
    useEffect(() => {
        if(isFlavorSuccess) {
            setFlavorText(spanishFlavorText(pokemonSpecies?.flavor_text_entries))
        }
        
    }, [isFlavorSuccess, id])

  
    if(isPokemonSuccess) {
        return (<Section title={`N° ${id}: ${pokemon.name.toLocaleUpperCase()}` ?? ""}>
        <Image source={{uri :pokemon.sprites.front_default}} height={400} width={400}></Image>
        <Text>{flavorText}</Text>
        </Section>)
    } else {
        return <Section title="">
        
        <Text>{flavorText}</Text>
        </Section>
    }
   

   
    
 
}