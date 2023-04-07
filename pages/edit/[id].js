import { useRouter } from "next/router";
import useStore from "@/hooks/useStore";
import EditForm from "@/components/EditForm";
import { useEffect, useState } from "react";
import Timer from "@/components/Timer";

export default function EditPage() {
  const router = useRouter();
  const [projects] = useStore((state) => [state.projects]);
  const [project, setProject] = useState(" ");

  useEffect(() => {
    if (router.isReady) {
      setProject(projects.find((project) => project.id === router.query.id));
    }
  }, [projects, router.isReady, router.query.id]);

  if (
    projects.find((project) => project.id === router.query.id) === undefined
  ) {
    return (
      <>
        <h2>no project found with this id:</h2>
        <p>{router.query.id}</p>
      </>
    );
  }

  if (project === " " || project === undefined) {
    return <h2>loading...</h2>;
  } else {
    return (
      <>
        <Timer />
        <EditForm project={project} />
      </>
    );
  }
}
