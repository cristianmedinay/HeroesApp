import React, { useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { heroes } from "../data/heroes";
import { getHeroById } from "../helpers/getHeroById";

const heavyStuff = (iterationNumber = 2000) => {
  for (let i = 0; i < iterationNumber; i++) {
    console.log("first");
  }
  return `${iterationNumber} iteraciones realizadas`;
};

export const HeroesPage = React.memo(() => {
  const usenavigate = useNavigate();
  const { id } = useParams();
  const [show, setShow] = useState(true);

  /* const Herosfinal = (n) => {
    return heroes.find((e) => e.id == n);
  }; */
  /* const ids = useMemo(() => Herosfinal(id), [id]); */
  const num = 2000;
  const heavy = useMemo(() => heavyStuff(num), [num]);
  const ids = useMemo(() => getHeroById(id), [id]);
  console.log(id);

  if (!ids) {
    return <Navigate to="/marvel" />;
  }

  const onNavigateBack = () => {
    usenavigate(-1);
  };
  return (
    <div className="row mt-5  animate__animated animate__fadeIn">
      <div className="col-4 ">
        <button className="btn btn-primary" onClick={() => setShow(!show)}>
          Show/Hide {JSON.stringify(show)}
        </button>
        <h1>HeroesPage</h1>
        <h1>{heavy} </h1>
        <p>{ids.id}</p>
        <img
          src={`/assets/${ids.id}.jpg`}
          alt={ids.superhero}
          className="img-tumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{ids.superhero}</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <b>Alter ego :</b>
            {ids.alter_ego}
          </li>
          <li className="list-group-item">
            <b>Publisher :</b>
            {ids.publisher}
          </li>
          <li className="list-group-item">
            <b>First appeareance :</b>
            {ids.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{ids.characters}</p>

        <button className="btn btn-outline-primary" onClick={onNavigateBack}>
          Regresar
        </button>
      </div>
    </div>
  );
});
