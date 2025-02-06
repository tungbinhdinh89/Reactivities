import { Menu, Container, Button } from "semantic-ui-react";

interface NavBarProps {
  openForm: () => void;
}

export default function NavBar({ openForm }: NavBarProps) {
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
          <Button onClick={openForm} positive content="Create Actitity" />
        </Menu.Item>
      </Container>
    </Menu>
  );
}
