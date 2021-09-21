import React ,{useState}from "react";
import { Form, FormControl,Button} from 'react-bootstrap';
import { Link} from "react-router-dom";
export default function Search(){
  const [searchFeild,setSearch]=useState('')
  
    const handleChange=(e)=>{
       setSearch(e.target.value);
      //  console.log(e.target.value);
        // if(searchFeild){
        //      console.log(searchFeild);
        //      return (
        //        
        //      )
        // }
       
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
        />
        <Button type="submit" style={{backgroundColor:"#61361f",outlineColor:"#61361f", borderColor:"#61361f"}}><Link style={{color:"white",textDecoration:"none"}} to={`/books/${searchFeild}`}>Search</Link></Button>
      </Form>
    )
}
