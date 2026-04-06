const K_CONFIG = { id: 'k', rows: 3, cols: 5 };
const A_CONFIG = { id: 'a', rows: 3, cols: 4 };
const C_CONFIG = { id: 'c', rows: 3, cols: 6 };

let currentCellId = null;
let inventory = JSON.parse(localStorage.getItem('warehouse_v5') || '{}');

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
    
    // UI에는 상위 4개 물품만 요약해서 보여줌 (요청사항)
    for(let i=1; i<=4; i++) {
        const summary = document.createElement('div');
        summary.className = 'item-summary';
        summary.id = `sum-${posId}-${i}`;
        summary.innerText = inventory[`${posId}-${i}`] || '';
        div.appendChild(summary);
    }
    return div;
}

function openModal(posId, label) {
    currentCellId = posId;
    document.getElementById('modalTitle').innerText = `📍 ${label} 상세입력`;
    const inputs = document.querySelectorAll('.modal-input-item');
    
    // 모달에 있는 6개의 입력창에 데이터를 채움
    inputs.forEach((input, index) => {
        input.value = inventory[`${posId}-${index + 1}`] || '';
    });
    document.getElementById('modalOverlay').style.display = 'flex';
}

function saveModal() {
    const inputs = document.querySelectorAll('.modal-input-item');
    inputs.forEach((input, index) => {
        const itemNumber = index + 1;
        const key = `${currentCellId}-${itemNumber}`;
        const val = input.value.trim();
        
        if(val) inventory[key] = val;
        else delete inventory[key];
        
        // 메인 UI 요약본은 1~4번 물품일 때만 업데이트
        if(itemNumber <= 4) {
            const sumEl = document.getElementById(`sum-${key}`);
            if(sumEl) sumEl.innerText = val;
        }
    });
    localStorage.setItem('warehouse_v5', JSON.stringify(inventory));
    closeModal();
}

// --- 이하 검색 및 자동완성 로직 (동일) ---

function onSearchInput() {
    const word = document.getElementById('search').value.trim().toLowerCase();
    const listEl = document.getElementById('suggestionList');
    listEl.innerHTML = '';
    if(!word) { listEl.style.display = 'none'; handleSearch(''); return; }
    const uniqueItems = [...new Set(Object.values(inventory))];
    const matches = uniqueItems.filter(item => item.toLowerCase().includes(word)).slice(0, 5);
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
    } else { listEl.style.display = 'none'; }
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

function onModalInput(inputEl) {
    const word = inputEl.value.trim().toLowerCase();
    const listEl = document.getElementById('modalSuggestionList');
    listEl.innerHTML = '';
    if (!word) { listEl.style.display = 'none'; return; }
    inputEl.parentNode.appendChild(listEl);
    const uniqueItems = [...new Set(Object.values(inventory))];
    const matches = uniqueItems.filter(item => item.toLowerCase().includes(word)).slice(0, 5);
    if (matches.length > 0) {
        listEl.style.display = 'flex';
        matches.forEach(match => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.innerText = match;
            item.onclick = (e) => {
                e.stopPropagation();
                inputEl.value = match;
                listEl.style.display = 'none';
            };
            listEl.appendChild(item);
        });
    } else { listEl.style.display = 'none'; }
}

function closeModal() {
    document.getElementById('modalSuggestionList').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
}

function exportData() {
    const data = localStorage.getItem('warehouse_v5');
    if (!data || data === '{}') { alert("백업 데이터 없음"); return; }
    navigator.clipboard.writeText(data).then(() => alert("데이터 복사 완료!"));
}

function importData() {
    const input = prompt("데이터 붙여넣기:");
    if (input) {
        try { JSON.parse(input); localStorage.setItem('warehouse_v5', input); location.reload(); }
        catch (e) { alert("잘못된 형식"); }
    }
}

initShelf(K_CONFIG);
initShelf(A_CONFIG);
initShelf(C_CONFIG);

document.addEventListener('click', (e) => {
    if (!e.target.closest('.search-container')) document.getElementById('suggestionList').style.display = 'none';
    if (!e.target.closest('.modal-input-group')) document.getElementById('modalSuggestionList').style.display = 'none';
});