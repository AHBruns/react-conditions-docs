import { Link } from "react-router-dom";
import { RecipeGridItem } from "../Recipes/RecipeGridItem";

export function GettingStarted() {
  return (
    <div className="p-8 space-y-4">
      <div className="prose max-w-none">
        <h1>Getting Started</h1>
        <h2>Installation</h2>
        <p>
          React Conditions can be installed via the following commands (assuming
          you have installed the respective package managers). React Conditions
          does have a single peer dependency of React {">="} 16. Earlier
          versions will likely still work, but ymmv.
        </p>
        <div className="grid grid-cols-3 gap-4">
          <div className="space-y-1">
            <label>PNPM</label>
            <pre>
              <code className="language-bash">{`pnpm i @alex-bruns/react-conditions`}</code>
            </pre>
          </div>
          <div className="space-y-1">
            <label>NPM</label>
            <pre>
              <code className="language-bash">{`npm i @alex-bruns/react-conditions`}</code>
            </pre>
          </div>
          <div className="space-y-1">
            <label>Yarn</label>
            <pre>
              <code className="language-bash">{`yarn add @alex-bruns/react-conditions`}</code>
            </pre>
          </div>
        </div>
        <h2>Imports</h2>
        <p>
          You can either import React Conditions components individually via
          named imports:
        </p>
        <pre>
          <code className="language-jsx">{`import { When, Match } from "@alex-bruns/react-conditions"
...
<When ... />
...
<Match ... />`}</code>
        </pre>
        <p>or together via a default import:</p>
        <pre>
          <code className="language-jsx">{`import Conds from "@alex-bruns/react-conditions"
...
<Conds.When ... />
...
<Conds.Match ... />`}</code>
        </pre>
        <h2>Overview</h2>
        <p>React Conditions exports 2 components:</p>
        <pre>
          <code>{`<Match />`}</code>
        </pre>
        <p>and</p>
        <pre>
          <code>{`<When />`}</code>
        </pre>
        <p>
          Match is used for pattern matching. You can learn about its public API{" "}
          <Link to="/components/match">here</Link>. It's a very powerful and
          flexible component. You'll often reach for it in place of inline
          ternaries, object look-ups, and IIFEs containing switch statements.
          However, there's plenty more use-cases as well. Match also provides a
          number of advanced wildcard symbols which you can learn more about{" "}
          <Link to="/components/match#wildcards">here</Link>.
        </p>
        <p>
          When is used for rendering based on compound boolean expresions. It's
          often used in place of the following pattern:
        </p>
        <pre>
          <code>{`{x && y && z && <Component />}`}</code>
        </pre>
        <p>
          When actually exposes two distinct APIs. The first is the english API
          which effectively lets you write your conditions as a sequence of
          props whose names can be combined to make a parseable boolean
          expression. You can learn more about the english API{" "}
          <Link to="/components/when#english-api">here</Link>.
        </p>
        <p>
          The second is the object API. This is a more traditional interface
          which allows you to pass, via an expr prop, an object which represents
          an AST of boolean expressions to be evaluated. You can learn more
          about the object API{" "}
          <Link to="/components/when#object-api">here</Link>.
        </p>
        <p>
          They are mutually exclusive. That is, a given When element may only
          use one API at a time.
        </p>
        <h2>What's next?</h2>
        <p>
          Want to see some common vanilla React patterns rewritten using React
          Conditions? <Link to="/recipes">Check out these recipes</Link>. If
          you'd just like to learn about React Conditions's public APIs, you can
          find Match's <Link to="/components/match">here</Link>, and the When's{" "}
          <Link to="/components/when">here</Link>. Finally, if you'd like to
          help make React Conditions even better please reach out to me on
          GitHub or Twitter or like, send me a messenger Pigeon. IDK, you do
          you.
        </p>
      </div>
    </div>
  );
}
