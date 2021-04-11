import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Input } from 'reactstrap';
import { SideMenuComponent } from './sideMenuComponent.jsx'
import { TopMenuComponent } from './topMenuComponent.jsx'
import { MainMenuCard } from './mainMenuCard.jsx'

import CardBody from "reactstrap/lib/CardBody";
import CardHeader from "reactstrap/lib/CardHeader";
import notification from "./../utils/notification";
import "./../utils/list.scss"

export default function
  List(props) {

  // All initials defined here


  return (
    <Row className="max-size">
     
      <Col md={1} sm={1} xs={1} lg={1} style={{ backgroundColor: "#ff8866" }} >
        <SideMenuComponent />
      </Col>

      <Col style={{ backgroundColor: "white" }} className="sidebar" >

        <Row>
          <Col>
            <Card className="top-card">
              <TopMenuComponent />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <MainMenuCard />
          </Col>
        </Row>

      </Col>

    </Row>
  )

}
