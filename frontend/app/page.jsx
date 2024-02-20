"use client"
import HighlightResponse from "@/components/HeighlightResponse";

export default function Home() {
  const response = `"1. Use let and const instead of var: var is a function-scoped variable, while let and const are block-scoped variables. This means that let and const variables can only be accessed within the block in which they are declared, while var variables can be accessed anywhere in the function in which they are declared.\n2. Use template literals instead of string concatenation: Template literals are a new feature in ES6 that allow you to write strings in a more concise and readable way. For example, instead of writing this:\n\n\`\`\`\nconst name = \"John\";\nconst greeting = \"Hello, \" + name + \"!\";\n\`\`\`\n\nYou can write this:\n\n\`\`\`\nconst name = \"John\";\nconst greeting = \`Hello, \${name}!\`;\n\`\`\`\n\n3. Use arrow functions instead of function expressions: Arrow functions are a new feature in ES6 that allow you to write functions in a more concise and readable way. For example, instead of writing this:\n\n\`\`\`\nconst add = function(a, b) {\n  return a + b;\n};\n\`\`\`\n\nYou can write this:\n\n\`\`\`\nconst add = (a, b) => a + b;\n\`\`\`\n\n4. Use destructuring assignment to extract properties from objects: Destructuring assignment is a new feature in ES6 that allows you to extract properties from objects in a more concise and readable way. For example, instead of writing this:\n\n\`\`\`\nconst name = object.name;\nconst age = object.age;\n\`\`\`\n\nYou can write this:\n\n\`\`\`\nconst { name, age } = object;\n\`\`\`\n\n5. Use spread syntax to create new arrays and objects: Spread syntax is a new feature in ES6 that allows you to create new arrays and objects by spreading out the elements of an existing array or object. For example, instead of writing this:\n\n\`\`\`\nconst newArray = [1, 2, 3, 4, 5];\nconst newObject = { a: 1, b: 2, c: 3 };\n\`\`\`\n\nYou can write this:\n\n\`\`\`\nconst newArray = [...[1, 2, 3, 4, 5]];\nconst newObject = { ...{ a: 1, b: 2, c: 3 } };\n\`\`\`\n\n6. Use rest parameters to collect function arguments: Rest parameters are a new feature in ES6 that allow you to collect function arguments into an array. For example, instead of writing this:\n\n\`\`\`\nfunction add(a, b, c, d, e) {\n  return a + b + c + d + e;\n}\n\`\`\`\n\nYou can write this:\n\n\`\`\`\nfunction add(...args) {\n  return args.reduce((a, b) => a + b, 0);\n}\n\`\`\`\n\n7. Use the default parameter syntax to set default values for function arguments: The default parameter syntax is a new feature in ES6 that allows you to set default values for function arguments. For example, instead of writing this:\n\n\`\`\`\nfunction add(a, b) {\n  if (typeof b === \"undefined\") {\n    b = 0;\n  }\n  return a + b;\n}\n\`\`\`\n\nYou can write this:\n\n\`\`\`\nfunction add(a, b = 0) {\n  return a + b;\n}\n\`\`\`\n\n8. Use short-circuit evaluation to avoid unnecessary computation: Short-circuit evaluation is a technique that allows you to avoid unnecessary computation by returning a value immediately if a certain condition is met. For example, instead of writing this:\n\n\`\`\`\nif (a !== null && a.b !== null) {\n  return a.b;\n}\n\`\`\`\n\nYou can write this:\n\n\`\`\`\nreturn a?.b;\n\`\`\`\n\n9. Use the for-of loop to iterate over iterables: The for-of loop is a new feature in ES6 that allows you to iterate over iterables, such as arrays, strings, and maps. For example, instead of writing this:\n\n\`\`\`\nfor (let i = 0; i < array.length; i++) {\n  console.log(array[i]);\n}\n\`\`\`\n\nYou can write this:\n\n\`\`\`\nfor (const element of array) {\n  console.log(element);\n}\n\`\`\`\n\n10. Use the spread operator to pass arguments to functions: The spread operator is a new feature in ES6 that allows you to pass arguments to functions as a single array. For example, instead of writing this:\n\n\`\`\`\nfunction add(a, b, c, d, e) {\n  console.log(a, b, c, d, e);\n}\n\nadd(1, 2, 3, 4, 5);\n\`\`\`\n\nYou can write this:\n\n\`\`\`\nfunction add(...args) {\n  console.log(...args);\n}\n\nadd(1, 2, 3, 4, 5);\n\`\`\`\n"`;

  return (
    <>
      <div className="bg-slate-800 py-5 px-10 text-white text-pretty flex justify-start items-center gap-10">
        <h3 className="text-2xl">AI PROMPTS</h3>
        <h4>Try AI now!</h4>
      </div>

      {/* prompt screen */}
      <div className="screen container mx-auto shadow-md mt-10 h-96 bg-slate-950 rounded-md overflow-y-scroll" >
        <HighlightResponse response={response} />
      </div>
      <div className="screen container mx-auto shadow-md rounded-md mt-2">
        <textarea
          name=""
          className="w-full outline-none focus:outline-none px-5 py-2 font-light rounded-full mt-2"
          id=""
          placeholder="Enter prompt"
          cols="30"
          rows="2"
        ></textarea>
      </div>
    </>
  );
}
