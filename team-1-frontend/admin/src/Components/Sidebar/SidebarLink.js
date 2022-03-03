import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{ faUser, faPoll, faTasks, faUserFriends, faMedal } from "@fortawesome/free-solid-svg-icons"

export const SidebarLink = [
    {
        title: "About Me",
        icon: <FontAwesomeIcon icon={faUser}/>,
        link: "/",
    },
    {
        title: "Skills",
        icon: <FontAwesomeIcon icon={faPoll}/>,
        link: "/skills",
    },
    {
        title: "Projects",
        icon: <FontAwesomeIcon icon={faTasks}/>,
        link: "/projects",
    },
    {
        title: "Experience",
        icon: <FontAwesomeIcon icon={faMedal}/>,
        link: "/experiences",
    },
    {
        title: "Social Media",
        icon: <FontAwesomeIcon icon={faUserFriends}/>,
        link: "/social-media",
    }
]
