import Student from './Student.jsx'

function App() {
  return (
    <>
      <Student name="Spongebob" age={23} isStudent={true} />
      <Student name="Motu" age={30} isStudent={false} />
      <Student/>
    </>
  );
}

export default App