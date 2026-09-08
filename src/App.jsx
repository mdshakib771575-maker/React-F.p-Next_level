//way-1

// import './App.css'
// import Card from './components/Card'
// import TestComponet from './TestComponet'

// const members = [
//   { Name: "Shakib", age: 21 },
//   { Name: "bakib", age: 24 },
//   { Name: "nokib", age: 27 },
//   { Name: "Akib", age: 29 },
// ]

// function App() {
//   return (
//     <>
//       {/* <TestComponet></TestComponet> */}
//       {members.sort((a, b) => a.age - b.age)
//         .filter((mem => mem.age > 23))
//         .map((member) => <Card name={member.Name} age={member.age}></Card>)}

//         {/* <Card members={members}></Card> */}
//     </>
//   )
// }
// export default App



//way-2


// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
// import Card from './components/Card'
// const members = [
//   { Name: "Shakib", age: 21 },
//   { Name: "bakib", age: 24 },
//   { Name: "nokib", age: 27 },
//   { Name: "Akib", age: 29 },
// ]

// function App() {
//   let [members,setMembers] = useState([]);
//  let [name, setName] = useState("");
//  let [age, setAge] = useState("");
//   const handalSubmit = (e) => {
//     // console.log(e)
//     e.preventDefault()
//     // setMembers([...members,{Name:name,age}])
//     setMembers((prev)=>[...prev,{name,age}])
//     setAge("")
//     setName("")
//     // console.log(members);
   
//   }
//   return (
      
//     <>
//       <form onSubmit={handalSubmit}>
//         <input type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
        
//         <input type="number" onChange={(e)=>setAge(e.target.value)} value={age}/>
//         <button type='submit'>submit</button>
//       </form>

//       {members.map((member) => <Card name={member.Name} age={member.age}></Card>)}

//     </>
//   )
// }
// export default App



// way-3

// import { useState } from 'react'
import './App.css'
import Display from './components/Display'
import TestComponet from './TestComponet'
 
function App() {
  let [count, setCount] = useState(0)
//  let [name, setName] = useState("");

  // const handalSubmit = (e) => {
  //   // console.log(e)
  //   e.preventDefault()
  //   console.log(name)
  // }

  return (
    <>
      {/* <form onSubmit={handalSubmit}>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <button type='submit'>submit</button>
      </form> */}
      <TestComponet count={count} setCount={setCount}></TestComponet>
      <Display count={count}></Display>
    </>
  )
}

export default App



