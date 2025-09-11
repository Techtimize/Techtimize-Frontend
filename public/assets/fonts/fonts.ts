import localFont from "next/font/local";

export const MyCustomFont = localFont({
    variable : "--satoshi-font",
    src:[
        {
            path:"./Satoshi-Variable.ttf",
            weight:"400",
            style:"regular"
        },
        {
            path:"./Satoshi-Bold.ttf",
            weight:"800",
            style:"normal"
        },
        {
            path:"./Satoshi-Medium.ttf",
            weight:"500",
            style:"normal"
        },
    ]
});
export default MyCustomFont;