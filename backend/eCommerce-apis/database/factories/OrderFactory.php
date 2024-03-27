<?php

namespace Database\Factories;

use App\Models\Product;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Order>
 */
class OrderFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => Product::select('id')->inRandomOrder()->first()->id,
            'order_id' => "O_" . date('d_m_y') . Str::random(),
            'total_order' => $this->faker->randomFloat(min: 100, max: 10000),
        ];
    }
}
