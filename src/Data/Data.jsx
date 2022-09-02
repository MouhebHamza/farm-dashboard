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
import img1 from "../imgs/tract.jpg"
import img2 from "../imgs/img2.png"
import img3 from "../imgs/img3.png"


export const ProductCardsData = [
    {
        title: "rainfall",
        img: img1,
        description:
            "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem "
    },
    {
        title: "rainfall",
        img: img1,
        description: "lorem lorem lorem lorem lorem loremlorem lorem lorem"
    },
    {
        title: "rainfall",
        img: img1,
        description: "lorem lorem lorem"
    },
    {
        title: "rainfall",
        img: img1,
        description:
            "lorem lorem loremlorem lorem loremlorem lorem loremlorem lorem loremlorem lorem lorem"
    }
]  
    



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
export const NotificationsData = [
    {
        name: "Alert",
        noti: "The number of insects have exceeded the daily average ",
        time: "25 seconds ago"
    },
    {
        name: "Alert",
        noti: "The number of insects have reached 5.",
        time: "30 minutes ago"
    },
    {
        name: "Welcome",
        noti: "Welcome to iq farm dashboard.",
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
