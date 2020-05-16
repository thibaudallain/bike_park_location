require("@rails/ujs").start()
require("@rails/activestorage").start()
require("channels")

import { initMapbox } from '../plugins/init_mapbox';
import { initAutocomplete } from '../plugins/init_autocomplete';
import { slideCard } from '../components/slide';
import { getPosition } from '../components/locate';
import "bootstrap";

initMapbox();
initAutocomplete();
slideCard();
getPosition();
