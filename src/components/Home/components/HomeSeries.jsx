import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import GetMovies from "../../../API/GetMovies";
import { Spinner } from "../../UI/Spinner";

export const HomeSeries = () => {
    const [series, setSeries] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate()

    const fetchData = async () => {
        const typeNumber = 2;
        const url = "https://api.kinopoisk.dev/v1/movie"
        const series = await GetMovies.getAll(url, typeNumber)
        setSeries(series.docs)

        setIsLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const onClick = (el) => {
        navigate(`/series/${el.id}`, { state: { el } })
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
        <div className="home__series">
            {isLoading ? (
                <div>
                    <Spinner />
                </div>
            ) : (
                <>
                    <h2 className="home__subtitle">Сериалы</h2>
                    <div className="recomendation">  {series.map((el) => {
                        return (
                            <div onClick={() => onClick(el)} key={el.id} className="recomendation__movie">
                                <img src={el.poster.url} alt="poster" className="img" />
                                <p className={`rating rating-${getClassByRate(el.rating.kp)}`}>{el.rating.kp.toFixed(1)}</p>
                            </div>
                        )
                    })}
                    </div>
                    <button className="home__button">
                        <NavLink to={"/series"} className="home__link">Показать всё</NavLink>
                    </button>
                </>
            )}
        </div>
    )
}