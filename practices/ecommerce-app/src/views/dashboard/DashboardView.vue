<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-3">
        <!-- Sidebar -->
        <div class="card">
          <div class="card-header">
            Dashboard
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Profile</li>
            <li class="list-group-item">Orders</li>
            <li class="list-group-item">Payments</li>
            <li class="list-group-item">Settings</li>
          </ul>
        </div>
      </div>
      <div class="col-md-9">
        <!-- Main Content -->
        <div class="card">
          <div class="card-header">
            Welcome to Your Dashboard
          </div>
          <div class="card-body">
            <!-- Content specific to the selected option in the sidebar can go here -->
            <h5 class="card-title">Profile Overview</h5>
            <p class="card-text">View and update your profile information.</p>
            <a href="#" class="btn btn-primary">Go to Profile</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashboardView"
};
</script>
