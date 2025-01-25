<template>
  <div class="relative">
    <ul class="-mx-6 pb-2 text-center text-xs font-semibold text-[#717171]">
      <li class="inline-block w-[42px]">Mo</li>
      <li class="inline-block w-[42px]">Tu</li>
      <li class="inline-block w-[42px]">We</li>
      <li class="inline-block w-[42px]">Th</li>
      <li class="inline-block w-[42px]">Fr</li>
      <li class="inline-block w-[42px]">Sa</li>
      <li class="inline-block w-[42px]">Su</li>
    </ul>
  </div>
  <hr class="-mx-6" />
  <div class="no-scrollbar h-[400px] overflow-y-scroll text-center">
    <div
      v-for="({ daysOfMonth, monthName, startsOn }, index) of calendar"
      :key="`${monthName}_${index}`"
      class="py-4"
    >
      <span class="p-0 mb-1 font-semibold capitalize">
        {{ monthName }} {{ currentYear }}
      </span>
      <ol class="grid grid-cols-7 p-0 m-0 list-none">
        <li
          v-for="dayName of weekDays"
          :key="`${monthName}_${dayName}`"
          class="mb-0.5 pb-2 text-center text-[1.5ch] text-xs font-semibold capitalize text-[#717171]"
        >
          {{ dayName }}
        </li>
        <li
          v-for="(day, dayIndex) of Array(daysOfMonth).keys()"
          :key="`${monthName}_${day}_day`"
          class="text-[1.5ch]"
          :class="{ 'first-day': dayIndex === 0 }"
          :style="{ '--first-day-start': startsOn }"
        >
          {{ day + 1 }}
        </li>
      </ol>
    </div>
  </div>
  <!-- <div v-html="calendarHtml" class="w-[300px] text-center overflow-y-scroll"></div> -->
  <!--<div class="h-[400px] overflow-y-scroll no-scrollbar">
    <div>
      <div class="py-4">
        <div class="font-semibold">January 2025</div>
        <table class="search-dates-table">
          <tbody>
            <tr>
              <td><div class="date">&nbsp;</div></td>
              <td><div class="date">&nbsp;</div></td>
              <td><div class="date date-disabled">1</div></td>
              <td><div class="date date-disabled">2</div></td>
              <td><div class="date date-disabled">3</div></td>
              <td><div class="date date-disabled">4</div></td>
              <td><div class="date date-disabled">5</div></td>
            </tr>
            <tr>
              <td><div class="date date-disabled">6</div></td>
              <td><div class="date date-disabled">7</div></td>
              <td><div class="date date-disabled">8</div></td>
              <td><div class="date date-disabled">9</div></td>
              <td><div class="date date-disabled">10</div></td>
              <td><div class="date date-disabled">11</div></td>
              <td><div class="date date-disabled">12</div></td>
            </tr>
            <tr>
              <td><div class="date date-disabled">13</div></td>
              <td><div class="date date-disabled">14</div></td>
              <td><div class="date date-disabled">15</div></td>
              <td><div class="date">16</div></td>
              <td><div class="date">17</div></td>
              <td><div class="date">18</div></td>
              <td><div class="date">19</div></td>
            </tr>
            <tr>
              <td><div class="date">20</div></td>
              <td><div class="date">21</div></td>
              <td><div class="date">22</div></td>
              <td><div class="date">23</div></td>
              <td><div class="date">24</div></td>
              <td><div class="date">25</div></td>
              <td><div class="date">26</div></td>
            </tr>
            <tr>
              <td><div class="date">27</div></td>
              <td><div class="date">28</div></td>
              <td><div class="date">29</div></td>
              <td><div class="date">30</div></td>
              <td><div class="date">31</div></td>
              <td><div class="date">&nbsp;</div></td>
              <td><div class="date">&nbsp;</div></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="py-4">
        <div class="font-semibold">January 2025</div>
        <table class="search-dates-table">
          <tbody>
            <tr>
              <td><div class="date">&nbsp;</div></td>
              <td><div class="date">&nbsp;</div></td>
              <td><div class="date date-disabled">1</div></td>
              <td><div class="date date-disabled">2</div></td>
              <td><div class="date date-disabled">3</div></td>
              <td><div class="date date-disabled">4</div></td>
              <td><div class="date date-disabled">5</div></td>
            </tr>
            <tr>
              <td><div class="date date-disabled">6</div></td>
              <td><div class="date date-disabled">7</div></td>
              <td><div class="date date-disabled">8</div></td>
              <td><div class="date date-disabled">9</div></td>
              <td><div class="date date-disabled">10</div></td>
              <td><div class="date date-disabled">11</div></td>
              <td><div class="date date-disabled">12</div></td>
            </tr>
            <tr>
              <td><div class="date date-disabled">13</div></td>
              <td><div class="date date-disabled">14</div></td>
              <td><div class="date date-disabled">15</div></td>
              <td><div class="date">16</div></td>
              <td><div class="date">17</div></td>
              <td><div class="date">18</div></td>
              <td><div class="date">19</div></td>
            </tr>
            <tr>
              <td><div class="date">20</div></td>
              <td><div class="date">21</div></td>
              <td><div class="date">22</div></td>
              <td><div class="date">23</div></td>
              <td><div class="date">24</div></td>
              <td><div class="date">25</div></td>
              <td><div class="date">26</div></td>
            </tr>
            <tr>
              <td><div class="date">27</div></td>
              <td><div class="date">28</div></td>
              <td><div class="date">29</div></td>
              <td><div class="date">30</div></td>
              <td><div class="date">31</div></td>
              <td><div class="date">&nbsp;</div></td>
              <td><div class="date">&nbsp;</div></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="py-4">
        <div class="font-semibold">January 2025</div>
        <table class="search-dates-table">
          <tbody>
            <tr>
              <td><div class="date">&nbsp;</div></td>
              <td><div class="date">&nbsp;</div></td>
              <td><div class="date date-disabled">1</div></td>
              <td><div class="date date-disabled">2</div></td>
              <td><div class="date date-disabled">3</div></td>
              <td><div class="date date-disabled">4</div></td>
              <td><div class="date date-disabled">5</div></td>
            </tr>
            <tr>
              <td><div class="date date-disabled">6</div></td>
              <td><div class="date date-disabled">7</div></td>
              <td><div class="date date-disabled">8</div></td>
              <td><div class="date date-disabled">9</div></td>
              <td><div class="date date-disabled">10</div></td>
              <td><div class="date date-disabled">11</div></td>
              <td><div class="date date-disabled">12</div></td>
            </tr>
            <tr>
              <td><div class="date date-disabled">13</div></td>
              <td><div class="date date-disabled">14</div></td>
              <td><div class="date date-disabled">15</div></td>
              <td><div class="date">16</div></td>
              <td><div class="date">17</div></td>
              <td><div class="date">18</div></td>
              <td><div class="date">19</div></td>
            </tr>
            <tr>
              <td><div class="date">20</div></td>
              <td><div class="date">21</div></td>
              <td><div class="date">22</div></td>
              <td><div class="date">23</div></td>
              <td><div class="date">24</div></td>
              <td><div class="date">25</div></td>
              <td><div class="date">26</div></td>
            </tr>
            <tr>
              <td><div class="date">27</div></td>
              <td><div class="date">28</div></td>
              <td><div class="date">29</div></td>
              <td><div class="date">30</div></td>
              <td><div class="date">31</div></td>
              <td><div class="date">&nbsp;</div></td>
              <td><div class="date">&nbsp;</div></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>-->
  <div
    class="flex gap-2 pl-6 -mx-6 overflow-x-scroll no-scrollbar flex-nowrap"
  ></div>
</template>

<script setup lang="ts">
const currentYear: number = new Date().getFullYear();
const locale = 'es';

const intlForMonths = new Intl.DateTimeFormat(locale, { month: 'long' });
const months = [...Array(12).keys()];

const intlForWeeks = new Intl.DateTimeFormat(locale, { weekday: 'short' });
const weekDays = [...Array(7).keys()].map((dayIndex) =>
  intlForWeeks.format(new Date(currentYear, 2, dayIndex + 1)),
);

const calendar = months.map((monthIndex) => {
  const monthName = intlForMonths.format(new Date(currentYear, monthIndex));
  const nextMonthIndex = (monthIndex + 1) % 12;
  const daysOfMonth = new Date(currentYear, nextMonthIndex, 0).getDate();
  const startsOn = new Date(currentYear, monthIndex, 1).getDay();

  return {
    daysOfMonth,
    monthName,
    startsOn,
  };
});

const calendarHtml = calendar
  .map(({ daysOfMonth, monthName, startsOn }) => {
    const days = [...Array(daysOfMonth).keys()];
    const firstDayAttributes = `class='first-day' style='--first-day-start: ${startsOn}'`;
    const htmlDaysName = weekDays
      .map((dayName) => `<li class='day-name'>${dayName}</li>`)
      .join('');
    const htmlDays = days
      .map(
        (day, index) =>
          `<li ${index === 0 ? firstDayAttributes : ''}>${day + 1}</li>`,
      )
      .join('');
    return `<h2>${monthName} ${currentYear}</h2><ol>${htmlDaysName}${htmlDays}</ol>`;
  })
  .join('');
</script>

<style>
.first-day {
  grid-column-start: var(--first-day-start, 0);
}

.search-dates-table {
  @apply border-separate;

  td {
    @apply relative box-border h-[43px] w-[45px] cursor-default border-0 bg-white p-0 text-center text-[rgb(34,34,34)];
  }

  .date {
    @apply relative mx-1 flex flex-col items-center justify-center rounded-full border-[1.5px] border-solid border-white text-sm font-semibold text-[rgb(34,34,34)];
  }

  .date-disabled {
    @apply text-[rgb(72,72,72)] no-underline opacity-25;
  }
}
</style>
