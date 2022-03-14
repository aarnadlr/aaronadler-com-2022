import { useContext } from 'react';
// import 'font-awesome/css/font-awesome.min.css';
// import moduleName from '@fortawesome/fontawesome-free'
import { Scrollchor } from 'react-scrollchor';
// import DarkModeToggle from '../darkModeToggle';
import Link from 'next/link'
import {ThemeContext} from "../ThemeContext";

const easeInOutQuart = function(x, t, b, c, d) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
  return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
};

const TopNav = () => {

  
  const { theme, setTheme } = useContext(ThemeContext);
  
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("");
      console.log('toggled to light!',)
      return;
    }
    setTheme("dark");
    console.log('toggled to dark!',)
    return;
  };
  return(

  <div className="container">
    {/* <DarkModeToggle /> */}

    <button onClick={toggleTheme}>{theme === "dark" ? "Dark" : "Light"}</button>

    <Scrollchor
      animate={{ offset: 50, duration: 1400, easing: easeInOutQuart }}
      to="#coretools"
      className=""
    >
      <div className="tools flex items-center grow2">
        <i className="icon fa fa-suitcase" />
        <p className="mr4">Tools</p>
      </div>
    </Scrollchor>

    <Scrollchor
      animate={{ offset: -350, duration: 1400, easing: easeInOutQuart }}
      to="#contact"
      className=""
    >

      <div className="contact flex items-center grow2">
        <i className="icon fa fa-envelope-o blue5" />
        <p className="mr4">Contact</p>
      </div>
    </Scrollchor>

    <style jsx>{`
      .container {
        display: flex;
        justify-content: flex-end;

        width: 400px;
        height: 60px;
        position: fixed;
        top: 0;
        right: 0;
        z-index: 99;
      }
      .icon {
        position: relative;
        bottom: 2px;
        margin-right: 6px;
      }
    `}</style>
  </div>
  )
};

export default TopNav;
