import mongoose, { Schema, models, model } from 'mongoose';

const dealSchema = new Schema({
  store: { type: String, required: true },
  product: { type: String, required: true },
  originalPrice: Number,
  discountedPrice: Number,
  discountPercent: Number,
  unit: String,
  imageUrl: String,
  validFrom: Date,
  validUntil: Date,
  category: String,
  createdAt: { type: Date, default: Date.now },
});

export const Deal = models.Deal || model('Deal', dealSchema);
