<?php

namespace App\Http\Requests;

use App\Enums\CharacterClass;
use App\Enums\Server;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class StoreCharacterRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules(): array
    {
        return [
            'nickname' => 'required|string|max:255',
            'level' => 'required|integer',
            'server' => ['required', 'string', 'max:255', new Enum(Server::class)],
            'class' => ['required', 'string', 'max:255', new Enum(CharacterClass::class)],
            'goal' => 'nullable|string|max:255',
            'description' => 'nullable|string|max:255',
        ];
    }
}
