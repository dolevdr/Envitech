import "./App.css";
import data from "./source/Legends.json";
import React, { useState, useEffect } from "react";
import Legend from "./components/legend/legend";

function App() {
  const [jsonData, setJsonData] = useState();

  //Monitor accordind monitor type button
  const [monitor, setMonitor] = useState();

  //save legendId while push the first button
  const [legendId, setLegendId] = useState();

  //save the monitor type name
  const [monitorName, setMonitorName] = useState();

  //legend data passing to legend component
  const [legendData, setLegendData] = useState();

  useEffect(() => {
    if (!jsonData) {
      // import data as dummy API(Only once)
      setJsonData(data);
    }
  }, [jsonData]);

  const extractMonitor = (id) => {
    setMonitor(jsonData.Monitor.filter((ele) => ele.MonitorTypeId === id));
  };
  const extractLegendData = (id) => {
    setLegendData(jsonData.Legends.filter((ele) => ele.Id === id));
  };

  return (
    <div className="App">
      {jsonData &&
        jsonData.MonitorType.map((val) => (
          <button
            key={val.Id}
            onClick={() => {
              extractMonitor(val.Id);
              setLegendId(val.LegendId);
              setMonitorName(val.description);
              setLegendData(undefined);
            }}
          >
            {val.description}
          </button>
        ))}
      <div style={{ display: "flex", flexDirection: "column", width: "100px" }}>
        {monitor &&
          monitor.map((val) => (
            <button onClick={() => extractLegendData(legendId)} key={val.Id}>
              {val.Name}
            </button>
          ))}
      </div>
      {legendData && <Legend name={monitorName} colors={legendData[0].tags} />}
    </div>
  );
}

export default App;
