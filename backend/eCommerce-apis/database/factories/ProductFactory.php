<?php

namespace Database\Factories;

use App\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $product = $this->faker->words(4, true);
        return [
            'name' => $product,
            'slug' => Str::slug($product),
            'category_id' => Category::select('id')->inRandomOrder()->first()->id,
            'short_description' => $this->faker->sentence(),
            'long_description' => $this->faker->text(),
            'price' => $this->faker->randomFloat(),
            'stock' => $this->faker->numberBetween(10, 1000),
        ];
    }
}
