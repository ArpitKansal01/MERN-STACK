const HomePage = () => {
  return (
    <section class="bg-gradient-to-br from-white via-gray-50 to-blue-50 py-20 px-6 md:px-12 lg:px-24">
  <div class="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
    <div class="text-center md:text-left max-w-xl">
      <h1 class="text-5xl font-extrabold leading-tight text-gray-900 mb-4">
        Welcome to <span class="text-blue-600">Draftly</span>
      </h1>
      <p class="text-gray-600 text-lg mb-6">
        Share your thoughts. Discover new ideas. Dive into stories from creators around the world.
      </p>
      <div class="flex flex-col sm:flex-row items-center gap-4">
        <a href="#start-writing" class="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
          Start Writing
        </a>
        <a href="#explore-blogs" class="text-blue-600 text-lg font-medium hover:underline">
          Explore Blogs
        </a>
      </div>
    </div>
    <div class="w-full md:w-1/2">
    </div>
  </div>
</section>

  )
};

export default HomePage;
