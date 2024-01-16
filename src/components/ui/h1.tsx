import { cn } from "@/lib/utils";
import React from "react";

interface H1Props extends React.HTMLProps<HTMLHeadingElement> {}

const H1 = (props: H1Props) => {
  return (
    <h1
      {...props}
      className={cn(
        "text-4xl font-extrabold tracking-tight lg:text-5xl",
        props.className,
      )}
    />
  );
};

export default H1;
