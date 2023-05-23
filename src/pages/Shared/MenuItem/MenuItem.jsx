import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const MenuItem = ({item}) => {
    const { name, image, price, recipe } = item;

    return (
        <div className='flex space-x-2'>
            <img style={{ borderRadius: '0 200px 200px 200px'}} src={image} className='w-[100px]' alt="" />
            <div>
                <h3 className='uppercase'>{name} ----------------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-500'>{price}</p>
        </div>
    );
};

export default MenuItem;