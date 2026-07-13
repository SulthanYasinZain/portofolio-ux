import { useParams } from "react-router";
import Bibo from "./pages/bibo";
import UpButton from "./components/up-button";

const projects = {
  bibo: Bibo,
};

export default function Projects() {
  const { id } = useParams();

  const Project = id ? projects[id as keyof typeof projects] : null;

  if (!Project) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <h1>404 · Project not found</h1>
      </div>
    );
  }

  return (
    <>
      <Project />
      <UpButton />
    </>
  );
}
