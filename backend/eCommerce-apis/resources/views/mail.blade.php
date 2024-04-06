<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Order Confirmation</title>
</head>
<body>
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
    <h2 style="color: #333;">Order Confirmation</h2>
    <p>Dear {{ $order['name'] }},</p>
    <p>Your order has been successfully placed.</p>

    <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
        <tr>
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Order ID:</th>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">{{ $order['order_id'] }}</td>
        </tr>
        <tr>
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Delivery Address:</th>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">{{ $order['delivery_address'] }}, {{ $order['city'] }}, {{ $order['country'] }}</td>
        </tr>
        <tr>
            <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Contact Number:</th>
            <td style="padding: 10px; border-bottom: 1px solid #ddd;">{{ $order['contact_number'] }}</td>
        </tr>
        <!-- You can add more order details here as needed -->
    </table>

    <p style="margin-top: 20px;">Thank you for your order. We will update you on the status of your order as it progresses.</p>

    <p style="margin-top: 20px;">Regards,<br>Your Company Name</p>
</div>
</body>
</html>
