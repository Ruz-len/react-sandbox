import './Header.css';

const Header = (props) => {  
    const { locale, langpacks, changeLocale } = props;
    const {logo, header1, header2, header3, header4, header5} = langpacks[locale];
    
    return  (
        <div className="Header">
            <div className="header-btns">
                <button onClick={()=> changeLocale('ru')} className="header-btn">РУС |</button>
                <button onClick={()=> changeLocale('eng')} className="header-btn">| ENG</button>
            </div>
            <div className="header-wrapper">
                <h2 className="logo">{ logo }</h2>
                <ul className="header-list">
                    <li className="header-item">{header1}</li>
                    <li className="header-item">{header2}</li>
                    <li className="header-item">{header3}</li>
                    <li className="header-item">{header4}</li>
                    <li className="header-item">{header5}</li>
                </ul>
            </div>
            
        </div>
    );
}

export default Header;