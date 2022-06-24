import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {setActiveCategory} from "../../redux/slices/filterSlice";
import {addToRemovedItems, removeItem, toggleItem} from "../../redux/slices/itemsSlice";

const Item = ({
    imgUrl,
    type,
    title,
    id,
    itemId
              }) => {
    const dispatch = useDispatch();
    const { sortList } = useSelector((state) => state.filter);
    const { selectedItems } = useSelector((state) => state.items);

    const types = [];

    sortList.forEach(item => types.push(item.sortType));

    const setType = (type) => {
        const currentTypeIndex = types.indexOf(type);
        dispatch(setActiveCategory(currentTypeIndex));
    }

    const selectSelf = (id) => {
        dispatch(toggleItem(id));
    }

    const removeSelf = (id, itemId) => {
        //id - mockapi
        //itemId - localstorage id
        dispatch(addToRemovedItems(id));
        dispatch(removeItem(itemId));
    }

    return (
        <div className={selectedItems.includes(String(id)) ? `item itemSelected` : `item`} >
            <img alt={'itemImage'} src={imgUrl} alt="item image" className="itemImg" onClick={() => {
                selectSelf(id);
            }}/>
            {
                selectedItems.includes(String(id)) && <div className="itemDelete" onClick={() => {
                    removeSelf(id, itemId);
                }}>X</div>
            }
            <div className="itemType" onClick={() => {
                setType(type);
            }}>{type}</div>
            <div className="itemTitle">{title}</div>
        </div>
    )
}

export default Item;