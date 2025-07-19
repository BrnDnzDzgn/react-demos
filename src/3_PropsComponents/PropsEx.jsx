const PropsEx = ({ name, surname, age, isMarried, hobbies }) => {
  return (
    <div>
      <hr />
      <h5>
        Name: {name} {surname}
      </h5>
      <p>Age: {age}</p>
      <p>Married: {isMarried} </p>
      <p>Hobbies: {hobbies}</p>
    </div>
  );
};

export default PropsEx;
