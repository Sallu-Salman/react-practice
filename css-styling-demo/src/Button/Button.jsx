import styles from './Button.module.css'

function Button() {
    const inlineStyle = {
        backgroundColor: "black",
        color: "white",
        padding: "40px",
    }

    return (
        <>
            <button style={inlineStyle}>Inline CSS</button>
            <button className={styles.button}>Module CSS</button>
        </> 
    );
}

export default Button