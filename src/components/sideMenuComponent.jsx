import React , {useState} from 'react'
import { Container, Row, Col, Card, Input } from 'reactstrap';
import { ImHome } from "react-icons/im";
import { BiUser , BiTimeFive } from "react-icons/bi";
import { BsFileEarmarkPlus } from "react-icons/bs";
import { FiSettings, FiCalendar } from "react-icons/fi";
import "./../utils/list.scss"
import { CgMenuRight } from "react-icons/cg";



export const SideMenuComponent = () => {
    let sideBarIconList = [ImHome, BiUser, BsFileEarmarkPlus,BiTimeFive, FiSettings, FiCalendar]
    let [sideBarIcons, setSidebarIcons] = useState(sideBarIconList)

    return (
        <>
         <CgMenuRight className="menu mb-5" />
            {
                 sideBarIcons.map((Icons) => (
                    <Row className="mb-4">
                        <Col>
                            <Icons className="side-icons" />
                        </Col>
                    </Row>
                )
                 )
            }
        </>
    )

}