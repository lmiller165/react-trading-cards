class Homepage extends React.Component {
	render(){
		return (
            <div>
            <h1>Welcome</h1>
            <a href="/cards">Trading cards!</a>
            <img src="/static/img/balloonicorn.jpg" />
            </div>
            );
	}
}

ReactDOM.render(<Homepage />, document.getElementById('app'));