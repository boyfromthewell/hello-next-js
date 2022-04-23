import { Header } from "semantic-ui-react";
import Gnb from "./Gnb";

export default function Top() {
  return (
    <div>
      <div style={{ display: "flex", paddingTop: 20 }}>
        <div style={{ flex: "100px 0 0" }}>
          <img
            src="/images/profile.jpg"
            alt=""
            style={{ display: "block", width: 100 }}
          />
        </div>
        <Header as="h1">안녕하세요</Header>
      </div>
      <Gnb />
    </div>
  );
}
