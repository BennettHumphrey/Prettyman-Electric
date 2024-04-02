import React from "react"
import { FiSun, FiWifi, FiPhoneCall } from "react-icons/fi";
import { HiOutlineShieldCheck, HiOutlineLightBulb } from "react-icons/hi2";
import { IoCheckmark } from "react-icons/io5";

//Contents

// subPages 23
// navOptions 59
// headerSlides 92
// phoneNumbers 118
// aboutUsMain 133
// aboutUs 144
// reviews 167
// projects 199


export const headerSlides = [
    {
        title: "Residential Services",
        image: "./imgs/Vancouver-Sunset.jpg",
        svg: <FiSun />,
        href: '../residential',
        text: "Service upgrades, renovations, new construction, and more!",
    },
    {
        image: "./imgs/Office-Interior.webp",
        svg: <FiWifi  />,
        href: '../commercial',
        title: "Commercial Services",
        text: "Data wiring, alarm systems, new construction, and much more!",
    },
    {
        image: "./imgs/Lighting-Display.jpg",
        svg: <HiOutlineLightBulb  />,
        href: '../industrial',
        title: "Lighting Design",
        text: "Our electricians have a wealth of experience and knowledge with the latest technology!",
    },
]



// export const aboutUsMain = {
//     title: "We prioritize safety over all else",
//     text: "Prioritizing safety in the enhancement of residential electrical systems is crucial, particularly for homes with diverse energy needs; these safety-focused improvements not only contribute to fostering a secure living environment but also provide a substantial return on investment, thereby placing a paramount emphasis on the well-being of both the home infrastructure and its occupants, ensuring a harmonious blend of security and efficiency.",
// }

export const aboutUs = [
    // Animations in tailwind.config.cjs
    {
        svg: <IoCheckmark className="h-20 w-20 text-[--text-dark] mx-auto group-hover:animate-checkmark-animation" />,
        href: "../contact",
        title: "Loading",
        body: "Loading",
    },
    {
        svg: <HiOutlineShieldCheck className="h-20 w-20 text-[--text-light] mx-auto group-hover:animate-shield-animation"  />,
        href: "../contact",
        title: "Loading",
        body: "Loading",
    },
    {
        svg: <FiPhoneCall className="h-20 w-20 pt-3 text-[--text-dark] mx-auto group-hover:animate-phone-animation"  />,
        href: "../contact",
        title: "Loading",
        body: "Loading",
    },
]


// export const reviews = [
//     {
//         name: "Connor Mitchell",
//         review: "Exceptional service from Fake Electric! Transformed our home's electrical system seamlessly. Their team is professional, efficient, and trustworthy. Exceeded expectations with their expertise in residential and small commercial work.",
//     },
//     {
//         name: "Olivia Lawson",
//         review: "Fake Electric is a game-changer! Outstanding solutions for our small business. The team is knowledgeable, prompt, and their work is top-notch in both residential and small commercial settings. Highly recommend!",
//     },
//     {
//         name: "Brandon Harper",
//         review: "Fake Electric is a gem! Fixed our complex residential wiring issues swiftly. Their expertise, reliability, and fair pricing set them apart. A 5-star electrical wizard for both homes and small businesses!",
//     },
//     {
//         name: "Zoe Thompson",
//         review: "Fake Electric is phenomenal! Transformed our outdated electrical setup flawlessly. Their team is skilled, professional, and dedicated to customer satisfaction. Impressed with their expertise in residential and small commercial work!",
//     },
// ]


export const contactInfo = {
    phone: "250-555-5555",
    hours: {
        weekday: "9:00am - 5:00pm",
        sat: "10:00am - 4:00pm",
        sun: "By appointment only",
    },
    email: "bennetthumphrey98@gmail.com",
    address: "",
}


// export const phoneNumbers = [
//     {
//         title: "Cell Number",
//         text: contactInfo.phone
//     },
//     {
//         title: "Mon-Sat Hours",
//         text: contactInfo.hours.weekday,
//     },
//     {
//         title: "Sunday Hours",
//         text: contactInfo.hours.sun
//     },
// ]