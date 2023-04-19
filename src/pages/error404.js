
import Layout from "../ui/Layout"
import { Col, Row,Container } from "react-bootstrap";
import "../styles/error404.css"
import { Link } from "react-router-dom";

const Error=()=>{
    return(
        <div>
            <Layout>
            <div>
                <Container>
                    
                    <Row>
                        <Col sm="12">
                        <div className="error">
                            <img src="404 error.png" alt="error"/>
                        </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="12">
                        <div className="text" >
                        Oops ! It’s Looks Like You’re Lost.
                        </div>
                        <div className="text2" >
                        The page you’re looking for isn’t available. 
                        </div>
                        <Link to="/"><button className="btn-go-home">Go Back to home</button></Link>

                        </Col>
                    </Row>


                    
                </Container>
                </div>
            </Layout>
        </div>
    )
}
export default Error;