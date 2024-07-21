import { useState } from "react";

const tasksRSVP = [
  {
    id: 1,
    title: "Team Meeting",
    description: "Monthly team meeting to discuss project updates and goals.",
    date: "2024-08-01",
    rsvps: [
      { user: "Alice", status: "Going" },
      { user: "Bob", status: "Not Going" },
      { user: "Charlie", status: "Pending" },
    ],
  },
  {
    id: 2,
    title: "Project Kickoff",
    description: "Kickoff meeting for the new project and task assignment.",
    date: "2024-08-10",
    rsvps: [
      { user: "Alice", status: "Going" },
      { user: "David", status: "Going" },
      { user: "Eve", status: "Pending" },
    ],
  },
  {
    id: 3,
    title: "Code Review",
    description: "Weekly code review session to ensure code quality .",
    date: "2024-08-15",
    rsvps: [
      { user: "Charlie", status: "Going" },
      { user: "Bob", status: "Pending" },
      { user: "Eve", status: "Not Going" },
    ],
  },
  {
    id: 4,
    title: "Sprint Planning",
    description: "meeting to define tasks and priorities for the next sprint.",
    date: "2024-08-20",
    rsvps: [
      { user: "Alice", status: "Not Going" },
      { user: "David", status: "Going" },
      { user: "Charlie", status: "Pending" },
    ],
  },
];

export default function App() {
  const [showForm, setShowForm] = useState(false);
  function handleForm() {
    setShowForm((form) => !form);
    console.log(showForm);
  }
  return (
    <div
      className="container"
      style={{
        backgroundColor: "#BEC6A0",
        height: "100%",
        margin: 0,
        padding: 0,
      }}
    >
      <h1 className="title">Task RSVP App</h1>
      <div>
        <Tasks />
      </div>
      {showForm && <AddEvent />}
      <button className="Add-Event" onClick={handleForm}>
        {showForm ? "Close" : "Add"}
      </button>
    </div>
  );
}

function Tasks() {
  return (
    <div>
      {tasksRSVP.map((task) => (
        <RSVP task={task} key={task.id} />
      ))}
    </div>
  );
}

function RSVP({ task }) {
  const [showAttendees, setShowAttendees] = useState(false);
  function handleAttendees() {
    console.log(showAttendees);
    setShowAttendees(!showAttendees);
  }
  return (
    <div className="rsvp">
      <span>
        <h2>
          <i>{task.title}</i>
        </h2>
        <p className="desc">{task.description}</p>
        <span className="date">{task.date}</span>
        {showAttendees && <Attendees people={task.rsvps} />}
      </span>
      <button onClick={handleAttendees}>
        {showAttendees ? "Close" : "Rsvps"}
      </button>
    </div>
  );
}

function Attendees({ people }) {
  return (
    <div>
      {people.map((attend) => (
        <li key={attend.user}>
          {attend.user} | {attend.status}
        </li>
      ))}
    </div>
  );
}

function AddEvent() {
  return (
    <div>
      <form className="event-adder">
        <label>Event - Title : </label>
        <input type="text" />

        <label>Event - description: </label>
        <input type="text" />

        <label>Event - Date</label>
        <input type="date" />
        <button style={{ margin: 10 }}>Submit</button>
      </form>
    </div>
  );
}
