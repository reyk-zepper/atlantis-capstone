import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import useStore from "@/hooks/useStore";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [projects, doneProjects] = useStore((state) => [
    state.projects,
    state.doneProjects,
  ]);

  if (!!projects.find((element) => element.id === id) === true) {
    const project = projects.find((element) => element.id === id);
    return <ProductCard project={project} editState={"active"} />;
  } else {
    const project = doneProjects.find((element) => element.id === id);
    return <ProductCard project={project} editState={"done"} />;
  }
}
