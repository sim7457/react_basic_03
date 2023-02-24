const Header = ({ common, basic, menu, ok }) => {
    console.log(ok);
    return (
        <header className="Header">
            <div className="inner">
                <h1>{common[0].company}</h1>
                <nav>
                    <ul>
                        {
                            menu.map((it, idx) => {
                                return (
                                    <li kay={it.id}>
                                        {it.title}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;