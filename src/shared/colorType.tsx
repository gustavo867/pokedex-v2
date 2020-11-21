import {
  BUG_TYPE,
  DARK_TYPE,
  DEFAULT_COLOR,
  DRAGON_TYPE,
  ELETRIC_TYPE,
  FAIRY_TYPE,
  FIGHTING_TYPE,
  FIRE_TYPE,
  FLYING_TYPE,
  GHOST_TYPE,
  GRASS_TYPE,
  GROUND_TYPE,
  ICE_TYPE,
  NORMAL_TYPE,
  POISON_TYPE,
  PSYCHIC_TYPE,
  ROCK_TYPE,
  STEEL_TYPE,
  WATER_TYPE,
} from "./colors";

const ColorType = (color: string) => {
  if (color === "bug") return BUG_TYPE;
  if (color === "dark") return DARK_TYPE;
  if (color === "dragon") return DRAGON_TYPE;
  if (color === "eletric") return ELETRIC_TYPE;
  if (color === "fairy") return FAIRY_TYPE;
  if (color === "fighting") return FIGHTING_TYPE;
  if (color === "fire") return FIRE_TYPE;
  if (color === "flying") return FLYING_TYPE;
  if (color === "ghost") return GHOST_TYPE;
  if (color === "grass") return GRASS_TYPE;
  if (color === "ground") return GROUND_TYPE;
  if (color === "ice") return ICE_TYPE;
  if (color === "normal") return NORMAL_TYPE;
  if (color === "poison") return POISON_TYPE;
  if (color === "psychic") return PSYCHIC_TYPE;
  if (color === "rock") return ROCK_TYPE;
  if (color === "steel") return STEEL_TYPE;
  if (color === "water") return WATER_TYPE;
  return DEFAULT_COLOR;
};

export default ColorType;
