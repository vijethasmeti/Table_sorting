import React from 'react'
import ReusableTable from './ReusableTable';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
    { id: 1, name: 'Vijeth', scr: 49, tn: 'RCB', four:5, six:'2' },
    { id: 2, name: 'Chintu', scr: 95, tn: 'DD', four:2, six:'1' },
    { id: 3, name: 'Kiran', scr: 75, tn: 'GT', four:8 , six:'2'},
    { id: 4, name: 'Prajuu', scr:93, tn: 'CSK', four:2, six:'3' },
    { id: 5, name: 'Virat', scr:75, tn: 'MI', four:3, six:'2' },
    { id: 6, name: 'Maxi', scr:38, tn: 'LSG', four:6 , six:'1'},
    { id: 7, name: 'Ab-de', scr: 61, tn: 'PUNJAB', four:1, six:'1' },

  ];
  
  const columns = [
    { key: 'id', label: 'PlayersNo' },
    { key: 'name', label: 'PlayerName' },
    { key: 'scr', label: 'Score' },
    { key: 'tn', label: 'TeamName' },
    {key: 'four', label: 'Fours'},
    {key:'six', label:'Sixes'}
  ];

const App = () => {
  return (
    <div >
    <h1 style={{textAlign:'center', marginTop:'50px' ,color:'blue', backgroundColor:'beige'}}>INDIAN PREMIER LEAUGE</h1>
    < ReusableTable data={data} columns={columns} />
  </div>
  )
}

export default App