import React, { useState } from "react";
import toast from "react-hot-toast";
const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addnewTodo = (newTodoTitle) => {
    const newTodo = {
      title: newTodoTitle,
      id: Math.random() * 100,
      isCompleted: false,
    };
    setTodoList([...todoList, newTodo]);
    setTodo("");
  };

  const deleteTodo = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(newTodoList);
    toast.success("Todo Deleted", {
      duration: 1200,
    });
  };

  const editTodo = (id, editedTitle) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, title: editedTitle };
      } else {
        return todo;
      }
    });
    setTodoList(newTodoList);
  };

  const completeTodo = (id, isCompleted) => {
    const newTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !isCompleted };
      } else {
        return todo;
      }
    });

    setTodoList(newTodoList);
  };

  return (
    <main className="flex items-center justify-center flex-col gap-4">
      {" "}
      {/* Add todo  */}
      <form
        className="flex items-center justify-center gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          if (todo !== "") {
            addnewTodo(todo);
            toast.success("Todo Added", {
              duration: 1200,
            });
          } else {
            toast.error("Cannot Added Empty Todo", {
              duration: 1200,
            });
          }
        }}
      >
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          autoComplete="off"
          autoFocus
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">
          ADD
        </button>
      </form>
      {/* Show todos */}
      <div className="overflow-x-auto mt-5">
        <table className="table text-center">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>Sr. No.</th>
              <th>Todo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="text-xl">
            {/* Row */}
            {todoList.map((ele, index) => {
              return (
                <tr>
                  <th>{index + 1}</th>
                  <td
                    className={
                      ele.isCompleted
                        ? "line-through decoration-red-800 text-xl decoration-[.3rem]"
                        : "text-xl"
                    }
                  >
                    {ele.title}
                  </td>
                  <td className="flex items-center justify-center gap-1">
                    <button
                      className="btn btn-outline btn-info"
                      onClick={() =>
                        editTodo(ele.id, prompt("Edit Todo", ele.title))
                      }
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-pen"
                        viewBox="0 0 16 16"
                      >
                        <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001m-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708z" />
                      </svg>
                    </button>
                    <button
                      className="btn btn-outline btn-error"
                      onClick={() => deleteTodo(ele.id)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-trash3-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
                      </svg>
                    </button>
                    <button
                      className="btn btn-outline btn-warning"
                      onClick={() => completeTodo(ele.id, ele.isCompleted)}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-check-square"
                        b
                        viewBox="0 0 16 16"
                      >
                        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                        <path d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z" />
                      </svg>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default Todo;
