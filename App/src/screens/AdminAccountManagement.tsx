import React from "react";
import AdminBlockAccount from "./AdminBlockAccount";
import AdminAccountActivation from "./AdminAccountActivation";
import AdminFooter from "../components/AdminFooter";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";



export default function AdminAccountManagement () {

    const [state, setState] = React.useState(true); // false = activation page

    const onActivationsPress = () => {
        setState(true);
    }

    const onReportsPress = () => {
        setState(false);
    }


    return (
        <>
            {
                state ? <AdminAccountActivation /> : <AdminBlockAccount />
            }
            <AdminFooter {...{onReportsPress, onActivationsPress}}/>
        </>
        
    )
}