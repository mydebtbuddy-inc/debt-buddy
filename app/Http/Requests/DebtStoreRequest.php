<?php

namespace App\Http\Requests;

class DebtStoreRequest extends BaseFormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'debt.name' => 'required|string|max:128',
            'debt.type' => 'required|string|in:Mortgage,Student Loan,Auto Loan,Credit Card',
            'debt.balance' => 'required|regex:/^\d*(\.\d{2})$/',
            'debt.minPayment' => 'required|regex:/^\d*(\.\d{2})$/',
            'debt.startDate' => 'required|date_format:"Y-m-d"',
            'debt.payPeriod' => 'required|string|max:16',
            'interest.rate' => 'required|regex:/^\d(\.\d{6})$/',
            'interest.fixed' => 'required|boolean',
            'lender.id' => 'nullable|numeric|exists:lenders,id',
            'lender.name' => 'required_without:lender.id|string|max:128',
            'lender.phone' => 'required_without:lender.id|string|max:15',
            'lender.account' => 'nullable|string|max:15',
            'lender.address1' => 'nullable|string|max:128',
            'lender.address2' => 'nullable|string|max:128',
            'lender.city' => 'nullable|string|max:128',
            'lender.state' => 'nullable|string|max:2',
            'lender.zip' => 'nullable|string|max:10'
        ];
    }

    public function messages()
    {
        return [];
    }

    /**
     * Filters to be applied to the input.
     *
     * @return array
     */
    public function filters()
    {
        return [
            'debt.name' => 'trim|escape|strip_tags',
            'debt.type' => 'trim|escape|strip_tags',
            'debt.balance' => 'trim|escape|strip_tags',
            'debt.payPeriod' => 'trim|uppercase',
            'interest.fixed' => 'trim|cast:boolean',
            'lender.name' => 'trim',
            'lender.phone' => 'trim',
            'lender.account' => 'trim',
            'lender.address1' => 'trim',
            'lender.address2' => 'trim',
            'lender.city' => 'trim',
            'lender.state' => 'trim|uppercase',
            'lender.zip' => 'trim'
        ];
    }
}
