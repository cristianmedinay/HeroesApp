import { useMemo } from "react";
import { getHeroesByPublisher } from "./../helpers";
import { HeroCard } from "./HeroCard";
export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="row rows-cols-1 row-cols-md">
      <h1>HeroList</h1>
      <ul>
        {heroes.map((heroe) => (
          <HeroCard key={heroe.id} {...heroe} />
        ))}
      </ul>
    </div>
  );
};
