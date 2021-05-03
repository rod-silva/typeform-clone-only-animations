import { FirstAdnSecond } from "./components/FirstAndSecond";
import { Header } from "./components/Header";
import { Main, Section, Sticky } from "./styles";

export default function App() {
  return (
    <>
      <Main
        style={{
          height: "1610vh",
        }}
      >
        <Header />
        <Section style={{ height: "72.7%" }}>
          <FirstAdnSecond />
        </Section>

        <Section style={{ height: "9.7%" }}>
          <Sticky className="third" />
        </Section>
        <Section style={{ height: "10.1%" }}>
          <Sticky className="fourth" />
        </Section>
      </Main>
    </>
  );
}
