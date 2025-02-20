import { Button, Item, Label, Segment } from "semantic-ui-react";
import { SyntheticEvent, useState } from "react";
import { useStore } from "../../app/stores/stores";
import { observer } from "mobx-react-lite";

export default observer(function ActivityList() {
  const [target, setTarget] = useState<string>("");
  const { activityStore } = useStore();
  const { selectActivity, deleteActivity, loading, activitiesByDate } =
    activityStore;

  // SyntheticEvent là sự kiện tổng hợp của React, giúp tối ưu hiệu suất và quản lý bộ nhớ tốt hơn.
  function handleDeleteActivity(
    e: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city} , {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button
                  onClick={() => selectActivity(activity.id)}
                  floated="right"
                  content="View"
                  color="blue"
                />
                <Button
                  name={activity.id}
                  loading={loading && target == activity.id}
                  onClick={(e) => handleDeleteActivity(e, activity.id)}
                  floated="right"
                  content="Delete"
                  color="red"
                />
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
});
