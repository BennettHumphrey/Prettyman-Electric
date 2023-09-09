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
        headerTitle: "Residential Electrician Services in Kitsap County",
        headerText: "Based in Kitsap County, our business proudly serves the electrical needs of Western Washington.",
        bodyTitle: "Residential Services Include",
        bodyText: "At Pioneer Electrical, we understand that your home is your sanctuary, and ensuring its electrical systems are safe and efficient is our top priority. Our team of highly trained electricians specializes in a wide range of residential electrical services, from simple repairs and installations to comprehensive wiring and panel upgrades. Whether you're dealing with a flickering light, need to install new outlets, or want to enhance your home's energy efficiency, our professionals are here to provide reliable solutions tailored to your specific needs. With a commitment to quality, safety, and customer satisfaction, we're your trusted partner for all things electrical in your home. Experience the difference with Pioneer Electrical - where your electrical needs meet excellence.",
        seal: false,
    },
    commercial: {
        headerTitle: "Commercial Electrical Solutions",
        headerText: "Based in Kitsap County, our business proudly serves the electrical needs of Western Washington.",
        bodyTitle: "Commercial Services Include",
        bodyText: "At Pioneer Electrical, we understand the unique electrical demands of commercial enterprises, from small offices to large industrial facilities. Our dedicated team of skilled electricians is equipped to handle a wide range of commercial electrical needs, including installations, maintenance, energy-efficient solutions, and emergency repairs. With a commitment to minimizing downtime and maximizing productivity, we ensure that your business operations run smoothly and safely. Trust Pioneer Electrical to be your partner in keeping your commercial space electrified and efficient.",
        seal: false,
    },
    industrial: {
        headerTitle: "Industrial Electrician in Victoria",
        headerText: "Providing affordable electrical services in the beautiful city of Victoria",
        bodyTitle: "Industrial Services",
        bodyText: "Industrial electrical upgrades providing energy improvements will significantly decrease utility costs, and save a large part of your operating budget. Factories use a massive amount of energy. Research shows that manufacturing plants consume more than 1,000 times as much power as other industries. This level of consumption provides quick payback periods for electrical improvement costs. Electrical upgrades also add to the value of a facility with an average increased asset value of three dollars for every dollar spent.",
        seal: true,
    },
    government: {
        headerTitle: "Government",
        headerText: "Providing affordable electrical services in the beautiful city of Victoria",
        bodyTitle: "Quality Service and Installation",
        bodyText: "In today's modern houses, lighting systems are becoming more and more integrated and complex. Our electricians have a wealth of experience, knowledge, and commitment to staying up-to-date with the latest technology. You can always be assured of qualified, competent electricians attending your needs. Regardless of the complexity or size of your project, the professionals at Fake Electric will do it right the first time!",
        seal: true,
    },
    contact: {
        headerTitle: "Hire an Electrician in Victoria",
        headerText: "Providing affordable electrical services in the beautiful city of Victoria",
        // seal: true,
    },
    projects: {
        headerTitle: "Our Projects",
        headerText: "A small selection of our projects",
        // seal: true,
    },
}


export const navOptions = [
    {
        href: '/PioneerElectrical/',
        title: 'Home',
    },

    {
        href: '../PioneerElectrical/residential',
        title: 'Residential',
    },

    {
        href: '../PioneerElectrical/commercial',
        title: 'Commercial',
    },

    // {
    //     href: '../PioneerElectrical/industrial',
    //     title: 'Industrial',
    // },

    // {
    //     href: '../PioneerElectrical/government',
    //     title: 'Government',
    // },

    {
        href: '../PioneerElectrical/contact',
        title: 'Contact Us',
    },

    // {
    //     href: '../PioneerElectrical/projects',
    //     title: 'Projects',
    // },
]



export const headerSlides = [
    // {
    //     //Return JSX for title & text so can change colors?
    //     img: "./imgs/Light-1200.webp",
    //     svg: <HiOutlineLightBulb  />,
    //     href: '../PioneerElectrical/industrial',
    //     title: "Lighting Design",
    //     text: "Our electricians have a wealth of experience and knowledge with the latest technology!",
    // },
    {
        img: "./imgs/Bremerton-1000.webp",
        svg: <FiSun />,
        href: '../PioneerElectrical/residential',
        title: "Residential Services",
        text: "Service upgrades, renovations, new construction, and more!",
    },
    {
        img: "./imgs/Seattle-1200.webp",
        svg: <FiWifi  />,
        href: '../PioneerElectrical/commercial',
        title: "Commercial Services",
        text: "Data wiring, alarm systems, new construction, and much more!",
    },
]



export const aboutUsMain = {
    title: "Your Electrical Experts: Quality Service, Every Project.",
    text: "\
    We are your premier full-service electrical contractor, dedicated to providing top-notch solutions \
    for all your electrical needs. With years of industry experience, our skilled team is committed to \
    delivering excellence in every project we undertake. From installations and repairs to maintenance \
    and upgrades, we take pride in our attention to detail and customer-focused approach. At Pioneer \
    Electrical, your satisfaction and safety are our top priorities. Discover a brighter, more efficient \
    future with our expert electrical services.",
}

export const aboutUs = [
    // Animations in tailwind.config.cjs
    {
        svg: <IoCheckmark className="h-20 w-20 text-text mx-auto group-hover:animate-checkmark-animation" />,
        href: "../PioneerElectrical/contact",
        title: "Quality Guarantee",
        text: "Reliable service is what every customer gets when they have a Pioneer Electrical electrician handling their electrical problems",
    },
    {
        svg: <FiPhoneCall className="h-20 w-20 pt-3 text-accent mx-auto group-hover:animate-phone-animation"  />,
        href: "../PioneerElectrical/contact",
        title: "24/7 Service",
        text: "Our technicians are available 24/7 for any emergency calls, helping with all that life can throw at you",
    },
    {
        svg: <HiOutlineShieldCheck className="h-20 w-20 text-text mx-auto group-hover:animate-shield-animation"  />,
        href: "../PioneerElectrical/contact",
        title: "Insured, Bonded, Licensed",
        text: "Our licensed electricians come fully equipped to address all your electrical needs.",
    },
]


export const reviews = [
    {
        text: "Kevin Pool",
        img: "",
        svg: "",
        href: "",
        title: "Quick response, estimate, and job completion of our Tesla charger!!! Thank you for your service!",
    },
    // {
    //     text: "Mike Smith",
    //     img: "",
    //     svg: "",
    //     href: "",
    //     title: "Sean and team completely re-did the electrical in our apartment complex before upgrading us to a 400 amp service. The care, time, and expertise that Fake Electric brought to the jobsite was something that I have never seen before. Thanks to the Fake Electric for being true electrical professionals.",
    // },
    // {
    //     text: "Pedro Gonzales",
    //     img: "",
    //     svg: "",
    //     href: "",
    //     title: "The people at Fake Electric are capable of commercial and residential projects with a sharp focus on quality. Clean work and careful attention, along with a respectful and knowledgeable crew is what keeps us calling them back.",
    // },
    // {
    //     text: "Sean Peters",
    //     img: "",
    //     svg: "",
    //     href: "",
    //     title: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
    // },
]


export const projects = [
    {
        img: ["./imgs/City-Skyline-1200.webp", "./imgs/Light-1200.webp"],
        title: "TEST1",
        location: "Two Images",
        text: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
    },
    {
        img: ["./imgs/Office-Interior-1200.webp", "./imgs/Light-1200.webp", "./imgs/City-Skyline-1200.webp"],
        title: "TEST2",
        location: "Three Images",
        text: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
    },
    {
        img: ["./imgs/Light-1200.webp"],
        title: "TEST3",
        location: "One Image",
        text: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
    },
    {
        img: [
            "./imgs/Scaffolding-1200.webp", "./imgs/Light-1200.webp", "./imgs/City-Skyline-1200.webp",
            "./imgs/Scaffolding-1200.webp", "./imgs/Light-1200.webp", "./imgs/City-Skyline-1200.webp",
            "./imgs/Scaffolding-1200.webp", "./imgs/Light-1200.webp", "./imgs/City-Skyline-1200.webp",
            ],
        title: "TEST4",
        location: "Nine Images",
        text: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
    },
]


export const contactInfo = {
    phone: "360-447-8137",
    hours: {
        weekday: "8:00am - 6:00pm",
        sat: "8:00am - 6:00pm",
        sun: "By appointment",
    },
    email: "inquiries@pioneerelectric.net",
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