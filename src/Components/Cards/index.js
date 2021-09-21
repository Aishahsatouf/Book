/* eslint-disable react/prop-types */
import axios from "axios";
import React from "react";
import CardItem from './cardItems';
import '../../styles/cards.css'
import { Row, Col, Nav, Form } from 'react-bootstrap'
// import {useParams} from 'react-router-dom'
class Cards extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: []
        }
    }
    async componentDidMount () {
        try {
            let res = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.props.match.params.id}&maxResults=20`);
            this.cleanData(res)
        } catch (err) {
            console.log(err);
        }
    }
    handleSort =(e)=>{
        if(e.target.value&&e.target.value==="title"){
            console.log(this.state.books)
            let sortedBooks = this.state.books.sort((a,b)=>{
                if(a.volumeInfo.title> b.volumeInfo.title) return 1;
                if(a.volumeInfo.title < b.volumeInfo.title) return -1;
                return 0;
            })
            this.setState({
                books: sortedBooks
            })
        }
        if(e.target.value&&e.target.value==="author"){
            let sortedBooks = this.state.books.sort((a,b)=>{
                if(a.volumeInfo.authors[0]> b.volumeInfo.authors[0]) return 1;
                if(a.volumeInfo.authors[0] < b.volumeInfo.authors[0]) return -1;
                return 0;
            })
            this.setState({
                books: sortedBooks
            })
        }
    }
    cleanData (obj){
        const cleaned= obj.data.items.map(item=>{
            // eslint-disable-next-line no-prototype-builtins
            if(item.volumeInfo.hasOwnProperty('title')===false){
                item.volumeInfo.title="Unknown"
            // eslint-disable-next-line no-prototype-builtins
            }else if(item.volumeInfo.hasOwnProperty('authors')===false){
                item.volumeInfo.authors[0]='Unkown'
            }
            return item;
        })
        this.setState({
            books: cleaned
        })
    }
    render() {
        return (
            // eslint-disable-next-line no-unused-vars
            <>
                <Row>
                    <Col>
                        <Nav className="justify-content-center" style={{ backgroundColor: "#fff5d9" }}>
                            <Nav.Item >
                                <h1 className="text-center mt-4 mb-4" style={{ color: "#522812" }}>Books</h1>
                            </Nav.Item>
                            <Nav.Item  style={{paddingTop:"2%", marginLeft:"1%"}}>
                                <Form.Select   size="sm" onChange={this.handleSort}>
                                    <option  value="" >Sort By...</option>
                                    <option value="title">Title</option>
                                    <option value="author">Author</option>
                                </Form.Select>
                            </Nav.Item>
                        </Nav>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div
                        id="flex-container"
                        >
                            <CardItem books={this.state.books} />
                        </div>
                    </Col>
                </Row>
            </>


        )
    }

}

export default Cards