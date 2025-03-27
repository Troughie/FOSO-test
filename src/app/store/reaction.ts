import { create } from "zustand";
import { persist } from "zustand/middleware";

interface Reaction {
  title: string;
  count: number;
}

const baseReaction: Reaction[] = [
  {
    title: "like",
    count: 0,
  },
  {
    title: "heart",
    count: 0,
  },
  {
    title: "star-struck",
    count: 0,
  },
  {
    title: "star",
    count: 0,
  },
  {
    title: "yawning",
    count: 0,
  },
  {
    title: "angry",
    count: 0,
  },
];

interface ReactionDetail {
  id: string;
  reaction: Reaction[];
}

interface ReactionStore {
  reactionCount: ReactionDetail[];
  setReactionCount: (blogId: string, reactionTitle: string) => void;
}

export const useReactionStore = create<ReactionStore>()(
  persist(
    (set) => ({
      reactionCount: [],
      setReactionCount: (blogId: string, reactionTitle: string) =>
        set((state) => {
          const existingBlog = state.reactionCount.find(
            (item) => item.id === blogId
          );

          if (!existingBlog) {
            return {
              reactionCount: [
                ...state.reactionCount,
                {
                  id: blogId,
                  reaction: baseReaction.map((r) =>
                    r.title === reactionTitle ? { ...r, count: 1 } : r
                  ),
                },
              ],
            };
          }

          return {
            reactionCount: state.reactionCount.map((item) => {
              if (item.id === blogId) {
                return {
                  ...item,
                  reaction: item.reaction.map((r) =>
                    r.title === reactionTitle ? { ...r, count: r.count + 1 } : r
                  ),
                };
              }
              return item;
            }),
          };
        }),
    }),
    {
      name: "reaction-storage", // unique name for localStorage key
    }
  )
);
