// PALLADIUM 鞋款科技資料庫 (同步優化坐標)
const featuresData = {
    'waterproof': {
        title: '防水機能 WP+',
        desc: '內層搭載大廠級防水科技薄膜 (Membrane)，不僅能強力阻絕外部雨水滲入，更能排除鞋內濕氣。無論面對都市暴雨或戶外水窪，都能安心著用，保持雙腳全天候絕對乾爽。',
        origin: '34% 55%', 
        scale: 2.0         
    },
    'midsole': {
        title: '輕量舒適 EVA 中底',
        desc: '採用全新調校的高彈力 EVA 輕量科技中底，能大幅度吸收雙腳落地時來自地面的衝擊力，帶來極佳的極致緩震體感，即使在都市中長時間步行通勤也不易感到疲勞。',
        origin: '58% 56%',
        scale: 2.0
    },
    'outsole': {
        title: '抓地耐磨橡膠大底',
        desc: '輪胎級全地形抓地橡膠大底設計，搭配獨特加深溝槽紋路，全面提升在濕滑都市路面、騎樓瓷磚與戶外泥濘環境中的止滑力與耐磨耗度，踏出每一步都安穩自信。',
        origin: '81% 58%',
        scale: 2.0
    },
    'material': {
        title: '機能鞋面材質',
        desc: '高規格結合 Neoprene 潛水布、Ripstop 抗撕裂科技布料與高強度 Smooth PU 材質。兼具了全方位的雙腳包裹性、頂級耐用度，同時完美呈現黑系都市機能美學。',
        origin: '63% 48%',
        scale: 2.0
    },
    'lacelock': {
        title: 'LACE LOCK 快速鞋帶系統',
        desc: '配備專為戶外運動設計的快速抽繩鞋帶扣，一拉即緊、一按即鬆。免去傳統傳統綁鞋帶、鞋帶鬆脫的困擾，讓都市與戶外的切換穿脫更加快速便利。',
        origin: '45% 48%',
        scale: 2.0
    },
    'heel-tape': {
        title: 'HEEL PET TAPE 後跟拉環',
        desc: '經典強化的後跟工裝織帶拉環設計，符合人體工學的手指施力角度，耐拉扯不變形，大幅提升雙腳穿脫時的便利性與流暢度。',
        origin: '81% 38%',
        scale: 2.0
    }
};

// 取得 HTML 元素
const hotspots = document.querySelectorAll('.hotspot');
const shoeStage = document.getElementById('shoeStage');
const bottomSheet = document.getElementById('bottomSheet');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');

const featureImg = document.getElementById('featureImg');
const featureTitle = document.getElementById('featureTitle');
const featureDesc = document.getElementById('featureDesc');

// 監聽光點點擊事件
hotspots.forEach(hotspot => {
    hotspot.addEventListener('click', () => {
        const featureKey = hotspot.getAttribute('data-feature');
        const data = featuresData[featureKey];

        if (data) {
            // 1. 舞台依據設定的中心點局部放大
            shoeStage.style.transformOrigin = data.origin;
            shoeStage.style.transform = `scale(${data.scale})`;

            // 2. 動態更新抽屜內的 PNG 圖片與對應文字
            featureImg.src = `images/feature-${featureKey}.png`;
            featureTitle.textContent = data.title;
            featureDesc.textContent = data.desc;

            // 3. 滑出底部抽屜並開啟背景暗化遮罩
            bottomSheet.classList.add('active');
            overlay.classList.add('active');
        }
    });
});

// 還原初始畫面狀態
function resetStage() {
    shoeStage.style.transform = 'scale(1)';
    bottomSheet.classList.remove('active');
    overlay.classList.remove('active');
}

// 關閉事件綁定
closeBtn.addEventListener('click', resetStage);
overlay.addEventListener('click', resetStage);
