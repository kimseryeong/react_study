import React, { useState } from 'react';

const Signin = ({children}) => {
    const style = {
        overlay: {backgroundColor: "rgba(0, 0, 0, 0.5)",}
        ,content: {
            textAlign: 'center'
            ,width: '400px'
            ,height: '600px'
            ,margin: 'auto'
            ,borderRadius: '4px'
            ,boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'
            ,padding: '20px'
        }
    }

    return (
        <>
            <button>{children}</button>
        </>
    );
}
export default Signin;