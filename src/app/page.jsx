"use client";

import { Space } from "antd";
import HomeSlider from "./components/homeSlider/homeSlider.component";
import IntroduceContainerComponent from "@/components/ui/introduceContainer/introduceContainer.component";
import SuccessStoriesComponent from "@/components/ui/successStories/successStories.component";
import Banner from "@/components/ui/banner/banner.component";

export default function Home() {
  return (
    <Space
      direction="vertical"
      size={70}
      style={{
        display: "flex",
        width: "100vw",
      }}
    >
      <HomeSlider />

      <IntroduceContainerComponent />

      <SuccessStoriesComponent />

      <Banner />
    </Space>
  );
}
