import React from "react";
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';
import '../../../styles/slider.scss';

class Slider extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }
    async componentDidMount() {
        var options = {
            method: 'GET',
            url: 'https://www.googleapis.com/books/v1/volumes?q=+inauthor:simon&startIndex=45&maxResults=15',
        };

        const res = await axios(options);
        console.log(res.data.items);
        this.setState({
            books: res.data.items
        })
    }
    render() {
        return (
            <>
                <section id="bestselling">
                    <Row>
                        <Col xs={12}>

                            <div className="container">
                                <h1 style={{ 'text-align': 'center' }}>
                                    Best Selling Books
                                </h1>
                                <div className="cards-container" data-aos="fade-up" data-aos-delay="500">
                                    {
                                        this.state.books.length > 0 && this.state.books.map((item) => {
                                            return (
                                                <>
                                                    <div className="cards">
                                                        <a href={item.volumeInfo.previewLink ? item.volumeInfo.previewLink : "https://books.google.jo/books?id=YvdmwgEACAAJ&dq=inauthor:simon&hl=&cd=47&source=gbs_api"}>
                                                            <img src={(item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : `https://i.imgur.com/J5LVHEL.jpg`} />
                                                        </a>
                                                        <div className="cards-content">
                                                            <h2 style={{ textOverflow: "ellipsis", overflow: "hidden" }}>{item.volumeInfo.title}</h2>
                                                            <p >{item.volumeInfo.description}</p>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                        </Col>
                    </Row>
                </section>

            </>
        )
    }
}

export default Slider;