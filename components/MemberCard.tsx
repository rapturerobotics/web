import React from "react";

interface MemberCardProps {
  title: string | React.ReactElement;
}

const MemberCard: React.FC<MemberCardProps> = ({ title, children }) => {
  return (
    <article>
      <h2>{title}</h2>
      <div>{children}</div>
    </article>
  );
};

export default MemberCard;
