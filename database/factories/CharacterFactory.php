<?php

namespace Database\Factories;

use App\Enums\CharacterClass;
use App\Enums\Server;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Character>
 */
class CharacterFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'nickname' => $this->faker->name(),
            'level' => $this->faker->numberBetween(1, 60),
            'server' => $this->faker->randomElement(Server::cases()),
            'class' => $this->faker->randomElement(CharacterClass::cases()),
            'goal' => $this->faker->text(),
            'description' => $this->faker->text(),
        ];
    }
}
