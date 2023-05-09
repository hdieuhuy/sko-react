"use client";

import { Layout, Row, Space, Typography } from "antd";
import React from "react";

import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const { Footer } = Layout;

const FooterComponent = () => {
  const listSocial = [
    {
      icon: <FaFacebookF />,
    },
    {
      icon: <FaYoutube />,
    },
    {
      icon: <FaLinkedinIn />,
    },
  ];

  return (
    <Footer
      style={{
        background: "#FAFAFA",
        padding: "30px 0",
      }}
    >
      <Row justify="center">
        <Space direction="vertical" align="center" size={20}>
          <Typography.Title
            level={4}
            style={{
              fontSize: 18,
              fontFamily: "Montserrat",
            }}
          >
            DatVietVAC GROUP HOLDINGS
          </Typography.Title>

          <Row>
            <div>
              <FaFacebookF />
            </div>
          </Row>
        </Space>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
