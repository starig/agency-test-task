import React, {useEffect} from 'react';
import Sort from "./Sort";
import Item from "./Item";
import Skeleton from "./Skeleton";
import loader from "../../img/loader.gif";
import {useDispatch, useSelector} from "react-redux";
import {fetchItems, pagePlus} from "../../redux/slices/itemsSlice";


const Content = () => {
    const { data, isLoading, isFetching, page } = useSelector(state =>  state.items);
    const type = useSelector(state => state.filter.sortList[state.filter.activeCategory].sortProp);
    const dispatch = useDispatch();

    const fetchData = async () => {
        try {
            dispatch(fetchItems({page, type}));
        } catch (e) {
            console.error(e);
        }
    }


    useEffect(() => {
        fetchData();
    }, [page, type]);

    const loadMore = () => {
        dispatch(pagePlus(page));
    }


    return (
        <div className="content">
            <div className="container">
                <Sort />
                <div className="contentBody">
                    {
                         isLoading ? [...Array(9)].map((item, id) => <Skeleton key={id}/>) :
                         data.map((item, id) => <Item key={id} imgUrl={item.img} type={item.type}
                                                     title={item.name} id={item.id} itemId={id}/>)
                    }
                </div>
            </div>
            <div className="footer">
                {
                    isFetching && <img className={`loadingGif`} src={loader} alt={'loading'}/>
                }
                <button className="loadMore" onClick={loadMore}>Load more</button>
            </div>
        </div>
    )

}

export default Content;