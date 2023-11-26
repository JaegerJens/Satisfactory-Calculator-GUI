import { FC } from "react";
import { Item, Recipe } from "./types"

export interface RecipePreference {
    item: Item;
    recipe: Recipe;
    recipeOptions: Recipe[];
}

export interface RecipePreferencesProps {
    preferences: RecipePreference[];
}

export const RecipePreferencesForm: FC<RecipePreferencesProps> = ({ preferences }) => <ul>
    {preferences.map(row => <li>
        <span>{row.item}: </span>
        <select>
            {row.recipeOptions.map(option =>
                <option selected={option === row.recipe} value={option}>{option}</option>)
            }
        </select>
    </li>)}
</ul>
