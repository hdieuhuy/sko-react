"use client";

import { Layout, Row, Space, Typography } from "antd";
import React from "react";

import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { MdCall, MdLocationPin } from "react-icons/md";

const { Footer } = Layout;

const mainStyle = {
  color: "#9E9E9E",
  size: 24,
};

const FooterComponent = () => {
  const listSocial = [
    {
      icon: <FaFacebookF {...mainStyle} />,
    },
    {
      icon: <FaYoutube {...mainStyle} />,
    },
    {
      icon: <FaLinkedinIn {...mainStyle} />,
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
              fontWeight: 700,
              marginBottom: 0,
            }}
          >
            DatVietVAC GROUP HOLDINGS
          </Typography.Title>

          <Row>
            <Space size={20}>
              {listSocial.map((item, index) => (
                <div
                  key={`social-item-${index}`}
                  style={{
                    border: `2px solid ${mainStyle.color}`,
                    borderRadius: "50%",
                    padding: 8,
                    display: "flex",
                    cursor: "pointer",
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </Space>
          </Row>

          <Row align="center">
            <MdLocationPin {...mainStyle} />

            <Typography.Text
              style={{
                color: "#212121",
                fontWeight: 500,
                marginLeft: 8,
                lineHeight: 1.75,
              }}
            >
              222 Pasteur, Phường Võ Thị Sáu, Quận 3, TP Hồ Chí Minh, Việt Nam
            </Typography.Text>
          </Row>

          <Row align="center">
            <MdCall {...mainStyle} />

            <Typography.Text
              style={{
                color: "#212121",
                fontWeight: 500,
                marginLeft: 8,
                lineHeight: 1.75,
              }}
            >
              (+84) 28 3824 1919
            </Typography.Text>
          </Row>
        </Space>
      </Row>
    </Footer>
  );
};

export default FooterComponent;
