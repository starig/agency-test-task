import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setActiveCategory, setType} from "../../redux/slices/filterSlice";

const Sort = () => {
    const { sortList, activeCategory, activeType } = useSelector(state => state.filter);
    const [popupStatus, setPopupStatus] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className="sort">
            <ul className="sortList">
                {
                    sortList.map((item, id) =>
                        <li
                            key={id}
                            className={activeCategory === id ? `sortItem sortItemActive` : `sortItem`}
                            onClick={() => {
                                dispatch(setActiveCategory(id));
                                dispatch(setType(id));
                            }}>
                            {sortList[id].sortType}
                        </li>)
                }
            </ul>
            <ul className="sortPopup">
                <li className="popupTitle" onClick={() => {
                    setPopupStatus(!popupStatus);
                }}>{activeType}</li>
                {
                    popupStatus && sortList.map((item, id) =>
                        <li
                            key={id}
                            className={activeCategory === id ? `sortItem sortItemActive` : `sortItem`}
                            onClick={() => {
                                dispatch(setActiveCategory(id));
                                dispatch(setType(id));
                                setPopupStatus(false);
                            }}>
                            {sortList[id].sortType}
                        </li>)
                }
            </ul>
        </div>
    )
}

export default Sort;