import { graphql, useStaticQuery } from "gatsby";

import Helmet from "react-helmet";
import React from "react";

type Props = {
  title: string;
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
};
const SEO: React.FC<Props> = ({
  description,
  lang,
  meta = [],
  keywords = [],
  title,
}) => {
  const data = useStaticQuery(detailsQuery);

  const metaDescription =
    description || (data.site.siteMetadata.description as string);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${data.site.siteMetadata.title}`}
      meta={[
        {
          name: "description",
          content: metaDescription,
        },
        {
          property: "og:title",
          content: title,
        },
        {
          property: "og:description",
          content: metaDescription,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "twitter:creator",
          content: data.site.siteMetadata.author,
        },
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: metaDescription,
        },
      ]
        .concat(
          keywords.length > 0
            ? {
                name: "keywords",
                content: keywords.join(", "),
              }
            : []
        )
        .concat(meta)}
    />
  );
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`;
