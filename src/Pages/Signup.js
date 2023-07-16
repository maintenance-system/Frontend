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

export default function Signup() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setrole] = useState('');


  
  const newWorker = async () => {
    try {
      const response = await axios.post(`http://localhost:5029/api/user/${userName}${role}`,{
        headers: {
            Authorization: password
          }
        });
      console.log(response.data);
      
     
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
            <span className="text-primary" >הוספת משתמש חדש</span>
          </h1>



        </MDBCol>

        <MDBCol md='6'>

          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
              <MDBInput wrapperClass='mb-4' label='שם משתמש' id='form1' type='text' value={userName}
                onChange={(e) => setUserName(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='סיסמא' id='form1' type='password' value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='תפקיד' id='form1' type='text' value={role}
                onChange={(e) =>  setrole(e.target.value)} />

               {/* <p>{message}</p> */}
              <MDBBtn className='w-100 mb-4' size='md' onClick={newWorker}
              >להרשמה</MDBBtn>

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