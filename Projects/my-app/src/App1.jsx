

const ListItem = (props) => {
  return (
    <li style={{marginBottom: '8px', listStyleType: 'none', display: 'flex', alignItems: 'center'}}>
      <input type="checkbox"/>
      <span>Please Check it {props.text}</span>
      <button style={{marginLeft: '20px'}}>Delete</button>
    </li>
  )
}

const TaskLists = [
  {
    id: 0,
    text: '0',
    checked: false,
  },
  {
    id: 1,
    text: '1',
    checked: false,
  },
  {
    id: 2,
    text: '2',
    checked: false,
  },
  {
    id: 3,
    text: '3',
    checked: false,
  },
  {
    id: 4,
    text: '5',
    checked: false,
  },
  {
    id: 5,
    text: '5',
    checked: false,
  },
  {
    id: 6,
    text: '6',
    checked: false,
  },
  {
    id: 7,
    text: '7',
    checked: false,
  },
  {
    id: 8,
    text: '8',
    checked: false,
  },
  {
    id: 9,
    text: '9',
    checked: false,
  },
]

// const TaskList = TaskLists.map((item) => {
//   const li = document.createElement('li');
//   li.innerHTML = item.text;
//   return li;
// });
// console.log(TaskList);

function App(){
  return(
    <div>
      <ul>
        {TaskLists.map(item => <ListItem text={item.text}/>)}
      </ul>
    </div>
  )
}
export default App;