import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
  return heroes.find((e) => e.id == id);
};
