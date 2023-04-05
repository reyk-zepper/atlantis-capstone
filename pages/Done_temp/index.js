import ProjectCards from "../../components/ProjectCards";
import useStore from "../../hooks/useStore";

export default function DonePage() {
  const [doneProjects] = useStore((state) => [state.doneProjects]);
  return (
    <>
      <h2>Done Projects</h2>
      <ProjectCards projects={doneProjects} />
    </>
  );
}
