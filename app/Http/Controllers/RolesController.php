<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Storage;

class RolesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = Role::paginate(10);

        return response()->json($data);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Role $role, Request $request)
    {
        if ($request->search) {
            $pageNumber = $request->pageNumber;
            $search = $request->search;
            $role = Cache::remember('expensive_roles_result_' . md5($search . '_' . ($pageNumber ?: 1)), env('DATA_CACHED', 5 * 60), function () use ($role, $pageNumber, $search) {
                return $role->where('name', 'like', '%' . $search . '%')->where('status', 'active')->paginate(10, ['*'], 'page', $pageNumber ?: 1);
            });
        } else {
            $role = Cache::remember('expensive_roles_result', env('DATA_CACHED', 5 * 60), function () {
                return Role::where('status', 'active')->paginate(10);
            });
        }

        return response()->json($role);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required'
        ]);

        try {
            Role::create([
                'name' => $request->name,
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Data Successfully Created'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to create data please check the suitability forms., ' . $th
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Role $role, $id)
    {
        $result = Cache::remember('expensive_product_result_' . $id, env('DATA_CACHED', 5 * 60), function () use ($role, $id) {
            return $role->where('status', 'active')->where('uuid', $id)->first();
        });

        return response()->json($result);
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
        $this->validate($request, [
            'name' => 'required'
        ]);

        try {
            Role::findOrFail($id)->create([
                'name' => $request->name,
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Data Successfully Updated'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to update data please check the suitability forms., ' . $th
            ]);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Role $role, $id)
    {
        try {
            $role->findOrFail($id)->update([
                'status' => "inactive",
                'deleted_at' => date('Y-m-d H:i:s')
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Data Successfully destroyed'
            ]);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to destroy data please check the suitability forms, ' . $th
            ]);
        }
    }
}
