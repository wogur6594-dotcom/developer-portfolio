function Header() {
    return (
        <header className="header">
            <div className="header-inner">
                <a href="#home" className="logo">
                    JAEHYUK.DEV
                </a>

                <nav className="nav">
                    <a href="#about">About</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#troubleshooting">Troubleshooting</a>
                    <a href="#resume">Resume</a>
                    <a href="#contact">Contact</a>
                </nav>

                <a
                    href="https://github.com/wogur6594-dotcom"
                    target="_blank"
                    rel="noreferrer"
                    className="github-button"
                >
                    GitHub
                </a>
            </div>
        </header>
    )
}

export default Header