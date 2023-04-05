import ProjectCards from "../../components/ProjectCards";
import useStore from "../../hooks/useStore";

export default function ActivePage() {
  const [projects] = useStore((state) => [state.projects]);
  return (
    <>
      <h2>Active Projects</h2>
      <ProjectCards projects={projects} />
    </>
  );
}
