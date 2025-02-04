import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import ActivityList from "../ActivityList";

interface ActivityDashboardProps {
  activities: Activity[];
}
export default function ActivityDashboard({
  activities,
}: ActivityDashboardProps) {
  return (
    <Grid>
      <GridColumn width="10">
        <ActivityList activities={activities} />
      </GridColumn>
    </Grid>
  );
}
