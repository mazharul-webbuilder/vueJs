<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'min:3'],
            'delivery_address' => ['required', 'string', 'min:10'],
            'contact_number' => ['required', 'string'],
            'city' => ['required', 'string', 'min:3'],
            'zip_code' => ['nullable', 'numeric', 'min:3'],
            'country' => ['nullable', 'string', 'min:3'],

        ];
    }
}
