import React from "react";

import { NextPage } from "next";

interface HeaderItemProps {
  title: string;
  Icon: NextPage<React.ComponentProps<"svg">>;
}

const HeaderItem: NextPage<HeaderItemProps> = ({ title, Icon }) => {
  return (
    <div className="group flex flex-col items-center w-12 sm:w-20 hover:text-white">
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
