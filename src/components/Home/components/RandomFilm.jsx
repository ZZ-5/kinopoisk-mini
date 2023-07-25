import React, { useEffect, useState } from "react";

import kp from "../../../assets/icon/kp.svg";
import imbd from "../../../assets/icon/imdb.svg";
import GetMovies from "../../../API/GetMovies";
import { Spinner } from "../../UI/Spinner";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites } from "../../../store/Reducers/FavoritesReducer/favoritesReducer";

export const RandomFilm = () => {
  const [film, setFilm] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [director, setDirector] = useState({});
  const [countries, setCountries] = useState([]);
  const [genres, setGenres] = useState([]);
  const [rating, setRating] = useState({});
  const [shortDescription, setShortDescription] = useState("");
  const [description, setDescription] = useState("");
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const [fav, setFav] = useState();

  const fetchRandomFilm = async () => {
    setIsLoading(true);

    const url = "https://api.kinopoisk.dev/v1/movie/random";
    const randomFilm = await GetMovies.getAll(url);
    setFilm(randomFilm);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchRandomFilm();
  }, []);

  useEffect(() => {
    setCountries(
      film?.countries
        ?.map((el) => {
          return Object.values(el);
        })
        .join(", ")
    );
    setDirector(
      film?.persons?.find((item) => {
        if (item.profession === "режиссеры") {
          return item;
        }
      })
    );
    setRating(film?.rating);
    setDescription(film?.description);
    setGenres(
      film?.genres
        ?.map((el) => {
          return Object.values(el);
        })
        .join(", ")
    );
  }, [film]);

  useEffect(() => {
    let text = "";
    if (description) {
      text = description.split(" ");
      text.length = 18;
    }
    setShortDescription(text.length === 0 ? "" : text.join(" "));
  }, [description]);

  const goToFilm = (el) => {
    // if(film.typeNumber === 1) {
    //   navigate(`/movies/${el.id}`, { state: { el } });
    // }
    // if(film.typeNumber === 2) {
    //   navigate(`/series/${el.id}`, { state: { el } })
    // }
    // if(film.typeNumber === 3) {
    //   navigate(`/multfilms/${el.id}`, { state: { el } })
    // }

    film.typeNumber === 1
      ? navigate(`/movies/${el.id}`, { state: { el } })
      : film.typeNumber === 2
        ? navigate(`/series/${el.id}`, { state: { el } })
        : navigate(`/multfilms/${el.id}`, { state: { el } });
  };

  const addItemToFavorites = () => {
    dispatch(addToFavorites(film));
  };

  return (
    <div className="home__random-film">
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <img className="img" src={film?.poster?.url} alt="" />

          <div className="info">
            <div className="info__title">{film?.name}</div>
            <div className="info__description">
              {!showFullDescription ? (
                <>
                  {shortDescription + "..."}
                  {shortDescription ? (
                    <button
                      style={{ color: "#dca10b" }}
                      onClick={() => setShowFullDescription(!showFullDescription)}>
                      Читать далее
                    </button>
                  ) : null}
                </>
              ) : (
                <>
                  {description}
                  {description ? (
                    <button
                      style={{ color: "#dca10b" }}
                      onClick={() =>
                        setShowFullDescription(!showFullDescription)}>
                      Скрыть
                    </button>
                  ) : null}
                </>
              )}
            </div>
            <div className="info__year">
              <span>Год выпуска:</span> {film?.year}
            </div>
            <div className="info__director">
              <span>Режиссер:</span> {director?.name}
            </div>
            <div className="info__genres">
              <span>Жанр: </span> {genres}
            </div>
            <div className="info__country">
              <span>Страна: </span> {countries}
            </div>
            <div className="info__rating">
              <span>Оценки: </span>
              <div className="kp">
                <img className="icon" src={kp} alt="" /> {rating?.kp.toFixed(1)}
              </div>
              <div className="imdb">
                <img className="icon" src={imbd} alt="" /> {rating?.imdb}
              </div>
            </div>

            <div className="info__buttons">
              <button onClick={() => goToFilm(film)} className="btn_more">
                Подробнее
              </button>

              <button onClick={addItemToFavorites} className="btn_favorite">
                {fav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="gold"
                    class="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    className="bi bi-star"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
