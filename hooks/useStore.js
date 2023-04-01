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
    moveToDone: (id) => {
      set((draft) => {
        const tempProject = draft.projects.find((project) => project.id === id);
        draft.doneProjects.push(tempProject);
        draft.projects = draft.projects.filter((project) => project.id !== id);
      });
    },

    moveToActive: (id) => {
      set((draft) => {
        const tempProject = draft.doneProjects.find(
          (project) => project.id === id
        );
        draft.projects.push(tempProject);
        draft.doneProjects = draft.doneProjects.filter(
          (project) => project.id !== id
        );
      });
    },
  };
  return initialState;
};

const useStore = create(immer(config));

export default useStore;
