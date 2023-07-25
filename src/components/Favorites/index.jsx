import React from 'react'
import './index.scss'
import { useSelector } from 'react-redux'
import { getClassByRate } from '../../constatns/functions'

export const Favorite = () => {
    const favorites = useSelector(state => state.favorites.favorites)
    console.log(favorites);
    return (
        <div className="favorites">
            <div className="favorites__subtitle">Избранное</div>
            <div className="favorites__items">
                {favorites.map((el) => {
                    return (
                        <div key={favorites.id} className="item">
                            <img
                                // onClick={() => onClick(el)}
                                src={el?.poster?.url}
                                alt="poster"
                                className="img"
                            />
                            <p
                                className={`item__rating item__rating-${getClassByRate(
                                    el?.rating?.kp
                                )}`}
                            >
                                {el?.rating?.kp?.toFixed(1)}
                            </p>
                            <div className="item__buttons">
                                <button
                                    // onClick={() => onClick(el)} 
                                    className="btn_more">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}
