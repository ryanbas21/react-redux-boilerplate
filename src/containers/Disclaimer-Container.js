import React, { Component } from 'react'
import { render } from 'react-dom'
import { store } from '../store/store'
import Disclaimer from '../components/Disclaimer'
const DisclaimerContainer = props =>
                <div>
                  <Disclaimer />
                </div>


module.exports = DisclaimerContainer;
