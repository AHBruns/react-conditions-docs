import { RecipeGridItem } from "./RecipeGridItem";

export function Recipes() {
  return (
    <div className="p-8 space-y-8">
      <div className="prose max-w-none">
        <h1>Recipes</h1>
        <p>
          Since React Conditions is generally meant to replace some very common
          code patterns in React applications. It's worth listing some common
          recipes. On the left is a vanilla React snippet, and on the right is
          how you would do the same thing with React Conditions.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-8 prose-none">
        <div className="prose">
          <h2>Traditional React Pattern</h2>
        </div>
        <div className="prose">
          <h2>Using React Conditions</h2>
        </div>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`{condition1 && condition2 && <Component />}`}</code>
          </pre>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`<When condition1={condition1} andCondition2={condition2}>
  <Component />
</When>`}</code>
          </pre>
          <p className="leading-tight tracking-wider text-center text-gray-700">
            or if you prefer a single line option
          </p>
          <pre className="overflow-auto rounded-md">
            <code>{`<When condition1={condition1} andCondition2={condition2} show={<Component />} />`}</code>
          </pre>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`{(condition1 || condition2) && <Component />}`}</code>
          </pre>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`<When condition1={condition1} orCondition2={condition2}>
  <Component />
</When>`}</code>
          </pre>
          <p className="leading-tight tracking-wider text-center text-gray-700">
            or if you prefer a single line option
          </p>
          <pre className="overflow-auto rounded-md">
            <code>{`<When condition1={condition1} orCondition2={condition2} show={<Component />} />`}</code>
          </pre>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`{x ? <Component1 /> : <Component2 />}`}</code>
          </pre>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`<Match value={Boolean(x)}>
  <Match.With pattern={true} show={<Component1 />} />
  <Match.With pattern={false} show={<Component2 />} />
</Match>`}</code>
          </pre>
          <p className="leading-tight tracking-wider text-gray-700">
            Note: Relying on truthy/falsy values is probably not what you really
            want. I'd suggest thinking about it and writing a Match clause that
            reflects the condition you're actually trying to express.
          </p>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`{x === "abc" ? <Component1 /> : x === 1 ? <Component2 /> : <Component3 />}`}</code>
          </pre>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`<Match value={x}>
  <Match.With pattern="abc" show={<Component1 />} />
  <Match.With pattern={1} show={<Component2 />} />
  <Match.With pattern={Match._} show={<Component3 />} />
</Match>`}</code>
          </pre>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`{x === "abc" ? <Component1 /> : x === 1 ? <Component2 /> : null}`}</code>
          </pre>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`<Match value={x} nonexhaustive>
  <Match.With pattern="abc" show={<Component1 />} />
  <Match.With pattern={1} show={<Component2 />} />
</Match>`}</code>
          </pre>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`{x?.y?.z === "abc" ? <Component1 /> : <Component2 />}`}</code>
          </pre>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`<Match value={x}>
  <Match.With pattern={{ y: { z: "abc" } }} show={<Component1 />} />
  <Match.With pattern={Match._} show={<Component2 />} />
</Match>`}</code>
          </pre>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`{x?.y?.z === "abc" && someRandomGuard ? <Component1 /> : <Component2 />}`}</code>
          </pre>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`<Match value={x}>
  <Match.With pattern={{ y: { z: "abc" } }} when={someRandomGuard} show={<Component1 />} />
  <Match.With pattern={Match._} show={<Component2 />} />
</Match>`}</code>
          </pre>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`{func1(x) ? <Component1 /> : func2(x) ? <Component2 /> : <Component3 />}`}</code>
          </pre>
        </RecipeGridItem>
        <RecipeGridItem>
          <pre className="overflow-auto rounded-md">
            <code>{`<Match value={x}>
  <Match.With pattern={func1} show={<Component1 />} />
  <Match.With pattern={func2} show={<Component2 />} />
  <Match.With pattern={Match._} show={<Component3 />} />
</Match>`}</code>
          </pre>
        </RecipeGridItem>
      </div>
    </div>
  );
}
