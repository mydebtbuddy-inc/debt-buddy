<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Services\DebtService;
use App\Http\Requests\DebtStoreRequest;

class DebtController extends Controller
{
    protected $debtService;

    /**
     * Inject debt service into controller.
     */
    public function __construct(DebtService $debtService)
    {
        // Set the service
        $this->debtService = $debtService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $userDebts = $this->debtService->fetchAllUserDebts($request->user()->id);

        return response($userDebts);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\DebtStoreRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(DebtStoreRequest $request)
    {
        $debtData = $request->validated();
        $debtData['debt']['userID'] = $request->user()->id;
        
        $newDebt = $this->debtService->addDebt($debtData);
        
        return response($newDebt, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
