require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import { initMapbox } from '../plugins/init_mapbox';
import "bootstrap";

document.addEventListener('turbolinks:load', () => {
  initMapbox();
})
