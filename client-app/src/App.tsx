import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Header, List } from 'semantic-ui-react';


function App() {

  const [activities, setActivities] = useState([]);

  useEffect(()=>{
    axios.get("http://localhost:5000/api/Activities").then(
      response => {
        console.log(response);
        setActivities(response.data);
      }
    )
  }, [])

  return (
    <div>
      <Header as='h1' icon='users' content='Reactivities'/>
      
        {/* <img src={logo} className="App-logo" alt="logo" />       
        <p style={{color:"green"}}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>         */}
          <List>
            {activities.map((activity : any) => (
          <List.Item key={activity.id}>
              {activity.title + activity.category}
          </List.Item>
          ))}
          </List>
      
    </div>
  );
}

export default App;
