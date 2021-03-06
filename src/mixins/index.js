export const mixin = {
  props: {
    className: {
      type: [String, Array],
      default: ''
    },
    customStyle: {
      type: [String, Object],
      default: ''
    }
  },

  computed: {
    rootClassName() {
      const space = this.className.length ? ' ' : '';
      if(Array.isArray(this.className)) return space + this.className.join(' ');
      return space + this.className.trim();
    }
  }
}