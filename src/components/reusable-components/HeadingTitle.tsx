import { ReactNode } from "react";

type PropsTypes = {
  children: ReactNode;
};
const HeadingTitle = ({ children }: PropsTypes) => {
  return (
    <div className="md:text-3xl text-2xl font-bold text-center text-text pt-5 pb-10">
      <h2>{children}</h2>
    </div>
  );
};

export default HeadingTitle;
