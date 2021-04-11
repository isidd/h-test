import React from 'react';
import { Container, Row, Col, Card, Input } from 'reactstrap';
import { AiOutlineSearch } from "react-icons/ai";
import { MdEmail , MdNotificationsActive,MdArrowDropDown } from "react-icons/md";


export const TopMenuComponent = () => {

    return (
        <Row>
            <Col md={2} lg={2} sm={2} xs={2} >
                <div className="mt-2 ml-4 search-div">
                    <AiOutlineSearch className="search-icon" />
                </div>
            </Col>
            <Col className="text-right" md={10} lg={10} sm={10} xs={10}>
                <Row>
                    <Col md={8} lg={8} sm={8} xs={8}></Col>
                    <Col md={4} lg={4} sm={4} xs={4}>
                        <Row className="mt-2 text-left">
                            <Col md={3} lg={3} sm={3} xs={3} style={{color:"gray"}}>+ Add</Col>
                            <Col md={2} lg={2} sm={2} xs={2}><MdEmail style={{color:"gray"}}/></Col>
                            <Col md={5} lg={5} sm={5} xs={5} style={{color:"gray"}}>Mark Henry {" "} <MdArrowDropDown/> </Col>
                            <Col md={1} lg={1} sm={1} xs={1}><MdNotificationsActive style={{color:"gray"}}/></Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>

    )
}


