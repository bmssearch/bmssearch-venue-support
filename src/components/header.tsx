import Image from "./image";
import { Link } from "gatsby";
import React from "react";
import styles from "./header.module.scss";

const Header = () => (
  <div className={styles.wrapper}>
    <Link to="/">
      <Image className={styles.logo} />
    </Link>
  </div>
);

export default Header;
