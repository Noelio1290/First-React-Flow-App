import logo from './logo.svg';
import React, { useState, useCallback } from 'react';
import { 
  ReactFlow,
  Background,
  Controls,
  applyNodeChanges,
  applyEdgeChanges, 
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import './App.css';

const initialNodes = [
  {
    id: '1',
    data: { label: 'choose' },
    position: {
      x: 0,
      y: 0,
    },
  },
  {
    id: '2',
    data: { label: 'your' },
    position: {
      x: 100,
      y: 100,
    },
  },
  {
    id: '3',
    data: { label: 'desired' },
    position: {
      x: 0,
      y: 200,
    },
  },
  {
    id: '4',
    data: { label: 'edge' },
    position: {
      x: 100,
      y: 300,
    },
  },
  {
    id: '5',
    data: { label: 'type' },
    position: {
      x: 0,
      y: 400,
    },
  },
  {
    id: '6',
    data: { label: 'nodo 6' },
    position: {
      x: -100,
      y: 500,
    },
  },
  {
    id: '7',
    data: { label: 'nodo 7' },
    position: {
      x: 100,
      y: 500,
    },
  },
];
 
const initialEdges = [
  {
    type: 'straight',
    source: '1',
    target: '2',
    id: '1',
    label: 'straight',
  },
  {
    type: 'step',
    source: '2',
    target: '3',
    id: '2',
    label: 'step',
  },
  {
    type: 'smoothstep',
    source: '3',
    target: '4',
    id: '3',
    label: 'smoothstep',
  },
  {
    type: 'bezier',
    source: '4',
    target: '5',
    id: '4',
    label: 'bezier',
    animated: true,
    style: { stroke: 'red' },
  },
  {
    type: 'bezier',
    source: '5',
    target: '6',
    id: '5',
    label: 'para nodo 6',
    animated: true,
    style: { stroke: 'red' },
  },
  {
    type: 'bezier',
    source: '5',
    target: '7',
    id: '6',
    label: 'para nodo 7',
    labelStyle: { fill: "red", fontWeight: 700 },
    animated: true,
    style: { stroke: 'red' },
  },
];

function App() {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    [],
  );

  return (
    <>
      <ReactFlow
        nodes={nodes}
        onNodesChange={onNodesChange}
        edges={edges}
        onEdgesChange={onEdgesChange}
        fitView
      >
        <Background variant='lines' color='#12f0d5' gap={20}/>
        <Controls/>
      </ReactFlow>
    </>
  );
}

export default App;
