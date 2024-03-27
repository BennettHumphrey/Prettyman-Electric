import React from "react"
import { FiSun, FiWifi } from "react-icons/fi";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { IoCheckmark } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";

//Contents

// subPages 23
// navOptions 59
// headerSlides 92
// phoneNumbers 118
// aboutUsMain 133
// aboutUs 144
// reviews 167
// projects 199





export const subPages = {
    residential: {
        headerTitle: "Residential Electrician Services in Victoria, BC",
        headerText: "Based in Victoria, we service all the the South Island.",
        bodyTitle: "Residential Services:",
        bodyText: "At Fake Electric, your home's safety and electrical efficiency take precedence, with our specialized team offering a range of residential services, addressing everything from simple repairs to comprehensive upgrades, and ensuring tailored solutions for issues like flickering lights, new outlets, or enhancing energy efficiency, all delivered with a steadfast commitment to quality and safety, making us your trusted partner for all your home's electrical needs.",
        seal: false,
    },
    commercial: {
        headerTitle: "Commercial Electrical Solutions",
        headerText: "Based in Victoria, our company proudly serves the entire South Island.",
        bodyTitle: "Commercial Services:",
        bodyText: "At Fake Electric, we comprehend the distinct electrical needs of commercial ventures, catering to everything from small offices to large industrial facilities; our skilled electricians are adept at handling a range of commercial services, including installations, maintenance, energy-efficient solutions, and emergency repairs, all geared towards minimizing downtime and maximizing productivity, solidifying Fake Electric as your reliable partner in ensuring the electrification and efficiency of your commercial space.",
        seal: false,
    },
    industrial: {
        headerTitle: "Industrial Electrician in Victoria",
        headerText: "Providing affordable electrical services in the beautiful city of Victoria",
        bodyTitle: "Industrial Services:",
        bodyText: "Upgrading industrial electrical systems for energy efficiency can substantially reduce utility expenses, offering substantial savings in your operating budget, particularly crucial for factories with their massive energy consumption, where manufacturing plants utilize over 1,000 times more power than other industries, resulting in swift payback periods for improvement costs; additionally, these upgrades contribute to the facility's value, with an average increased asset value of three dollars for every dollar invested.",
        seal: false,
    },
}


export const navOptions = [
    {
        href: '/',
        title: 'Home',
    },

    {
        href: '../residential',
        title: 'Residential',
    },

    {
        href: '../commercial',
        title: 'Commercial',
    },
    {
        href: '../contact',
        title: 'Contact Us',
    },
]



export const headerSlides = [
    {
        img: "./imgs/Vancouver-Sunset.jpg",
        svg: <FiSun />,
        href: '../residential',
        title: "Residential Services",
        text: "Service upgrades, renovations, new construction, and more!",
    },
    {
        img: "./imgs/Office-Interior.webp",
        svg: <FiWifi  />,
        href: '../commercial',
        title: "Commercial Services",
        text: "Data wiring, alarm systems, new construction, and much more!",
    },
    {
        img: "./imgs/Lighting-Display.jpg",
        svg: <HiOutlineLightBulb  />,
        href: '../industrial',
        title: "Lighting Design",
        text: "Our electricians have a wealth of experience and knowledge with the latest technology!",
    },
]



export const aboutUsMain = {
    title: "We prioritize safety over all else",
    text: "Prioritizing safety in the enhancement of residential electrical systems is crucial, particularly for homes with diverse energy needs; these safety-focused improvements not only contribute to fostering a secure living environment but also provide a substantial return on investment, thereby placing a paramount emphasis on the well-being of both the home infrastructure and its occupants, ensuring a harmonious blend of security and efficiency.",
}

export const aboutUs = [
    // Animations in tailwind.config.cjs
    {
        svg: <IoCheckmark className="h-20 w-20 text-text mx-auto group-hover:animate-checkmark-animation" />,
        href: "../contact",
        title: "Quality Guarantee",
        text: "Each customer receives dependable service when a Fake Electric electrician manages their electrical issues.",
    },
    {
        svg: <HiOutlineShieldCheck className="h-20 w-20 text-accent mx-auto group-hover:animate-shield-animation"  />,
        href: "../contact",
        title: "24/7 Service",
        text: "Available around the clock, our technicians are ready for emergency calls, assisting with whatever challenges life may present.",
    },
    {
        svg: <FiPhoneCall className="h-20 w-20 pt-3 text-text mx-auto group-hover:animate-phone-animation"  />,
        href: "../contact",
        title: "Insured, Bonded, Licensed",
        text: "Fully equipped, our licensed electricians are prepared to handle all your electrical requirements.",
    },
]


export const reviews = [
    {
        name: "Connor Mitchell",
        text: "Exceptional service from Fake Electric! Transformed our home's electrical system seamlessly. Their team is professional, efficient, and trustworthy. Exceeded expectations with their expertise in residential and small commercial work.",
    },
    {
        name: "Olivia Lawson",
        text: "Fake Electric is a game-changer! Outstanding solutions for our small business. The team is knowledgeable, prompt, and their work is top-notch in both residential and small commercial settings. Highly recommend!",
    },
    {
        name: "Brandon Harper",
        text: "Fake Electric is a gem! Fixed our complex residential wiring issues swiftly. Their expertise, reliability, and fair pricing set them apart. A 5-star electrical wizard for both homes and small businesses!",
    },
    {
        name: "Zoe Thompson",
        text: "Fake Electric is phenomenal! Transformed our outdated electrical setup flawlessly. Their team is skilled, professional, and dedicated to customer satisfaction. Impressed with their expertise in residential and small commercial work!",
    },
]


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


export const phoneNumbers = [
    {
        title: "Cell Number",
        text: contactInfo.phone
    },
    {
        title: "Mon-Sat Hours",
        text: contactInfo.hours.weekday,
    },
    {
        title: "Sunday Hours",
        text: contactInfo.hours.sun
    },
]