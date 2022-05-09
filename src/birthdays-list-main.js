import React, { useState } from 'react';
import data from './data.json';
import List from './List';

import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

// import { useNavigate } from 'react-router-dom';

// import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
function BirthdayList() {

  {/* we will first be setting our state - we will be retrieving data from our data file */}

  const [people,setPeople] = useState(data);


  //Clear All

      const handleSubmit = (e) =>{
        //prevent default action of page refeshing after submit
        e.preventDefault();

        let link;

        for(let i = 1; i < data.people.length+1; i++){
          link = 'http://localhost:4000/people/' + i;

          fetch(link, {

            // we define the type of request we're sending
            method: 'DELETE',

        }).then(()=>{
            console.log('new delete');
        })
        }


    }

  return <main>

    <center>
        <section className="container">

      {/* H3 tag - > will display how big is our list */}

      {/* why data.people.length? because we know our data is in an array*/}

      <h3>{data.people.length} birthdays today</h3>

      {/* <List /> -> will have the list of people from the list.js file */}

      {/* setting a people prop, and putting our people state value from above in */}
      
      <List people = {people} /> 

      {/* adding an add people */}
      <Link to ="/add">
        <button>Add Person</button>
      </Link>
      

      {/* button that will clear all from our list - 
          by setting setPeople([]) we are making the length of the array 0, 
          which will erase all of the people currently in our array */}

        <button onClick={handleSubmit}>Clear All</button>

    </section> 
    </center>

  </main>;
}

export default BirthdayList;
