
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



const Card = ({fristName,lastName,children}) => {
    
    return (
        <div>
            {children}
            <p>FristName : {fristName}</p>
            <p>FristName : {lastName}</p>
            
        </div>
    );
};

export default Card;