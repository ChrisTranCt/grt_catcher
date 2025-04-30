import React from 'react';
import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {fetchVehiclePositions} from'./GTFSLogic'
interface VehiclePosition {
  id: string;
  routeId?: string;
  tripId?: string;
  latitude: number;
  longitude: number;
  bearing?: number;
  speed?: number;
  timestamp?: number;
}
function App() {
  useEffect(() => {
    fetchVehiclePositions();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
