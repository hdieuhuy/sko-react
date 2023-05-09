"use client";

import React from "react";

import { Col, Layout, Row, Space } from "antd";
import Image from "next/image";
import Logo from "@/assets/logo.svg";

import Menu from "../menu/menu.component";
import {
  MdSearch,
  MdAccountCircle,
  MdOutlineShoppingBag,
} from "react-icons/md";

import "./header.scss";

const { Header } = Layout;

const HeaderComponent = () => {
  const styleIcon = {
    size: 28,
    color: "#616161",
    cursor: "pointer",
  };

  const actionItems = [
    {
      icon: <MdSearch {...styleIcon} />,
      action: () => {},
    },
    {
      icon: <MdAccountCircle {...styleIcon} />,
      action: () => {},
    },
    {
      icon: <MdOutlineShoppingBag {...styleIcon} />,
      action: () => {},
    },
  ];

  return (
    <Header>
      <Row className="main-header">
        <Col xl={12}>
          <Row
            align="middle"
            style={{
              height: "100%",
            }}
          >
            <div className="logo" style={{ marginRight: 50, height: "100%" }}>
              <Image src={Logo} alt="logo" />
            </div>

            <div className="menu">
              <Menu />
            </div>
          </Row>
        </Col>

        <Col xl={12}>
          <Row justify="end" align="middle" style={{ height: "100%" }}>
            <Space size={20} align="center">
              {actionItems.map((item, index) => (
                <div
                  key={`action-item-${index}`}
                  style={{
                    display: "flex",
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </Space>
          </Row>
        </Col>
      </Row>
    </Header>
  );
};

export default HeaderComponent;
