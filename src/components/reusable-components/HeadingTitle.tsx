import { ReactNode } from "react";

type PropsTypes = {
  children: ReactNode;
};
const HeadingTitle = ({ children }: PropsTypes) => {
  return (
    <div className="md:text-3xl text-2xl font-bold text-center text-text py-5">
      {children}
    </div>
  );
};

export default HeadingTitle;
