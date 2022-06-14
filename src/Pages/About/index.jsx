import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <Button bg="blue.400">
          <div>test</div>
        </Button>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
};

export default About;
