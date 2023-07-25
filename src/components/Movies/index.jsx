import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GetMovies from "../../API/GetMovies";
import "./index.scss";
import { Spinner } from "../UI/Spinner";
import { Items } from "../Items";
import ReactPaginate from "react-paginate";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const [countPages, setCountPages] = useState(0)
  const [curPage, setCurPage] = useState(1)

  const fetchData = async () => {
    setIsLoading(true); // нужно обязательно при подгрузке данных ставить статус тру, потому что иначе у тебя спиннер сработает лишь один раз и больше ни когда не появится

    const typeNumber = 1;
    const limit = 8; // создаем переменную для каждого параметра отдельно, не стоит писать ее в url, и передаем ее в класс GetMovies, где прописываем ее в params
    const url = "https://api.kinopoisk.dev/v1/movie";
    const movies = await GetMovies.getAll(url, typeNumber, limit, curPage);
    setCountPages(movies.pages)
    setMovies(movies.docs);

    setIsLoading(false);
  };


  useEffect(() => {
    fetchData();
  }, [curPage]);

  const onClick = (el) => {
    navigate(`/movies/${el.id}`, { state: { el } });
  };

  const handlePageClick = (e) => {
    setCurPage(e.selected + 1)
  }

  return (
    <div className="movies">
      <h2 className="movies__subtitle">Фильмы</h2>
      {isLoading
        ? <Spinner />
        : <Items classes={"movies"} item={movies} onClick={onClick} /> // сделал небольшую компановку, чтобы код был более читабельным. Так же нужно проделать и в сериала и мультиках. Компонент используешь этот же
      }
      <ReactPaginate
        className="pagination"
        pageCount={countPages}
        nextLabel=">"
        previousLabel="<"
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
      />
    </div>
  );
};
