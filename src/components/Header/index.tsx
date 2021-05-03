import { useTransform, useViewportScroll } from "framer-motion";
import { Container } from "./styles";

export const Header: React.FC = () => {
  const { scrollYProgress } = useViewportScroll();
  const headerY = useTransform(scrollYProgress, [0.1, 0.198], ["0%", "-100%"]);
  return (
    <Container
      style={{
        y: headerY,
      }}
    />
  );
};
