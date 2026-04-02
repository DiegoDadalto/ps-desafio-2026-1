<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreEquipmentsRequest;
use App\Http\Requests\UpdateEquipmentsRequest;
use App\Models\Equipments;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class EquipmentsController extends Controller
{
    protected $equipment;
    public function __construct(Equipments $equipment)
    {
        $this->equipment = $equipment;
    }
    /**
     * Display a listing of the resource.
     */
    public function index(): JsonResponse
    {
        $equipments = $this->equipment->with('category')->get();
        return response()->json($equipments, Response::HTTP_OK);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreEquipmentsRequest $request): JsonResponse
    {
        $data = $request->validated();

        if ($request->hasFile('image')) {
            $path = $request->file('image')->store('equipments', 'public');
            $data['image'] = url('storage/', $path);
        }

        $equipment = $this->equipment->create($data);
        $id = $equipment->id;
        $equipment_category = $this->equipment->with('category')->findOrFail($id);

        return response()->json($equipment_category, Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $equipment = $this->equipment->with('category')->findOrFail($id);
        return response()->json($equipment, Response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Equipments $equipments)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateEquipmentsRequest $request, $id): JsonResponse
    {
        $equipment = $this->equipment->with('category')->findOrFail($id);
        $data = $request->validated();

        if ($request->hasFile('image')) {
            try {
                $image_name = explode('equipments/', $equipment('image'));
                Storage::disk('public')->delete('equipments/', $image_name[1]);
            }
            catch (Throwable) {}
            finally {
                $path = $request->file('image')->store('equipments', 'public');
                $data['image'] = url('storage/', $path);
            }

        }
        
        $equipment->update($data);
        return response()->json($equipment, Response::HTTP_OK);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id): JsonResponse
    {
        $equipment = $this->equipment->with('category')->findOrFail($id);
        $equipment->delete();
        return response()->json(['Message' => 'Equipment deleted succesfully']);
    }
}
