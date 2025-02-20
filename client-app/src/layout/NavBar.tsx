import { Menu, Container, Button } from "semantic-ui-react";
import { useStore } from "../app/stores/stores";

export default function NavBar() {
  const { activityStore } = useStore();

  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header>
          <img
            src="/assets/logo.png"
            alt="logo"
            style={{ marginRight: "10px" }}
          />
          Reactivities
        </Menu.Item>
        <Menu.Item name="Activities" />
        <Menu.Item>
          <Button
            onClick={() => {
              activityStore.openForm();
            }}
            positive
            content="Create Actitity"
          />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
