"use client";
import { ConfigProvider, Layout } from "antd";

import HeaderComponent from "@/components/layout/header/header.components";
import FooterComponent from "@/components/layout/footer/footer.component";
import { usePathname } from "next/navigation";

export default function Template({ children }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

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

        <Layout.Content
          className="main-content"
          style={{ marginTop: !isHomePage ? 70 : 0 }}
        >
          {children}
        </Layout.Content>

        <FooterComponent />
      </Layout>
    </ConfigProvider>
  );
}
