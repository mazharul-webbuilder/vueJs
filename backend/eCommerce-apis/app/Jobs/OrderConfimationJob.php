<?php

namespace App\Jobs;

use App\Mail\OrderTakenMail;
use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class OrderConfimationJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public Order $order
    )
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        Log::info('I am from OrderConfimationJob handle method');

        Mail::to('testmail@test.com')->send(new OrderTakenMail($this->order));

    }
}
