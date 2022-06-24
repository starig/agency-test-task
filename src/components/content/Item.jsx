import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setActiveCategory, setType} from "../../redux/slices/filterSlice";

const Item = ({
    imgUrl,
    type,
    title,
    id
              }) => {
    const dispatch = useDispatch();
    const { activeCategory, sortList, activeType } = useSelector((state) => state.filter);
    console.log(sortList)

    const types = [];

    sortList.forEach(item => types.push(item.sortType));

    console.log(types);

    const setType = (type) => {
        const currentTypeIndex = types.indexOf(type);
        dispatch(setActiveCategory(currentTypeIndex));
    }

    return (
        <div className="item">
            <img src={imgUrl} alt="item image" className="itemImg"/>
            <div className="itemType" onClick={() => {
                setType(type);
            }}>{type}</div>
            <div className="itemTitle">{title}</div>
        </div>
    )
}

export default Item;