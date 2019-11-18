// method 1, resolving thru props  promiseFn={} ... most code 45loc linesofcode

// import React from 'react';
// import Async from 'react-async';
// import './App.css';

// const loadUsers = () =>
//   fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => (res.ok ? res : Promise.reject(res)) )
//     .then(res => res.json())
//     // .then(json => console.log(json)) // react-async handles this part
//     .catch(err => console.console.error(err))

// function App() {
//   loadUsers()
//   return (
//     <div className="App">
//       <Async promiseFn={loadUsers}>
//         {
//           ({data, err, isLoading}) => {
//             console.log(data)
//             if(isLoading) return "loading 1"
//             if(err) return "something went wrong!"

//             if(data){
//               return (
//                 <div>
//                   <div className="myTitle">
//                     <h2>ReactAsync App</h2>
//                   </div>
//                   { 
//                     data.map(user => (
//                         <div key={user.username} className="myColumnContainer">
//                           <div className="myColumnPosition">
//                             <p>{user.name}</p>
//                             <p>{user.email}</p>
//                           </div>
//                         </div> 
//                       ))
//                   }
//                 </div>);
//             }
//           }
//         }
//       </Async>
//     </div>
//   );
// }



// method 2, resolving thru hooks handler useAsync, least code 29loc

// import React from 'react';
// import './App.css';
// import { useAsync } from 'react-async';

// const loadUsers = async () =>
//   await fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => (res.ok ? res : Promise.reject()) )
//     .then(res => res.json())


// function App() {
//   // react hook setting state 
//   const { data , error, isLoading } = useAsync({ promiseFn: loadUsers});
//   if(isLoading) return 'Loading 2...';
//   if(error) return 'something went wrong';
//   if(data)
//   return (
//     <div className="App">
//       <div className="myTitle">
//         <h2>React Async - Random Users</h2>
//       </div>
//         { data.map(user=> (
//           <div key={user.username} className="myColumnContainer">
//             <div className="myColumnPosition">
//               <p>{user.name}</p>
//               <p>{user.email}</p>
//             </div>
//           </div>
//         ))}
//     </div>
//   );
// }



// method3, resolving via props like method 1 but also includes jsx,  39loc
import React from 'react';
import './App.css';
import Async from 'react-async';

const loadUsers = () =>
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

function App() {
  return (
    <div className="App">
      <Async promiseFn={loadUsers}>
          <Async.Loading>Loading...</Async.Loading>
          <Async.Fulfilled>
            {data => {
              return (
                <div>
                  <div className="myTitle">
                    <h2>React Async - Random Users</h2>
                  </div>
                  {data.map(user=> (
                    <div key={user.username} className="myColumnContainer">
                      <div className="myColumnPosition">
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )
            }}
          </Async.Fulfilled>
          <Async.Rejected>
            {error => `Something went wrong: ${error.message}`}
          </Async.Rejected>
      </Async>
    </div>
  );
}


export default App;
