import React from 'react';
import { useState } from 'react';

function EffectContainer(props) {

  const [isVisible, setVisible] = useState(true);
  return (
    <>
      <button onClick={() => setVisible(false)}>사라져라</button>
      <button onClick={() => setVisible(true)}>나타나라</button>
      {isVisible} && <EffectContainer />
    </>
  );
}

export default EffectContainer;