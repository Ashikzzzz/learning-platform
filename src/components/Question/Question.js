import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Question = () => {
  return (
    <div>
      <Accordion className="mt-5 mx-auto w-50">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Do I need to rewrite all my class components?
          </Accordion.Header>
          <Accordion.Body>
            No. There are no plans to remove classes from React — we all need to
            keep shipping products and can't afford rewrites. We recommend
            trying Hooks in new code.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            How much of my React knowledge stays relevant?
          </Accordion.Header>
          <Accordion.Body>
            Hooks are a more direct way to use the React features you already
            know — such as state, lifecycle, context, and refs. They don’t
            fundamentally change how React works, and your knowledge of
            components, props, and top-down data flow is just as relevant. Hooks
            do have a learning curve of their own. If there’s something missing
            in this documentation, raise an issue and we’ll try to help.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Should I use Hooks, classes, or a mix of both?
          </Accordion.Header>
          <Accordion.Body>
            When you’re ready, we’d encourage you to start trying Hooks in new
            components you write. Make sure everyone on your team is on board
            with using them and familiar with this documentation. We don’t
            recommend rewriting your existing classes to Hooks unless you
            planned to rewrite them anyway (e.g. to fix bugs). You can’t use
            Hooks inside a class component, but you can definitely mix classes
            and function components with Hooks in a single tree. Whether a
            component is a class or a function that uses Hooks is an
            implementation detail of that component. In the longer term, we
            expect Hooks to be the primary way people write React components.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How to create expensive objects lazily?
          </Accordion.Header>
          <Accordion.Body>
            useMemo lets you memoize an expensive calculation if the
            dependencies are the same. However, it only serves as a hint, and
            doesn’t guarantee the computation won’t re-run. But sometimes you
            need to be sure an object is only created once.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            How does React associate Hook calls with components?
          </Accordion.Header>
          <Accordion.Body>
            React keeps track of the currently rendering component. Thanks to
            the Rules of Hooks, we know that Hooks are only called from React
            components (or custom Hooks — which are also only called from React
            components). There is an internal list of “memory cells” associated
            with each component. They’re just JavaScript objects where we can
            put some data. When you call a Hook like useState(), it reads the
            current cell (or initializes it during the first render), and then
            moves the pointer to the next one. This is how multiple useState()
            calls each get independent local state.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Question;
