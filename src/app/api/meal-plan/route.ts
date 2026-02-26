import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/dbConnect';
import { Recipe } from '@/lib/models/Recipe';
import { Deal } from '@/lib/models/Deal';
import { User } from '@/lib/models/User';

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    
    const { email, preferences } = await request.json();
    
    let userPreferences = preferences;
    
    if (email) {
      const user = await User.findOne({ email });
      if (user) {
        userPreferences = user.preferences;
      }
    }
    
    if (!userPreferences) {
      return NextResponse.json(
        { error: 'No preferences provided' },
        { status: 400 }
      );
    }
    
    // Get recipes and deals
    const recipes = await Recipe.find({}).limit(50);
    const deals = await Deal.find({}).sort({ discountPercent: -1 }).limit(20);
    
    // Simple meal plan generation
    const days = ['Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag', 'Søndag'];
    
    const meals = days.map((day, i) => ({
      day,
      recipe: recipes[i % recipes.length] || { title: 'Demo Recipe', ingredients: ['ingredient 1', 'ingredient 2'] },
      usingLeftover: i > 0 && i % 2 === 0,
    }));
    
    const shoppingList = meals.flatMap(meal => 
      meal.recipe.ingredients || []
    );
    
    return NextResponse.json({
      weekStart: new Date().toISOString(),
      meals,
      shoppingList,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
