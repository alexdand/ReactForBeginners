import React from 'react';

class Header extends React.Component {

    render() {
        return (
            <div>
                <header className="top">
                    <h1>Catch of the day</h1>
                </header>
                <h3 className="tagline">
                    <span>Fresh daily</span>
                </h3>
            </div>
        )
    }

}

export default Header;