import type { FC } from "react";

interface SectionEyebrowProps {
  text: string;
}

export const SectionEyebrow: FC<SectionEyebrowProps> = ({ text }) => {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-[2px] bg-mb-red" />
      <span className="text-mb-red font-ui uppercase tracking-widest text-sm font-bold">
        {text}
      </span>
    </div>
  );
};
