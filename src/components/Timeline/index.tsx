import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  return (
    <div className="relative max-w-2xl">
      <div className="absolute top-0 h-full border-dashed border-r-2 border-gray-500 left-3"></div>
      <ul className="space-y-2 font-bold">
        <TimelineItem title="Conect your wallet" content="This is your lucky day, buy tokens at 24 cents apiece in the first airdrop" />
        <TimelineItem title="Buy tokens" content="if you csn offer us something interesting,  buy tokens for 10 cents." />
        <TimelineItem title="Exchange cryptocurrency" content="100 milion token is waiting for you" />
      </ul>
    </div>
  );
};

export default Timeline;
