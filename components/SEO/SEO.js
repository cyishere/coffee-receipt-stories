import Head from "next/head";

const SEO = ({ title }) => {
  const siteMetaData = {
    title: title
      ? `${title} - Coffee Receipt Stories`
      : "Coffee Receipt Stories",
    description: "A journey of little adventures in everyday life.",
    url: "https://coffee-receipts.netlify.app",
    image: "/a-journey.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@oddingniddo",
  };

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{siteMetaData.title}</title>
      <meta name="description" content={siteMetaData.description} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={siteMetaData.url} />
      <meta
        name="image"
        content={`${siteMetaData.url}/${siteMetaData.image}`}
      />
      <meta name="image:alt" content={siteMetaData.description} />

      <meta name="twitter:card" content="summary_large_image" />

      {siteMetaData.twitterUsername ? (
        <meta name="twitter:creator" content={siteMetaData.twitterUsername} />
      ) : null}
    </Head>
  );
};

export default SEO;
