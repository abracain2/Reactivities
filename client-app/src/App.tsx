import React, { useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { HeaderContent, List, ListContent } from 'semantic-ui-react';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/activities').then(response => {
      console.log(response);
      setActivities(response.data);
    });
  }, [])

  return (
    <div>
      <HeaderContent as='h2' icon='users' content='Reactivities'/>
        <ListContent>
          {activities.map((activity: any) => (
            <List.Item key={activity.id}>
              {activity.title}
            </List.Item>
          ))}
        </ListContent>
    </div>
  );
}

export default App;
