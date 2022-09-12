<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateCharacterRequest extends FormRequest
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
            'nickname' => 'nullable|string|max:255',
            'level' => 'nullable|integer|min:1|max:200',
            'goal' => 'nullable|string|max:255',
            'description' => 'nullable|string|max:255',
        ];
    }
}
