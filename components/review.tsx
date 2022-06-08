import React, { ReactNode } from "react";

interface Props {
  by: string;
  children: ReactNode;
}

const Review: React.FC<Props> = ({ children, by }) => (
  <div className="flex flex-col justify-center text-center px-5 md:px10 lg:px-20">
    <div className="text-xl md:text-2xl lg:leading-[3rem] tracking-tight">
      &ldquo;{children}&rdquo;
    </div>
    <div className="mt-6">&mdash; {by}</div>
  </div>
);

export default Review;
