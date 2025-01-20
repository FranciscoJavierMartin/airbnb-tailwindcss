<template>
  <div>
    <div
      class="relative flex aspect-[1] max-h-[290px] min-h-[230px] mx-auto w-full min-w-[230px] max-w-[290px] flex-shrink-0 flex-grow-0 rounded-full"
    >
      <div
        class="custom-shadow-outer absolute size-full cursor-pointer rounded-full bg-[#e6e6e6]"
      >
        <div
          class="custom-shadow-inner absolute bottom-[60px] left-[60px] right-[60px] top-[60px] flex flex-col items-center justify-center overflow-hidden rounded-full bg-[#F7F7F7] text-center"
        >
          <div class="flex flex-col items-center justify-center text-center">
            <div class="font-bold text-8xl">3</div>
            <div class="-mt-2 text-xl font-bold">months</div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 text-sm text-center">
      From January 1st, 2025 to December 31st, 2025 &middot;
      <a href="#">Edit</a>
    </div>
  </div>
</template>

<style>
.customs-shadow-outer {
  box-shadow:
    0 -5px 5px rgba(0, 0, 0, 0.2),
    0 5px 5px #ffffff,
    inset 0 -20px 30px #ffffffe5,
    inset 0 10px 20px rgba(0, 0, 0, 0.2);
}

.custom-shadow-inner {
  box-shadow:
    0 -5px 5px rgba(255, 255, 255, 0.4),
    inset 0 5px 3px rgba(255, 255, 255, 0.8),
    inset 0 -5px 5px rgba(0, 0, 0, 0.2),
    0 11px 18px rgba(0, 0, 0, 0.18),
    0 -20px 30px rgba(255, 255, 255, 0.8);
}
</style>
