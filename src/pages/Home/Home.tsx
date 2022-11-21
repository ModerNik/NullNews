import React from 'react';
import CardArticle from '../../components/CardArticle/CardArticle';
import './Home.css'

export const Home = () => {
    return (
        <div className='body'>
            <div className='cards'>
                <CardArticle />
            </div>
        </div>
    )
}