import './Header.css';

export const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar">
        <ul className="nav-bar__list">
          <li className="nav-bar__list-item"><a href="#">Home</a></li>
          <li className="nav-bar__list-item"><a href="#">Save the date</a></li>
          <li className="nav-bar__list-item"><a href="#">Our story</a></li>
          <li className="nav-bar__list-item"><a href="#">Schedule</a></li>
          <li className="nav-bar__list-item"><a href="#">RSVP</a></li>
        </ul>
      </nav>
    </header>
  )
};
