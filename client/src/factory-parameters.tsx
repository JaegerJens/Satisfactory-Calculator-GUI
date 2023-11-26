import { FC } from "react";
import { FormValue } from "./form-value";
import { Building, Item, Recipe, TimeInterval } from "./types";
import { RecipePreference, RecipePreferencesForm } from "./recipe-preferences";

export interface FactoryParameters {
    timeInterval: TimeInterval;
    targetItem: Item;
    targetItemCount: number;
    recipe: Recipe;
    buildingType: Building;
    buildingCount: number;
    preferences: RecipePreference[];
}

export interface FactoryPlannerProps {
    parameters: FactoryParameters;
}

export const FactoryPlannerForm: FC<FactoryPlannerProps> = ({ parameters }) => <section>
    <h2>Parameters</h2>

    <FormValue id="calc-duration" label="Calculation interval">
        <select id="calc-interval">
            <option>Minutes</option>
            <option>Seconds</option>
        </select>
    </FormValue>

    <FormValue id="target-item" label="Target item production">
        <select id="target-item">
            <option value="hmf">Heavy Modular Frame</option>
        </select>
    </FormValue>

    <FormValue id="target-recipe" label="Item recipe">
        <select id="target-recipe">
            <option value="heavy-encased-frame">Heavy Encased Frame</option>
        </select>
    </FormValue>

    <FormValue id="target-building-count" label="Building coun">
        <input type="number" id="target-building-count" value="1" />
    </FormValue>

    <FormValue id="target-item-coun" label="Target iten count">
        <input type="number" id="target-item-count" value="3" />
    </FormValue>

    <RecipePreferencesForm preferences={parameters.preferences} />
</section>;