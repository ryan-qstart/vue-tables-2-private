    import { merge } from '@generates/merger';

     module.exports = function(defaults, globalOptions, localOptions) {

      if (globalOptions)
       defaults = merge(defaults, globalOptions);

     localOptions = merge(defaults, localOptions);

     return localOptions;

   }
