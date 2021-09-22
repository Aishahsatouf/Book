/* eslint-disable react/prop-types */

import React from "react";
import '../../styles/cards.css'
class CardItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            // eslint-disable-next-line no-unused-vars
            <>
                {this.props.books.length > 0 && this.props.books.map((item) => {
                    return (
                        <>
                            <div className="Card1">
                               <a href={item.volumeInfo.previewLink?item.volumeInfo.previewLink:"https://www.googleapis.com/books/v1/volumes/Ee0bEAAAQBAJ"}> <div className="photo"
                                    style={{
                                        backgroundImage: `url(${(item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : `https://i.imgur.com/J5LVHEL.jpg`})`,

                                    }}
                                ></div></a>
                                <ul className="details">
                                    <h4>{item.volumeInfo.title}</h4>
                                    <li>Release Date: {item.volumeInfo.publishedDate?item.volumeInfo.publishedDate:"No Data Available"}</li>
                                    <li>Publisher: {item.volumeInfo.publisher?item.volumeInfo.publisher:"Unknown"}</li>
                                </ul>
                                <div className="description">
                                    <div className="line">
                                        <h1 className="title">{item.volumeInfo.title}</h1>
                                        <h1 className="author">{(item.volumeInfo.authors) ? item.volumeInfo.authors[0] : `Not available`}</h1>
                                    </div>
                                    <p className="summary">
                                        {item.volumeInfo.description}
                                    </p>
                                </div>
                            </div>
                        </>
                    )

                })}
            </>


        )
    }

}

export default CardItem;