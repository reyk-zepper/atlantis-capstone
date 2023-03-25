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

    editProject: (editProject) => {
      console.log(editProject);
      set((draft) => {
        const draftProjectArr = draft.projects.map((project) => {
          if (project.id === editProject.id) {
            return editProject;
          } else {
            return project;
          }
        });
        draft.projects = draftProjectArr;
      });
    },
  };
  return initialState;
};

const useStore = create(immer(config));

export default useStore;
