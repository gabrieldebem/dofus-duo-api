<?php

namespace Tests\Feature;

use App\Enums\CharacterClass;
use App\Enums\Server;
use App\Models\Character;
use App\Models\User;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class CharacterTest extends TestCase
{
    use WithFaker;
    use DatabaseMigrations;

    public function testCanCreateCharacter()
    {
        $user = User::factory()->create();

        $data = [
            'nickname' => 'Test Character',
            'level' => $this->faker->numberBetween(1, 60),
            'server' => $this->faker->randomElement(Server::cases())->value,
            'class' => $this->faker->randomElement(CharacterClass::cases())->value,
            'goal' => $this->faker->text(),
            'description' => $this->faker->text(),
        ];

        $this->actingAs($user)->post('/api/characters', $data)
            ->assertSuccessful()
            ->assertJsonFragment($data);

        $this->assertDatabaseHas('characters', $data);
    }

    public function testCanListCharacters()
    {
        $user = User::factory()->create();

        $character = Character::factory()
            ->count(5)
            ->create([
                'user_id' => $user->id,
            ]);

        $this->actingAs($user)
            ->get('/api/characters')
            ->assertSuccessful()
            ->assertJson(['data' => $character->toArray()]);
    }

    public function testCanShowCharacter()
    {
        $user = User::factory()->create();

        $character = Character::factory()
            ->create([
                'user_id' => $user->id,
            ]);

        $this->actingAs($user)
            ->get("/api/characters/$character->id")
            ->assertSuccessful()
            ->assertJson($character->toArray());
    }

    public function testCanUpdateCharacter()
    {
        $user = User::factory()->create();

        $character = Character::factory()
            ->create([
                'user_id' => $user->id,
            ]);

        $data = [
            'nickname' => 'Test Character',
            'level' => $this->faker->numberBetween(1, 60),
            'goal' => $this->faker->text(),
            'description' => $this->faker->text(),
        ];

        $this->actingAs($user)
            ->put("/api/characters/$character->id", $data)
            ->assertSuccessful()
            ->assertJson($character->fresh()->toArray());

        $this->assertDatabaseHas('characters', [
            'id' => $character->id,
            'nickname' => $data['nickname'],
            'level' => $data['level'],
            'goal' => $data['goal'],
            'description' => $data['description'],
        ]);
    }

    public function testCanDeleteCharacter()
    {
        $user = User::factory()->create();

        $character = Character::factory()
            ->create([
                'user_id' => $user->id,
            ]);

        $this->actingAs($user)
            ->delete("/api/characters/$character->id")
            ->assertSuccessful();

        $this->assertDatabaseMissing('characters', [
            'id' => $character->id,
        ]);
    }
}
