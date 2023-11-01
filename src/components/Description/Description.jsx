import React from 'react';

import GreenApartmentCityView from './Descriptions/GreenApartmentCityView.jsx';
import MarshmallowStudio from './Descriptions/MarshmallowStudio.jsx';
import GreenPointApartment from './Descriptions/GreenPointApartment.jsx';
import Liner from './Descriptions/Liner.jsx';
import FloraApartment from './Descriptions/FloraApartment.jsx';
import GoodVibesOnlyApartment from './Descriptions/GoodVibesOnlyApartment.jsx';
import HappyMomentsApartment from './Descriptions/HappyMomentsApartment.jsx';
import SkyRiverApartment from './Descriptions/SkyRiverApartment.jsx';
import CentralStreetApartment from './Descriptions/CentralStreetApartment.jsx';
import NаturеApartment from './Descriptions/NаturеApartment.jsx';
import PinkDrеаmApartment from './Descriptions/PinkDrеаmApartment.jsx';
import MuzaApаrtment from './Descriptions/MuzaApаrtment.jsx';
import ArtPоintApartment from './Descriptions/ArtPоintApartment.jsx';

import './Description.css';


const Description = ({ lot }) => {
  return (
    <article className='apart__description description'>
      {lot === '122233' ? <GreenApartmentCityView /> : ''}
      {lot === '122231' ? <MarshmallowStudio /> : ''}
      {lot === '122229' ? <GreenPointApartment /> : ''}
      {lot === '122230' ? <Liner /> : ''}
      {lot === '122241' ? <FloraApartment /> : ''}
      {lot === '122242' ? <GoodVibesOnlyApartment /> : ''}
      {lot === '122244' ? <HappyMomentsApartment /> : ''}
      {lot === '122243' ? <SkyRiverApartment /> : ''}
      {lot === '122239' ? <CentralStreetApartment /> : ''}
      {lot === '158315' ? <NаturеApartment /> : ''}
      {lot === '158314' ? <PinkDrеаmApartment /> : ''}
      {lot === '149983' ? <MuzaApаrtment /> : ''}
      {lot === '136044' ? <ArtPоintApartment /> : ''}

      {/* Description */}
    </article>
  );
}

export default Description;

