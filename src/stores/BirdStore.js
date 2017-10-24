// Import decorators to use in our store
// observable: for properties of our store we want to observe changes to
// action: for functions which will change the state of our store
// computed: for derived/calculated values from existing state
import { observable, action, computed } from 'mobx';

class BirdStore {}

// We want a single instance of our store app-wide
const singleton = new BirdStore();
export default singleton;
