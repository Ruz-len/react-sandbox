import './Header.css';

const Header = () => {  
    return  (
        <div className="Header">
            <div className="header-btns">
                <button className="header-btn">RUS |</button>
                <button className="header-btn">| ENG</button>
            </div>
            <div className="header-wrapper">
                <h2 className="logo">Логотип</h2>
                <ul className="header-list">
                    <li className="header-item">Заголовок 1</li>
                    <li className="header-item">Заголовок 2</li>
                    <li className="header-item">Заголовок 3</li>
                    <li className="header-item">Заголовок 4</li>
                    <li className="header-item">Заголовок 5</li>
                </ul>
            </div>
            
        </div>
    );
}

export default Header;