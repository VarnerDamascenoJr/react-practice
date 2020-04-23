function Clock(props){
  return(
    <div>
      <h1>Clock is Working</h1>
      <h2>It is {props.date.toLocaleTimeString()}</h2>
    </div>
  );
}


function tick(){
  ReactDOM.render(
    <Clock date={new Date()}/>,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
