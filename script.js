const K_CONFIG = { id: 'k', rows: 3, cols: 5 };
const A_CONFIG = { id: 'a', rows: 3, cols: 4 };
const C_CONFIG = { id: 'c', rows: 3, cols: 6 };

let currentCellId = null;
let inventory = JSON.parse(localStorage.getItem('warehouse_v5') || '{}');

// 초기 선반 생성
function initShelf(config) {
    const target = document.getElementById(`${config.id}-container`);
    if(!target) return;

    for(let c=1; c<=config.cols; c++) target.appendChild(createCell(`T-${c}`, `${config.id}-top-${c}`, 'zone-top'));
    for(let r=1; r<=config.rows; r++) {
        for(let c=1; c<=config.cols; c++) target.appendChild(createCell(`${r}-${c}`, `${config.id}-${r}-${c}`));
    }
    for(let c=1; c<=config.cols; c++) target.appendChild(createCell(`B-${c}`, `${config.id}-bot-${c}`, 'zone-bot'));
}

function createCell(label, posId, extraClass = '') {
    const div = document.createElement('div');
    div.className = `cell ${extraClass}`;
    div.id = `cell-${posId}`;
    div.onclick = () => openModal(posId, label);
    div.innerHTML = `<span class="cell-label">${label}</span>`;
    for(let i=1; i<=4; i++) {
        const summary = document.createElement('div');
        summary.className = 'item-summary';
        summary.id = `sum-${posId}-${i}`;
        summary.innerText = inventory[`${posId}-${i}`] || '';
        div.appendChild(summary);
    }
    return div;
}

// 모달 제어
function openModal(posId, label) {
    currentCellId = posId;
    document.getElementById('modalTitle').innerText = `📍 ${label} 상세입력`;
    const inputs = document.querySelectorAll('.modal-input-item');
    inputs.forEach((input, index) => {
        input.value = inventory[`${posId}-${index + 1}`] || '';
    });
    
    // 모달만 표시하고 포커스(키보드 자동 등장) 기능은 제거했습니다.
    document.getElementById('modalOverlay').style.display = 'flex';
}

function closeModal() {
    document.getElementById('modalSuggestionList').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
}

function saveModal() {
    const inputs = document.querySelectorAll('.modal-input-item');
    inputs.forEach((input, index) => {
        const key = `${currentCellId}-${index + 1}`;
        const val = input.value.trim();
        if(val) inventory[key] = val;
        else delete inventory[key];
        const sumEl = document.getElementById(`sum-${key}`);
        if(sumEl) sumEl.innerText = val;
    });
    localStorage.setItem('warehouse_v5', JSON.stringify(inventory));
    closeModal();
}

// 검색 및 추천 기능
function onSearchInput() {
    const word = document.getElementById('search').value.trim().toLowerCase();
    const listEl = document.getElementById('suggestionList');
    listEl.innerHTML = '';

    if(!word) {
        listEl.style.display = 'none';
        handleSearch('');
        return;
    }

    const uniqueItems = [...new Set(Object.values(inventory))];
    const matches = uniqueItems
        .filter(item => item.toLowerCase().includes(word))
        .slice(0, 5);

    if(matches.length > 0) {
        listEl.style.display = 'flex';
        matches.forEach(match => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.innerText = match;
            item.onclick = (e) => {
                e.stopPropagation();
                document.getElementById('search').value = match;
                listEl.style.display = 'none';
                handleSearch(match);
            };
            listEl.appendChild(item);
        });
    } else {
        listEl.style.display = 'none';
    }
    handleSearch(word);
}

function handleSearch(word) {
    const query = word.toLowerCase();
    document.querySelectorAll('.cell').forEach(c => c.classList.remove('found'));
    if(!query) return;

    Object.keys(inventory).forEach(key => {
        if(inventory[key].toLowerCase().includes(query)) {
            const posId = key.split('-').slice(0, -1).join('-');
            const cell = document.getElementById(`cell-${posId}`);
            if(cell) cell.classList.add('found');
        }
    });
}

// 백업 및 복구
function exportData() {
    const data = localStorage.getItem('warehouse_v5');
    if (!data || data === '{}') { alert("백업 데이터 없음"); return; }
    navigator.clipboard.writeText(data).then(() => alert("데이터가 복사되었습니다."));
}

function importData() {
    const input = prompt("데이터를 붙여넣으세요:");
    if (input) {
        try {
            JSON.parse(input);
            localStorage.setItem('warehouse_v5', input);
            location.reload();
        } catch (e) { alert("잘못된 형식입니다."); }
    }
}

// 초기화 실행
initShelf(K_CONFIG);
initShelf(A_CONFIG);
initShelf(C_CONFIG);

// 검색창 밖 터치 시 추천목록 닫기
document.addEventListener('click', (e) => {
    // 검색창 추천 리스트 닫기
    if (!e.target.closest('.search-container')) {
        document.getElementById('suggestionList').style.display = 'none';
    }
    // 모달창 추천 리스트 닫기
    if (!e.target.closest('.modal-input-group')) {
        document.getElementById('modalSuggestionList').style.display = 'none';
    }
});

function onModalInput(inputEl) {
    const word = inputEl.value.trim().toLowerCase();
    const listEl = document.getElementById('modalSuggestionList');
    listEl.innerHTML = '';

    if (!word) {
        listEl.style.display = 'none';
        return;
    }

    // 현재 입력 중인 칸 바로 아래로 추천 리스트 이동
    inputEl.parentNode.appendChild(listEl);

    // 전체 데이터에서 중복 제거된 물품 목록 가져오기
    const uniqueItems = [...new Set(Object.values(inventory))];
    
    // 현재 입력어와 일치하는 항목 찾기 (최대 5개)
    const matches = uniqueItems
        .filter(item => item.toLowerCase().includes(word))
        .slice(0, 5);

    if (matches.length > 0) {
        listEl.style.display = 'flex';
        matches.forEach(match => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.innerText = match;
            item.onclick = (e) => {
                e.stopPropagation();
                inputEl.value = match; // 클릭한 추천어로 값 변경
                listEl.style.display = 'none';
            };
            listEl.appendChild(item);
        });
    } else {
        listEl.style.display = 'none';
    }
}