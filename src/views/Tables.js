import React,{useState,useEffect} from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button, Modal, ModalFooter,
  ModalHeader, ModalBody
} from "reactstrap";
import {connect, useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import setAuthToken from "setAuthToken";
function Tables() {
  const loginSession = useSelector(state => state.authReducers.loginSession);
  const [usersArr,setUserarr] =useState([])
  const [selected,setselect] =useState([])
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
 useEffect(()=>{
    Get_All_Users()
  },[])

  const Get_All_Users= async()=>{
    try {
      const res =  await axios.get('http://localhost:3303/v1/user/all')
      setUserarr(res?.data?.users)
    } catch (error) {
      console.log("error?",error);
    }
  }
  return (
    <>
      <div className="content">
      <Modal isOpen={modal}
                toggle={toggle}
                modalTransition={{ timeout: 2000 }}>
                <ModalBody>
                  <div className="modalImg">
                <img
                  alt="..."
                  src={selected?.avatar ? 'http://localhost:3303/user/image/'+selected?.avatar :require("assets/img/damir-bosnjak.jpg").default}
                />
                </div>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                  
                   <tr>
                      <td>{selected?.full_name}</td>
                      <td>{selected?.email}</td>
                      <td>{selected?.description}</td>
                     
                    </tr>
                   </tbody>
                </Table>
                </ModalBody>
            </Modal>
        <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">All Users</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive>
                  <thead className="text-primary">
                    <tr>
                      <th>Full Name</th>
                      <th>Email</th>
                      <th>Description</th>
                    </tr>
                  </thead>
                  <tbody>
                   {usersArr.length && usersArr.map((val,ind)=> 
                   <tr>
                      <td>{val?.full_name}</td>
                      <td>{val?.email}</td>
                      <td>{val?.description}</td>
                      <td >
                      <Button
                        // href={'/register'}
                        className="btn-round"
                        color="primary"
                        onClick={()=>{
                          setselect(val)
                          toggle()
                        }
                        }
                      >
                       VIEW
                      </Button>
                      </td>
                    </tr>)}
                   </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        
        </Row>
      </div>
    </>
  );
}

export default connect(null,null)(Tables);
