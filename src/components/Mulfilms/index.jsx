import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GetMovies from '../../API/GetMovies';
import './index.scss'
import { Spinner } from '../UI/Spinner';
import { Items } from '../Items';
import ReactPaginate from 'react-paginate';

export const Multfilms = () => {

    const [multfilms, setMultfilms] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    const [countPages, setCountPages] = useState(0)
    const [curPage, setCurPage] = useState(1)

    const fetchData = async () => {

        setIsLoading(true)

        const limit = 8
        const typeNumber = 3
        const url = "https://api.kinopoisk.dev/v1/movie"
        const movies = await GetMovies.getAll(url, typeNumber, limit, curPage)
        setMultfilms(movies.docs)
        setCountPages(movies.pages)

        setIsLoading(false);
    }

    useEffect(() => {
        fetchData()
    }, [curPage])

    const onClick = (el) => {
        navigate(`/multfilms/${el.id}`, { state: { el } })
    }

    const handlePageClick = (e) => {
        setCurPage(e.selected + 1)
    }

    return (
        <div className="multfilms" >
            <h2 className="multfilms__subtitle">Мультфильмы</h2>
            {isLoading ?
                <Spinner />
                : <Items classes={"multfilms"} item={multfilms} onClick={onClick} />
            }
            <ReactPaginate
                className='pagination'
                pageCount={countPages}
                nextLabel='>'
                previousLabel='<'
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
            />
        </div>
    )
}
