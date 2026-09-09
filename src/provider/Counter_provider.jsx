import { createContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CounterContext = createContext()

const Counter_provider = ({ children }) => {
    let [count, setCount] = useState(0)
    return (
        <CounterContext.Provider value={{ count, setCount }}>
            {children}
        </CounterContext.Provider>
    );
};

export default Counter_provider;