import { v4 as uuidv4 } from "uuid";
import { useImmer } from "use-immer";
import { partList2 } from "../../lib/initialValues";
import useStore from "../../hooks/useStore";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import styled from "styled-components";
import StyledButton from "../StyledButton";

export default function Form() {
  const router = useRouter();
  const [items, setItems] = useImmer(partList2);
  const [additionalItems, setAdditionalItems] = useImmer([]);
  const [addProject] = useStore((state) => [state.addProject]);
  const [projectName, setProjectName] = useImmer("");

  const handleAddItem = () => {
    setAdditionalItems([
      ...additionalItems,
      { value: "", name: "", price: "", id: uuidv4() },
    ]);
  };

  const handleDeletItem = (inputID) => {
    setAdditionalItems(
      additionalItems.filter((element) => element.id !== inputID)
    );
  };

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

  const handleProjectNameChange = (event) => {
    setProjectName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    //create new project-object
    const project = {
      name: event.target.projectname.value,
      items: items,
      optionalItems: additionalItems,
      id: uuidv4(),
      workingTime: "0",
      creationDate: new Date().toLocaleDateString("de-DE", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      }),
    };

    const resetItems = partList2.map((item) => {
      return { ...item, price: "", value: "" };
    });

    //add new project to list
    // reset form

    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success").then(
          router.push("/active"),
          addProject(project),
          setItems(resetItems),
          setProjectName(""),
          event.target.reset()
        );
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          aria-label="projectname"
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
            <StyledDefaultItems key={item.id}>
              <StyledInput
                aria-label={item.name}
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

              <StyledInput
                aria-label={`${item.name}price`}
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
            </StyledDefaultItems>
          );
        })}
        {additionalItems.map((item, index) => {
          return (
            <StyledDefaultItems key={item.id}>
              <StyledInput
                aria-label="additional item label"
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

              <StyledInput
                aria-label={item.name}
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

              <StyledInput
                aria-label={`${item.name}price`}
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
              <StyledButton
                type="button"
                onClick={() => handleDeletItem(item.id)}
                variant="delete"
              >
                delete
              </StyledButton>
            </StyledDefaultItems>
          );
        })}
        <StyledButtonContainer>
          <StyledButton type="button" onClick={handleAddItem} variant="plus">
            &#43;
          </StyledButton>
          <StyledButton type="submit" variant="submit">
            save
          </StyledButton>
        </StyledButtonContainer>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 0.5rem;
`;

const StyledDefaultItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;
const StyledInput = styled.input`
  height: 3rem;
  width: 100%;
`;
const StyledButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
