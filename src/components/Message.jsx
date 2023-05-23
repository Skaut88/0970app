const TableRow = (props) => {
  return (
    <tr>
      <th scope="row"></th>
      <td>{props.lastname}</td>
      <td>{props.name}</td>
    </tr>
  );
};

export const Messages = (props) => {
  let users = props.function();
  let usersCount = Object.keys(users).length;
  let userRow = [];
  for (let i = 0; i < usersCount; i++) {
    userRow.push(<TableRow index={i} key={i} name={users[i].name} lastname={users[i].lastname} />)
  }
  return (
    <>
      <h2 className="text-center">Мои друзья</h2>
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Фамилия</th>
              <th scope="col">Имя</th>
            </tr>
          </thead>
          <tbody>
            {userRow}
          </tbody>
        </table>
      </div>
    </>
  );
};
