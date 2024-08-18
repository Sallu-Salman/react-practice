import reactPic from './assets/react.svg'

function Card() {
    return (
        <div className="card">
            <img src={reactPic} className='card-image'></img>
            <h2 className='card-title'>Sallu world</h2>
            <p className='card-text'>I am a software developer, and particularly intrested in Java</p>
        </div>
    );
}

export default Card