import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import ActivityList from "../ActivityList";
import ActivityDetails from "../../details/ActivituDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
}
export default function ActivityDashboard({activities}: Props) {
  return (
    <Grid>
      <GridColumn width="10">
        <ActivityList activities={activities} />
      </GridColumn>
      <GridColumn width="6">
        <ActivityDetails activity={activities[0]}/>
        <ActivityForm/>
      </GridColumn>
    </Grid>
  );
}
