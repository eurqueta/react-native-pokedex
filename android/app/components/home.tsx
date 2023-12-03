import { ScrollView, View, Button, useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { PokemonPage } from "../detail/pokemonPage";
import { useState } from "react";

export function Home() {


  const [currentPokemon, setCurrentPokemon] = useState(1);

  return  ( <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <PokemonPage id={currentPokemon}></PokemonPage>
            

            <Button title='Next' onPress={() => setCurrentPokemon(prev => prev + 1)}></Button>
            {currentPokemon > 1 &&<Button title='Previous' onPress={() => setCurrentPokemon(prev => prev - 1)}></Button>}
          </View>
        </ScrollView>)
}

const isDarkMode = useColorScheme() === 'dark';

const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
