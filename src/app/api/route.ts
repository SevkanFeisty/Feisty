import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    name: 'Feisty',
    tagline: 'Smart meal planning with leftover optimization',
    tagline_da: 'Spar tid og penge med smarte madplaner',
    features: [
      'Personaliserede madplaner baseret på dine præferencer',
      'Ugentlige tilbud fra danske supermarkeder',
      'Restemad genbrugt intelligent til næste dag',
      'Automatisk indkøbsliste',
    ],
    pricing: '74 DKK / måned',
    endpoints: {
      health: '/api/health',
      'meal-plan': 'POST /api/meal-plan',
    },
  });
}
