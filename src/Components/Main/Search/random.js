/* eslint-disable react/jsx-key */
import React from 'react';
import axios from 'axios';
import '../../../styles/random.css'
class Random extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    async componentDidMount() {
        try {
            let res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=+intitle:random&startIndex=20&maxResults=24`);
            console.log(res);
            this.setState({
                books: res.data.items
            })
        } catch (err) {
            console.log(err);
        }
    }
    render() {
        return (
            <>
                <div className="random-group">
               {this.state.books.length>0 && this.state.books.map((item)=>{
              return(
                <div className="random-item">
                    <a href={item.selfLink?item.selfLink:"https://www.googleapis.com/books/v1/volumes/Ee0bEAAAQBAJ"}>
                        <figure className="item-picture">
                            <img src={(item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : `https://i.imgur.com/J5LVHEL.jpg`}/>
                        </figure>
                    </a>
                </div>
                )
            })}
                </div>
            </>
        )
    }

}

export default Random;