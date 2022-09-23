import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';
import './AllGuns.css'

const AllGuns = ({countIncrease}) => {
    const [guns, setGuns] = useState([])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
        .then(res => res.json())
        .then(data => setGuns(data))
    }, [])
    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                guns.map(gun => <SingleGun 
                    gun={gun}
                    countIncrease={countIncrease}
                    ></SingleGun>)
            }
        </div>
    );
};

export default AllGuns;