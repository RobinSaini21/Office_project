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
import { Link } from 'react-router-dom';
  
function Calculators() {
  return <div>

<section className='filing_services' >
          <div className='card_1'>
   <MDBCard  alignment='center' style={{ maxWidth: '22rem', height: '15rem'}}>
      {/* <MDBCardHeader>Featured</MDBCardHeader> */}
      <MDBCardBody>
        <MDBCardTitle>Income Tax Calculator 2023</MDBCardTitle>
        <MDBCardText>Calculate Income-tax payable accurately. Just enter Income details, Investment details and Tax paid details for the Financial Year 2022-23 to calculate tax liability.</MDBCardText>
        <MDBBtn style={{ maxWidth: '16rem' }} href='#'>CALCULATE NOW</MDBBtn>
      </MDBCardBody>

      {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
    </MDBCard>
    </div>
    <div className='card_1'>
    <MDBCard alignment='center' style={{ maxWidth: '22rem' }}>
      {/* <MDBCardHeader>Featured</MDBCardHeader> */}
      <MDBCardBody>
        <MDBCardTitle>Income Tax Calculator 2022</MDBCardTitle>
        <MDBCardText>Calculate Income-tax payable accurately. Just enter Income details, Investment details and Tax paid details for the Financial Year 2021-22 to calculate tax liability.</MDBCardText>
        <MDBBtn style={{ maxWidth: '16rem' }} href='#'>CALCULATE NOW</MDBBtn>
      </MDBCardBody>
      {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
    </MDBCard>
    </div>
    {/* <br/> */}
    <div className='card_1'>
    <MDBCard alignment='center' style={{ maxWidth: '22rem' }}>
      {/* <MDBCardHeader>Featured</MDBCardHeader> */}
      <MDBCardBody>
        <MDBCardTitle>HRA Calculator</MDBCardTitle>
        <MDBCardText>Calculate House Rent Allowance (HRA) using this simple tool. Just enter few details related to rent and get accurate calculations. HRA calculations are useful for tax planning.</MDBCardText>
        <MDBBtn style={{ maxWidth: '16rem' }} href='#'>CALCULATE NOW</MDBBtn>
      </MDBCardBody>
      {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
    </MDBCard>
    </div>
  
    <div className='card_1'>
    <MDBCard alignment='center' style={{ maxWidth: '22rem' }}>
      {/* <MDBCardHeader>Featured</MDBCardHeader> */}
      <MDBCardBody>
        <MDBCardTitle>EMI Calculator</MDBCardTitle>
        <MDBCardText>Find EMIs to be paid for loans taken, or if you wish to take a loan and would like to know the monthly installment amount. Use this simple tool to find it out.</MDBCardText>
        <MDBBtn style={{ maxWidth: '16rem' }} href='#'>
          <Link to={'/emi_cal'}>CALCULATE NOW</Link></MDBBtn>
      </MDBCardBody>
      {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
    </MDBCard>
    </div>
    
    <div className='card_1'>
    <MDBCard alignment='center' style={{ maxWidth: '22rem' }}>
      {/* <MDBCardHeader>Featured</MDBCardHeader> */}
      <MDBCardBody>
        <MDBCardTitle>BMI Calculator</MDBCardTitle>
        <MDBCardText>BMI is an inexpensive and easy-to-perform method of screening for weight categories that may lead to health problems. Check out your BMI using this tool from myITreturn. We care for you and wish you a good healthy life.</MDBCardText>
        <MDBBtn style={{ maxWidth: '16rem' }} href='#'>
  <Link to={'/bmi_cal'}>CALCULATE NOW</Link>
          </MDBBtn>
      </MDBCardBody>
      {/* <MDBCardFooter className='text-muted'>2 days ago</MDBCardFooter> */}
    </MDBCard>
    </div>
    </section>
  </div>;
}

export default Calculators;

