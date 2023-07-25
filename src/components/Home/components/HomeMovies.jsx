import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GetMovies from "../../../API/GetMovies";
import { Spinner } from "../../UI/Spinner";

export const HomeMovies = () => {
    const [films, setFilms] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const fetchData = async () => {
        const typeNumber = 1;
        const url = "https://api.kinopoisk.dev/v1/movie"
        const movies = await GetMovies.getAll(url, typeNumber)
        setFilms(movies.docs)

        setIsLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const onClick = (el) => {
        navigate(`/movies/${el.id}`, { state: { el } })
    }

    function getClassByRate(vote) {
        if (vote > 7.5) {
            return 'green'
        } else if (vote >= 5) {
            return 'orange'
        } else {
            return 'red'
        }
    }

    return (
        <div className="home__movies">
            {isLoading ? (
                <div>
                    <Spinner />
                </div>
            ) : (
                <>
                    <h2 className="home__subtitle">Фильмы</h2>
                    <div className="recomendation">  {films.map((el) => {
                        return (
                            <div onClick={() => onClick(el)} key={el.id} className="recomendation__movie">
                                <img src={el.poster.url} alt="poster" className="img" />
                                <p className={`rating rating-${getClassByRate(el.rating.kp)}`}>{el.rating.kp.toFixed(1)}</p>
                            </div>
                        )
                    })}
                    </div>
                    <button className="home__button">
                        <NavLink to={"/movies"} className="home__link">Показать всё</NavLink>
                    </button>
                </>
            )}
        </div>
    )
}