import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

type Tab = 'appointments' | 'crews';

type BranchSelectProps = {
  branches: string[];
  activeBranch: string;
  changeBranch: (e: any) => void;
};

type MovementFactor = number;

type Tile = {
  movementFactor: MovementFactor;
};

type Board = {
  tiles: Tile[];
};

const BranchSelect = ({
  branches,
  activeBranch,
  changeBranch,
}: BranchSelectProps) => {
  return (
    <select value={activeBranch} onChange={changeBranch}>
      {branches.length &&
        branches.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
    </select>
  );
};

const fetchBranches = ['Branch 1', 'Branch 2', 'Branch 3'];

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('appointments');

  const [branches, setBranches] = useState<string[]>([]);
  const [activeBranch, setActiveBranch] = useState('');

  useEffect(() => {
    setTimeout(() => setBranches(fetchBranches), 5000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={() => setActiveTab('appointments')}>
            Appointments
          </button>
          <button onClick={() => setActiveTab('crews')}>Crews</button>
        </div>

        <div className={`hidden ${activeTab === 'appointments' && 'visible'}`}>
          <h1>CONTENT OF APPOINTMENTS TABS</h1>

          {branches.length ? (
            <BranchSelect
              branches={branches}
              activeBranch={activeBranch}
              changeBranch={(e) => setActiveBranch(e.target.value)}
            />
          ) : (
            'Loading'
          )}

          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className={`hidden ${activeTab === 'crews' && 'visible'}`}>
          <h1>CONTENT OF CREWS TAB</h1>
          <BranchSelect
            branches={branches}
            activeBranch={activeBranch}
            changeBranch={(e) => {
              console.log(e);
              setActiveBranch(e.target.value);
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
