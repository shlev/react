function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Key',
    lastName: 'Sar'
};

const element = <h1>Hello, {formatName(user)}</h1>
ReactDOM.render(
    element,
    document.getElementById('root')
)


/*
JSX Attributes
const element = <div tabIndex="0"></div>;

const element = <img src={user.avatarUrl}></img>;

*/