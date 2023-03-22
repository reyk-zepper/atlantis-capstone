export default function EditForm({ project }) {
  return (
    <form>
      {project.items.map((item) => {
        return (
          <div key={item.id}>
            <input
              name={item.name}
              type="text"
              placeholder={item.name}
              defaultValue={item.value}
            />

            <input
              type="number"
              name={`${item.name}price`}
              defaultValue={item.price}
            />
          </div>
        );
      })}
      <button type="submit">submit changes</button>
    </form>
  );
}
