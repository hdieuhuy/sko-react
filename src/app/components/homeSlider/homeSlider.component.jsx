"use client";

import { Carousel } from "antd";
import { useRef } from "react";

import { getExtFile } from "src/helpers";
import { FILE } from "@/constants/constants";

import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import "./homeSlider.scss";

const contentStyle = {
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  cursor: "pointer",
  position: "relative",
};

export default function HomeSlider() {
  const carouselRef = useRef(null);

  const next = () => {
    carouselRef.current.next();
  };

  const prev = () => {
    carouselRef.current.prev();
  };

  const handleGotoDetail = (cate, id) => {
    console.log({ cate, id });
  };

  const renderContent = (x) => {
    const src = x?.thumbnail_home || x?.image;

    const _ext = getExtFile(src);
    const imageFiles = FILE.IMAGE;

    if (imageFiles?.includes(_ext)) {
      return (
        <div
          style={contentStyle}
          onClick={() => handleGotoDetail(x?.category, x?.id)}
        >
          <div
            className="background"
            style={{
              backgroundImage: `url(${src})`,
            }}
          ></div>
          <img alt="home-slider" src={src} className="image" />
        </div>
      );
    }

    return (
      <div style={contentStyle} onClick={() => window.open(x?.to, "_blank")}>
        <div className="video-container">
          <video autoPlay muted loop playsInline>
            <source src={src} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  };

  return (
    <div className="home-slider">
      <LeftOutlined onClick={prev} className="icon left-icon" />
      <Carousel
        autoplay
        autoplaySpeed={10000}
        dots
        ref={carouselRef}
        infinite={false}
      >
        {[
          {
            image:
              "https://vie-access-api.datvietvac.vn/staticfile/uploads/cms/2023/510/14.jpg",
            to: "/",
          },
          {
            image:
              "https://vie-access-api.datvietvac.vn/staticfile/uploads/cms/2023/510/VieChannelPhotoHoaVuongTap114.jpg",
            to: "/",
          },
        ]?.map((x, key) => {
          return <div key={`home-slider-item-${key}`}>{renderContent(x)}</div>;
        })}
      </Carousel>
      <RightOutlined onClick={next} className="icon right-icon" />
    </div>
  );
}
