import React from "react";

class Header extends React.Component {
    state = {
        showFavoriteList: false,
        data: []
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.showFavoriteList !== this.state.showFavoriteList) {
            this.setState({ showFavoriteList: this.state.showFavoriteList })
        }
        if (this.props.data !== prevProps.data) {
            this.setState({ data: this.props.data });
        }
    }

    handleShowList = (value) => {

        this.setState({ showFavoriteList: value })

    }

    render() {

        return (
            <header>
                <nav>
                    <h1>Movies  World</h1>
                    <ul>
                        <li>Home</li>
                        <li onClick={() => this.setState({ showFavoriteList: !this.state.showFavoriteList })}>Favorite List 
                        </li>
                    </ul>
                </nav>
            </header>
        );
    };

}



export default Header;
