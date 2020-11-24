import {
  BUG_COLOR,
  DEFAULT_COLOR,
  ELETRIC_COLOR,
  FAIRY_COLOR,
  FIGHTING_COLOR,
  FIRE_COLOR,
  GRASS_COLOR,
  GROUND_COLOR,
  POISON_COLOR,
  PSYCHIC_COLOR,
  ROCK_TYPE,
  WATER_COLOR,
} from "./colors";

const Color = (color: string) => {
  if (color === "dark") return DEFAULT_COLOR;
  if (color === "water") return WATER_COLOR;
  if (color === "rock") return ROCK_TYPE;
  if (color === "steel") return DEFAULT_COLOR;
  if (color === "grass") return GRASS_COLOR;
  if (color === "fairy") return FAIRY_COLOR;
  if (color === "poison") return POISON_COLOR;
  if (color === "fire") return FIRE_COLOR;
  if (color === "ground") return GROUND_COLOR;
  if (color === "white") return DEFAULT_COLOR;
  if (color === "bug") return BUG_COLOR;
  if (color === "electric") return ELETRIC_COLOR;
  if (color === "psychic") return PSYCHIC_COLOR;
  if (color === "fighting") return FIGHTING_COLOR;
  if (color === "default") return DEFAULT_COLOR;
  return DEFAULT_COLOR;
};

export default Color;
