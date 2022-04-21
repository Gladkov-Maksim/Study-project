function Link(props) {
    return (
        <a
            className="App-link"
            href={props.to}
            target="_blank"
            rel="noopener noreferrer"
        >
            Learn React
        </a>
    )
}

export default Link
