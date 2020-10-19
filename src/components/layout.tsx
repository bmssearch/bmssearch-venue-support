import { StaticQuery, graphql } from "gatsby";

import Header from "./header";
import React from "react";

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
  </>
);

export default Layout;
