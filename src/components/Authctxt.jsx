import { createContext, useState } from "react";

export const Context = createContext();

export const Authctxt = ({children}) => {

    const [Logado, setLogado] = useState(false);

    return (
        <>
            <Context.Provider value={{Logado, setLogado}}>
                {children}
            </Context.Provider>
        </>
    );
}