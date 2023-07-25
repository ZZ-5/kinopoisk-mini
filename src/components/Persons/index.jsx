import React, { useEffect, useState } from 'react';
import './index.scss';
import GetMovies from '../../API/GetMovies';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export const Persons = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(false);
    const [persons, setPersons] = useState([]);

    const fetchItem = async () => {
        setIsLoading(true);

        const url = `https://api.kinopoisk.dev/v1/movie/${id}`;
        const movies = await GetMovies.getAll(url);
        setPersons(movies.persons);

        setIsLoading(false);
    };

    useEffect(() => {
        fetchItem();
    }, []);

    const navigate = useNavigate()

    const goToPerson = (el) => {
        navigate(`/person/${el}`);
    }

    return (
        <div className='persons'>
            <h3 className='persons__subtitle'>Режиссёры</h3>
            <div className="persons__professions">
                {persons?.filter(el => el.profession === 'режиссеры' ? el : null).map((el) => {
                    return (
                        <div className="persons__profession">
                            <img onClick={() => goToPerson(el.id)} className='persons__photo' src={el?.photo} alt={el?.name} />
                            <div className="persons__names">
                                <p className="persons__name">
                                    {el.name}
                                </p>
                                <p className="persons__enName">
                                    {el.enName}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h3 className='persons__subtitle'>Актёры</h3>
            <div className="persons__professions">
                {persons?.filter(el => el.profession === 'актеры' ? el : null).map((el) => {
                    return (
                        <div className="persons__profession">
                            <img onClick={() => goToPerson(el.id)} className='persons__photo' src={el?.photo} alt={el?.name} />
                            <div className="persons__names">
                                <p className="persons__name">
                                    {el.name}
                                </p>
                                <p className="persons__enName">
                                    {el.enName}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h3 className='persons__subtitle'>Композиторы</h3>
            <div className="persons__professions">
                {persons?.filter(el => el.profession === 'композиторы' ? el : null).map((el) => {
                    return (
                        <div className="persons__profession">
                            <img onClick={() => goToPerson(el.id)} className='persons__photo' src={el?.photo} alt={el?.name} />
                            <div className="persons__names">
                                <p className="persons__name">
                                    {el.name}
                                </p>
                                <p className="persons__enName">
                                    {el.enName}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h3 className='persons__subtitle'>Художники</h3>
            <div className="persons__professions">
                {persons?.filter(el => el.profession === 'художники' ? el : null).map((el) => {
                    return (
                        <div className="persons__profession">
                            <img onClick={() => goToPerson(el.id)} className='persons__photo' src={el?.photo} alt={el?.name} />
                            <div className="persons__names">
                                <p className="persons__name">
                                    {el.name}
                                </p>
                                <p className="persons__enName">
                                    {el.enName}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h3 className='persons__subtitle'>Монтажёры</h3>
            <div className="persons__professions">
                {persons?.filter(el => el.profession === 'монтажеры' ? el : null).map((el) => {
                    return (
                        <div className="persons__profession">
                            <img onClick={() => goToPerson(el.id)} className='persons__photo' src={el?.photo} alt={el?.name} />
                            <div className="persons__names">
                                <p className="persons__name">
                                    {el.name}
                                </p>
                                <p className="persons__enName">
                                    {el.enName}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h3 className='persons__subtitle'>Операторы</h3>
            <div className="persons__professions">
                {persons?.filter(el => el.profession === 'операторы' ? el : null).map((el) => {
                    return (
                        <div className="persons__profession">
                            <img onClick={() => goToPerson(el.id)} className='persons__photo' src={el?.photo} alt={el?.name} />
                            <div className="persons__names">
                                <p className="persons__name">
                                    {el.name}
                                </p>
                                <p className="persons__enName">
                                    {el.enName}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h3 className='persons__subtitle'>Продюсеры</h3>
            <div className="persons__professions">
                {persons?.filter(el => el.profession === 'продюсеры' ? el : null).map((el) => {
                    return (
                        <div className="persons__profession">
                            <img onClick={() => goToPerson(el.id)} className='persons__photo' src={el?.photo} alt={el?.name} />
                            <div className="persons__names">
                                <p className="persons__name">
                                    {el.name}
                                </p>
                                <p className="persons__enName">
                                    {el.enName}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h3 className='persons__subtitle'>Актёры дубляжа</h3>
            <div className="persons__professions">
                {persons?.filter(el => el.profession === 'актеры дубляжа' ? el : null).map((el) => {
                    return (
                        <div className="persons__profession">
                            <img onClick={() => goToPerson(el.id)} className='persons__photo' src={el?.photo} alt={el?.name} />
                            <div className="persons__names">
                                <p className="persons__name">
                                    {el.name}
                                </p>
                                <p className="persons__enName">
                                    {el.enName}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <h3 className='persons__subtitle'>Редакторы</h3>
            <div className="persons__professions">
                {persons?.filter(el => el.profession === 'редакторы' ? el : null).map((el) => {
                    return (
                        <div className="persons__profession">
                            <img onClick={() => goToPerson(el.id)} className='persons__photo' src={el?.photo} alt={el?.name} />
                            <div className="persons__names">
                                <p className="persons__name">
                                    {el.name}
                                </p>
                                <p className="persons__enName">
                                    {el.enName}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
