import "./index.css"
import Expressions from "./1_ExpressionComponents/Expressions";
import Greeting from "./1_ExpressionComponents/Greeting";
import ProductInfo from "./1_ExpressionComponents/ProductInfo";
import ListEx from "./2_ListComponents/ListEx";
import CardContent from "./3_PropsComponents/CardComponent/CardContent";
import PropsEx from "./3_PropsComponents/PropsEx";
import Cart from "./4_ConditionalRendering/Cart/Cart";
import UserStatus from "./4_ConditionalRendering/Ex/UserStatus";
import Weather from "./4_ConditionalRendering/Ex/Weather";
import Password from "./4_ConditionalRendering/PasswordCheck/Password";
import Greeting2 from "./4_ConditionalRendering/Ex/Greeting2";
import StyleCard from "./5_StyleSheet/StyleCard";
import ProfileCard from "./5_StyleSheet/ProfileCard";
import IconComponent from "./5_StyleSheet/IconComponent";

const App = () => {
  return (
    <div>
      {/* <Expressions/> */}
      {/* <Greeting/> */}
      {/* <ProductInfo/> */}
      {/* <ListEx/> */}
      {/* <PropsEx name= "John" surname= "Doe" age={25} isMarried={false} hobbies={["Coding", "Reading", "Sleeping"]} /> */}
      {/* <CardContent/> */}
      {/* <Password isValid={false}/> */}
      {/* <Cart /> */}
{/*       <Weather temperature={15}/>
      <UserStatus loggedIn={true} isAdmin={true}/>
      <Greeting2 timeOfDay={"morning"}/> */}
      <StyleCard/>
      <ProfileCard/>
      <IconComponent/>
    </div>
  );
};

export default App;
