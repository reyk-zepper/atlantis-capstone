import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const config = (set) => {
  const initialState = {
    projects: [],
    addProject: (newProject) => {
      set((draft) => {
        draft.projects.push(newProject);
      });
    },
    deleteProject: (id) => {
      set((draft) => {
        draft.projects = draft.projects.filter((project) => project.id !== id);
      });
    },
  };
  return initialState;
};

const useStore = create(immer(config));

export default useStore;
