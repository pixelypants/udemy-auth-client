import React from "react";
import Header from "./Header";


export default ({ children }: any) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}
