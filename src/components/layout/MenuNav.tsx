"use client";
import React, { useCallback, useState } from "react";

interface navItems {
  category: string;
}
type MenuNavProps = {
  navData: Array<navItems>;
};
const MenuNav = ({ navData }: MenuNavProps) => {
  const [currentCategory, setCurrentCategory] = useState("all");

  const categoryNavList = useCallback(() => {
    const categoryList: Array<string> = [];
    navData.map((item) => {
      const { category } = item;
      if (!categoryList.includes(category)) {
        categoryList.push(category);
      }
    });
    return categoryList;
  }, [navData]);

  const selectedCategory = useCallback((title: string, value: any) => {
    const _navList = document.querySelectorAll(".MenuNav_List");
    const __navList = _navList[0].children as HTMLCollectionOf<HTMLElement>;
    Array.from(__navList).map((item: HTMLElement) => {
      item.classList.remove("active");
    });
    let listItem = value as HTMLElement;
    listItem.classList.add("active");
    setCurrentCategory(title);
  }, []);

  return (
    <>
      <header className="MenuNav_header w-full md:w-auto px-4 py-5 bg-special rounded-full">
        <ul className="MenuNav_List flex flex-row flex-wrap gap-8 px-4">
          <li
            className="MenuNav_Item active list-none text-large cursor-pointer text-white "
            key={"all"}
            onClick={(e) => {
              selectedCategory("all", e.currentTarget);
              e.preventDefault();
            }}
          >
            {"Profile"}
          </li>
          {categoryNavList().map((item, ind) => {
            return (
              <li
                className="MenuNav_Item list-none text-large cursor-pointer text-white"
                key={`${item}_${ind}`}
                onClick={(e) => {
                  selectedCategory(item, e.currentTarget);
                  e.preventDefault();
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </header>
    </>
  );
};

export default MenuNav;
