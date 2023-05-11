"use client";

import { Row, Space } from "antd";
import HomeSlider from "./components/homeSlider/homeSlider.component";
import IntroduceContainerComponent from "@/components/ui/introduceContainer/introduceContainer.component";

export default function Home() {
  return (
    <Row>
      {/* <Space direction="vertical" size={70}> */}
      <HomeSlider />

      <IntroduceContainerComponent />
      {/* </Space> */}
    </Row>
  );
}
