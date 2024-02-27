import React from 'react';

import GreenApartmentCityView from './Descriptions/GreenApartmentCityView.jsx';
import MarshmallowStudio from './Descriptions/MarshmallowStudio.jsx';
import Liner from './Descriptions/Liner.jsx';
import FloraApartment from './Descriptions/FloraApartment.jsx';
import GoodVibesOnlyApartment from './Descriptions/GoodVibesOnlyApartment.jsx';
import CentralStreetApartment from './Descriptions/CentralStreetApartment.jsx';
import MuzaApаrtment from './Descriptions/MuzaApаrtment.jsx';
import ArtPоintApartment from './Descriptions/ArtPоintApartment.jsx';
import FаmilyApаrtmentOсeаnis from './Descriptions/FаmilyApаrtmentOсeаnis.jsx';
import EleganceApartment from './Descriptions/EleganceApartment.jsx';

import './Description.css';


const Description = ({ lot, showDescription }) => {
  return (
    <article className={`apart__description description ${showDescription ? 'description_type_active' : ''}`}>
      {lot === '122233' ? <GreenApartmentCityView /> : ''}
      {lot === '122231' ? <MarshmallowStudio /> : ''}
      {lot === '122230' ? <Liner /> : ''}
      {lot === '122241' ? <FloraApartment /> : ''}
      {lot === '122242' ? <GoodVibesOnlyApartment /> : ''}
      {lot === '122239' ? <CentralStreetApartment /> : ''}
      {lot === '149983' ? <MuzaApаrtment /> : ''}
      {lot === '136044' ? <ArtPоintApartment /> : ''}
      {lot === '176663' ? <FаmilyApаrtmentOсeаnis /> : ''}
      {lot === '178079' ? <EleganceApartment /> : ''}
    </article>
  );
}

export default Description;

