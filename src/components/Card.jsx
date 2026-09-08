import { useState } from "react"
import "./Style.css"

// way-1

// const Card = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <p>FristName : {props.fristName}</p>
//             <p>FristName : {props.lastName}</p>
//         </div>
//     );
// };
// export default Card;

// way -2

//  export default function Card ({name,age})  {

//     if (age > 18) {
//         return (
//             <div>

//                 <p>FristName : {Name}</p>
//                 <p>FristName : {age}</p>

//             </div>
//         );
//     }
//     if (age < 18) {
//         return "you are young"
//     }

// };


// way -3

//  export default function Card ({name,age})  {
    // return (
    //     <>
    //         {age > 18 && <div>
    //             <p>FristName : {Name}</p>
    //             <p>FristName : {age}</p>
    //         </div>
    //         }
    //         {age < 18 && "you are young"}
    //     </>
    // )
// };

// Way-4


export default function Card({ name, age }) {
    const [mem, SetMem] = useState("sdfasd");
    // console.log((mem));
    const ClickHandaler = (memberName) => {
            SetMem(memberName)
        console.log(`greeting ${memberName}`)
    }

    return (
        <>
            {age > 18 ? <div onClick={() => ClickHandaler(name)} className="style">
                <p>FristName : {name}</p>
                <p>FristName : {age}</p>
                {mem && <p>Click Name {mem}</p> }
            </div>
                : <div className="style">you are young</div>}
        </>
    )
};




// way-4

// export default function Card ({members})  {
//     console.log(members);

//       return (
//         <>
//          {members.sort((a, b) => a.age - b.age)
//         .filter((mem => mem.age > 23))
//         .map((member) => member.age > 18 ? <div className="style">
//                 <p>FristName : {member.Name}</p>
//                 <p>FristName : {member.age}</p>
//             </div>
//             : <div className="style">you are young</div>)}
//         </>
//     )
// };



