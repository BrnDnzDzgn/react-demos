const ListEx = () => {
  const UserInfo = [
    {
      name: "John",
      surname: "Doe",
      age: 12,
    },
    {
      name: "Angela",
      surname: "Merkel",
      age: 21,
    },
  ];

  const numbers = [1, 2, 3, 4, 5];

  return (
    <div>
      {numbers.map((num) => (
        <ul key={num}>
          <li>{num}</li>
        </ul>
      ))}

      {UserInfo.map(({ name, surname, age }) => (
        <ul key={Math.random()}>
          <li>Name: {name}</li>
          <li>Surname: {surname}</li>
          <li>Age: {age}</li>
        </ul>
      ))}
    </div>
  );
};

export default ListEx;
