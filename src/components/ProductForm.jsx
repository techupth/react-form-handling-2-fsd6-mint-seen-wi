import { useState } from "react";

function ProductForm() {
  // const [name, SetName] = useState("");
  // const [image, SetImage] = useState("");
  // const [price, SetPrice] = useState(0);
  // const [description, SetDescription] = useState("");

  // hvae 2 solution 1. many state 2. object state

  const [form, setForm] = useState({
    name: "",
    image: "",
    price: 0,
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //   name: name,
    //   price: price,
    //   image: image,
    //   description: description,
    // };

    alert(JSON.stringify(form));
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <h1>Create Product Form</h1>
      <div className="input-container">
        <label>
          Name
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Enter name here"
            value={form.name}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, name: e.target.value }));
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Image Url
          <input
            id="image"
            name="image"
            type="text"
            placeholder="Enter image url here"
            value={form.image}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, image: e.target.value }));
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Price
          <input
            id="price"
            name="price"
            type="number"
            placeholder="Enter price here"
            value={form.price}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, price: e.target.value }));
            }}
          />
        </label>
      </div>
      <div className="input-container">
        <label>
          Description
          <textarea
            id="description"
            name="description"
            type="text"
            placeholder="Enter description here"
            value={form.description}
            onChange={(e) => {
              setForm((prev) => ({ ...prev, description: e.target.value }));
            }}
            rows={4}
            cols={30}
          />
        </label>
      </div>
      <div className="form-actions">
        <button type="submit">Create</button>
      </div>
    </form>
  );
}

export default ProductForm;
