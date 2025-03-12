"use client";

import { setCookie } from "cookies-next";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

// https://tailwindcomponents.com/component/radio-buttons-1

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({ tabOptions = [1, 2], currentTab = 1 }: Props) => {
  const router = useRouter();
  const [selected, setSelected] = useState(currentTab);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie("selectedTab", tab.toString());
    router.refresh();
  };

  return (
    <div
      className={`
            grid w-full space-x-2 rounded-xl bg-gray-200 p-2 grid-cols-2
        `}
    >
      {tabOptions.map((tab) => (
        <div key={tab}>
          <input
            checked={selected === tab}
            onChange={() => {}}
            type="radio"
            id={tab.toString()}
            className="peer hidden"
          />
          <label
            onClick={() => onTabSelected(tab)}
            className="
            transition-all flex flex-row gap-2 cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 px-10 peer-checked:font-bold peer-checked:text-white"
          >
            <Image
              aria-hidden
              src="/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            Punto {tab}.
          </label>
        </div>
      ))}
    </div>
  );
};
