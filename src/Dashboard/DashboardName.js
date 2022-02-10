import React from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardHeader,
    MDBCardFooter,
    MDBBtn,
  } from "mdb-react-ui-kit";

function DashboardName() {
  return <div>
        <MDBCard
            alignment="center"
            style={{ maxWidth: "22rem", height: "15rem" }}
          >
            {/* <MDBCardHeader>Featured</MDBCardHeader> */}
            <MDBCardBody>
              <MDBCardTitle>Notice Assistance Service</MDBCardTitle>
              <MDBCardText>
                Received an Income-tax notice ? Do not worry! We can help you
                deal with it! Simply leave it on our tax experts who will assist
                you, provide proper advice and help you in concluding it.
              </MDBCardText>
              <MDBBtn style={{ maxWidth: "16rem" }} href="#">
              GET ASSISTANCE
              </MDBBtn>
            </MDBCardBody>
            {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
          </MDBCard>
  </div>;
}

export default DashboardName;
