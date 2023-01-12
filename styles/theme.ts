import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts:{
        body: `'Nunito', sans-serif`
    },
    colors:{
        gray: {
            dark: "#363533",
            light: "#4e4d4b",
            middle: "#413e3d",
            veryLight: "#6b6a67"
        }
    },
    styles:{
        global:{
            body:{
                bg: "gray.dark",
                pt: "4",
                pb: "4"
            },
        }
    }
});

export default theme;