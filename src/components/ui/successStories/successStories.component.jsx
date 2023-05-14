import { Divider, Row, Typography } from "antd";
import React from "react";
import "./successStories.scss";

export default function SuccessStories(props) {
  return (
    <Row
      justify="center"
      style={{ maxWidth: 1440, margin: "auto" }}
      className="success-stories"
    >
      <Divider plain>
        <Typography.Title
          style={{
            marginBottom: 0,
            fontFamily: "serif",
            fontWeight: 700,
          }}
        >
          SUCCESS STORIES
        </Typography.Title>
      </Divider>

      <Row></Row>

      <Divider style={{ marginTop: 70 }} />
    </Row>
  );
}
