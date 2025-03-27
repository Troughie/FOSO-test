import Image from "next/image";
import React from "react";
import Card from "./Card";
import { cardConstants } from "../constants/card";
import { useReactionStore } from "../store/reaction";
import { usePathname } from "next/navigation";
interface ReactionProps {
  title: string;
  image: string;
  id: string;
}

const reaction: ReactionProps[] = [
  {
    title: "Hữu ích",
    id: "like",
    image: "/like.svg",
  },
  {
    title: "Yêu thích",
    id: "heart",
    image: "/heart.svg",
  },
  {
    title: "Thu vi",
    id: "star-struck",
    image: "/star-struck.svg",
  },
  {
    title: "Bất ngờ",
    id: "star",
    image: "/star.svg",
  },
  {
    title: "Nham chan",
    id: "yawning",
    image: "/yawning.svg",
  },
  {
    title: "tuc gian",
    id: "angry",
    image: "/angry.svg",
  },
];

export const FooterDetail = () => {
  const { reactionCount, setReactionCount } = useReactionStore();
  const pathname = usePathname();
  const pathnameArray = pathname.split("/").pop();

  return (
    <div className="text-center w-screen  mt-[60px] text-black">
      <div className="my-12 py-12 bg-white rounded-[24px] shadow-md">
        <div className="w-full px-[100px] py-4">
          <p className="text-[20px] font-[800]">
            Bạn thấy bài viết như thế nào?
          </p>
          <span className="text-sm text-[#10805B]">
            {reactionCount
              .find((item) => item.id === pathnameArray)
              ?.reaction.reduce((acc, item) => acc + item.count, 0)}{" "}
            phản hồi
          </span>
        </div>
        <div className="container justify-center max-w-screen-xl gap-8 mx-auto flex">
          {reaction.map((item) => (
            <div
              className="flex-items group cursor-pointer flex-col"
              key={item.title}
              onClick={() => setReactionCount(pathnameArray as string, item.id)}
            >
              <Image
                src={item.image}
                alt={item.title}
                width={48}
                height={48}
                className="group-hover:scale-125 duration-300 transition-all"
              />
              <span className="text-2xl font-bold">
                {reactionCount
                  .find((item) => item.id === pathnameArray)
                  ?.reaction.find((item1) => item1.title === item.id)?.count ||
                  0}
              </span>
              <p className="text-sm text-[#10805B]">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-items flex-col ">
        <h1 className="text-4xl self-start font-[800] ">Bài viết liên quan</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 text-start gap-8 pt-[24px] mb-[60px] ">
          {cardConstants.slice(0, 3).map(({ readTime, time, title, id }) => (
            <Card
              key={title}
              readTime={readTime}
              time={time}
              title={title}
              id={id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
