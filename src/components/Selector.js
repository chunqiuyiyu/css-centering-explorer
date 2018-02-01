import React from 'react';
import './Selector.css'

const Selector = (props) => (
  <div className={'selector-container'}>
    <label htmlFor={props.id}>{props.desc}</label>
    <select id={props.id} defaultValue={'...'} onChange={props.onChange}>
      <option value='...'>{'...'}</option>
    {
      props.data.map(item => (
        <option value={item} key={item}>
          {item}
        </option>
      ))
    }
    </select>
  </div>
);

export default Selector;
