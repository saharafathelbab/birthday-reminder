import React from 'react';

import data from './data.json';

{/* here is where we deal with the people prop we passed through in App js */}

{/* we will first destructure it right away in our function parameter */}

const List = (people) => {
  return (
    <>
    {/* people.map - >  iterating through whole array
        person -> representing each person object in the array */}
      {data.people.map((person)=> {

        {/* where are we getting id, name, age, image? 
            In our data.js file each person object has these properties defined
            which we have equaled it to the person, it is coming from the person 
            object in the array we are mapping through */}

        const {id, name, age, image} = person;

        return <article key = {id} className="person">

          {/* we are pulling the image from above where we destructured 
              as well as the name for alt text */}

          <img src = {image} alt = {name}/>

          <div>

            {/* we are pulling the name from above where we destructured 
              as well as the age */}

            <h4>{name}</h4>
            <p>{age} years</p>


          </div>

        </article>

      })}
    </>
  );
};

export default List;
