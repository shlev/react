function Welcome(props) {
    return <h1>Hello, {props.name}</h1>
}

function formatDate(date) {
    return date.toLocaleDateString();
  }

function Avatar(props) {
    return (
        <img className="Avatar" 
                src={props.user.avatarUrl}
                alt={props.user.name}     
            />
    );
}

function UserInfo(props) {
    return (
        <div className="UserInfo">
            <Avatar user = {props.user} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
        </div>
    );
}

function Comment(props) {
    return (
    <div className="Comment">
        <UserInfo user={props.author}/>
        <div className="Common-text">
            {props.text}
        </div>
        <div className="Comment-date">
            {formatDate(props.date)}
        </div>
    </div>
    );
}

function App(props) {
    return (
        <div>
            <Welcome name="KeySar" />
            <Welcome name="Jose" />
            <Welcome name="Lidia" />
            <Comment 
                date={props.comment.date}
                text={props.comment.text}
                author={comment.author}
                />
        </div>
    );
}

const element = <Welcome name="Key Sar" />

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: 'https://placekitten.com/g/64/64',
    },
  };

ReactDOM.render(
    <App comment = {comment}/>,
    document.getElementById('root')
)



/*

React update only necessary elements that was changed.
*/