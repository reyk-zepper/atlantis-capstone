import { v4 as uuidv4 } from "uuid";
import { useImmer } from "use-immer";
import { partList } from "../../lib/initialValues";
import useStore from "../../hooks/useStore";
import Swal from "sweetalert2";

export default function Form() {
  const [items, setItems] = useImmer(partList);
  const [addProject] = useStore((state) => [state.addProject]);
  const [projectName, setProjectName] = useImmer("");

  const handleAddItem = () => {
    setItems([...items, { value: "", name: "", price: "", id: uuidv4() }]);
  };

  const handleItemChange = (index, field, value) => {
    setItems((draft) => {
      draft[index][field] = value;
    });
  };

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //create new project-object
    const project = {
      name: event.target.projectname.value,
      items: items,
      id: uuidv4(),
    };

    const resetItems = partList.map((item) => {
      return { ...item, price: "", value: "" };
    });

    //add new project to list
    addProject(project);

    // reset form
    setItems(resetItems);

    setProjectName("");
    Swal.fire("Good job!", "You saved a new project!", "success");
    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          required
          max={25}
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
                max={60}
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

        <button type="button" onClick={handleAddItem}>
          ✚
        </button>
        <button type="submit">save</button>
      </form>
    </>
  );
}
