<template>
  <div class="bg-indigo-50">
    <header>
      <Nav />
    </header>
    <div class="relative isolate px-6 pt-14 lg:px-8">
      <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"></div>
      <div class="mx-auto max-w-2xl py-10 sm:py-48 lg:py-10">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">BuzLink - Your Ultimate URL Shortening
            Solution</h1>
          <p class="mt-6 text-lg leading-8 text-gray-600">Shorten your URLs with ease and efficiency using BuzLink. Our
            platform offers advanced features to help you manage and track your shortened links.</p>
          <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#"
              class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
              Started</a><a href="#" class="text-sm font-semibold leading-6 text-gray-900">Learn More<span
                aria-hidden="true">→</span></a>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div class="bg-indigo-600 py-10 sm:py-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl lg:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-200"></h2>
        <p class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl"></p>
        <p class="mt-6 text-lg leading-8 text-indigo-200"></p>
      </div>
      <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">Customizable URLs</dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
              <p class="flex-auto">Create unique and personalized shortened URLs</p>
              <p class="mt-6">
                <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span
                    aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">Analytics</dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
              <p class="flex-auto">Track click-through rates and user engagement</p>
              <p class="mt-6">
                <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span
                    aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
          <div class="flex flex-col">
            <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">API Integration</dt>
            <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-indigo-200">
              <p class="flex-auto">Easily integrate our URL shortening service into your existing applications</p>
              <p class="mt-6">
                <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span
                    aria-hidden="true">→</span></a>
              </p>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>

  <div class="pricing">
    <Pricing />
  </div>



  <div class="bg-indigo-600">
    <div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl"><br />Shorten your links and chill out with
          BuzLink</h2>
        <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">Join BuzLink today and start shortening your
          URLs with ease. Stay cool and organized with our user-friendly platform.</p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <a href="#"
            class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get
            started now</a><a href="#" class="text-sm font-semibold leading-6 text-white">Learn more about
            BuzLink<!-- -->
            <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </div>
  </div>

  <FAQ />

</template>

<script setup>
import Pricing from "../components/welcome/Pricing.vue"
import Nav from "../components/welcome/Nav.vue"
import FAQ from "../components/welcome/FAQ.vue"
</script>