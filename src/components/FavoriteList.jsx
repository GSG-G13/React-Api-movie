import React from "react";

class FavoriteList extends React.Component {
    state = {

        data: []
    }


componentDidMount(){
    
}
    componentDidUpdate(prevProps) {
        if (this.props.data !== prevProps.data) {
            this.setState({ data: this.props.data });
        }

    }


    render() {
        if(!this.props.showFavoriteList){
            return
        }
       
        if (!this.state.data.length) {
            return (<div id="favorite-list">
                <h3>The list is empty!</h3>

            </div>)

        }
        return (
            <div id="favorite-list">
                <h3> Favorite List </h3>
                <ul className="fav-list">

                    {this.state.data.map((ele, id) => <li key={id}>{ele}</li>)}

                </ul>

            </div>
        );
    }

}

export default FavoriteList;