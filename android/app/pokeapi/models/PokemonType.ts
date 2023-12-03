import { PokemonLinkType } from './PokemonLinkType';
import { SpriteType } from '../../../../SpriteType';

export type PokemonType = {
  id: number;
  name: string;
  sprites: SpriteType;
  species: PokemonLinkType;
};
