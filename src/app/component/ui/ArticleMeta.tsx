import { CalendarDateRangeIcon, ClockIcon } from "@heroicons/react/20/solid";
import React from "react";

export const ArticleMeta = () => {
  return (
    <div className="flex-items gap-4">
      <span className="text-textSmall flex-items gap-2">
        <CalendarDateRangeIcon className="size-[24px]" />
        17/12/2024
      </span>
      <span className="text-textSmall flex-items gap-2">
        <ClockIcon className="size-[24px]" />
        10 min read
      </span>
    </div>
  );
};
