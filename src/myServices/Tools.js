import React from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn } from 'mdb-react-ui-kit';

function Tools() {
  return <div> <section className="filing_services">
  <div className="card_1">
    <MDBCard
      alignment="center"
      style={{ maxWidth: "22rem", height: "15rem" }}
    >
      {/* <MDBCardHeader>Featured</MDBCardHeader> */}
      <MDBCardBody>
        <MDBCardTitle>Generate Form 12 BB</MDBCardTitle>
        <MDBCardText>
        Claim tax benefits for House Rent Allowance (HRA), Leave Travel Allowance / Concession (LTA/LTC), etc. Simply fill up the form and generate and submit to your employer.
        </MDBCardText>
        <MDBBtn style={{ maxWidth: "16rem" }} href="#">
       GENERATE NOW
        </MDBBtn>
      </MDBCardBody>
      {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
    </MDBCard>
  </div>
  <div className="card_1">
    <MDBCard alignment="center" style={{ maxWidth: "22rem" }}>
      {/* <MDBCardHeader>Featured</MDBCardHeader> */}
      <MDBCardBody>
        <MDBCardTitle>Generate Rent Receipt</MDBCardTitle>
        <MDBCardText>
        Use this feature to generate rent receipts online in required format. Download and Print receipts and claim HRA with your employer on timely basis.
        </MDBCardText>
        <MDBBtn style={{ maxWidth: "16rem" }} href="#">
        GENERATE NOW
        </MDBBtn>
      </MDBCardBody>
      {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
    </MDBCard>
  </div>
  <div className="card_1">
    <MDBCard alignment="center" style={{ maxWidth: "22rem" }}>
      {/* <MDBCardHeader>Featured</MDBCardHeader> */}
      <MDBCardBody>
        <MDBCardTitle>Check Refund Status</MDBCardTitle>
        <MDBCardText>
        Check Income-tax refund status year wise. It is important to keep a record for refunds and here is a convenient place to find out for all the years when return is e-filed.
        </MDBCardText>
        <MDBBtn style={{ maxWidth: "16rem" }} href="#">
     CHECK NOW
        </MDBBtn>
      </MDBCardBody>
      {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
    </MDBCard>
  </div>
</section>
</div>;
}

export default Tools;
