
import './App.css'
import Card from './components/Card'
// import TestComponet from './TestComponet'

const members = [
  { Name: "Shakib", age: 21 },
  { Name: "bakib", age: 24 },
  { Name: "nokib", age: 27 },
  { Name: "Akib", age: 29 },
]

function App() {


  return (
    <>
      {/* <TestComponet></TestComponet> */}
      {members.sort((a, b) => a.age - b.age)
        .filter((mem => mem.age > 23))
        .map((member) => <Card name={member.Name} age={member.age}></Card>)}

        {/* <Card members={members}></Card> */}
    </>
  )
}

export default App
