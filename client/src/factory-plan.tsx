import { FC } from "react";
import { Building, Item, Recipe } from "./types";

export interface BuildingPlan {
    building: Building;
    count: number;
    recipe: Recipe;
}

export interface ItemBalance {
    item: Item;
    production: number;
    consumption: number;
}

export interface FactoryPlanProps {
    buildings: BuildingPlan[];
    balance: ItemBalance[];
}

export const FactoryPlanView: FC<FactoryPlanProps> = ({ buildings, balance }) => <section>
    <h3>Factory buildings</h3>
    <table>
        <tr>
            <th>Building</th>
            <th>Count</th>
            <th>Recipe</th>
        </tr>

        {buildings.map(build => <tr>
            <td>{build.building}</td>
            <td>{build.count}</td>
            <td>{build.recipe}</td>
        </tr>)}
    </table>

    <h3>Item balance</h3>
    <table>
        <tr>
            <th>Item</th>
            <th>Production</th>
            <th>Consumption</th>
        </tr>

        {balance.map(row => <tr>
            <td>{row.item}</td>
            <td>{row.production}</td>
            <td>{row.consumption}</td>
        </tr>)}
    </table>
</section>