import "./App.css";
import Menu from "./Menu/Menu";
import Table from "./Table/Table";
import { menuData } from "./menuData";
import { useState, useEffect } from "react";

import { UserInfoInterface } from "./Interfaces/UserInfoInterface";

import {MyComponent} from './123'

function App() {  

// type GenericIdentityFn = <UserInfoInterface[]>(UserInfoInterface[]) => ([UserInfoInterface[],(UserInfoInterface[])=>void])


// function identity<Type>(arg: Type): Type {
//   return arg;
// }
 
// let myIdentity: GenericIdentityFn = identity;

// // Type '{ <S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>]; <S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>]; }' must have a '[Symbol.iterator]()' method that returns an iterator.ts(2488)


//   // const myState: <UserInfoInterface>(UserInfoInterface[])
//   const myState1 : <UserInfoInterface[]>(initialState: UserInfoInterface[] | (() => UserInfoInterface[])): [UserInfoInterface[], React.Dispatch<React.SetStateAction<UserInfoInterface[]>>] = useState
//   const myState: (UserInfoInterface[]) => ([UserInfoInterface[],(UserInfoInterface[])=>void]) = useState

//   let myIdentity: <UserInfoInterface[]>(UserInfoInterface[]) => [UserInfoInterface[],(UserInfoInterface[])=>void] = useState



//   function identity<Type>(arg: Type): Type {
//     return arg;
//   }

  // let myIdentity1: <Input>(arg: Input) => Input = identity;



function identity<Type>(arg: Type): Type {
  return arg;
}

async function getDataFromServer<Type>(arg:string) : Promise<Type[]> {
  const responce = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const jsonResponce: Type[] = await responce.json();
  return jsonResponce
}


  const [userInfo, setUserInfo] = useState<UserInfoInterface[]>([]);

  useEffect(() => {
    async function getData() {
      try {
        // const responce = await fetch(
        //   "https://jsonplaceholder.typicode.com/users"
        // );
        // const jsonResponce: UserInfoInterface[] = await responce.json();
        const promise = await getDataFromServer<UserInfoInterface>('https://jsonplaceholder.typicode.com/users')
        setUserInfo(promise);
      } catch (error) {
        console.log(error);
      }
    }

    getData();
  }, []);

  return (
    <>
      <main className="main-container grid-container">
        <div className="side-block-container">
          <Menu tabs={menuData} />
        </div>
        <div className="main-block-container">
          <div className="main-block">
            <h3>Hello Evano 👋🏼,</h3>
            <Table usersInfo={userInfo} />
            <MyComponent />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
