import React, { useState } from 'react';
import axios from 'axios';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
  from 'mdb-react-ui-kit';
import "../comp/Login.css"
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [userRole, setUserRole] = useState('');

  const navigate = useNavigate()


  const workerID = async () => {
    try {
      const response = await axios.get(`http://localhost:5029/api/user/${userName}`, {
        headers: {
          Authorization: password
        }
      });
      console.log(response.data)
      if (response.data === true) {
        setMessage(" בהצלחה זוהיתם")
        workerRole()
      }
      else {
        setMessage("השם או הסיסמא אינם נכונים")
      }
    } catch (error) {
      console.error('An error occurred:', error);

    }
  };


  const workerRole = async () => {
    try {
      const response = await axios.get(`http://localhost:5029/api/UaerRoles/${userName}`, {
        headers: {
          Authorization: password
        }
      });
      console.log(response.data[0].role1)
      setUserRole(response.data[0].role1)
      switch (userRole) {
        case "מנהל":
          navigate('/manager');
          break;
        case "ראש צוות":
          navigate('/teamleader');
          break;
        case "עובד תחזוקה":
          navigate('/teamleader');
          break;
        case "מזכיר":
          navigate('/teamleader');
          break;
        case "גננת":
          navigate('/teamleader');
          break;
        default:
          navigate('/signup');
          break;
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };



  return (
    <MDBContainer fluid className='p-4' >

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            עץ הדעת <br />
            <span className="text-primary" >מערכת תחזוקה</span>
          </h1>

          <p className='px-3' >
            ברוכים הבאים
          </p>

        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <MDBInput wrapperClass='mb-4' label='שם משתמש' id='form1' type='text' value={userName}
                onChange={(e) => setUserName(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='סיסמא' id='form1' type='password' value={password}
                onChange={(e) => setPassword(e.target.value)} />


              <p>{message}</p>
              <MDBBtn className='w-100 mb-4' size='md' onClick={workerID}
              >כניסה</MDBBtn>

              <div className="text-center">



                <p>:הרשם בעזרת</p>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='facebook-f' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='twitter' size="sm" />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' style={{ color: '#1266f1' }}>
                  <MDBIcon fab icon='google' size="sm" />
                </MDBBtn>



              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

