import { ReactNode } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import Newsfeed from "../NewsFeed";

interface LayoutProps {
  children?: ReactNode[] | ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-container">
      <Topbar />
      <Sidebar />

      <div className="layout-content">{children}</div>
    </div>
  );
};

export default Layout;
