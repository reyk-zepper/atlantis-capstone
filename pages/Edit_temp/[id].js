import { useRouter } from "next/router";
import useStore from "@/hooks/useStore";
import EditForm from "@/components/EditForm";

export default function EditPage() {
  const router = useRouter();
  const { isReady } = router;
  const { id } = router.query;
  const [projects] = useStore((state) => [state.projects]);
  const project = projects.find((project) => project.id === id);

  if (!isReady || id === undefined) {
    return <h2>loading...</h2>;
  } else {
    return <EditForm project={project} />;
  }
}
