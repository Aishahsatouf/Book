/* eslint-disable react/prop-types */
import axios from "axios";
import React from "react";
import '../../styles/cards.css'
// import {Card,Button} from 'react-bootstrap'
// import {useParams} from 'react-router-dom'
class Cards extends React.Component{
constructor(props){
    super(props);
    this.state={
        books:[]
    }
}
async componentDidMount (){
    try{
     let res=await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${this.props.match.params.id}&maxResults=20`);
     console.log(res);
     this.setState({
        books:res.data.items
     })
    }catch(err){
        console.log(err);
    }
}
render(){
    return(
        
          // eslint-disable-next-line no-unused-vars
<>
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                flexWrap:"wrap",
                width:"100%"
            }}
        >
          {this.state.books.length>0 && this.state.books.map((item)=>{
              return(
                  // eslint-disable-next-line react/jsx-key
            <div className="Card1">
                <div className="photo"
                    style={{
                        backgroundImage: `url(${(item.volumeInfo.imageLinks) ? item.volumeInfo.imageLinks.thumbnail : `https://i.imgur.com/J5LVHEL.jpg`})`,

                    }}
                ></div>
                <ul className="details">
                    <h4>{item.volumeInfo.title}</h4>
                    <li>Release Date: {item.volumeInfo.publishedDate}</li>
                    <li>Publisher: {item.volumeInfo.publisher}</li>
                </ul>
                <div className="description">
                    <div className="line">
                        <h1 className="title">{item.volumeInfo.title}</h1>
                        <h1 className="author">{ (item.volumeInfo.authors) ? item.volumeInfo.authors[0] : `Not available`}</h1>
                    </div>
                    <p className="summary">
                    {item.volumeInfo.description}
                    </p>
                </div>
            </div>
        )
    })}
    </div>
    </> 
        
    
    )
}

}

export default Cards