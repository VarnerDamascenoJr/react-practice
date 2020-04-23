class Clock extends React.Component{
  constructor( props ) {
    super(props);
    this.state = {date: new Date()};
  }
  componentDidMout () {
    this.timerID = setInterval( 
    () => this.tick(),
          1000
    );
    
  }
  componentWillMount () {
    clearInterval(this.timerID);
  }
  
  tick() {
      this.setState({ 
      date: new Date()
    });
  }
  render(){
    return(
      <div>
        <h1>It's a Clock!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}


  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  );


