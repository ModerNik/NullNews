import "./NavBar.css"

export const NavBar = () => {
    return (
        <div className='navbar'>
            <a href="/" className="NullNews">Null News</a>
            <a href="/tech" className="Tech">Tech</a>
            <a href="/gadgets" className="Gadgets">Gadgets</a>
            <a href="/science" className="Science">Science</a>
            <a href="/more" className="More">
                More
                <span className="material-symbols-outlined">expand_more</span>
            </a>
            <a className="theme">
                <span className="material-symbols-outlined"> light_mode </span>
            </a>
            <a className="language">
                <span className="material-symbols-outlined"> language </span>
            </a>
            <button className="signUp">Sign up</button>
        </div>
    )
}

export default NavBar;