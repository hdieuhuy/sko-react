"use client";

import "antd/dist/reset.css";
import HomePage from "./home/page";
import { useState } from "react";

export default function Home() {
  const [actives, setActives] = useState(false);

  return <HomePage />;
}
