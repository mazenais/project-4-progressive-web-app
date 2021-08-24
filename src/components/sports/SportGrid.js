import React from 'react'
import SportItem from './SportItem';

const SportGrid = ({ items, isLoading }) => {
    return isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <section className="cards">
        {items.teams.map((item) => (
            <SportItem key={item.idSport} item={item}></SportItem>

        ))}

    </section>)

}

export default SportGrid
