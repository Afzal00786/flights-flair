import React from "react";
import DocumentMeta from "react-document-meta";

const MetaData = ({ title, description }) => {
  const meta = {
    title: title,
    description: description,
    canonical: "http://example.com/path/to/page",
    meta: {
      charset: "utf-8",
      name: {
        keywords: "react,meta,document,html,tags",
      },
    },
  };
  return <DocumentMeta {...meta} />;
};

export default MetaData;
