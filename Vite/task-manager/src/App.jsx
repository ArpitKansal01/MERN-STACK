import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import ControlledInputs from "./ControlledInput";
import Navbar from "./propdrilling/Navbar";

// const task = [
//   { id: 1, title: "This is my First Task", isCompleted: true },
//   { id: 2, title: "This is my Second Task", isCompleted: false },
//   { id: 3, title: "This is my Third Task", isCompleted: false },
// ];

// const App = () => {
//   const [tasks, setTasks] = useState(task);
//   const [enteredTask, setEnteredTask] = useState("");

//   function removeTask(taskId) {
//     const newTasks = tasks.filter((task) => task.id != taskId);
//     setTasks(newTasks);
//     toast.warn("Task removed successfully!");
//   }

//   function handleChange(e) {
//     // console.log(e.target);
//     // console.log(e.target.value);
//     setEnteredTask(e.target.value);
//   }

//   function handleSubmit(e) {
//     e.preventDefault();
//     if (enteredTask === "") return;

//     const newTask = {
//       id: new Date().getTime(),
//       title: enteredTask,
//       isCompleted: false,
//     };

//     const newTasks = [...tasks, newTask];
//     setTasks(newTasks);
//     toast.success("Task added successfully!");
//     setEnteredTask("");
//   }

//   function handleComplete(taskId) {
//     const newTasks = tasks.map(function (task) {
//       // update only that task whose id matched with taskId
//       if (task.id === taskId)
//         return { ...task, isCompleted: !task.isCompleted };

//       return task;
//     });

//     setTasks(newTasks);
//   }

//   return (
//     <section>
//       <ToastContainer />
//       {/* TODO: Form Component */}
//       <div>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="i.e. complete homework"
//             value={enteredTask}
//             onChange={handleChange}
//           />
//           <button>Add task</button>
//         </form>
//       </div>

//       {/* Tasks Component */}
//       {tasks.length > 0 ? (
//         <Tasks
//           tasks={tasks}
//           removeTask={removeTask}
//           handleComplete={handleComplete}
//         />
//       ) : (
//         <h2>No tasks left</h2>
//       )}
//     </section>
//   );
// };

// export default App;

// const Tasks = ({ tasks, removeTask, handleComplete }) => {
//   return (
//     <div>
//       {/* Task Component */}
//       {tasks.map((task) => (
//         <article key={task.id}>
//           <p className={`${task.isCompleted ? "completed-task" : ""}`}>
//             {task.title}
//           </p>
//           <button
//   onClick={() => removeTask(task.id)}
//   style={{ backgroundColor: "#f44336" }}
// >
//   Remove
// </button>
// <button
//   onClick={() => handleComplete(task.id)}
//   style={{ backgroundColor: "#2196f3" }}
// >
//   Complete
// </button>
//         </article>
//       ))}
//     </div>
//   );
// };

const App = () => {
  return (
    <Navbar/>
  )
}

export default App