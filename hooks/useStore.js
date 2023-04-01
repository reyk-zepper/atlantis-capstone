import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const config = (set) => {
  const initialState = {
    projects: [],
    doneProjects: [],

    //active projects methods
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

    //done projects methods
  };
  return initialState;
};

const useStore = create(immer(config));

export default useStore;
