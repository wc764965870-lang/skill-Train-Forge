(function () {
  const catalog = {};
  const dbBase = './assets/exercises/';
  const dbPage = 'https://github.com/yuhonas/free-exercise-db/tree/main/exercises/';

  function add(item) {
    catalog[item.id] = item;
  }

  function addPair(id, sourceId, name, tag, steps, mistake, note) {
    add({
      id: id,
      name: name,
      tag: tag,
      mode: 'pair',
      images: [dbBase + sourceId + '/0.jpg', dbBase + sourceId + '/1.jpg'],
      source: dbPage + sourceId,
      sourceLabel: '公共领域动作资料',
      credit: 'free-exercise-db · The Unlicense（公共领域动作数据集）',
      steps: steps,
      mistake: mistake,
      mediaNote: note || ''
    });
  }

  addPair('chest-pass', 'Medicine_Ball_Chest_Pass', '药球胸前平推', '周一 · 爆发激活',
    [['01 蓄力', '药球放在胸前，双脚站稳，膝盖微屈。'], ['02 平推', '胸口正对前方，双臂快速伸直，把球沿胸高推出。'], ['03 重置', '接球后先站稳，再开始下一次，不连续乱抛。']],
    '这才是“爆发激活”阶段里的具体动作。球过重会变成慢速力量推，不能练到速度。');

  addPair('squat', 'Barbell_Squat', '杠铃深蹲', '周一 · 主力量',
    [['01 起始', '脚掌三点压稳，杠铃落在上背，吸气收紧躯干。'], ['02 下蹲', '髋和膝同时弯曲，膝盖跟随脚尖方向。'], ['03 起身', '脚掌推地，胸口和髋部同步上升。']],
    '不要塌腰、膝盖内扣，也不要为了蹲得更深而失去躯干控制。');

  addPair('bench-press', 'Barbell_Bench_Press_-_Medium_Grip', '杠铃卧推', '周一 · 主力量',
    [['01 固定', '肩胛向后下收紧，脚掌踩稳，眼睛位于杠铃后方。'], ['02 下放', '手腕保持中立，杠铃可控地下放到胸部下缘。'], ['03 推起', '脚继续踩地，杠铃向上并略向肩架方向回推。']],
    '臀部不要离凳，杠铃不要弹胸，肩膀不要向耳朵耸起。');

  addPair('lat-pulldown', 'Wide-Grip_Lat_Pulldown', '高位下拉', '周一 · 垂直拉',
    [['01 就位', '大腿压紧固定垫，胸口轻抬，双手握距略宽于肩。'], ['02 下拉', '先把肩胛向下收，再让肘部向身体两侧下行。'], ['03 回位', '控制手臂伸直，不让配重片突然撞回。']],
    '不要大幅后仰，也不要靠甩动身体把横杆拉到胸前。');

  addPair('rdl', 'Romanian_Deadlift', '罗马尼亚硬拉', '周一 · 髋铰链',
    [['01 站稳', '杠铃贴大腿，膝盖微屈，肋骨和骨盆对齐。'], ['02 髋折叠', '臀部向后推，杠铃贴腿向下滑。'], ['03 站起', '大腿后侧拉紧后，用臀部把髋推回杠铃。']],
    'RDL 从站姿开始；不要蹲着把杠铃放到底，也不要弓背追求下放深度。');

  addPair('face-pull', 'Face_Pull', '绳索面拉', '周一 · 辅助动作',
    [['01 起始', '绳索设在眼睛高度，手臂伸直，躯干稳定。'], ['02 拉开', '肘部向外后方走，绳子两端拉向耳侧。'], ['03 回位', '肩胛受控前移，手臂慢慢伸直。']],
    '不要耸肩、仰身借力，也不要把动作做成只屈肘的二头弯举。');

  addPair('dead-bug', 'Dead_Bug', '死虫', '周一／周二 · 核心稳定',
    [['01 起始', '仰卧抬腿，髋膝约90度，腰背轻贴地面。'], ['02 伸展', '对侧手臂和腿缓慢伸远，保持肋骨下沉。'], ['03 回位', '腰部不拱起的前提下回到中间，再换边。']],
    '伸得越远不代表越好；一旦腰部离地，就缩短手脚移动距离。');

  add({
    id: 'jump-rope', name: '轻松跳绳', tag: '周二 · 热身动作', mode: 'video',
    media: './assets/videos/jump-rope.mp4', mediaType: 'video/mp4',
    source: 'https://www.pexels.com/video/person-doing-jump-rope-at-a-boxing-gym-8745329/', sourceLabel: 'Pexels 素材页',
    credit: 'Ron Lach · Pexels 免费许可',
    steps: [['01 站姿', '身体直立，肘部靠近躯干，肩膀放松。'], ['02 转绳', '主要用手腕转绳，不用整条手臂甩圈。'], ['03 落地', '前脚掌轻柔落地，跳起高度只需让绳通过。']],
    mistake: '热身回合保持轻松节奏；频繁绊绳时先降速，不追求双摇。'
  });

  add({
    id: 'boxing-fundamentals', name: '站架、刺拳与1–2退出', tag: '周二 · 空击主题', mode: 'video',
    media: './assets/videos/boxing.webm', mediaType: 'video/webm',
    source: 'https://commons.wikimedia.org/wiki/File:Boxing_training.webm', sourceLabel: 'Wikimedia 原始页面',
    credit: 'Evworo · CC BY-SA 3.0',
    mediaNote: '这是一个组合技术卡：同一回合只选“站架移动、刺拳距离、1–2退出”中的一个主题。',
    steps: [['01 站架移动', '移动时保持原有站距，前脚先向移动方向迈，后脚跟上。'], ['02 刺拳与1–2', '拳走直线，后手直拳由后脚蹬地和髋肩转动带出。'], ['03 退出', '组合结束立即小步后撤或侧移，双手回到护脸。']],
    mistake: '不要交叉脚、并脚或打完停在原地；每次出拳后都要回到能防守的位置。'
  });

  add({
    id: 'boxing-defense', name: '防守反击与步法', tag: '周二 · 技术动作', mode: 'video',
    media: './assets/videos/boxing.webm', mediaType: 'video/webm',
    source: 'https://commons.wikimedia.org/wiki/File:Boxing_training.webm', sourceLabel: 'Wikimedia 原始页面',
    credit: 'Evworo · CC BY-SA 3.0',
    mediaNote: '先慢速练单次防守，再接一到两拳反击；步法和平衡优先于速度。',
    steps: [['01 防守', '用小幅后仰、格挡或闪躲避开来拳，眼睛仍看向对手。'], ['02 反击', '身体回到稳定中线后再打直拳或短组合。'], ['03 移位', '反击后向侧面或后方移一步，离开对方正前方。']],
    mistake: '防守动作不要过大，也不要低头闭眼；失去平衡时不追加反击。'
  });

  add({
    id: 'bag-mitts', name: '沙袋／手靶组合', tag: '周二 · 应用回合', mode: 'gif',
    media: './assets/videos/boxing-heavy-bag.gif',
    source: 'https://commons.wikimedia.org/wiki/File:Man_boxing_training..gif', sourceLabel: 'Wikimedia 原始页面',
    credit: 'RusherXX · CC BY-SA 4.0',
    mediaNote: '沙袋或手靶是练习载体，不是一个单独拳法；本环节把前面的技术主题放到目标上。',
    steps: [['01 定主题', '每回合只设一个重点，例如刺拳距离或1–2后退出。'], ['02 控力量', '约70%力量，动作完整，拳碰到目标后立即回收。'], ['03 保节奏', '出拳、移动、观察交替，不连续闷头乱打。']],
    mistake: '不要把技术回合变成纯体能冲刺；一旦动作散乱就降低速度和力量。'
  });

  addPair('side-bridge', 'Side_Bridge', '侧桥', '周二 · 核心',
    [['01 支撑', '肘部在肩膀正下方，双脚叠放或前后错开。'], ['02 抬髋', '臀部离地，让头、胸、髋和脚形成直线。'], ['03 保持', '正常呼吸，达到计划时间后控制放下。']],
    '不要塌腰、耸肩或把身体转向地面；可以先用下侧膝盖支撑。');

  addPair('walking', 'Walking_Treadmill', '轻松步行', '周三／周五 · 有氧',
    [['01 起步', '先用容易交谈的速度走3–5分钟。'], ['02 稳定', '身体直立，手臂自然摆动，不扶着器械借力。'], ['03 结束', '逐步降速，呼吸恢复后再停下。']],
    '恢复日不追求速度和坡度；周五做 Zone 2 时用“能完整说话”控制强度。');

  addPair('ankle-circles', 'Ankle_Circles', '踝关节画圈', '周三／周五 · 活动度',
    [['01 固定', '坐稳或扶住支撑，让小腿保持不动。'], ['02 画圈', '脚尖缓慢画最大可控圆圈，每个方向重复。'], ['03 换侧', '动作平顺无疼痛，再换另一只脚。']],
    '不要用整条腿甩动；出现夹痛时减小幅度。');

  addPair('hip-flexor', 'Kneeling_Hip_Flexor', '跪姿髋屈肌拉伸', '周三／周五 · 活动度',
    [['01 跪姿', '一膝跪地，前脚踩稳，骨盆保持正对前方。'], ['02 收臀', '轻轻夹紧后侧臀部，让骨盆略向后卷。'], ['03 前移', '整体小幅前移，感觉后侧髋前方拉伸。']],
    '不要靠塌腰把身体推得很远；拉伸感应在髋前方，而不是腰部。');

  addPair('torso-rotation', 'Torso_Rotation', '胸椎转体', '周三／周五 · 活动度',
    [['01 固定下肢', '双脚与骨盆保持稳定，胸口朝前。'], ['02 转动胸廓', '从上背带动肩膀转向一侧，保持呼吸。'], ['03 回中换边', '控制回到正中，再向另一侧转动。']],
    '不要用膝盖和骨盆一起甩动，也不要追求腰部的极限扭转。');

  addPair('shoulder-stretch', 'Shoulder_Stretch', '肩部交叉拉伸', '周三 · 肩部活动',
    [['01 抬臂', '一侧手臂抬到胸前，肘部保持自然伸直。'], ['02 轻拉', '另一只手把上臂轻轻带向胸口。'], ['03 呼吸', '肩膀放松，保持20–30秒后换边。']],
    '不要用力压肘或耸肩；出现肩前方夹痛时停止。');

  add({
    id: 'medball-rotation', name: '药球旋转侧抛', tag: '周四 · 爆发激活', mode: 'image',
    media: './assets/exercises/medicine-ball-rotational-throw.png',
    credit: '本站生成教学图 · 无第三方人物或品牌素材',
    mediaNote: '左图是蓄力，右图是释放。站在墙侧面，球从远离墙的一侧髋部开始。',
    steps: [['01 蓄力', '侧对结实墙面，球放在远侧髋旁，膝盖微屈。'], ['02 转髋', '后脚蹬地并转动髋和胸廓，手臂最后跟上。'], ['03 侧抛', '球沿胸腰之间高度抛向墙面，接球站稳后再重复。']],
    mistake: '这是旋转侧抛，不是胸前平推、原地转体或过顶抛；不要只用手臂甩球。'
  });

  addPair('trap-bar', 'Trap_Bar_Deadlift', '六角杠硬拉', '周四 · 主力量',
    [['01 站入杠中', '脚掌位于六角杠中央，俯身握住手柄，背部中立。'], ['02 推地', '脚掌推开地面，膝和髋同时伸展。'], ['03 锁定回放', '站直但不后仰，再把髋向后送并控制放回。']],
    '不要先抬臀再用腰拉，也不要在顶端过度后仰。');

  addPair('bulgarian', 'Split_Squat_with_Dumbbells', '保加利亚分腿蹲', '周四 · 单腿力量',
    [['01 站距', '后脚脚背放在凳上，前脚向前站到能稳定下蹲的位置。'], ['02 下蹲', '前膝沿脚尖方向弯曲，后膝向地面下降。'], ['03 起身', '以前脚为主推地站起，骨盆保持正对前方。']],
    '先用自重找到平衡；不要把后脚当成主要发力脚。');

  add({
    id: 'assisted-pull', name: '辅助引体', tag: '周四 · 垂直拉', mode: 'video',
    media: './assets/videos/pull-ups.webm', mediaType: 'video/webm',
    source: 'https://commons.wikimedia.org/wiki/File:Pull-ups_-_exercise_demonstration_video.webm', sourceLabel: 'Wikimedia 原始页面',
    credit: 'FitnessScape · CC BY 3.0',
    mediaNote: '视频展示自重引体；辅助机只是在脚或膝下提供向上的帮助，肩胛和肘部路径相同。',
    steps: [['01 悬挂', '手臂伸直但肩胛受控，身体不要前后摆动。'], ['02 上拉', '先下压肩胛，再让肘部朝身体两侧和后方走。'], ['03 回位', '缓慢伸肘回到底部，不直接坠落。']],
    mistake: '辅助重量越大越轻松；不要用膝盖蹬垫或摆腿借力。'
  });

  addPair('landmine', 'Landmine_Linear_Jammer', '地雷管推举', '周四 · 推举选项',
    [['01 就位', '双手或单手把杆端放在肩前，身体稳定。'], ['02 斜上推', '收紧臀腹，沿器械轨迹向前上方推出。'], ['03 回位', '肩胛自然移动，控制杆端回到肩前。']],
    '图片展示站姿双手版本；训练计划也可使用半跪单手版本，重点都是斜上推而非垂直肩推。');

  addPair('db-shoulder-press', 'Dumbbell_One-Arm_Shoulder_Press', '单臂哑铃肩推', '周四 · 推举替代',
    [['01 固定', '哑铃放在肩侧，臀腹收紧，肋骨不要外翻。'], ['02 推起', '手臂向上伸展，前臂保持在哑铃正下方。'], ['03 下放', '控制哑铃回到肩侧，再开始下一次。']],
    '如果没有地雷管就选这个动作；不要通过后仰和塌腰把重量顶起。');

  addPair('seated-row', 'Seated_Cable_Rows', '坐姿划船', '周四 · 水平拉',
    [['01 坐稳', '双脚踩稳踏板，躯干直立，肩膀放松。'], ['02 划向躯干', '先收肩胛，再让肘部沿身体两侧向后走。'], ['03 前送', '手臂控制伸直，肩胛自然前移但不含胸塌腰。']],
    '不要大幅前后摇摆，也不要耸肩把把手拉得更远。');

  addPair('biceps-curl', 'Dumbbell_Bicep_Curl', '哑铃弯举', '周四 · 辅助动作',
    [['01 站稳', '手臂垂在身体两侧，肘部贴近躯干。'], ['02 弯举', '保持上臂不动，屈肘把哑铃举向肩部。'], ['03 下放', '缓慢伸肘到底，不让哑铃自由坠落。']],
    '不要靠摆髋、耸肩或肘部向前冲来完成次数。');

  addPair('pallof', 'Pallof_Press', 'Pallof 抗旋转推', '周四 · 核心抗旋转',
    [['01 侧对拉力', '侧身站在拉力器旁，把手放在胸前。'], ['02 向前推出', '收紧臀腹，双手向前伸直，身体仍朝正前方。'], ['03 回收', '抵抗侧向拉力，把手缓慢收回胸前。']],
    '任务是“不转”；不要让胸口、骨盆或膝盖被拉力带向器械。');

  addPair('bike', 'Bicycling_Stationary', '固定单车', '周五 · Zone 2 选项',
    [['01 调整', '座高让踩到底时膝盖仍有轻微弯曲。'], ['02 稳定踩踏', '阻力适中，肩颈放松，呼吸节奏稳定。'], ['03 控强度', '保持能完整说话的速度，不做冲刺。']],
    'Zone 2 是强度区间，不是动作名称；固定单车是其中一个具体选择。');

  addPair('elliptical', 'Elliptical_Trainer', '椭圆机', '周五 · Zone 2 选项',
    [['01 站稳', '脚掌完整贴住踏板，身体直立，目视前方。'], ['02 连续滑动', '手脚协调发力，动作平顺，不让膝盖内扣。'], ['03 控强度', '保持能完整说话的节奏，阻力不过高。']],
    '不要趴在扶手上借力；如膝或髋不适，改用步行或单车。');

  addPair('chest-stretch', 'Dynamic_Chest_Stretch', '动态胸肌拉伸', '周五 · 活动度',
    [['01 站直', '双臂在胸前合拢，肩膀远离耳朵。'], ['02 打开', '手臂向两侧打开，胸口轻微展开。'], ['03 往返', '在无痛范围内平顺往返，不用惯性猛拉。']],
    '不要挺腰代替胸椎和肩部活动，也不要把手臂甩到疼痛位置。');

  addPair('external-rotation', 'External_Rotation_with_Band', '弹力带肩外旋', '周五 · 肩部活动',
    [['01 固定肘部', '肘部弯曲约90度并贴近身体，肩膀放松。'], ['02 向外转', '前臂向外打开，肘部位置保持不动。'], ['03 控制回位', '缓慢回到起始位，始终保持轻阻力。']],
    '不要耸肩、转动躯干或让肘部离开身体。');

  const dayLibrary = [
    {
      day: '周一', concepts: ['热身', '爆发激活', '主力量', '辅助超级组'],
      demos: ['chest-pass', 'squat', 'bench-press', 'lat-pulldown', 'rdl', 'face-pull', 'dead-bug']
    },
    {
      day: '周二', concepts: ['热身', '空击回合', '沙袋／手靶回合', '技术分组', '整理'],
      demos: ['jump-rope', 'boxing-fundamentals', 'boxing-defense', 'bag-mitts', 'side-bridge', 'dead-bug']
    },
    {
      day: '周三', concepts: ['主动恢复', '活动度', '恢复管理'],
      demos: ['walking', 'ankle-circles', 'hip-flexor', 'torso-rotation', 'shoulder-stretch']
    },
    {
      day: '周四', concepts: ['热身', '爆发激活', '主力量', '推拉超级组', '辅助超级组'],
      demos: ['medball-rotation', 'trap-bar', 'bulgarian', 'assisted-pull', 'landmine', 'db-shoulder-press', 'seated-row', 'biceps-curl', 'pallof']
    },
    {
      day: '周五', concepts: ['进入状态', 'Zone 2 强度区间', '活动度'],
      demos: ['bike', 'walking', 'elliptical', 'ankle-circles', 'hip-flexor', 'torso-rotation', 'chest-stretch', 'external-rotation']
    },
    {
      day: '周六', concepts: ['热身', '空击回合', '沙袋／手靶回合', '专项体能', '整理'],
      demos: ['jump-rope', 'boxing-fundamentals', 'bag-mitts', 'boxing-defense']
    },
    {
      day: '周日', concepts: ['完全休息'],
      demos: []
    }
  ];

  const demoTabs = document.getElementById('demoTabs');
  const demoCard = document.getElementById('demoCard');
  const conceptChips = document.getElementById('conceptChips');
  let activeIds = [];

  function mediaMarkup(item) {
    if (item.mode === 'pair') {
      return '<div class="demo-media">' +
        '<span class="media-badge">真人双姿态分解 · 可离线</span>' +
        '<div class="pose-pair">' +
          '<figure class="pose-frame"><img src="' + item.images[0] + '" alt="' + item.name + '起始姿态"><figcaption>起始</figcaption></figure>' +
          '<div class="pose-arrow" aria-hidden="true">→</div>' +
          '<figure class="pose-frame"><img src="' + item.images[1] + '" alt="' + item.name + '完成姿态"><figcaption>完成</figcaption></figure>' +
        '</div></div>';
    }

    if (item.mode === 'image' || item.mode === 'gif') {
      return '<div class="demo-media">' +
        '<span class="media-badge">' + (item.mode === 'gif' ? '真人动图 · 可离线' : '双姿态教学图 · 可离线') + '</span>' +
        '<img src="' + item.media + '" alt="' + item.name + '动作演示">' +
        '</div>';
    }

    return '<div class="demo-media">' +
      '<span class="media-badge">本地真人视频 · 可离线</span>' +
      '<video id="activeDemoVideo" controls autoplay loop muted playsinline preload="auto" aria-label="' + item.name + '真人动作演示">' +
      '<source src="' + item.media + '" type="' + item.mediaType + '">你的浏览器无法播放该视频。</video>' +
      '<div class="speed-controls" role="group" aria-label="播放速度">' +
        '<button class="speed-btn active" type="button" data-speed="0.5">0.5×</button>' +
        '<button class="speed-btn" type="button" data-speed="0.75">0.75×</button>' +
        '<button class="speed-btn" type="button" data-speed="1">1×</button>' +
      '</div></div>';
  }

  function selectDemo(id) {
    const item = catalog[id];
    if (!item) return;

    Array.from(demoTabs.children).forEach(function (tab) {
      const selected = tab.dataset.demo === id;
      tab.classList.toggle('active', selected);
      tab.setAttribute('aria-selected', selected ? 'true' : 'false');
      tab.tabIndex = selected ? 0 : -1;
    });

    demoCard.innerHTML = mediaMarkup(item) +
      '<div class="demo-copy">' +
        '<div class="demo-heading"><div><span class="demo-tag">' + item.tag + '</span><h3>' + item.name + '</h3></div>' +
        (item.source ? '<a class="source-link" href="' + item.source + '" target="_blank" rel="noopener noreferrer">' + item.sourceLabel + '</a>' : '') + '</div>' +
        (item.mediaNote ? '<p class="media-note">' + item.mediaNote + '</p>' : '') +
        '<ol class="move-steps">' + item.steps.map(function (step) { return '<li><b>' + step[0] + '</b>' + step[1] + '</li>'; }).join('') + '</ol>' +
        '<p class="mistake">重点：' + item.mistake + '</p>' +
        '<p class="attribution">素材：' + item.credit + '</p>' +
      '</div>';

    const video = document.getElementById('activeDemoVideo');
    if (video) {
      video.playbackRate = 0.5;
      video.defaultPlaybackRate = 0.5;
      document.querySelectorAll('.speed-btn').forEach(function (button) {
        button.addEventListener('click', function () {
          const speed = Number(button.dataset.speed);
          video.playbackRate = speed;
          document.querySelectorAll('.speed-btn').forEach(function (item) { item.classList.toggle('active', item === button); });
        });
      });
    }
  }

  function renderDayDemos(index) {
    if (index < 0 || index >= dayLibrary.length) return;
    const day = dayLibrary[index];
    activeIds = day.demos.slice();
    document.getElementById('demo-title').textContent = day.day + ' · 具体动作演示';
    document.getElementById('demoSubcopy').innerHTML = '<span class="demo-count">' + activeIds.length + '</span> 个具体动作；上方灰色标签只是课程阶段，不作为动作演示。';
    conceptChips.innerHTML = day.concepts.map(function (concept) { return '<span class="concept-chip">' + concept + '</span>'; }).join('');

    demoTabs.innerHTML = '';
    if (!activeIds.length) {
      demoCard.innerHTML = '<div class="demo-copy"><div class="demo-heading"><div><span class="demo-tag">恢复日</span><h3>今天不安排训练动作</h3></div></div><p class="media-note">散步和轻松拉伸可以按身体感受选择；不要为了补课增加训练量。</p></div>';
      return;
    }
    activeIds.forEach(function (id, position) {
      const item = catalog[id];
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'demo-tab';
      button.dataset.demo = id;
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-label', '查看 ' + item.name + ' 动作演示');
      button.setAttribute('aria-selected', position === 0 ? 'true' : 'false');
      button.tabIndex = position === 0 ? 0 : -1;
      button.textContent = item.name;
      button.addEventListener('click', function () { selectDemo(id); });
      demoTabs.appendChild(button);
    });
    selectDemo(activeIds[0]);
  }

  demoTabs.addEventListener('keydown', function (event) {
    if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft'].includes(event.key)) return;
    event.preventDefault();
    const tabs = Array.from(demoTabs.children);
    const current = Math.max(0, tabs.indexOf(document.activeElement));
    const forward = event.key === 'ArrowDown' || event.key === 'ArrowRight';
    const next = (current + (forward ? 1 : -1) + tabs.length) % tabs.length;
    tabs[next].focus();
    selectDemo(tabs[next].dataset.demo);
  });

  window.renderDayDemos = renderDayDemos;
  renderDayDemos(Number.isInteger(window.currentDayIndex) ? window.currentDayIndex : 0);
})();
