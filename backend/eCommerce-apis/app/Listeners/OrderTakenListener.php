<?php

namespace App\Listeners;

use App\Events\OrderTakenEvent;
use App\Jobs\OrderConfimationJob;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Log;

class OrderTakenListener implements ShouldQueue
{
    /**
     * Create the event listener.
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     */
    public function handle(OrderTakenEvent $event): void
    {
        Log::info('I am from OrderTakenListener handle method');

        OrderConfimationJob::dispatch($event->order);

    }
}
