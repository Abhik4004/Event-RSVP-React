import { useState } from "react";
import { v4 } from "uuid";

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
  let rsvpList = tasksRSVP;

  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasks] = useState(rsvpList);
  const [showRSVP, setShowRSVP] = useState(false);

  function handleForm() {
    setShowForm((form) => !form);
  }

  function formRSVP() {
    setShowRSVP((form) => !form);
  }

  function handleEvent(task) {
    setTasks((tasks) => [...tasks, task]);
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
      <div className="heading">
        <h1 className="title">Task RSVP App</h1>
      </div>
      <div>
        <Tasks rsvpList={tasks} />
      </div>
      <div className="buttons">
        {showForm && <AddEvent newEvent={handleEvent} showForm={setShowForm} />}
        <button className="Add-Event" onClick={handleForm}>
          {showForm ? "Close" : "Add"}
        </button>
        {showRSVP && <AddRSVP showRSVP={setShowRSVP} rsvp={rsvpList} />}
        <button className="add-rsvps" onClick={formRSVP}>
          {showRSVP ? "Close" : "Add RSVP(s)"}
        </button>
      </div>
      <Footer />
    </div>
  );
}

function Tasks({ rsvpList }) {
  return (
    <div>
      {rsvpList.map((task) => (
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
      <h2>
        <i>{task.title}</i>
      </h2>
      <p className="desc">{task.description}</p>
      <span className="date">{task.date}</span>
      {showAttendees && <Attendees people={task.rsvps} />}
      <button onClick={handleAttendees}>
        {showAttendees ? "Close" : "Rsvps"}
      </button>
    </div>
  );
}

function Attendees({ people }) {
  return (
    <ul>
      {people.map((attend) => (
        <li key={attend.user}>
          {attend.user} | {attend.status}
        </li>
      ))}
    </ul>
  );
}

function AddEvent({ newEvent, showForm }) {
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState("");
  function handleForm(e) {
    e.preventDefault();
    const newItem = {
      id: v4(),
      title: eventTitle,
      description: eventDescription,
      date: eventDate,
      rsvps: [],
    };
    console.log(newItem);
    newEvent(newItem);
    setEventDate("");
    setEventDescription("");
    setEventTitle("");
    showForm(false);
  }

  return (
    <div>
      <form className="event-adder" onSubmit={handleForm}>
        <label>Event - Title : </label>
        <input
          type="text"
          value={eventTitle}
          onChange={(e) => setEventTitle(e.target.value)}
        />

        <label>Event - Description: </label>
        <input
          type="text"
          value={eventDescription}
          onChange={(e) => setEventDescription(e.target.value)}
        />

        <label>Event - Date</label>
        <input
          type="date"
          value={eventDate}
          onChange={(e) => setEventDate(e.target.value)}
        />
        <button style={{ margin: 10 }}>Submit</button>
      </form>
    </div>
  );
}

function AddRSVP({ showRSVP, rsvp }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [event, setEvent] = useState("");

  console.log(event);

  function addMembers(e) {
    e.preventDefault();
    const newUser = {
      user: name,
      status: status,
    };

    rsvp.filter((eve) =>
      eve.title === event
        ? (eve.rsvps = [...eve.rsvps, newUser])
        : console.log("Not-Done")
    );

    console.log(newUser);
    setName("");
    setStatus("");
    showRSVP(false);
  }

  return (
    <div>
      <form className="event-adder" onSubmit={addMembers}>
        <label>RSVP : </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Status : </label>
        <input
          type="text"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />

        <select
          style={{
            backgroundColor: "#B3E2A7",
            height: "20px",
            margin: ".5rem",
            borderRadius: "50px",
          }}
          value={event.title}
          onChange={(e) => setEvent(e.target.value)}
        >
          {rsvp.map((event) => (
            <option>{event.title}</option>
          ))}
        </select>

        <button style={{ margin: 10 }}>Submit</button>
      </form>
    </div>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <h3 style={{ marginTop: "35px" }}>Copyright to 🧑‍💻 @Abhik4004 - {year}</h3>
    </div>
  );
}
