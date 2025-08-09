import { Level_up } from '../level.js';
import { selects } from '../../../index.js';

const regular = /^(#|＃|\/)?突破$/;
var res = onResponse(selects, async (e) => {
    let jixu_tupo = true;
    let maxAttempts = 100; // 防止无限循环的最大尝试次数
    let attempts = 0;
    
    while (jixu_tupo && attempts < maxAttempts) {
        jixu_tupo = await Level_up(e, false); // 添加await关键字
        attempts++;
    }
    
    if (attempts >= maxAttempts) {
        console.warn(`突破尝试达到最大次数限制: ${maxAttempts}`);
    }
});

export { res as default, regular };
