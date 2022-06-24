import React from 'react';
import {useDispatch} from "react-redux";
import {setActiveCategory, setType} from "../../redux/slices/filterSlice";

const Item = ({
    imgUrl,
    type,
    title,
    id
              }) => {
    const dispatch = useDispatch();
    return (
        <div className="item">
            <img src={imgUrl} alt="item image" className="itemImg"/>
            <div className="itemType">{type}</div>
            <div className="itemTitle">{title}</div>
        </div>
    )
}

export default Item;