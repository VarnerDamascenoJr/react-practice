function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}


function App () {
  return(
     <div>
      <Welcome name="Sara"/>
      <Welcome name="Jhonata" />
     </div> 
  );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)
