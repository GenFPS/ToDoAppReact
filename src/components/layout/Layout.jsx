// общие стили для всех компонентов
import React from "react";

// с помощью параметра children мы настраиваем стили внутри <Layout>

const Layout = ({ children }) => {
  return <div className="py-10 bg-gray-900 h-screen">{children}</div>;
};

export default Layout;
