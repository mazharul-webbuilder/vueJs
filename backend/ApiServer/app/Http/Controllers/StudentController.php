<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Illuminate\Database\Eloquent\Collection
    {
        $students = Student::latest()->get();

        $students->map(function ($student){
            $student->created_at_mod = $student->created_at->format('Y-m-d H:m A');
        });

        return $students;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $flag =  Student::create($request->all());
        if ($flag) {
            return response()->json([
               'status' => 200,
               'message' => 'Student Added Successfully'
            ], 200);
        } else{
            return response()->json([
                'status' => 500,
                'message' => 'Something went wrong'
            ], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student): Student
    {
        return $student;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Student $student): Student
    {
        $student->update($request->all());

        return $student;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student): string
    {
        return $student->delete() ? 'success': 'failed';
    }
}
