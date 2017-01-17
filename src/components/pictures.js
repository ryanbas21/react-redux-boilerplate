import React from 'react'
import Container from 'muicss/lib/react/container';

const Picture = props =>
  <div>
    <img className='homepage-pictures' src='/bubble' />
    <img className='homepage-pictures' src='/chart' />
    <img className='homepage-pictures' src='/ism' />
    <img className='homepage-pictures' src='/usvcanada' />
  </div>

module.exports = Picture
