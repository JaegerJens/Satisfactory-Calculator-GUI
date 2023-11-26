import { FactoryParameters } from "./factory-parameters";
import { BuildingPlan, ItemBalance } from "./factory-plan";
import { RecipePreference } from "./recipe-preferences";

export const preferences: RecipePreference[] = [
    { item: 'Modular Frame', recipe: 'SteeledFrame', recipeOptions: ['SteeledFrame'] },
    { item: 'Reinforced Iron Plate', recipe: 'StitchedIronPlate', recipeOptions: ['StitchedIronPlate'] },
    { item: 'Encased Industrial Beam', recipe: 'EncasedIndustrialPipe', recipeOptions: ['EncasedIndustrialPipe'] },
    { item: 'Wire', recipe: 'IronWire', recipeOptions: ['IronWire'] },
    { item: 'Steel Ingot', recipe: 'SolidSteelIngot', recipeOptions: ['SolidSteelIngot'] },
    { item: 'Iron Ingot', recipe: 'PureIronIngot', recipeOptions: ['PureIronIngot'] },
];

export const parameters: FactoryParameters = {
    timeInterval: 'minute',
    targetItem: 'Heavy Modular Frame',
    targetItemCount: 16.88,
    recipe: 'HeavyModularFrame',
    buildingType: 'Manufacturer',
    buildingCount: 6,
    preferences,
};


export const buildingPlan: BuildingPlan[] = [];

export const itemBalance: ItemBalance[] = [];
