import React from 'react';

function TabContenets(props) {
  const { showTabIndex } = props;
  console.log(showTabIndex);

  let tabContenet;
  if (showTabIndex === 0) {
    tabContenet = <div>탭 내용1</div>;
  } else if (showTabIndex === 1) {
    tabContenet = <div>탭 내용2</div>;
  } else if (showTabIndex === 2) {
    tabContenet = <div>탭 내용3</div>;
  } else if (showTabIndex === 3) {
    tabContenet = <div>탭 내용4</div>;
}
  return (
    <>
      {tabContenet}
    </>
  );
}


export default TabContenets;