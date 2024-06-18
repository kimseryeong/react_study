import React, { Component } from 'react';
import {Alert, UncontrolledAlert} from 'reactstrap'

export default function ReactstrapAlerts(){
    return (
        <>
            <Alert color='light'>Simple Alert</Alert>
            <UncontrolledAlert color='warning'>Uncontrolled Alert</UncontrolledAlert>
        </>
    );
}