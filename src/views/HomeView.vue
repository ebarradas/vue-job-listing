<script setup lang="ts">

</script>

<template>
  <main>
    <h1>Eder Barradas | Vue Job Listing App</h1>
    <p>
      Hi there! This is a simple job listing app built with Vue 3 and set up with Vite.
    </p>
    <p>
      This project contains mainly of two different parts:
    </p>
    <ul>
      <li>
        <strong>Jobs</strong>, which is the main page that displays all the jobs and allows you to filter them by different criteria.
        <ul>
          <li>
            When a job is clicked, it redirects the user to <code>src/views/jobs/:id</code>, where a pretty simple contact form is shown. The form has some basic validation and the data is sent to the <code>src/store</code> using Pinia.
          </li>
        </ul>
      </li>
      <li>
        <strong>Candidates</strong>, which shows a list of the candidates that applied to the jobs.
      </li>
    </ul>
    <p>
      <code>src/views</code> folder contains the Views for the app
    </p>
    <p>
      <code>src/components</code> folder contains the individual components used in the views
    </p>
    <p>
      <code>src/data</code> contains the mock API data JSON used to populate the jobs pages
    </p>
    <p>
      <code>src/store</code> contains Pinia storage for the jobs data and the user form information. The user data is stored used <code>localStorage</code>, to make it persist after page refresh.
    </p>
  </main>
</template>

<style lang="scss" scoped>

</style>
