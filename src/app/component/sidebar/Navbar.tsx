"use client";

import Link from "next/link";
import React, { useState, useCallback, useEffect } from "react";
import Button from "../ui/Button";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";
import { useNavbarStore } from "@/app/store/navbar";
import { usePathname } from "next/navigation";
import cn from "@/app/utils/cn";

interface NavbarProps {
  id: string;
  label: string;
  dropDownItem?: NavbarProps[];
  href: string;
}

interface isShowLanguageProps {
  isShowLanguage: boolean;
  setIsShowLanguage: (isShowLanguage: boolean) => void;
  pathname: string;
}

const NavbarItem: NavbarProps[] = [
  {
    id: "about",
    label: "Về chúng tôi",
    href: "#",
  },
  {
    id: "solutions",
    label: "Giải pháp",
    href: "#",
    dropDownItem: [
      {
        id: "solution-1",
        label: "Giải pháp 1",
        href: "#",
      },
      {
        id: "solution-2",
        label: "Giải pháp 2",
        href: "#",
      },
      {
        id: "solution-3",
        label: "Giải pháp 3",
        href: "#",
      },
    ],
  },
  {
    id: "resources",
    label: "Tài nguyên",
    href: "#",
    dropDownItem: [
      {
        id: "blog",
        label: "Blog",
        href: "/resources/blog",
      },
      {
        id: "resource-2",
        label: "Tài nguyên 2",
        href: "#",
      },
      {
        id: "resource-3",
        label: "Tài nguyên 3",
        href: "#",
      },
    ],
  },
  {
    id: "contact",
    label: "Liên hệ",
    href: "#",
  },
];

const language = [
  { id: "vi", label: "VI", href: "#" },
  { id: "en", label: "EN", href: "#" },
  { id: "jp", label: "JP", href: "#" },
  { id: "kr", label: "KR", href: "#" },
  { id: "us", label: "US", href: "#" },
  { id: "cn", label: "CN", href: "#" },
];

const variantBase = (direction: "open" | "close") => ({
  initial: { opacity: 0, rotate: direction === "open" ? 90 : -90 },
  animate: { opacity: 1, rotate: 0 },
  exit: { opacity: 0, rotate: direction === "open" ? -90 : 90 },
  transition: { duration: 0.2 },
});

const MenuDesktop = React.memo(
  ({ isShowLanguage, setIsShowLanguage, pathname }: isShowLanguageProps) => {
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    return (
      <>
        <ul className="hidden lg:flex items-center gap-2 py-[9.21px]">
          {NavbarItem.map(({ label, dropDownItem, id }, index) => (
            <motion.li
              className="p-2 relative"
              key={index}
              onMouseEnter={() => dropDownItem && setActiveDropdown(label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                href={`/${id}`}
                className={cn(
                  "flex loadUnderline after:bg-blue-400 items-center gap-1",
                  pathname.split("/")[1] === id && "font-bold"
                )}
              >
                {label}
                {dropDownItem && (
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown === label ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>
              <AnimatePresence>
                {dropDownItem && activeDropdown === label && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[200px] z-50"
                  >
                    {dropDownItem.map((item) => (
                      <Link
                        key={item.id}
                        href={`/${item.id}`}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
        <div className="hidden lg:flex gap-2 items-center">
          <motion.div className="relative">
            <Button
              variant="outline"
              className="flex-items group bg-gradient-to-r border border-gradient1 gap-3 from-gradient1 to-gradient1 text-black"
              onMouseEnter={() => setIsShowLanguage(true)}
              onMouseLeave={() => setIsShowLanguage(false)}
            >
              <Image
                src="/icon_country.svg"
                alt="user"
                width={20}
                height={20}
              />
              <div className="flex-items gap-1">
                <div className="flex flex-col overflow-hidden">
                  <span>{language[0].label}</span>
                </div>
                <Image
                  className={`group-hover:rotate-180 transition-all duration-300 ${
                    isShowLanguage ? "rotate-180" : ""
                  }`}
                  src="/CaretDown.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </div>
            </Button>
            <AnimatePresence>
              {isShowLanguage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[100px] z-50"
                  onMouseEnter={() => setIsShowLanguage(true)}
                  onMouseLeave={() => setIsShowLanguage(false)}
                >
                  {language.map(({ id, label, href }) => (
                    <Link
                      key={id}
                      href={href}
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div>
            <Button className="flex-items gap-3 bg-gradient2 border border-white text-black">
              <span>Trở thành khách hàng</span>
              <Image src="/upRight.svg" alt="arrow" width={22} height={22} />
            </Button>
          </motion.div>
        </div>
      </>
    );
  }
);

MenuDesktop.displayName = "MenuDesktop";

const MenuMobile = React.memo(
  ({ isShowLanguage, setIsShowLanguage, pathname }: isShowLanguageProps) => {
    const [activeDropdown, setActiveDropdown] = useState<{
      [key: string]: boolean;
    }>({});

    return (
      <div className="absolute h-screen w-screen inset-0 z-10 rounded-lg px-10 bg-white/80 flex flex-col items-center gap-2 py-[9.21px]">
        <ul className="flex flex-col items-center gap-2 py-[9.21px]">
          {NavbarItem.map(({ href, label, dropDownItem, id }, index) => (
            <motion.li
              className={cn(
                "p-2 relative text-center flex justify-center flex-col",
                pathname.split("/")[1] === id && "font-bold"
              )}
              key={label}
              initial={{ opacity: 0, x: -200 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 200 }}
              transition={{
                duration: 0.5,
                ease: "easeInOut",
                delay: index * 0.1,
              }}
              onClick={() =>
                dropDownItem &&
                setActiveDropdown({ [label]: !activeDropdown[label] })
              }
            >
              <Link href={href} className="flex text-center items-center gap-1">
                {label}
                {dropDownItem && (
                  <ChevronDownIcon
                    className={`w-4 h-4 transition-transform duration-200 ${
                      activeDropdown[label] ? "rotate-180" : ""
                    }`}
                  />
                )}
              </Link>
              <AnimatePresence>
                {dropDownItem && activeDropdown[label] && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="bg-white rounded-lg shadow-lg py-2 z-50"
                  >
                    {dropDownItem.map((item) => (
                      <Link
                        key={item.id}
                        href={item.href}
                        className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
        <div className="flex gap-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -200 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="relative"
          >
            <Button
              variant="outline"
              className="flex-items group bg-gradient-to-r border border-gradient1 gap-3 from-gradient1 to-gradient1 text-black"
              onMouseEnter={() => setIsShowLanguage(true)}
              onMouseLeave={() => setIsShowLanguage(false)}
            >
              <Image
                src="/icon_country.svg"
                alt="user"
                width={20}
                height={20}
              />
              <div className="flex-items gap-1">
                <div className="flex flex-col overflow-hidden">
                  <span>{language[0].label}</span>
                </div>
                <Image
                  className={`group-hover:rotate-180 transition-all duration-300`}
                  src="/CaretDown.svg"
                  alt="arrow"
                  width={20}
                  height={20}
                />
              </div>
            </Button>
            <AnimatePresence>
              {isShowLanguage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 min-w-[100px] z-50"
                  onMouseEnter={() => setIsShowLanguage(true)}
                  onMouseLeave={() => setIsShowLanguage(false)}
                >
                  {language.map(({ id, label, href }) => (
                    <Link
                      key={id}
                      href={href}
                      className="block px-4 py-2 hover:bg-gray-100 transition-colors"
                    >
                      {label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            transition={{ duration: 0.2 }}
          >
            <Button className="flex-items gap-3 bg-gradient2 border border-white text-black">
              <span>Trở thành khách hàng</span>
              <Image src="/upRight.svg" alt="arrow" width={22} height={22} />
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }
);

MenuMobile.displayName = "MenuMobile";

const Navbar = React.memo(() => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isShowLanguage, setIsShowLanguage] = useState(false);
  const [isOpenBg, setIsOpenBg] = useState<boolean>(false);
  const pathname = usePathname();

  const { setActive } = useNavbarStore();
  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(!isMenuOpen);
    setIsOpenBg(!isOpenBg);
  }, [isMenuOpen, isOpenBg, setIsOpenBg]);

  useEffect(() => {
    if (pathname === "/") {
      setActive("home");
    } else {
      const path = pathname.split("/").join(":");
      setActive(path);
    }
  }, [setActive, pathname]);

  return (
    <>
      {isOpenBg && (
        <div className="h-screen absolute w-screen bg-black/60 z-1"></div>
      )}
      <div className="flex-items z-[999999] text-nowrap shadow-lg justify-between lg:justify-center gap-16 bg-white rounded-lg md:rounded-5xl px-9 text-black mx-auto lg:max-w-screen-xl md:max-w-screen-md py-3 px-spacing-nav">
        <Image src="/logo.svg" alt="logo" width={100} height={100} priority />
        <MenuDesktop
          isShowLanguage={isShowLanguage}
          setIsShowLanguage={setIsShowLanguage}
          pathname={pathname}
        />
        <AnimatePresence mode="wait">
          {isMenuOpen && (
            <MenuMobile
              isShowLanguage={isShowLanguage}
              setIsShowLanguage={setIsShowLanguage}
              pathname={pathname}
            />
          )}
        </AnimatePresence>
        <Button
          className="inline-block z-20 lg:hidden hover:scale-110 transition-all duration-300"
          onClick={handleMenuToggle}
        >
          <AnimatePresence mode="wait">
            {isMenuOpen ? (
              <motion.div key="close" {...variantBase("close")}>
                <XMarkIcon className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="menu" {...variantBase("open")}>
                <Bars3Icon className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </div>
    </>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
