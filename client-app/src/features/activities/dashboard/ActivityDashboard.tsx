import { Grid, GridColumn } from "semantic-ui-react";
import ActivityList from "../ActivityList";
import ActivityDetails from "../../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/stores";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponent from "../../../layout/LoadingComponent";

export default observer(function ActivityDashboard() {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;

  useEffect(() => {
  if(activityRegistry.size === 0)  loadActivities();
  }, [loadActivities, activityRegistry.size]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading app" />;

  return (
    <Grid>
      <GridColumn width="10">
        <ActivityList />
      </GridColumn>
      <GridColumn width="6">
        {/* {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && <ActivityForm />} */}
        <h2>Activity filters</h2>
      </GridColumn>
    </Grid>
  );
});
