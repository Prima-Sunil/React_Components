"use client";
import Counter from "@/app/components/UseEffect/Counter"
// import Button from "./components/Button";
// import Text from "./components/Text";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-100">
      <h1 className="text-2xl font-bold">Reusable Component</h1>
      {/* 
      <Button text="Filled Button" onClick={() => alert("Filled Button Clicked")} /> */}
      {/* <Button
        text="Outline Button"
        type="outline"
        onClick={() => alert("Outline Button Clicked")}
      />
      <Button
        text="Dotted Button"
        type="dotted"
        onClick={() => alert("Dotted Button Clicked")}
      />
      <Button
        text="right"
        type="dotted"
        icon="right"
        onClick={() => alert("Dotted Button Clicked")}
      /> */}
      {/* <Text tag="h1" >This is an H1</Text>
      <Text tag="h2" >This is an H2</Text>
      <Text tag="h3" color="red">This is an H3</Text>
      <Text tag="h4">This is an H4</Text>
      <Text tag="h5">This is an H5</Text>
      <Text tag="h6">This is an H6</Text>
      <Text tag="p">This is a paragraph.</Text>
      <Text tag="span">This is a span.</Text> */}
      <Counter />
      <h1>Hlo World!</h1>
      
    </div>
  );
}
