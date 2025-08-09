import { LevelMax_up } from '../level.js';
import { selects } from '../../../index.js';

const regular = /^(#|＃|\/)?破体$/;
var res = onResponse(selects, async (e) => {
    let jixu_tupo = true;
    let maxAttempts = 100; // 防止无限循环的最大尝试次数
    let attempts = 0;
    while (jixu_tupo && attempts < maxAttempts) {
    jixu_tupo = await LevelMax_up(e, false);
    attempts++;
    }
    if (attempts >= maxAttempts) {
        console.warn(`破体尝试达到最大次数限制: ${maxAttempts}`);
    }
});

export { res as default, regular };
