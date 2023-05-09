"use client";

import "antd/dist/reset.css";

import { ConfigProvider, Layout } from "antd";
import "./globals.scss";

import HeaderComponent from "@/components/layout/header/header.components";
import FooterComponent from "@/components/layout/footer/footer.component";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ConfigProvider
          theme={{
            token: {
              borderRadius: 0,
            },
          }}
        >
          <Layout>
            <HeaderComponent />

            <Layout.Content className="main-content">{children}</Layout.Content>

            <FooterComponent />
          </Layout>
        </ConfigProvider>
      </body>
    </html>
  );
}
