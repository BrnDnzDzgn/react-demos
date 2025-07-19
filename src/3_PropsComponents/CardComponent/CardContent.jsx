import Card from "./Card";

const CardContent = () => { /*This is the parent component*/
  return (
    <div>
      <hr />
      <Card>
        <h1>My Card1</h1>
        <p>Content for card1</p>
      </Card>
      <Card>
        <h1>My Card2</h1>
        <p>Content for card2</p>
      </Card>
    </div>
  ); 
};

export default CardContent;
