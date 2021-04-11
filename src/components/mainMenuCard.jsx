import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Input, Card } from 'reactstrap';
import { RiContactsBookFill } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
import CardHeader from 'reactstrap/lib/CardHeader';
import CardBody from 'reactstrap/lib/CardBody';
import {ListUsers} from './../utils/listUsers'



export const MainMenuCard = () => {

    let [Users, setUsers] = useState([])
    let [userInfo, setUserInfo] = useState([])
    let [Key, setKey] = useState(1)


    const setInfoHandler = (id) => {
        let newUser = [...Users].filter((info) => info.id == id);
        setKey(id) ; 
        setUserInfo(newUser)
    }

    const SearchHandler =(value)=>{
        if(value == ""){
           return setUsers(ListUsers) ;
        }  
        let newUsers = [...Users].filter((info)=>info.name.toLowerCase().includes(value.toLowerCase()));
        setUsers(newUsers) ; 

    } 

    useEffect(() => {
        let copy = JSON.parse(JSON.stringify(ListUsers))
        setUsers(copy)
        setUserInfo([copy[0]])
    }, [])

    

    return (
        <>
            <Row className="mt-3 ml-5">
                <Col md={5}>
                    <Row className="ml-5">
                        <Col md={1} className="text-right">
                            <RiContactsBookFill className="mt-2" style={{ color: "#FE6C99", height: "28px", width: "28px" }} />
                        </Col>
                        <Col className="text-left" md={5}>
                            <Row>
                                <Col>
                                    <h5>Contacts</h5>
                                </Col>
                            </Row>
                            <small style={{ color: "gray" }} > Welcome to the Contacts </small>
                        </Col>

                        <Col md={6}>
                            <Row className="mt-3">
                                <Col className="text-right">
                                    <small style={{ color: "gray" }}> Sorted By:</small>
                                </Col>
                                <Col className="text-left">
                                    <small> <strong> Date Created</strong></small>
                                </Col>
                            </Row>
                        </Col>
                    </Row>


                </Col>
            </Row>

            <Row className="ml-5 mt-3">
                <Col md={4} className="ml-5">
                    <Input onChange={(e)=>SearchHandler(e.target.value)} style={{ borderRadius: "30px" }} type="text" name="text" placeholder="Search Contacts" />
                </Col>
                <Col md={3}>
                    <Button style={{ backgroundColor: "rgb(254, 108, 153)", border: "0" }} >+ Add Contacts</Button>
                </Col>
            </Row>

            <Row className="ml-5 mt-4">
                <Col md={6} className="ml-5">
                    <Card>
                        <CardHeader>
                            <Row>
                                <Col md={2}>+</Col>
                                <Col md={6}>Basic Info</Col>
                                <Col md={4}>Company</Col>
                            </Row>
                        </CardHeader>
                        <CardBody>
                            {Users.length>0 && Users.map((info) => (

                                <Row  onClick={() => setInfoHandler(info.id)} key={info.id} style={{ cursor: "pointer" , backgroundColor:Key==info.id ? "#dfdfdf":null }} className="mt-4">
                                    <Col md={2}><div className="mt-3" style={{ border: "1px solid grey", height: "12px", width: "12px" ,backgroundColor:Key==info.id ? "rgb(254, 108, 153)":null }} ></div></Col>
                                    <Col md={6}>
                                        <Row>
                                            <Col md={3}><div style={{ height: "43px", borderRadius: "24px", backgroundColor: `${info.color}` }} ></div> <span style={{position: "relative",top: "-35px"}} className="ml-2">{info.name.split(" ")[0][0].toUpperCase()}{info.name.split(" ")[1][0].toUpperCase()  }</span></Col>
                                            <Col md={9}>
                                                <Row>
                                                    <Col>
                                                        {info.name}
                                                    </Col>
                                                </Row>
                                                <Row>
                                                    <Col>
                                                        <small style={{ color: "gray" }} >{info.email}</small>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col md={4}>{info.comapany}</Col>
                                </Row>
                            ))}
                        </CardBody>
                    </Card>
                </Col>

                {userInfo.map((info) => (
                    <Col md={5}>
                        <Card>
                            <CardHeader>
                                <Row>
                                    <Col className="center-block">
                                        <center>
                                            <div style={{ height: "60px", width: "60px", borderRadius: "50px", backgroundColor: info.color }} ></div> <span style={{position: "relative",top: "-42px"}} className="mt-5" > {info.name.split(" ")[0][0].toUpperCase()}{info.name.split(" ")[1][0].toUpperCase()  }</span>
                                        </center>
                                    </Col>
                                </Row>
                                <Row className="mt-3">
                                    <Col className="text-center">
                                        <h6 style={{ color: "gray" }}>{info.name}</h6>
                                    </Col>
                                </Row>

                                <Row className="">
                                    <Col className="text-center">
                                        <small style={{ color: "gray" }}>{info.role} </small>
                                    </Col>
                                </Row>

                                <small>
                                    <Row className="mt-4">
                                        <Col style={{ color: "gray" }} md={5}>
                                            Full Name
                                </Col>

                                        <Col className="" md={5}>
                                            {info.name}
                                </Col>
                                    </Row>


                                    <Row className="mt-2">
                                        <Col style={{ color: "gray" }} md={5}>
                                            Email
                                </Col>

                                        <Col className="" md={5}>
                                            {info.email}
                                </Col>
                                    </Row>

                                    <Row className="mt-2">
                                        <Col style={{ color: "gray" }} md={5}>
                                            Phone
                                </Col>

                                        <Col className="" md={5}>
                                            +(069) {info.ph}
                                </Col>
                                    </Row>

                                    <Row className="mt-2">
                                        <Col style={{ color: "gray" }} md={5}>
                                            Company
                                </Col>

                                        <Col className="" md={5}>
                                            {info.comapany}
                                </Col>
                                    </Row>



                                    <Row className="mt-2">
                                        <Col style={{ color: "gray" }} md={5}>
                                            Address
                                </Col>

                                        <Col className="" md={5}>
                                            {info.address}
                                </Col>
                                    </Row>
                                </small>
                            </CardHeader>
                        </Card>

                        <Card className="mt-3">
                            <CardHeader >
                                <Row>
                                    <Col md={3}>
                                        <GoLaw style={{ color: "rgb(254, 108, 153)", height: "50px", width: "50px" }} />
                                    </Col>
                                    <Col md={9} className="mt-2" >
                                        <Row>
                                            <Col>
                                                {info.fault}
                                        </Col>
                                        </Row>
                                        <Row>
                                            <Col style={{ color: "gray" }}>
                                                <small>Date : 7 Mar, 2017 - 10:00am</small>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </CardHeader>
                        </Card>
                    </Col>
                ))
                }
            </Row>
        </>

    )
}


