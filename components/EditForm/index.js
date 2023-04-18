import { v4 as uuidv4 } from "uuid";
import { useImmer } from "use-immer";
import useStore from "../../hooks/useStore";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import Timer from "../Timer";
import StyledButton from "../StyledButton";
import styled from "styled-components";

export default function EditForm({ project }) {
  const router = useRouter();
  const { id } = router.query;
  const [projectName, setProjectName] = useImmer(project.name);
  const [items, setItems] = useImmer(project.items);
  const [additionalItems, setAdditionalItems] = useImmer(project.optionalItems);
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
      items: items,
      optionalItems: additionalItems,
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

  async function handlePhotoUpload(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    const newImage = {
      id: data.public_id,
      url: data.secure_url,
      width: data.width,
      height: data.height,
      alt: `${projectName} image`,
    };
    const editProjectWithPhoto = {
      ...project,
      image: newImage,
    };
    editProject(editProjectWithPhoto);
    Swal.fire({
      icon: "success",
      title: "uploaded!",
      showConfirmButton: false,
      timer: 1500,
      position: "top",
      toast: true,
    });
    event.target.reset();
  }

  if (project === undefined) {
    return <h2> there is no project with this id: {id}</h2>;
  }

  return (
    <StyledEditPage>
      <Timer project={project} />
      <StyledForm onSubmit={handlePhotoUpload}>
        <StyledUploadInput
          aria-label="photo upload"
          type="file"
          name="imageFile"
        />
        <StyledButton variant="submit" type="submit">
          upload
        </StyledButton>
      </StyledForm>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          aria-label="project name"
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
                aria-label="additional input name"
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
                variant="delete"
                type="button"
                onClick={() => handleDeletItem(item.id)}
              >
                delete
              </StyledButton>
            </StyledDefaultItems>
          );
        })}
        <StyledButtonContainer>
          <StyledButton variant="plus" type="button" onClick={handleAddItem}>
            &#43;
          </StyledButton>
          <StyledButton variant="submit" type="submit">
            save
          </StyledButton>
        </StyledButtonContainer>
      </StyledForm>
      <StyledButton
        variant="move"
        type="button"
        onClick={() => handleMoveToDone(project.id)}
      >
        move to done
      </StyledButton>
      <StyledButton
        variant="delete"
        onClick={() => handleDeleteItem(project.id)}
        type="button"
      >
        delete
      </StyledButton>
    </StyledEditPage>
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

const StyledUploadInput = styled.input`
  width: 100%;
  display: flex;
  justify-content: space-between;
  justify-self: flex-start;
`;

const StyledEditPage = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;
