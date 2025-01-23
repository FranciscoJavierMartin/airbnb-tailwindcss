<template>
  <div ref="wrapper" class="input-range--circular input-range__wrapper">
    <output
      ref="output"
      class="input-range--circular-output"
      tabindex="0"
      @keydown.prevent="updateValue"
      @pointermove="movePointer"
    ></output>
    <input
      ref="input-range"
      type="range"
      class="input-range"
      min="1"
      max="12"
      step="1"
      data-range="circular"
      hidden
      v-model="value"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, useTemplateRef, reactive } from 'vue';

type Settings = {
  offset: number;
  varThumb: string;
};

const defaultSettings: Settings = {
  offset: -90,
  varThumb: '--rng-thumb-w',
};

const inputRangeElement = useTemplateRef<HTMLInputElement>('input-range');
const outputElement = useTemplateRef<HTMLOutputElement>('output');
const wrapperElement = useTemplateRef<HTMLDivElement>('wrapper');
const settings: Settings & DOMStringMap = defaultSettings as any;
const center = reactive<{ x: number; y: number }>({ x: 0, y: 0 });
const value = ref<number>(3);

function stringToType(obj: DOMStringMap): DOMStringMap {
  const object = Object.assign({}, obj);
  Object.keys(object).forEach((key) => {
    if (typeof object[key] === 'string' && object[key].charAt(0) === ':') {
      object[key] = JSON.parse(object[key].slice(1));
    }
  });
  return object;
}

function uuid(): string {
  return (([1e7] as any) + -1e3 + -4e3 + -8e3 + -1e11).replace(
    /[018]/g,
    (c: number) => {
      return (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16);
    },
  );
}

function rotate(x: number, y: number): number {
  return (Math.atan2(y - center.y, x - center.x) * 180) / Math.PI;
}

function setCenter(): void {
  const rect = wrapperElement.value!.getBoundingClientRect();
  center.x = rect.left + rect.width / 2;
  center.y = rect.top + rect.height / 2;
}

function updateCircle(start: number = 0): void {
  let angle: number = start;
  let rad: number =
    360 /
    (parseInt(inputRangeElement.value!.max, 10) -
      parseInt(inputRangeElement.value!.min, 10));
  let end: number = angle - settings.offset;

  if (end < 0) {
    end = end + 360;
  }

  if (start) {
    inputRangeElement.value!.value = Math.ceil(end / rad).toString();
  }

  wrapperElement.value!.dataset.value = inputRangeElement.value?.value;
  wrapperElement.value?.style.setProperty('--angle', `${angle}deg`);
  wrapperElement.value?.style.setProperty('--gradient-end', `${end}deg`);
}

function movePointer(event: PointerEvent): void {
  updateCircle(rotate(event.pageX, event.pageY));
}

function updateValue(event: KeyboardEvent): void {
  switch (event.key) {
    case 'ArrowLeft':
    case 'ArrowDown':
      inputRangeElement.value?.stepDown();
      updateCircle();
      break;
    case 'ArrowRight':
    case 'ArrowUp':
      inputRangeElement.value?.stepUp();
      updateCircle();
      break;
    default:
      break;
  }
}

onMounted(() => {
  Object.assign(settings, stringToType(inputRangeElement.value!.dataset));
  inputRangeElement.value!.id = uuid();
  (outputElement.value as any).for = inputRangeElement.value!.id;
  wrapperElement.value!.style.setProperty(
    settings.varThumb,
    getComputedStyle(inputRangeElement.value!).getPropertyValue(
      settings.varThumb,
    ),
  );

  setCenter();
  updateCircle();
});
</script>

<style lang="css" scoped>
.input-range {
  --rng-bdrs: 0.375rem;
  --rng-h: 0.75rem;
  --rng-m: 2rem 0;
  --rng-w: 100%;
  --rng-label-c: #333;
  --rng-label-fz: 0.75rem;
  --rng-label-off: 0.25rem;
  --rng-thumb-bdrs: 50%;
  --rng-thumb-bxsh: none;
  --rng-thumb-bxsh--focus: inset 0 0 0 0.25rem var(--rng-focus);
  --rng-thumb-bgc: #0960a5;
  --rng-thumb-h: 2rem;
  --rng-thumb-w: 2rem;
  --rng-thumb-z: 1;

  border-radius: var(--rng-bdrs);
  box-sizing: border-box;
  font-family: inherit;
  height: var(--rng-h);
  margin: var(--rng-m);
  outline: none;
  position: relative;
  width: var(--rng-w);
  -webkit-appearance: none;
  appearance: none;

  /* 
  =====
  THUMB
  =====
  */
  &::-moz-range-thumb {
    color: #000;
  }

  &::-moz-range-thumb,
  &::-webkit-slider-thumb {
    background-color: var(--rng-thumb-bgc);
    border-radius: var(--rng-thumb-bdrs);
    box-shadow: var(--rng-thumb-bxsh);
    cursor: ew-resize;
    height: var(--rng-thumb-h);
    margin-top: calc(0px - ((var(--rng-thumb-h) - var(--rng-h)) / 2));
    position: relative;
    width: var(--rng-thumb-w);
    z-index: var(--rng-thumb-z);
  }

  &:focus::-webkit-slider-thumb {
    box-shadow: var(--rng-thumb-bxsh--focus);
  }

  /* 
  =====
  TRACK
  =====
  */
  &::-moz-range-track,
  &::-webkit-slider-runnable-track {
    background: transparent;
    background-size: 100%;
    border-radius: var(--rng-bdrs);
    box-sizing: border-box;
    height: var(--rng-h);
  }

  &::-webkit-slider-runnable-track,
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
  }

  /* 
  ======
  LABELS
  ======
  */
  &::after,
  &::before {
    color: var(--rng-label-c);
    font-size: var(--rng-label-fz);
    line-height: 1;
    position: absolute;
    top: calc(var(--rng-h) + var(--rng-label-off));
    z-index: -1;
  }
}
/* 
=======
WRAPPER
=======
*/
.input-range__wrapper {
  flex: 1;
  height: 4rem; /* TODO */
  margin-bottom: 1rem;
  position: relative;

  .input-range {
    bottom: 1rem;
    left: 0;
    margin: 0;
    position: absolute;
  }
}

/*
========
CIRCULAR
========
*/
.input-range--circular {
  --circle-bgc: #fff;
  --circle-size: 290px;
  /* --track-bgc: hsl(219, 20%, 85%); */
  --track-bgc: #e6e6e6;
  /* --track-fill: cornflowerblue; */
  --track-fill: #ff0080;
  --thumb-size: 60px;
  --gradient-start: 0deg;
  --gradient-end: 0deg;

  /* box-shadow:
    0 -5px 5px rgba(0, 0, 0, 0.2),
    0 5px 5px #ffffff,
    inset 0 -20px 30px #ffffffe5,
    inset 0 10px 20px rgba(0, 0, 0, 0.2); */

  background-image: conic-gradient(
    var(--track-bgc) 0,
    var(--track-bgc) var(--gradient-start),
    var(--track-fill) var(--gradient-start),
    var(--track-fill) var(--gradient-end),
    var(--track-bgc) var(--gradient-end),
    var(--track-bgc)
  );
  border-radius: 50%;
  display: inline-block;
  height: var(--circle-size);
  margin: 0.25rem;
  position: relative;
  touch-action: none;
  width: var(--circle-size);

  &::before {
    align-items: center;
    background-color: var(--circle-bgc);
    border-radius: 50%;
    content: attr(data-value);
    display: flex;
    font-family: ui-sans-serif, ui-system, sans-serif;
    font-size: 2rem;
    height: calc(var(--circle-size) - (var(--thumb-size) * 2));
    justify-content: center;
    left: var(--thumb-size);
    position: absolute;
    top: var(--thumb-size);
    width: calc(var(--circle-size) - (var(--thumb-size) * 2));
    box-shadow:
      0 -5px 5px rgba(255, 255, 255, 0.4),
      inset 0 5px 3px rgba(255, 255, 255, 0.8),
      inset 0 -5px 5px rgba(0, 0, 0, 0.2),
      0 11px 18px rgba(0, 0, 0, 0.18);
      /* 0 -20px 30px rgba(255, 255, 255, 0.8); */
  }

  &::after {
    background-color: var(--track-fill);
    border-radius: 30px;
    content: '';
    height: var(--thumb-size);
    position: absolute;
    left: calc(50% - 5px);
    width: 10px;
  }
}

.input-range--circular-output {
  background: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--thumb-size);
  margin-top: calc(var(--thumb-size) / -2);
  transform: rotate(var(--angle));
  transform-origin: center left;
  width: 50%;
  z-index: 1;

  &::before {
    border: 5px solid var(--track-fill);
    background-color: #e9e9e9;
    box-shadow:
      0 2px 2px rgba(225, 0, 35, 0.5),
      inset 0 -1px 2px rgba(0, 0, 0, 0.35),
      inset 0 2px 2px #ffffff;
    border-radius: 50%;
    box-shadow: var(--thumb-bxsh, none);
    box-sizing: border-box;
    content: '';
    cursor: grab;
    display: inline-block;
    height: var(--thumb-size);
    position: absolute;
    right: 0;
    width: var(--thumb-size);
  }

  &::after {
    content: '';
    cursor: grab;
    background: linear-gradient(180deg, #d5d5d5 0%, #ffffff 83.75%);
    display: inline-block;
    position: absolute;
    right: 10px;
    top: 10px;
    width: calc(var(--thumb-size) - 20px);
    height: calc(var(--thumb-size) - 20px);
    border-radius: 50%;
    box-shadow: var(--thumb-bxsh, none);
    box-sizing: border-box;
  }

  &:focus {
    --thumb-bxsh: inset 0 0 0 2px #fff, inset 0 0 0 10px var(--track-fill);
    outline: none;
  }
}
</style>
