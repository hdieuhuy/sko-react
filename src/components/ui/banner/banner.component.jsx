"use client";

import { Button, Col, Row, Space, Typography } from "antd";
import React from "react";

import "./banner.scss";

export default function Banner() {
  return (
    <Row align="middle" justify="center" className="banner">
      <div
        style={{
          position: "absolute",
          zIndex: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      />

      <Space size={20} direction="vertical">
        <Typography.Title
          level={3}
          style={{
            fontSize: 36,
            fontWeight: 700,
            color: "white",
          }}
        >
          Dẫn đầu xu hướng quảng cáo cùng DatVietVAC
        </Typography.Title>

        <Button type="text">Click here</Button>
      </Space>
    </Row>
  );
}
