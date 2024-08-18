function Button() {

    const handleClick = (name = "guest") => {
        alert(name);
    }

    const handleClickEvent = (e) => {
        e.target.textContent = "Done clicking";
    }
    // we need to put arrow fun in the onClick attribute
    return (
        <>
            <button onClick={() => handleClick("salman")} >Trigger alert!</button>
            <button onClick={(event) => handleClickEvent(event)} >Click me</button>
        </>
    )
}

export default Button