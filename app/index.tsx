import React from 'react';
import { Text } from 'react-native';
import Config from "react-native-config";

const App = () => {
    return (
        <>
            <AppHeader />
        </>
    );
};

const AppHeader = () => (
    <>
        <Text>{Config.APPLICATION_TITLE}</Text>
    </>
);

export default App;
