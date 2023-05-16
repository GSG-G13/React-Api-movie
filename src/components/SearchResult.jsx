import React from "react";

class SearcResult extends React.Component {
    state = {
        searchQuery: '',
        data : null
    }

    getSearchResult = (name) => {
        fetch(`https://api.tvmaze.com/search/shows?q=${name}`)
        .then((res) => {
        return res.json()
        }).then((data) => {
        return  this.setState( {data: data}  ) 
    })
    };

    componentDidUpdate(prevProps) {
        if (this.props.searchQuery !== prevProps.searchQuery) {
            this.getSearchResult(this.props.searchQuery);
        }
    }

    render() {
        if(!this.state.data) return <></>

    return (
            <div className="suggestion-container">
                {
                
                this.state.data
                .map((ele) => <p onClick={(e)=>{ 
                    this.props.movieSelected(ele.show.id, ele.show.name)
                }} 
                    key={ele.show.id}>{ele.show.name}</p>)}
            </div>
        );
    }
}

export default SearcResult;
