import Header from "./Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="main-content">{children}</main>
    </>
  );
}

export default Layout;
