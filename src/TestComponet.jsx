
let age = 21;
const TestComponet = ({count, setCount}) => {
   

    const haldalIncrement = () => {
        setCount(count + 1)
    }
    const haldalDecrement = () => {
        if (count > 0) {
            setCount(count - 1)

        }

    }

    return (
        <div className="style">
            <h1>Shakib </h1>
            <p>my age is {age} </p>
            <button onClick={haldalIncrement}>increment</button> {count} <button onClick={haldalDecrement}>Decrement</button>
        </div>
    );
};

export default TestComponet;