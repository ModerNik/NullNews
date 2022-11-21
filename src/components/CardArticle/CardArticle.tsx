import "./CardArticle.css"

export const CardArticle = () => {
    return (
        <div className='card'>
            <div className='cardText'>
                <h2 className='cardTitle'>Title</h2>
                <p className='cardDescription'>Description</p>
            </div>
            <img className="cardImage" src="placeholder.png" />
        </div>
    )
}

export default CardArticle;