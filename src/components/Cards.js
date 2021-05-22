import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import Beirut from './Beirut.jpg'
import Cats from './Cats.jpg';
import Tyre from './Tyre.jpg';
import House from './House.jpg';
import Lake from './Lake.jpg';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src={House}
              text='Explore Byblos one of the oldest cities in the world!'
              label='Byblos'
              path='/services'
            />
            <CardItem
              src={Lake}
              text='Travel to the ancient ruins of Baalback'
              label='Baalback'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src={Cats}
              text='Visit the amazing Lebanese villages'
              label='Lebanese villages'
              path='/services'
            />
            <CardItem
              src={Tyre}
              text='Experience diving in the Mediterranean Sea'
              label='Tyre'
              path='/products'
            />
            <CardItem
              src={Beirut }
              text='The city that Never sleeps!'
              label='Beirut'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;