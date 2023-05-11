import React from "react";

export const Item = ({
  id,
  boardname,
  item,
  tasks,
  setTasks,
  manageStateColumn,
}) => {
  const { taskDescription } = item;
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("task_id", target.id);
  };
  const dragOver = (e) => {
    e.stopPropagation();
  };
  const deleteTask = (e) => {
    e.preventDefault();
    setTasks(tasks.filter((el) => el.id !== item.id));
  };
  const handleStatusTask = (task_id, status) => {
    manageStateColumn({ task_id, status });
  };
  return (
    <div
      id={id}
      className="row"
      draggable="true"
      onDragStart={dragStart}
      onDragOver={dragOver}
    >
      <div className="task-item">
        <h2 className="task-title">{taskDescription}</h2>
        <div className="task-actions">
          {boardname === "sinrealizar" && (
            <>
              <button
                className="btn btn-primary"
                onClick={(e) => handleStatusTask(id, 2)}
              >
                En proceso
              </button>
              <button
                className="btn btn-primary"
                onClick={(e) => handleStatusTask(id, 3)}
              >
                Finalizado
              </button>
            </>
          )}
          {boardname === "enproceso" && (
            <>
              <button
                className="btn btn-primary"
                onClick={(e) => handleStatusTask(id, 1)}
              >
                Sin realizar
              </button>
              <button
                className="btn btn-primary"
                onClick={(e) => handleStatusTask(id, 3)}
              >
                Finalizado
              </button>
            </>
          )}
          {boardname === "finalizado" && (
            <>
              <button
                className="btn btn-primary"
                onClick={(e) => handleStatusTask(id, 2)}
              >
                En proceso
              </button>
              <button
                className="btn btn-primary"
                onClick={(e) => handleStatusTask(id, 1)}
              >
                Sin finalizar
              </button>
            </>
          )}
          <img
            className="btn-delete"
            onClick={deleteTask}
            src="https://cdn-icons-png.flaticon.com/512/7666/7666109.png"
          ></img>
        </div>
      </div>
    </div>
  );
};
