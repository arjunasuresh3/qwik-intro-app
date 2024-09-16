import { component$ } from '@builder.io/qwik';


export default component$(() => {
  return (
    <div>
      Hello world!!
      <Arjun></Arjun>
      <button onClick$={(evt) => {
        console.log("asdaasd", evt);
      }}>click</button>
    </div>
  );
});

export const Arjun = component$(() => {
  return <div>bla</div>;
})