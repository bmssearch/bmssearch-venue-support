import { StaticQuery, graphql, useStaticQuery } from "gatsby";

import Img from "gatsby-image";
import React from "react";

type Props = {
  className?: string;
};
const Image: React.FC<Props> = (props) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      className={props.className}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
};
export default Image;
