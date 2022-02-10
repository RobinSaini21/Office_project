import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardHeader, MDBCardFooter, MDBBtn } from 'mdb-react-ui-kit';
import React from 'react';
import './ReturnFilingServices.css'


function ReturnFilingServices() {
  return <div>
   
      <section className='filing_services' style={{width: "900px"}} >
          <div className='card_1'>
   <MDBCard  alignment='center' style={{ maxWidth: '22rem', height: '15rem'}}>
      {/* <MDBCardHeader>Featured</MDBCardHeader> */}
      <MDBCardBody>
        <MDBCardTitle>Self IT Return Filing</MDBCardTitle>
        <MDBCardText>Prepare your Income-tax Return <br/>yourself.
        <br/>Finish filing in less than 15 minutes.</MDBCardText>
        <MDBBtn style={{ maxWidth: '16rem' }} href='#'>START YOURSELF</MDBBtn>
      </MDBCardBody>
      {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
    </MDBCard>
    </div>
    
    <div className='card_1'>
    <MDBCard alignment='center' style={{ maxWidth: '22rem' }}>
      {/* <MDBCardHeader>Featured</MDBCardHeader> */}
      <MDBCardBody>
        <MDBCardTitle>Assisted IT Return Filing</MDBCardTitle>
        <MDBCardText>Need assistance in filing your Income-tax return? <br/>Get your Tax Return  <br/> prepared by tax experts.</MDBCardText>
        <MDBBtn style={{ maxWidth: '16rem' }} href='#'>GET ASSISTANCE</MDBBtn>
      </MDBCardBody>
      {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
    </MDBCard>
    </div>
    </section>
  </div>;
}

export default ReturnFilingServices;
