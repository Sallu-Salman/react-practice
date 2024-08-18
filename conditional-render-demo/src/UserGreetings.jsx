
function UserGreeting(props) {

    if(props.isLoggedIn) {
        return <h2 className="welcome"> Welcome {props.username}</h2>
    }
    else {
        return <h2 className="login-failed">Please login to continue</h2>
    }
}

export default UserGreeting