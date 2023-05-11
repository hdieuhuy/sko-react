"use client";

import { useState } from "react";
import { Carousel, Col, Row, Space, Typography } from "antd";
import "./introduceContainer.scss";

const tabs = [
  {
    label: "Products/ Services",
    child: [
      "Intergrated Communication",
      "Content Marketing",
      "Digital Advertising",
      "Sponsorship",
      "IP Commercialization",
      "Event",
      "Talent Services",
    ],
  },
  {
    label: "Media Platforms",
    child: [
      "Intergrated Communication",
      "Content Marketing",
      "Digital Advertising",
      "Sponsorship",
      "IP Commercialization",
      "Event",
      "Talent Services",
    ],
  },
];

export default function IntroduceContainer() {
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const showroomItems = [
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOuERsquFhNE8M8En4HqvOCPEK_6X-rFzckPDKpvPcuidrcGB3KC4oWzwfo1hOlhRYpxM&usqp=CAU",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOuERsquFhNE8M8En4HqvOCPEK_6X-rFzckPDKpvPcuidrcGB3KC4oWzwfo1hOlhRYpxM&usqp=CAU",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOuERsquFhNE8M8En4HqvOCPEK_6X-rFzckPDKpvPcuidrcGB3KC4oWzwfo1hOlhRYpxM&usqp=CAU",
    },
    {
      image:
        "https://www.packnet.co.nz/images/448247/pid1868086/PROD1.5kg225x375.jpg",
    },
  ];

  return (
    <Row justify="center" className="introduce-container">
      <Row justify={"center"} className="tabs">
        {tabs.map((item) => (
          <div
            key={`introduce-tab-item-${item.label}`}
            onClick={() => setCurrentTab(item)}
            className={item.label === currentTab.label ? "active" : ""}
          >
            {item.label}
          </div>
        ))}
      </Row>

      <Row justify={"center"} className="content">
        <Col xl={8}>
          <Space
            size={30}
            direction="vertical"
            style={{
              width: "100%",
            }}
            className="tab-child"
          >
            <Typography.Title
              level={2}
              style={{
                textAlign: "center",
                fontFamily: "serif",
                fontSize: 32,
                marginBottom: 0,
                textTransform: "uppercase",
              }}
            >
              {currentTab.label}
            </Typography.Title>

            {currentTab.child.map((item, index) => (
              <Typography.Text
                key={`tab-child-${index}`}
                className="tab-content"
              >
                {item}
              </Typography.Text>
            ))}
          </Space>
        </Col>

        <Col xl={16} className="showroom">
          <Space direction="vertical" size={20}>
            <Typography.Title level={4} className="title">
              Sponsorship
            </Typography.Title>

            <Typography.Text style={{ fontSize: 16, color: "#212121" }}>
              Giới thiệu về Sản phẩm dịch vụ ( Sponsorship/ IP
              Commercialization/ Content Marketing ) khi được click chọn tương
              ứng
            </Typography.Text>

            <Carousel slidesToShow={3} slidesToScroll={3}>
              {/* <Space size={28}> */}
              {showroomItems.map((item, index) => (
                <div>
                  <img key={`showroom-item-${index}`} src={item.image} />
                </div>
                //   abc
                // </div>
              ))}
              {/* </Space> */}
            </Carousel>
          </Space>
        </Col>
      </Row>
    </Row>
  );
}
