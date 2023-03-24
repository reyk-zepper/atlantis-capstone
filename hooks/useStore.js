import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const config = (set) => {
  const initialState = {
    projects: [],
    setProjects: (payload) => {
      set((state) => {
        console.log([payload]);
        state.project = payload[0];
      });
    },
    addToProject: (newProject) => {
      set((draft) => {
        draft.projects.push(newProject);
      });
    },
  };
  return initialState;
};

const useStore = create(immer(config));

export default useStore;
