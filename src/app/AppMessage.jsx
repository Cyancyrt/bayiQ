// eslint-disable-next-line no-unused-vars
import React from "react";
import AppHeader1 from "./components/AppHeader1";
import AppMessageList from "./Message/AppMessageList";

function AppMessage() {
    return (
        <>
            <div>
                <AppHeader1 pageTitle={"Pesan"} />
                <AppMessageList />
            </div>
        </>
    );
}

export default AppMessage;
