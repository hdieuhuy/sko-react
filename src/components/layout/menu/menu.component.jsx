"use client";

import { Dropdown, Space } from "antd";
import React, { useMemo } from "react";

import "./menu.scss";

export default function Menu() {
  const menus = [
    {
      label: "Products/Services",
      child: [
        {
          label: "Integrated Communication",
          key: 0,
        },
        {
          label: "Talent Services",
          key: 1,
        },
      ],
    },
    {
      label: "Media Platforms",
      child: [
        {
          label: "Integrated Communication",
          key: 0,
        },
      ],
    },
    {
      label: "About Us",
      child: [
        {
          label: "Integrated Communication",
          key: 0,
        },
      ],
    },
  ];

  const renderMenus = useMemo(
    () => (
      <Space size={50} align="center">
        {menus.map((item, index) => (
          <Dropdown
            menu={{
              items: item.child,
            }}
            key={`dropdown-item-${index}`}
            overlayClassName="menu-dropdown"
          >
            <span className="menu-label">{item.label}</span>
          </Dropdown>
        ))}
      </Space>
    ),
    [menus]
  );

  return <>{renderMenus}</>;
}
