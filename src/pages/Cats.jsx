import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCatsFetch } from '../reducers/CatSlice';

const Cats = () => {
    const cats = useSelector((state) => state.cat.cats);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCatsFetch())
    }, [dispatch])

    console.log(cats);
    return (
        <div>
            <h1>CAT SPECIES GALLERY</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, ex.</p>
            <hr />
            <div className="Gallery">
                {
                    cats.map(cat => (
                        <div key={cat.id} className="row">
                            <div className="column column-left">

                            </div>
                            <div className="column column-right">
                                <h2>{cat.name}</h2>
                                <p>{cat.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cats;