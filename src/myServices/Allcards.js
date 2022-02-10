import React from 'react';
import AssistedServices from './AssistedServices';
import ReturnFilingServices from './ReturnFilingServices';
import Tools from './Tools';
import Calculators from './Calculators';
import Navbar_2 from '../components/homepage/Navbar/Navbar_2';

function Allcards() {
  return <div className='Allcards'>
    <h5 style={{opacity: 0.5 , margin:"20px"}}>INCOME-TAX RETURN FILING SERVICES</h5>
      <AssistedServices/>
      <h5 style={{opacity: 0.5,margin:"20px"}}>ASSISTED SERVICES</h5>
      <ReturnFilingServices/>
      <h5 style={{opacity: 0.5 ,margin:"20px"}}>TOOLS</h5>
      <Tools/>
      <h5 style={{opacity: 0.5 ,margin:"20px"}}>CALCULATORS</h5>
      <Calculators/>
  </div>;
}

export default Allcards;
