import { v4 as uuidv4 } from "uuid";
import { useImmer } from "use-immer";
import useStore from "../../hooks/useStore";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Timer from "../Timer";

export default function EditForm({ project }) {
  const router = useRouter();
  const { id } = router.query;
  const [projectName, setProjectName] = useImmer(project.name);
  const [items, setItems] = useImmer(project.items);
  const [additionalItems, setAdditionalItems] = useImmer([]);
  const [editProject, deleteProject, moveToDone] = useStore((state) => [
    state.editProject,
    state.deleteProject,
    state.moveToDone,
  ]);

  function handleSubmit(event) {
    event.preventDefault();

    const editedProject = {
      ...project,
      name: event.target.projectname.value,
      items: [...items, ...additionalItems],
    };
    editProject(editedProject);

    let timerInterval;

    Swal.fire({
      title: "Redirecting back to active projects!",
      html: "I will redirect in <b></b> milliseconds.",
      timer: 1500,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      if (result.dismiss === Swal.DismissReason.timer) {
        router.back();
      }
    });
  }
  //add a new item
  const handleAddItem = () => {
    setAdditionalItems([
      ...additionalItems,
      { value: "", name: "", price: "", id: uuidv4() },
    ]);
  };

  // values change
  const handleItemChange = (index, field, value) => {
    setItems((draft) => {
      draft[index][field] = value;
    });
  };

  const handleAdditionalItemChange = (index, field, value) => {
    setAdditionalItems((draft) => {
      draft[index][field] = value;
    });
  };

  //change project-name
  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProject(id);
        router.push("/active");
      }
    });
  };

  const handleMoveToDone = (id) => {
    router.push("/done");
    moveToDone(id);
  };

  if (project === undefined) {
    return <h2> there is no project with this id: {id}</h2>;
  }

  return (
    <>
      <Timer project={project} />
      <form onSubmit={handleSubmit}>
        <input
          required
          maxLength={25}
          type="text"
          name="projectname"
          placeholder="project name"
          value={projectName}
          onChange={handleProjectNameChange}
        />
        {items.map((item, index) => {
          return (
            <div key={item.id}>
              <input
                required
                maxLength={60}
                name={item.name}
                type="text"
                placeholder={item.name}
                value={item.value}
                onChange={(event) =>
                  handleItemChange(index, "value", event.target.value)
                }
              />

              <input
                required
                step={0.01}
                type="number"
                min={0}
                max={10000}
                name={`${item.name}price`}
                value={item.price}
                placeholder={0}
                onChange={(event) =>
                  handleItemChange(index, "price", event.target.value)
                }
              />
            </div>
          );
        })}
        {additionalItems.map((item, index) => {
          return (
            <div key={item.id}>
              <input
                required
                maxLength={60}
                name={item.name}
                type="text"
                placeholder={"Label"}
                value={item.name}
                onChange={(event) =>
                  handleAdditionalItemChange(index, "name", event.target.value)
                }
              />

              <input
                required
                maxLength={60}
                name={item.name}
                type="text"
                placeholder={"Additional"}
                value={item.value}
                onChange={(event) =>
                  handleAdditionalItemChange(index, "value", event.target.value)
                }
              />

              <input
                required
                step={0.01}
                type="number"
                min={0}
                max={10000}
                name={`${item.name}price`}
                value={item.price}
                placeholder={0}
                onChange={(event) =>
                  handleAdditionalItemChange(index, "price", event.target.value)
                }
              />
            </div>
          );
        })}

        <button type="button" onClick={handleAddItem}>
          ✚
        </button>
        <button type="submit">save</button>
      </form>
      <button type="button" onClick={() => handleMoveToDone(project.id)}>
        move to done
      </button>
      <button onClick={() => handleDeleteItem(project.id)} type="button">
        delete
      </button>
    </>
  );
}
