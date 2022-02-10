import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";

function AssistedServices() {
  return (
    <div>
      <section className="filing_services">
        <div className="card_1">
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
        </div>
        <div className="card_1">
          <MDBCard alignment="center" style={{ maxWidth: "22rem" }}>
            {/* <MDBCardHeader>Featured</MDBCardHeader> */}
            <MDBCardBody>
              <MDBCardTitle>Tax Planning Service</MDBCardTitle>
              <MDBCardText>
              Are you worried about your Tax planning? Do not worry! We are here to help you. Get your tax planning done by our tax professionals and enjoy our premium support service.
              </MDBCardText>
              <MDBBtn style={{ maxWidth: "16rem" }} href="#">
             OPT FOR SERVICES
              </MDBBtn>
            </MDBCardBody>
            {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
          </MDBCard>
        </div>
      </section>
    </div>
  );
}

export default AssistedServices;
