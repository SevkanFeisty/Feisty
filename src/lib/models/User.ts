import mongoose, { Schema, models, model } from 'mongoose';

const userSchema = new Schema({
  email: { type: String, required: true, unique: true },
  name: String,
  preferences: {
    diet: [String],
    allergies: [String],
    familySize: { type: Number, default: 1 },
    budget: Number,
    dislikes: [String],
  },
  createdAt: { type: Date, default: Date.now },
});

export const User = models.User || model('User', userSchema);
