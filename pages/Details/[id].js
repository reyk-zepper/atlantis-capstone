import { useRouter } from "next/router";
import ProductCard from "@/components/ProductCard";
import useStore from "@/hooks/useStore";

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const [projects] = useStore((state) => [state.projects]);
  const project = projects.find((element) => element.id === id);
  return <ProductCard project={project} />;
}
