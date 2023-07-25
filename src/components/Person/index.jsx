import React, { useEffect, useState } from "react";
import "./index.scss";
import GetMovies from "../../API/GetMovies";
import { useParams } from "react-router-dom";
import { Spinner } from "../../components/UI/Spinner";
import { getClassByRate } from "../../constatns/functions";

export const Person = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [person, setPerson] = useState([]);
  const { id } = useParams();

  const fetchItem = async () => {
    setIsLoading(true);

    const url = `https://api.kinopoisk.dev/v1/person/${id}`;
    const person = await GetMovies.getAll(url);
    setPerson(person);

    setIsLoading(false);
  };

  useEffect(() => {
    fetchItem();
  }, []);

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };

  return <>
    {isLoading
      ? <Spinner />
      : <div className="person">
        <img className="person__photo" src={person.photo} alt={person.name} />
        <div className="info">
          <div className="info__name">{person.name}</div>
          <div className="info__enName">{person.enName}</div>
          <div className="info__about">
            <h2 className="info__subtitle">О персоне</h2>

            <div className="info__career">
              <span>Карьера:</span>
              {person?.profession?.map(el => {
                return Object.values(el)
              }).join(", ")}
            </div>

            <div className="info__growth">
              <span>Рост:</span>{person.growth !== null ? person.growth + " см" : null}
            </div>
            <div className="info__age">
              <span>Возраст:</span>{person.age}
            </div>
            <div className="info__birthday">
              <span>Дата рождения:</span>{new Date(person.birthday).toLocaleString('ru', options)}
            </div>

            <div className="info__birthplace">
              <span>Место рождения:</span>
              {person?.birthPlace?.map(el => {
                return Object.values(el)
              }).join(", ")}
            </div>

            <div className="info__sex">
              <span>Пол:</span>{person.sex}
            </div>
          </div>

          <div className="info__movies">
            <h2 className="info__subtitle">Фильмы</h2>
            {person?.movies?.filter(el => el?.rating !== null)?.map((el) => {
              return (
                <div className="movie" key={el?.index}>
                  <div className="movie__names">
                    <div className="movie__name">{el?.name}</div>
                    <div className="movie__alternativeName">{el?.alternativeName}</div>
                  </div>
                  <div className={`movie__rating movie__rating-${getClassByRate(el.rating)}`}>{el?.rating !== null ? el?.rating.toFixed(1) : null}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>}
  </>;
};
