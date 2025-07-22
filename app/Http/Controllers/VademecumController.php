<?php

namespace App\Http\Controllers;

use Illuminate\Http\Response;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Helpers\GoogleDriveHelper;

class VademecumController extends Controller
{
    protected static $basePath = 'Vademecum aste immobiliari/';

    /**
     * Handle the incoming request.
     */
    public function index(Request $request): Response
    {
        $vademecumObj = array(GoogleDriveHelper::create_folder_structure(self::$basePath));

        if ($request->input('ID')) {

            $fileID = $request->input('ID');

        } else {

            foreach ($vademecumObj[0]['children'] as $item) {
                if ($item['type'] === 'file') {
                    $fileID = $item['ID'];
                    break;
                }
            }

        }

        $fileURL = GoogleDriveHelper::findUrlById($vademecumObj[0], $fileID);

        return response()->view('pages.vademecum', [
            'vademecumObj' => $vademecumObj,
            'fileID' => $fileID,
            'fileURL' => $fileURL,
        ]);
    }
}
