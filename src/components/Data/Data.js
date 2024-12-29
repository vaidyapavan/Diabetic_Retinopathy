// Sidebar imports
import {
  UilEstate,
  UilClipboardAlt,
  UilUsersAlt,
  UilPackage,
  UilChart,
  UilSignOutAlt,
  UilWaterDropSlash

} from "@iconscout/react-unicons";

// Analytics Cards imports
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
import { keyboard } from "@testing-library/user-event/dist/keyboard";
import { UilUserCircle, UilUserMd, UilFlask } from "@iconscout/react-unicons";

import { UilCalendarAlt, UilClock, UilChartBar, UilAnalytics } from "@iconscout/react-unicons";




// Recent Card Imports
import img1 from "../imgs/img1.jpg";
import img2 from "../imgs/img2.jpg";
import img3 from "../imgs/img3.jpg";

// Sidebar Data
export const SidebarData = [
  {
    icon: UilEstate,
    heading: "Dashboard",
  },
  {
    icon: UilUserCircle,
    heading: "Patients",
  },
  {
    icon: UilUsersAlt,
    heading: "Doctors",
  },
  {
    icon: UilCalendarAlt,
    heading: 'Appointment'
  },
  {
    icon:UilChartBar,
    heading: 'Test Analysis'
  },
];

// Analytics Cards Data
export const cardsData = [
  {
    title: "Total Patients",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUserCircle,
    series: [
      {
        name: "Total Patients",
        data: [31, 40, 28, 51, 42, 109, 100],
      },
    ],
  },
  {
    title: "Total Doctors",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 80,
    value: "14,270",
    png: UilUserMd,
    series: [
      {
        name: "Total Doctors",
        data: [10, 100, 50, 70, 80, 30, 40],
      },
    ],
  },
  {
    title: "Total Test Analysis",
    color: {
      backGround:
        "linear-gradient(rgb(248, 212, 154) -146.42%, rgb(255 202 113) -46.42%)",
      boxShadow: "0px 10px 20px 0px #F9D59B",
    },
    barValue: 60,
    value: "4,270",
    png: UilFlask,
    series: [
      {
        name: "Total Test Analysis",
        data: [10, 25, 15, 30, 12, 15, 20],
      },
    ],
  },
];

// Recent Update Card Data
export const UpdatesData = [
  {
    img: img1,
    name: "Andrew Thomas",
    noti: "Has diagnosed with Level 1 DR.",
    time: "25 seconds ago",
  },
  {
    img: img2,
    name: "James Bond",
    noti: "Has diagnosed with Level 4 DR.",
    time: "30 minutes ago",
  },
  {
    img: img3,
    name: "Sheema Patel",
    noti: "Has diagnosed with Level 2 DR.",
    time: "2 hours ago",
  },
];
