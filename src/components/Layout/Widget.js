import { useEffect, useState } from "react";
import "./style.css";
import CheckboxTree from "react-checkbox-tree";




export default function Widget() {
  const [checked, setChecked] = useState([]);
  const [expanded, setExpanded] = useState([]);

  // useEffect(()=>{
  //   console.log("checked", checked);
  //   console.log("expanded", expanded);

  // },[checked, expanded])

  const nodes = [
    {
        value: "Parent 1",
      label: "Parent 1",
      children: [
        { value: "P1 child 1", label: "P1 child 1" },
        { value: "P1 child 2", label: "P1 child 2" },
        { value: "P1 child 3", label: "P1 child 3" }
      ]
    },
    {
        value: "Parent 2",
      label: "Parent 2",
      children: [{ value: "P2 child 1", label: "P2 child 1" }]
    },
    {
    
      label: "Parent 3",
      children: [
        { value: "P3 child 1", label: "P3 child 1" },
        { value: "P3 child 2", label: "P3 child 2" },
        {
          value: "P3 child 3",
          label: "P3 child 3",
          children: [
            { value: "P3 child 3.1", label: "P3 child 3.1" },
            { value: "P3 child 3.2", label: "P3 child 3.2" },
            {
              value: "P3 child 4",
              label: "P3 child 4",
              children: [
                { value: "P3 child 4.1", label: "P3 child 4.1" },
                { value: "P3 child 4.2", label: "P3 child 4.2" },
                { value: "P3 child 4.3", label: "P3 child 4.3" },
                { value: "P3 child 4.4", label: "P3 child 4.4" }
              ]
            },
            { value: "P3 child 5", label: "P3 child 5" },
            { value: "P3 child 6", label: "P3 child 6" }
          ]
        }
      ]
    }
  ];
  return (
    <div className="App">
      <h4> Expanded : {JSON.stringify(expanded)} </h4>
      <h4> Selected : {JSON.stringify(checked)} </h4>

      <CheckboxTree
        nodes={nodes}
        checked={checked}
        expanded={expanded}
        onCheck={(checkedData) => {
          setChecked(checkedData);
        }}
        onExpand={(expandedData) => {
          setExpanded(expandedData);
        }}
        style={{width:'120px'}}
      />
      

   




    </div>
  );
}
