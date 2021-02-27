// Hooks
import { usePokemons } from "./hooks";

export const Pokemons = () => {
  const { pokemons } = usePokemons();

  const pokemonsJSX = pokemons && pokemons.map(({ id, name }) => <p key={id}>{name}</p>);

  return (
    <>
      <h3>Pokemons</h3>
      {pokemonsJSX}
    </>
  );
};
