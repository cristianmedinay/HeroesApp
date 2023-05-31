import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { HeroCard } from "../components/HeroCard";

import { useForm } from "../hooks/useForm";
import { getHeroesByName } from "../helpers/getHeroesByName";
export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);

  const heroes = getHeroesByName(q);

  const { searchText, onInputChange } = useForm({ searchText: q });

  const onSearchSubmit = (event) => {
    event.preventDefault();
    /*  if (searchText.trim().length <= 1) return;
    console.log({ searchText }); */
    navigate(`?q=${searchText.toLowerCase().trim()}`);
  };

  return (
    <>
      <h1>SearchPage</h1>

      <div className="row">
        <div className="col-5 mb-5">
          <h4>Searching</h4>
          <hr />

          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              id=""
              placeholder="search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange}
            />
            <button className="btn btn-outline-primary mt-1">Buscar</button>
          </form>
        </div>

        <div className="col-7">
          <h4>Results</h4>
          <hr />

          {q === "" ? (
            <div className="alert alert-primary">search a hero</div>
          ) : (
            heroes.length === 0 && (
              <div className="alert alert-danger">Theres not result {q} </div>
            )
          )}

          {heroes.map((e) => (
            <HeroCard key={e.id} {...e} />
          ))}
        </div>
      </div>
    </>
  );
};
