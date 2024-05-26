<?php

namespace App\Http\Controllers;

use App\Helpers\FileHelpers;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data = User::paginate(10);

        return response()->json($data);
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request, User $user)
    {
        if ($request->search) {
            $pageNumber = $request->pageNumber;
            $search = $request->search;
            $pageSize = $request->pageSize;
            $user = Cache::remember('expensive_user_result_' . md5($search . '_' . ($pageNumber ?: 1)), env('DATA_CACHED', 5 * 60), function () use ($user, $pageNumber, $pageSize, $search) {
                return $user->with('getRoles')->where('nickname', 'like', '%' . $search . '%')->where('status', 'active')->paginate($pageSize, ['*'], 'page', $pageNumber ?: 1);
            });
        } else {
            $user = Cache::remember('expensive_user_result', env('DATA_CACHED', 5 * 60), function () {
                return User::with('getRoles')->where('status', 'active')->paginate(10);
            });
        }
        return response()->json($user);
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
            'username' => 'required',
            'nickname' => 'required',
            'email' => 'required',
        ]);
        try {
            $thumbnails = [];

            if ($request->hasFile('thumbnails')) {
                foreach ($request->file('thumbnails') as $key => $value) {
                    $file = $value;
                    $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
                    if (!FileHelpers::checkFileExtension($file, $allowedExtensions)) {
                        return response()->json([
                            'status' => 'error',
                            'message' => 'Maximum file size should be lower than 10 MB and please check the file extension.'
                        ]);
                    } else {
                        $path = $file->store('public/uploads');
                        $path_url = Storage::url($path);
                        $thumbnails[] = $path_url;
                    }
                }
            }

            $password = Hash::make($request->password);

            User::create([
                'username' => $request->username,
                'nickname' => $request->nickname,
                'email' => $request->email,
                'password' => $password,
                'roles_id' => $request->roles,
                'thumbnails' => json_encode($thumbnails),
                'bio' => $request->bio
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
     * @param  \App\Models\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        $result = Cache::remember('expensive_product_result_' . $id, env('DATA_CACHED', 5 * 60), function () use ($id) {
            return User::where('status', 'active')->where('uuid', $id)->first();
        });

        return response()->json($result);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user, $id)
    {
        $this->validate($request, [
            'nickname' => 'required',
            'email' => 'required',
        ]);

        try {
            $thumbnails = [];

            if ($request->hasFile('thumbnails')) {
                foreach ($request->file('thumbnails') as $key => $value) {
                    $file = $value;
                    $allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
                    if (!FileHelpers::checkFileExtension($file, $allowedExtensions)) {
                        return response()->json([
                            'status' => 'error',
                            'message' => 'Maximum file size should be lower than 10 MB and please check the file extension.'
                        ]);
                    } else {
                        $path = $file->store('public/uploads');
                        $path_url = Storage::url($path);
                        $thumbnails[] = $path_url;
                    }
                }
            }

            User::findOrFail($id)->update([
                'username' => $request->name,
                'nickname' => $request->nickname,
                'email' => $request->email,
                'thumbnails' => json_encode($thumbnails),
                'bio' => $request->bio,
            ]);

            return response()->json([
                'status' => 'success',
                'message' => 'Data Successfully Update'
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
     * @param  \App\Models\Request  $Request
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user, $id)
    {
        try {
            $user->findOrFail($id)->update([
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
