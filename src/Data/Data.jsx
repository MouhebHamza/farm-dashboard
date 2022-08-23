// Sidebar imports
import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
    UilSignOutAlt
} from "@iconscout/react-unicons"

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons"

// Recent Card Imports
import img1 from "../imgs/img1.png"
import img2 from "../imgs/img2.png"
import img3 from "../imgs/img3.png"



    
    

// Sidebar Data


// async function  weatherData  ()
// {
//   fetch(
//       "https://api.openweathermap.org/data/2.5/weather?lat=36.806496&lon=10.806496&appid=9b0ba7cbf80580ed938ae75144319d05"
//   )
//       .then(response => response.json())
//       .then(data => console.log(data))

// }

// const weather =await weatherData()


export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
        link: "/"
    },
    {
        icon: UilChart,
        heading: "Stats",
        link: "/stats"
    },
    {
        icon: UilUsersAlt,
        heading: "Edit Profile",
        link: "/profile"
    },
    {
        icon: UilPackage,
        heading: "Products",
        link: "/products"
    },
    {
        icon: UilClipboardAlt,
        heading: "My devices",
        link: "/devices"
    }
]

// Analytics Cards Data
export const cardsData = [
    {
        title: "rainfall",
        color: {
            backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
            boxShadow: "0px 10px 20px 0px #e0c6f5"
        },
        value: "40%",
        png: UilUsdSquare
    },

    {
        title: "wind speed",
        color: {
            backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
            boxShadow: "0px 10px 20px 0px #FDC0C7"
        },
        value: "75 km/h",
        png: UilMoneyWithdrawal
    },
    {
        title: "humidity",
        color: {
            backGround:
                "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
            boxShadow: "0px 10px 20px 0px #F9D59B"
        },
        barValue: 60,
        value: "40 *c",
        png: UilClipboardAlt
    }
]

// Recent Update Card Data
export const UpdatesData = [
    {
        img: img1,
        name: "Andrew Thomas",
        noti: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago"
    },
    {
        img: img2,
        name: "James Bond",
        noti: "has received Samsung gadget for charging battery.",
        time: "30 minutes ago"
    },
    {
        img: img3,
        name: "Iron Man",
        noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
        time: "2 hours ago"
    }
]

// Recent Update Card Data
export const IncestData = [
    {
        text: "New fly detected",
        number: "10"
    },
    {
        text: "Average daily detected",
        number: "10"
    },
    {
        text: "Max daily detected",
        number: "10"
    }
]
