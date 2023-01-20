import { useState } from 'react';
import logo from '../../accept/svg/logo.svg';
import classes from './navbar.module.scss';

function Navbar() {
    const [isOpenBurger, setIsOpenBurger] = useState(false)

    const handleBurger = () => {
        setIsOpenBurger((prev) => !prev)
    }
    return (
        <header className={classes.container}>
            <nav className={classes.navbar}>
                <div>
                    <img src={logo} alt='logo' className={classes.logo} />
                </div>
                <ul className={
                    isOpenBurger ?
                        `${classes.routes}
                    ${classes.open_routes}` :
                        classes.routes
                }
                >
                    <li>Home</li>
                    <li>About as</li>
                    <li>Services</li>
                    <li>Our Teams</li>
                    <li className={classes.active}>Contact Us</li>
                </ul>
                <div
                    className={
                        isOpenBurger ?
                            `${classes.burger} 
                    ${classes.open_burger}` :
                            classes.burger
                    }
                    onClick={handleBurger}
                >
                    <span />
                </div>
            </nav>
        </header>
    )
}

export default Navbar