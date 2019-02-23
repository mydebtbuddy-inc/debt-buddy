<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Services\PaymentPlanService;

class PaymentPlanController extends Controller
{
    protected $paymentPlanService;

    /**
     * Inject payment plan service into controller.
     */
    public function __construct(PaymentPlanService $paymentPlanService)
    {
        // Set the service
        $this->paymentPlanService = $paymentPlanService;
    }

    /**
     * Generate a new payment plan.
     *
     * @param  Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function calculate(Request $request)
    {
        $paymentPlan = $this->paymentPlanService->generatePaymentPlan(
            $request->user()->id, 
            floatval($request->debtCelerator)
        );

        $noPaymentPlan = $this->paymentPlanService->generateNoPaymentPlan($request->user()->id);
        
        
        return response([
            'payment_plan' => $paymentPlan,
            'no_payment_plan' => $noPaymentPlan
        ], 201);
    }
}
