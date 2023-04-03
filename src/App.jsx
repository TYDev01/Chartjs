import { useState } from 'react'
import Barchart from './components/Barchart'
import PieChart from './components/PieChart';
import DoughNut from './components/DoughNut';
import { UserData } from './Data'

function App() {
  const [userData, setUserData] = useState({
    labels: UserData.map((data)=> data.year),
    datasets: [{
      label: "Users Gained",
      data: UserData.map((data)=> data.userGain),
      backgroundColor: ["#fff", "#00d4ff"],
      borderRadius: 2,
      borderColor: "#00387d",
      borderWidth: 2,
      margin: 14,
    },],
  });

  return (
    <div className="App" style={{width: 700}}>
      <Barchart chartData={userData}/>

      <div style={{width: 400, margin: 15}}>
        <PieChart chartData={userData}/>
      </div>

      <div style={{width: 400, margin: 15}}>
        <DoughNut chartData={userData}/>
      </div>

    </div>
  )
}

export default App
