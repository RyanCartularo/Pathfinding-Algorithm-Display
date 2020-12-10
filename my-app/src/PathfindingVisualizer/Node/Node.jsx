import React, {Component} from 'react';

import './Node.css';

export function startNode (nodes) {
  
  const dragStart = e => {
    const target = e.target;

    e.dataTransfer.setData('start_id', target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  }

  const dragOver = e => {
    e.stopPropagation();
  }

  return (
    <div 
      id={nodes.id}
      className={nodes.className}
      draggable="true"
      onDragStart={dragStart}
      onDragOver= {dragOver}
    >
      { nodes.children }
    </div>
  )
}



export default class Node extends Component {
  render() {
    const {
      col,
      isFinish,
      isStart,
      isWall,
      onMouseDown,
     // onMouseEnter,
      onMouseUp,
      row,
    } = this.props;
    const extraClassName = isFinish
      ? 'node-finish'
      : isStart
      ? 'node-start'
      : isWall
      ? 'node-wall'
      : '';

    return (
      <div
        id={`node-${row}-${col}`}
        className={`node ${extraClassName}`}
        onMouseDown={() => onMouseDown(row, col)}
        //onMouseEnter={() => onMouseEnter(row, col)}
        onMouseUp={() => onMouseUp()}></div>
    );
  }
}