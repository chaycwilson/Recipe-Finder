import "./Header.css";

export const Header = ({toggleTheme, theme}) => {

  return (
    <header className={`header ${theme}`}>
        <h1 className="header__title">Recipe Searcher</h1>
        <img src="https://www.svgrepo.com/show/309493/dark-theme.svg" 
        onClick={toggleTheme}
        className={`dark-mode-toggle ${theme}`} />
    </header>
  );
};

export default Header;
