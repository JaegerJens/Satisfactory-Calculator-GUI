import { buildingPlan, itemBalance, parameters } from "./example.data";
import { FactoryPlannerForm } from "./factory-parameters";
import { FactoryPlanView } from "./factory-plan";

export const App = () => <>
  <h1>Satisfactory Factory Planner</h1>
  <FactoryPlannerForm parameters={parameters} />
  <FactoryPlanView buildings={buildingPlan} balance={itemBalance} />
</>

