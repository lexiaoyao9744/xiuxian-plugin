import { Level_up } from '../level.js';
import { selects } from '../../../index.js';

const regular = /^(#|＃|\/)?突破$/;
var res = onResponse(selects, async (e) => {
    let jixu_tupo = true;
    while (jixu_tupo) {
        jixu_tupo = Level_up(e, false);
    }
    
});

export { res as default, regular };
