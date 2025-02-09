import { useEffect, useState } from "react";
import "./styles.css";
import { Container } from "semantic-ui-react";
import { Activity } from "../models/activity";
import NavBar from "./NavBar";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";
import agent from "../app/api/agent";

function App() {
  const [activities, SetActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState<boolean>(false);

  useEffect(() => {
    agent.Activites.list().then((reposnse) => {
      let activties: Activity[] = [];
      reposnse.forEach((activity) => {
        activity.date = activity.date.split("T")[0];
      });
      SetActivities(reposnse);
    });
  }, []);

  function handleSelectActivity(id: string) {
    setSelectedActivity(activities.find((x) => x.id === id));
  }

  function handleCancelSelectActivity() {
    setSelectedActivity(undefined);
  }

  function hanldeFormOpen(id?: string) {
    if (id) {
      handleSelectActivity(id);
    } else {
      handleCancelSelectActivity();
    }
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }

  function handleCreateOrUpdateActivity(activity: Activity) {
    if (activity.id) {
      SetActivities([
        ...activities.filter((x) => x.id !== activity.id),
        activity,
      ]);
    } else {
      SetActivities([...activities, { ...activity, id: uuid() }]);
    }
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    SetActivities([...activities.filter((x) => x.id !== id)]);
  }

  return (
    <>
      <NavBar openForm={hanldeFormOpen} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectActivity}
          cancelSelectActivity={handleCancelSelectActivity}
          editMode={editMode}
          openForm={hanldeFormOpen}
          closeForm={handleFormClose}
          createOrUpdate={handleCreateOrUpdateActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </>
  );
}

export default App;
