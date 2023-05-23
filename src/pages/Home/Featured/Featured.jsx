import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import feautreImg from '../../../assets/home/featured.jpg'
import './Featured.css';

const Featured = () => {
    return (
        <section className='featured-item bg-fixed text-white pt-8 my-10'>
            <SectionTitle subHeading="Check it out" heading="From our menu"></SectionTitle>
            <div className='md:flex justify-center bg-base-200 bg-opacity-70 items-center gap-10 pt-12 pb-20 px-36'>
                <div>
                    <img src={feautreImg} alt="" />
                </div>
                <div>
                    <p>May 23, 2023</p>
                    <p className='uppercase'>Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quam numquam consequuntur explicabo laboriosam error culpa rem nulla quis temporibus, iste soluta hic qui quia fugiat. Ut magnam quas sint culpa id illo corporis dolorum. Exercitationem ipsam ipsum hic doloribus?</p>
                    <button className='btn btn-outline border-0 border-b-4 mt-5'>Order now</button>
                </div>
            </div>
        </section>
    );
};

export default Featured;