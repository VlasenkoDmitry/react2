import { useState, useEffect } from "react";

interface APITodoInterface {
    userId: number
    id:number
    title:string
}


export const MyComponent = () => {
  const [count, setCount] = useState(0);
  const [toDos, setToDos] = useState<APITodoInterface[]>([]);

  const onHanler = () => {
    setCount((a) => a + 1);
  };

  //   useEffect(() => {
  //     fetch("https://jsonplaceholder.typicode.com/todos")
  //       .then((response) => response.json())
  //       .then((data) => setToDos(data));
  //   }, []);

  useEffect(() => {

        const getData = async function () {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos')
            const data = await response.json()
            setToDos(data)
        }

        getData()

  }, []);

  console.log(toDos);

  return (
    <div>
      <p>{count}</p>
      <button onClick={onHanler}>Increase count</button>
      {toDos.map((value, index) => (
        <div key={value.id}>
          <p>{value.title}</p>
          <p>userId = {value.userId}</p>
        </div>
      ))}
    </div>
  );
};
