import { LedWalker } from './animations/led_walker.js';
import { SurfaceWalker } from './animations/surface_walker.js';
import { HueWalker } from './animations/hue_walker.js';
import { PassthroughState } from './animations/passthrough_state.js';

export const Animations = {
  icosahedron: [
    PassthroughState,
    HueWalker,
    SurfaceWalker,
    LedWalker,
  ],

  grid: [
    HueWalker
  ],

  strip: [
    HueWalker
  ]
};
