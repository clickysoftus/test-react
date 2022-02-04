import React,{useState} from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";

function Register(props) {
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    setuserName('')
    setemail('')
    setfname('')
    setlname('')
    setpassword('')
    // try {
    //   setLoading(true)
    //   let obj = {
    //     name: senderName,
    //     email: senderEmail,
    //     phone: senderPhoneNo,
    //     comment: senderComment,
    //   };
    //   const res = await axios.post("https://nodejs-portfolio-backend.herokuapp.com/send", obj);
    //   notify()
     
    //   console.log(res);
    // } catch (error) {
    //   console.log("ERROR", error);
    // }
  };

  return (
    <>
      <div className="login-main">
    
          <Col md="5" >
            <Card className="card-user loginuser">
              <CardHeader >
                <CardTitle className="textalign-center" tag="h5">Register</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit} >
                  <Row className="center">
                     <Col className="pr-1" md="6">
                     <FormGroup>
                        <label>User Name</label>
                        <Input
                          defaultValue="Faker"
                          placeholder="User name"
                          type="text"
                          onChange={(event) => setuserName(event.target.value)}
                           value={userName}
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>First Name</label>
                        <Input
                          defaultValue="Faker"
                          placeholder="First name"
                          type="text"
                          onChange={(event) => setfname(event.target.value)}
                           value={fname}
                        />
                      </FormGroup>
                      <FormGroup>
                        <label>Last Name</label>
                        <Input
                          defaultValue="Faker"
                          placeholder="Last name"
                          type="text"
                          onChange={(event) => setlname(event.target.value)}
                           value={lname}
                        />
                      </FormGroup>
                     <FormGroup>
                        <label>Email address</label>
                        <Input
                          defaultValue="Faker"
                          placeholder="Email"
                          type="email"
                          onChange={(event) => setemail(event.target.value)}
                           value={email}
                        />
                      </FormGroup>
                      
                    </Col>
                    
                  </Row>
                 
                  
                 
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        className="btn-round"
                        color="primary"
                        type="submit"
                      >
                       Register
                      </Button>
                    </div>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        // href={'/'}
                        className="btn-round"
                        color="primary"
                        type="submit"
                        onClick={()=>props.history.goBack()}
                      
                      >
                       Back To Login
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
      
      </div>
    </>
  );
}

export default Register;
