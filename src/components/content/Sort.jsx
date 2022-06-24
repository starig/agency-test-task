import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setActiveCategory, setType} from "../../redux/slices/filterSlice";

const Sort = () => {
    const { sortList, activeCategory } = useSelector(state => state.filter);
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
            <ul className="sortDropdown">
                <li><a href="#">Work &dtrif;</a>
                    <ul className="dropdown">
                        <li><a href="#" className="dropdownItem">Web Development</a></li>
                        <li><a href="#" className="dropdownItem">Web Design</a></li>
                        <li><a href="#" className="dropdownItem">Illustration</a></li>
                        <li><a href="#" className="dropdownItem">Iconography</a></li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default Sort;