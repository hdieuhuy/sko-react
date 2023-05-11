"use client";

import { useRef, useState } from "react";
import { Carousel, Col, Row, Space, Typography } from "antd";
import "./introduceContainer.scss";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

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
  const carouselRef = useRef(null);
  const [currentTab, setCurrentTab] = useState(tabs[0]);
  const showroomItems = [
    {
      image:
        "https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/311448017_657930105949438_8580677079473150633_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=niMcMgUFAeAAX-mwveX&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCKqWvMi-yh03MepOPtpW4zhrxutte-mB8I8EhIKe_0tw&oe=646217DB",
    },
    {
      image:
        "https://media.vov.vn/sites/default/files/styles/large/public/2022-11/289051646_422655006536247_3802310801952961447_n.jpg",
    },
    {
      image:
        "https://afamilycdn.com/150157425591193600/2021/3/26/dan-cast-rm-han-quoc-1-1616738848852739197545-1616746624700-16167466251581916663123.jpg",
    },
    {
      image: "https://media.viez.vn/prod/2022/11/22/image_0ba27208e2.jpeg",
    },
  ];

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

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

            <div className="showroom-carousel">
              <MdChevronLeft onClick={prev} className="icon left" />
              <Carousel
                slidesToShow={3}
                slidesToScroll={3}
                dots={false}
                infinite={false}
                draggable
                ref={carouselRef}
              >
                {showroomItems.map((item, index) => (
                  <img key={`showroom-item-${index}`} src={item.image} />
                ))}
              </Carousel>
              <MdChevronRight onClick={next} className="icon right" />
            </div>
          </Space>
        </Col>
      </Row>
    </Row>
  );
}
