import React from 'react';
import './Code.css';

const Code = ({ code, jsx, note }) => (
  <div>
    <h2>Code</h2>
    <pre>
      <code>{code}</code>
    </pre>
    {
      note && <p>{'Note: '}{note}</p>
    }

    <h2>Result</h2>
    <div className={'container'}>
      {jsx}
    </div>
  </div>
);

export default Code;
