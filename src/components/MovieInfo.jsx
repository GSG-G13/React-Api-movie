import React from "react";
import Star  from "../icons/Star.svg"
import StarFill  from "../icons/StarFill.svg"

class MovieInfo extends React.Component {
        state = {
            data: null,
        }
        componentDidMount() {
            fetch(`https://api.tvmaze.com/singlesearch/shows?q=arrow`)
                .then((res) => res.json())
                .then((data) => this.setState({ data }))
        }
    
        componentDidUpdate = (prevProps) => {
            if (prevProps.movie?.id !== this.props.movie?.id) {
                fetch(`https://api.tvmaze.com/shows/${this.props.movie.id}`)
                    .then((res) => res.json())
                    .then((data) => this.setState({ data }))
            }
        }
    
    
        createMarkup(value) {
            return { __html: `summary: ${value}` };
        }
    
    
        render() {
    
            if (!this.state.data) {
                return <h2>loading ...</h2>
            }
    
    
            return (
                <section id="details">
                    <div><img className="picture" src={this.state.data.image?.original || 'data:image/jpeg;base64,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'} alt="img-info" /></div>
                    <div>
                    <img src={Star} alt=""  onClick={(e) => {
                        this.props.setData((prev) => {
                            
                            const curr = [...prev];
                            if (curr.includes(this.state.data.name)) {
                                e.target.setAttribute('src', Star)
                                curr.splice(curr.indexOf(this.state.data.name), 1)
                            } else {
                                e.target.setAttribute('src',StarFill)
                                curr.push(this.state.data.name);
                            }

                            return curr;
                        })
                    }} />
    
                        <p className="name">suggestion: {this.state.data.name}</p>
                        <p className="rating">rating: {this.state.data.rating.average}</p>
                        <p className="summary" dangerouslySetInnerHTML={this.createMarkup(this.state.data.summary)} >
                        </p>
                    </div>
                </section>
            );
        };
    
    }


export default MovieInfo;
