import mongoose, { Schema, models, model } from 'mongoose';

const recipeSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  source: { type: String, enum: ['valdemarsro', 'jamieoliver', 'arla'], required: true },
  ingredients: [{ type: String }],
  instructions: [{ type: String }],
  prepTime: Number,
  cookTime: Number,
  servings: Number,
  category: { type: String, enum: ['breakfast', 'lunch', 'dinner', 'snack'] },
  tags: [String],
  leftoverPotential: { type: Number, default: 0 },
  leftoverPairing: String,
  createdAt: { type: Date, default: Date.now },
});

export const Recipe = models.Recipe || model('Recipe', recipeSchema);
