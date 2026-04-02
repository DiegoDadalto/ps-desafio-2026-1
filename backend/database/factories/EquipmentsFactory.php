<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Equipments>
 */
class EquipmentsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => fake()->word(),
            'brand' => fake()->word(),
            'price' => fake()->randomFloat(2),
            'year' => fake()->numberBetween(2015, 2026),
            'image' => fake()->imageUrl(200, 200),
            'amount' => fake()->randomNumber(2, false),
            'category_id' => Category::factory()
        ];
    }
}
