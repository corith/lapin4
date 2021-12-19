
export const warnOnPageRefresh = () => {
    const unloadCallback = (event) => {
        event.preventDefault();
        event.returnValue = "";
        return "";
    };

    window.addEventListener("beforeunload", unloadCallback);
    return () => window.removeEventListener("beforeunload", unloadCallback);
}

export const warnOnBoardClear = () => {
    return window.confirm("Are you sure you want to clear the board...")
}
