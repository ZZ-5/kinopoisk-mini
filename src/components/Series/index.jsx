import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GetMovies from '../../API/GetMovies';
import './index.scss';
import { Spinner } from '../UI/Spinner';
import { Items } from '../Items';
import ReactPaginate from 'react-paginate';

export const Series = () => {

    const [series, setSeries] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const [countPages, setCountPages] = useState(0)
    const [curPage, setCurPage] = useState(1)

    const fetchData = async () => {
        setIsLoading(true)

        const typeNumber = 2
        const limit = 8
        const url = "https://api.kinopoisk.dev/v1/movie"
        const movies = await GetMovies.getAll(url, typeNumber, limit, curPage)
        setSeries(movies.docs)
        setCountPages(movies.pages)

        setIsLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, [curPage])

    const onClick = (el) => {
        navigate(`/series/${el.id}`, { state: { el } })
    }

    const handlePageClick = (e) => {
        setCurPage(e.selected + 1)
    }

    return (
        <div className="series" >
            <h2 className="series__subtitle">Сериалы</h2>
            {isLoading ?
                <Spinner />
                : <Items classes={'series'} item={series} onClick={onClick} />
            }
            <ReactPaginate
                className='pagination'
                pageCount={countPages}
                nextLabel=">"
                previousLabel='<'
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
            />
        </div>
    )
}
