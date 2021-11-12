import React, {useState} from "react";
import {Form} from "react-bootstrap";
import Output from "../output/output";
import Fail from "../fail/fail";

const Search =()=> {

    const [dog, setDog] = useState({message :{}, status :{}});
    const [userInput, setUserInput] = useState();


    const breedHandler = (event)=> {
        setUserInput(event.target.value)
    }

    const searchHandler = ()=>{

        fetch(`https://dog.ceo/api/breed/${userInput}/images/random/3`)
            .then(response => response.json())
            .then(data=>setDog(data))
    }

    console.log(dog)

    const dogInfo = <Output img1={dog.message[0]} img2={dog.message[1]} img3={dog.message[2]}/>

    return (
        <Form>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Enter Dog Breed" onChange={breedHandler}/>
                <button className="btn btn-outline-success" type="button" id="button-addon2" onClick={searchHandler}>Search</button>
            </div>
            <div>
                {dog.status === "error" ? <Fail/> : ''}
                {dog.status === "success" ? dogInfo : ''}
            </div>
        </Form>
    )
}

export default Search;