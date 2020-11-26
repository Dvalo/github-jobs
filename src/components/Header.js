import { React, useState } from 'react';

// Theme
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { lightTheme, darkTheme } from "./Theme";

function Header() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") === null ? 'light' : localStorage.getItem("theme"));
    console.log(theme);
    const themeToggler = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem("theme", "dark");
        } else {
            setTheme('light') ;
            localStorage.setItem("theme", "light")
        }
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyles/>
                <header>
                    <div className="container">
                        <div className="header-wrapper">
                            <a href="/github-jobs" className="web-title">devjobs</a>
                            <div className="web-theme">
                                <i className="fas fa-sun"></i>
                                <div className={'theme_slider ' + theme} onClick={themeToggler}>
                                    <div className={'slider round dark_sl ' + theme}></div>
                                </div>
                                <i className="fas fa-moon"></i>
                            </div>
                        </div>
                    </div>

                </header>
    </ThemeProvider>
    )
}

export default Header;