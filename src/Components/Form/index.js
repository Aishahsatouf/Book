import React ,{useState}from "react";
import { Form, FormControl,Button} from 'react-bootstrap';
import { Link} from "react-router-dom";
export default function Search(){
  const [searchFeild,setSearch]=useState('')
  
    const handleChange=(e)=>{
       setSearch(e.target.value);  
    }
    return (
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
          name="feild"
          onChange={handleChange}
          id="input-feild"
        />
        <Link style={{color:"white",textDecoration:"none"}} to={`/books/${searchFeild}`}><Button type="submit" style={{backgroundColor:"rgb(144 62 18)",outlineColor:"rgb(144 62 18)", borderColor:"rgb(144 62 18)"}}>Search</Button></Link>
      </Form>
    )
}
