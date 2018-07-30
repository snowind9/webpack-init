import React from 'react';
const Sample = props => {

  return (<div>
            <div id="test">{props.value}</div>
            <div id="test2">abcde</div>
            <a href="#" onClick={()=>$('#test2').html('asdfg')} >fff</a>
          </div>)
};

export default Sample;
