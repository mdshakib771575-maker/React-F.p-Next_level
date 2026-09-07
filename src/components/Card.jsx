import "./Style.css"
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




//  export default function Card ({name,age})  {
//     // return (
//     //     <>
//     //         {age > 18 && <div>
//     //             <p>FristName : {Name}</p>
//     //             <p>FristName : {age}</p>
//     //         </div>
//     //         }
//     //         {age < 18 && "you are young"}
//     //     </>
//     // )
// };




export default function Card({ name, age }) {

    const ClickHandaler = (memberName) => {
        console.log(`greeting ${memberName}`)
    }
    
    const AnathoerClick = (Mname)=>{
        ClickHandaler(Mname)
        console.log("Anther Click");
    }
    return (
        <>
            {age > 18 ? <div onClick={()=>AnathoerClick(name)} className="style">
                <p>FristName : {name}</p>
                <p>FristName : {age}</p>
            </div>
                : <div className="style">you are young</div>}
        </>
    )
};







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



