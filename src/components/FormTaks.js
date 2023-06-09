import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
export const FormTaks = ({ tasks, setTask }) => {
  const [values, reset, handleInputChange] = useForm({});
  const [isSended, setIsSended] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values !== undefined && values !== "") {
      setIsSended(true);
      setTask([
        ...tasks,
        {
          id: Math.floor((1 + Math.random()) * 0x10000),
          taskDescription: values.description,
          status: 1,
        },
      ]);

      setTimeout(() => {
        reset();
        setIsSended(false);
      }, 1000);
    }
  };

  return (
    <div className="form-task">
      <h1 className="">Kanban Board</h1>

      <form onSubmit={handleSubmit}>
        <input
          name="description"
          className="taks-description"
          rows="10"
          cols="50"
          value={values.description ? values.description : ""}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-primary btn-block"
          disabled={isSended}
        >
          + Agregar
        </button>
      </form>
      <br />
    </div>
  );
};
