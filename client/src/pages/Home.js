import React from 'react';
import AddMenuForm from './AddMenuForm';

function Home() {
  return (
    <div>
      <h1>Welcome to Office Lunch Menu Management System</h1>
      <p>This is the home page of your application.</p>
      <p>You can navigate to other pages using the navigation menu.</p>
      <AddMenuForm/>
    </div>
  );
}

export default Home;
