import SEO from "../SEO";

const Layout = ({ title, children }) => {
  return (
    <>
      <SEO title={title} />
      <div id="scroll-wrapper">{children}</div>
    </>
  );
};

export default Layout;
