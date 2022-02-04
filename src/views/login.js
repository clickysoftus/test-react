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
import {connect, useDispatch, useSelector} from 'react-redux';
import {sessionLogin} from '../redux/actions/authActions';
import axios from "axios";
import jwt_decode from "jwt-decode";
function User(props) {
  const dispatch = useDispatch();
  const loginSession = useSelector(state => state.authReducers.loginSession);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    
    
    try {
      let obj = {
        email: email,
        password: password,
      };
      const res = await axios.post("http://localhost:3303/v1/user/login", obj);
      // 
      console.log(res?.data);
      const decoded = jwt_decode(res?.data?.token);
      localStorage.setItem('jwtToken', res?.data?.token)
      dispatch(sessionLogin(decoded))
      props.history.push('/admin/userprofile')
      setemail('')
      setpassword('')
    } catch (error) {
      console.log("ERROR", error);
    }
  };
  console.log("loginSession",loginSession);
  return (
    <>
      <div className="login-main">
    
          <Col md="5" >
            <Card className="card-user loginuser">
              <CardHeader >
                <CardTitle className="textalign-center" tag="h5">Login</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit} >
                  <Row className="center">
                     <Col className="pr-1" md="6">
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
                      <FormGroup>
                        <label>Password</label>
                        <Input
                          type='password'
                          placeholder="Password"
                          onChange={(event) => setpassword(event.target.value)}
                           value={password}
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
                        Log in
                      </Button>
                    </div>
                  </Row>
                  <Row>
                    <div className="update ml-auto mr-auto">
                      <Button
                        // href={'/register'}
                        className="btn-round"
                        color="primary"
                        onClick={()=>props.history.push('/register')}
                      
                      >
                       Register
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

export default connect(null,null)(User);
