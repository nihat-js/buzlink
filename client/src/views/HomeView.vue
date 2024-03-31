<template>
  <div class="bg-indigo-50">
    <header>
      <nav class="bg-indigo-50 border-gray-200 px-4 lg:px-6 py-2.5">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" class="flex items-center"><span
              class="text-indigo-600 self-center text-xl font-semibold whitespace-nowrap">BuzLink</span></a>
          <div class="flex items-center lg:order-2">
            <a href="#"
              class="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Log
              in</a><a href="#"
              class="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2">Get
              Started</a><button type="button"
              class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="mobile-menu-2" aria-expanded="false">
              <span class="sr-only">Open main menu</span><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"></path>
              </svg><svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li><a href="#"
                  class="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0"
                  aria-current="page">Home</a></li>
              <li><a href="#"
                  class="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0"
                  aria-current="page">About</a></li>
              <li><a href="#"
                  class="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0"
                  aria-current="page">Services</a></li>
              <li><a href="#"
                  class="block py-2 pr-4 pl-3 hover:text-blue-800 text-black rounded lg:bg-transparent lg:p-0"
                  aria-current="page">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
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
  <div class="bg-white py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl sm:text-center">
        <h2 class="text-base font-semibold leading-7 text-indigo-600">Choose the perfect plan for your needs</h2>
        <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">Pricing Plans</p>
      </div>
      <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600 sm:text-center">Select the plan that suits you
        best and start shortening URLs with ease.</p>
      <div class="mt-20 flow-root">
        <div
          class="isolate -mt-16 grid max-w-sm grid-cols-1 gap-y-16 divide-y divide-gray-100 sm:mx-auto lg:-mx-8 lg:mt-0 lg:max-w-none lg:grid-cols-3 lg:divide-x lg:divide-y-0 xl:-mx-4">
          <div class="pt-16 lg:px-8 lg:pt-0 xl:px-14">
            <h3 class="text-base font-semibold leading-7 text-gray-900">Freezing Plan</h3>
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-5xl font-bold tracking-tight text-gray-900">$0</span><span
                class="text-sm font-semibold leading-6 text-gray-600">/<!-- -->month</span>
            </p>
            <a href="#"
              class="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
              started</a>
            <p class="mt-10 text-sm font-semibold leading-6 text-gray-900">Ideal for personal use</p>
            <ul role="list" class="mt-6 space-y-3 text-sm leading-6 text-gray-600">
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>Unlimited URL shortening
              </li>
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>Customizable short links
              </li>
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>Basic analytics tracking
              </li>
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>Limited support
              </li>
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>BuzLink branding
              </li>
            </ul>
          </div>
          <div class="pt-16 lg:px-8 lg:pt-0 xl:px-14">
            <h3 class="text-base font-semibold leading-7 text-gray-900">Chill Plan</h3>
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-5xl font-bold tracking-tight text-gray-900">$10</span><span
                class="text-sm font-semibold leading-6 text-gray-600">/<!-- -->month</span>
            </p>
            <a href="#"
              class="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
              started</a>
            <p class="mt-10 text-sm font-semibold leading-6 text-gray-900">Great for small businesses</p>
            <ul role="list" class="mt-6 space-y-3 text-sm leading-6 text-gray-600">
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>All features from Freezing Plan
              </li>
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>Advanced analytics tracking
              </li>
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>Priority support
              </li>
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>No BuzLink branding
              </li>
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>Up to 1000 shortened URLs per month
              </li>
            </ul>
          </div>
          <div class="pt-16 lg:px-8 lg:pt-0 xl:px-14">
            <h3 class="text-base font-semibold leading-7 text-gray-900">Frostbite Plan</h3>
            <p class="mt-6 flex items-baseline gap-x-1">
              <span class="text-5xl font-bold tracking-tight text-gray-900">$25</span><span
                class="text-sm font-semibold leading-6 text-gray-600">/<!-- -->month</span>
            </p>
            <a href="#"
              class="mt-10 block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
              started</a>
            <p class="mt-10 text-sm font-semibold leading-6 text-gray-900">Perfect for large enterprises</p>
            <ul role="list" class="mt-6 space-y-3 text-sm leading-6 text-gray-600">
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>All features from Chill Plan
              </li>
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>Unlimited shortened URLs
              </li>
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>API access
              </li>
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>Custom domain support
              </li>
              <li class="flex gap-x-3">
                <svg class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400" fill="currentColor"
                  viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"></path>
                </svg>Dedicated account manager
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
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
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
      <div class="lg:grid lg:grid-cols-12 lg:gap-8">
        <div class="lg:col-span-5">
          <h2 class="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
          <p class="mt-4 text-base leading-7 text-gray-600">
            Can’t find the answer you’re looking for? Reach out to our<!-- -->
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">customer support</a>
            <!-- -->team.
          </p>
        </div>
        <div class="mt-10 lg:col-span-7 lg:mt-0">
          <dl class="space-y-10">
            <div>
              <dt class="text-base font-semibold leading-7 text-gray-900">How does BuzLink work?</dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">BuzLink is a URL shortening service that takes long
                URLs and converts them into shorter, more manageable links. Users can simply paste their long URL into
                the BuzLink website and receive a shortened link to share.</dd>
            </div>
            <div>
              <dt class="text-base font-semibold leading-7 text-gray-900">Is BuzLink free to use?</dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">Yes, BuzLink is completely free to use. There are no
                hidden fees or charges for shortening URLs on our platform.</dd>
            </div>
            <div>
              <dt class="text-base font-semibold leading-7 text-gray-900">Can I customize the shortened URLs on BuzLink?
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">Yes, BuzLink offers the option to customize shortened
                URLs with a unique alias. Users can choose a custom alias for their shortened link to make it more
                personalized.</dd>
            </div>
            <div>
              <dt class="text-base font-semibold leading-7 text-gray-900">How long are the shortened URLs on BuzLink?
              </dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">The shortened URLs generated by BuzLink are typically
                around 10-15 characters long. This makes them easy to share and remember.</dd>
            </div>
            <div>
              <dt class="text-base font-semibold leading-7 text-gray-900">Is there a limit to how many URLs I can
                shorten on BuzLink?</dt>
              <dd class="mt-2 text-base leading-7 text-gray-600">No, there is no limit to the number of URLs you can
                shorten on BuzLink. Users can shorten as many URLs as they need without any restrictions.</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  </div>

</template>