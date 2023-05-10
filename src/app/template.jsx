"use client";
import { ConfigProvider, Layout } from "antd";

import HeaderComponent from "@/components/layout/header/header.components";
import FooterComponent from "@/components/layout/footer/footer.component";

export default function Template({ children }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 0,
          fontFamily: "Montserrat",
        },
      }}
    >
      <Layout>
        <HeaderComponent />

        <Layout.Content className="main-content">{children}</Layout.Content>

        <FooterComponent />
      </Layout>
    </ConfigProvider>
  );
}
