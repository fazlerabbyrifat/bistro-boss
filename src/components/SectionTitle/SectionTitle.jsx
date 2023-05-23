import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className='w-1/3 mx-auto text-center my-10'>
            <p className='text-yellow-500 italic mb-2'>--- {subHeading} ---</p>
            <h3 className='text-3xl uppercase border-y-4 py-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;