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
     * @throws \Exception
     */
    public function definition(): array
    {
        $product = $this->faker->words(4, true);
        return [
            'name' => $product,
            'slug' => Str::slug($product),
            'category_id' => Category::select('id')->inRandomOrder()->first()->id,
            'image' => $this->faker->randomElement([
                'https://images.pexels.com/photos/17840523/pexels-photo-17840523/free-photo-of-cgi-minimal-bathroom.jpeg',
                'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg',
                'https://images.pexels.com/photos/380954/pexels-photo-380954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'https://images.pexels.com/photos/3819969/pexels-photo-3819969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'https://images.pexels.com/photos/50924/pexels-photo-50924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                'https://images.pexels.com/photos/371985/pexels-photo-371985.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            ]),
            'short_description' => $this->faker->sentence(),
            'long_description' => $this->faker->text(),
            'price' => random_int(10, 50),
            'stock' => $this->faker->numberBetween(10, 1000),
        ];
    }
}
