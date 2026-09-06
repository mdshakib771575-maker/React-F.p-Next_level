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


 export default function Card ({Name,age})  {

    // if (age > 18) {
    //     return (
    //         <div>

    //             <p>FristName : {Name}</p>
    //             <p>FristName : {age}</p>

    //         </div>
    //     );
    // }
    // if (age < 18) {
    //     return "you are young"
    // }


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

      return (
        <>
            {age > 18 ? <div className="style">
                <p>FristName : {Name}</p>
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



