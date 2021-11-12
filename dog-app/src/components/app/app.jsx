import React from "react";
import './css/style.css'
import Search from "../search/search";

import {Container} from "react-bootstrap";
import {Row} from "react-bootstrap";



function App () {
    return (
        <Container fluid>

                <div className="badge bg-light text-dark">
                    <h2 className='bg-success'>SEARCH DOG PICTURES</h2>
                    <Search/>
                    <div className="d-b text-right card-footer">KITM 2021</div>
                </div>

        </Container>

    )
}

export default App;