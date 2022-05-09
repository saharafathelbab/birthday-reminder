import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Birthdays from './birthdays-list-main';

import AddPerson from './add-person';

const Main = () => {
  return (
    <Routes> {/* The Routes decides which component to show based on the current URL.*/}
      <Route path='/' element={<Birthdays/>}/>
      <Route path='/add' element={<AddPerson/>}/>
      
      {/* <Route path='/roomone' element={<RoomMessagesOne/>}/>
      <Route path='/roomtwo' element={<RoomMessagesTwo/>}/>
      <Route path='/users' element={<UserList/>}/>
      <Route path='/williamform' element={<WilliamForm/>}/>
      <Route path='/johnform' element={<JohnForm/>}/> */}

      {/* before it used to be: <Route exact path='/' component={MyRooms}></Route>
        in React Router version 6 - this becomes <Route path='/' element={<MyRooms/>}/>
        
        we no longer need to specify 'exact' because v6 does this automatically as default
        for the element part - we need jsx there where we specify what component we want to show for this route 
        not just reference our imported component, so we have to output the tag itself*/}
    </Routes>
  );
}

export default Main;