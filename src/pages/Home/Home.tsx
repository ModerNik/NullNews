import CardArticle from '../../components/CardArticle/CardArticle';
import './Home.css'

export const Home = () => {
    return (
        <div className='body'>
            <div className='cards'>
                <CardArticle />
                <CardArticle />
            </div>
        </div>
    )
}