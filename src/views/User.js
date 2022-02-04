import axios from "axios";
import React,{useState,useEffect} from "react";
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

import jwt_decode from "jwt-decode";
import {connect, useDispatch, useSelector} from 'react-redux';
import {sessionLogin} from '../redux/actions/authActions'
function User() {
  const loginSession = useSelector(state => state.authReducers.loginSession);
  const dispatch = useDispatch();
  const [fullName, setfullName] = useState(loginSession?.full_name);
  const [email, setemail] = useState(loginSession?.email);
  const [aboutus, setaboutus] = useState(loginSession?.description);
  const [userimg, setuserimg] = useState(loginSession?.avatar);
  const [uploadimage, setuploadimage] = useState('');
  const [img, setimg] = useState('');

   
  // console.log("uploadimage",localStorage.getItem("jwtToken"));
  const handleSubmit = async (event) => {
    event.preventDefault();
    let formData = new FormData()
    formData.append('full_name',fullName)
    formData.append('profile_email',email)
    formData.append('description',aboutus)
    formData.append('avatar',img)
    try {
   
      const res = await axios.put("http://localhost:3303/v1/user/update",
    //   {
    //     headers: {
    //     'content-type': 'multipart/form-data',
    //     'Authorization': "Bearer " + localStorage.getItem("jwtToken")
    // }}, 
    formData);
      const decoded = jwt_decode(res?.data?.token);
      localStorage.setItem('jwtToken', res?.data?.token)
      dispatch(sessionLogin(decoded))
      console.log(res);
    } catch (error) {
      console.log("ERROR", error);
    }
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        setimg(event.target.files[0]);
        setuploadimage(e.target.result)
        // this.setState({image: e.target.result});
      };
      reader.readAsDataURL(event.target.files[0]);
    }
   
  }


  
  return (
    <>
      <div className="content">
        <Row>
          <Col md="4">
            <Card className="card-user">
              <div className="image">
                <img
                  alt="..."
                  src={require("assets/img/damir-bosnjak.jpg").default}
                />
              </div>
              <CardBody>
                <div className="author">
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    <img
                      alt="..."
                      className="avatar border-gray"
                      src={uploadimage ? uploadimage : userimg ? 'http://localhost:3303/user/image/'+userimg :
                        require("assets/img/mike.jpg").default}
                    />
                    {/* <h5 className="title">Chet Faker</h5> */}
                   
                  </a>
                
                </div>
                <div className="file">
                <input type="file" onChange={onImageChange} className="filetxt"/>
                </div>
              </CardBody>
              
            </Card>
           
          </Col>
          <Col md="8">
            <Card className="card-user">
              <CardHeader>
                <CardTitle tag="h5">Edit Profile</CardTitle>
              </CardHeader>
              <CardBody>
                <Form onSubmit={handleSubmit} >
                  <Row>
                     <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>Fullname</label>
                        <Input
                          defaultValue="Chet"
                          placeholder="Fullname"
                          type="text"
                          onChange={(event) => setfullName(event.target.value)}
                           value={fullName}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>Email address</label>
                        <Input
                          defaultValue="Faker"
                          placeholder="Email"
                          type="email"
                          onChange={(event) => setemail(event.target.value)}
                           value={email}
                           disabled
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                 
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          type="textarea"
                          placeholder="About your self"
                          onChange={(event) => setaboutus(event.target.value)}
                           value={aboutus}
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
                        Update Profile
                      </Button>
                    </div>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default connect(null,null)(User);
