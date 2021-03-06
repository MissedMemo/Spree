import React, { Component } from 'react';


export default class Home extends Component {

  render() {
    return (
      <div className="image-area">
          <div className="home-title">
            <div>
              Find a new adventure.
            </div>
          </div>
        <div className="home-description">
          <h2 className="home-description-h2">
            Let your friends and fellow travelers be your guides
          </h2>
          <ul className="home-ul"> 
            <li>Plan your next trip</li>
            <li>Explore new cuisines</li>
            <li>Learn about history and culture</li>
            <li>Discover the hippest part of town</li>
          </ul>
        </div>
      </div>
      
    );
  }

}

