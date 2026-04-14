const ALIAS_MAP = {
  FTW0025: "GSS202EW-D1-4QGN-US (T-PJT)",
  FTV0129: "VCD3FLC-3E-04MRFF-PCR-DM-EP",
  FTV0131: "VCD3FLC-3D-04MRFMR-PCR-DM-EP",
  FTW0046: "GSS151W-A3-1NGA-KR",
  "FTW0132-2": "SEC P4 Airfirst BSGS PJT Truck scale",
  "FTW0132-3": "SEC P4 Airfirst BSGS PJT Truck scale",
  FTV0640: "VCDSC-04M-MIG-DM-EPH",
  FTV0657: "VCDSC-04F-MIR-DM-EPH",
  FTW0040: "GSS151W-A2-1DXA-KR",
  FTV0029: "VCDSC-08M-MIR-DM-EP76",
  FTV0027: "VCDSC-04M-MIR-DM-EP",
  FTW0064: "GSS202W-A3-4QGN-KR",
  FTW0108: "GSS202W-A3-4QDN-KR",
  FTB0001: "IVS-BR02",
  FTV0031: "VCDSC-04F-MIG-DM-EP",
  FTV0030: "VCDSC-04F-MIR-DM-EP",
  FTV0009: "VCDLC-04M-PCR-DM-EPKZ",
  FTV0079: "VCDLC-04M-PCV-DM-EPKZ",
  FTV0125: "VCDLC-04M-MW-DM-EP-PN",
  FTV0036: "VCDLC-08M-MR-DM-EP76-PN",
  FTW0134: "WIGHT SCALE Modify",
  FTV0005: "VCDLC-08F-PCR-DM-EPKZ",
  FTV0004: "VCDLC-04F-PCG-DM-EPKZ",
  FTV0064: "VCDLC-04F-PCV-DM-EPKZ",
  FTV0039: "VCDHC-04F-PCG-DM-EP-S002",
  FTV0006: "VCDHC-04F-PCV-DM-EP-S002",
  FTV0068: "VCDLC-04F-PCG-3-DM-EPKZ",
  FTV0048: "VCDLC-08M-PCR-DM-EPKZ",
  FTV0074: "VCDHC-04F-PCV-DM-EP-S002-PI",
  FTV0021: "VCDHC-04F-PCG-DM-EP-S002-PI",
  FTV0648: "VCDLC-08M-PCR-DM-EPKZ-PI",
  FTV0018: "VCDLC-08F-PCR-DM-EPKZ-PI",
  FTV0035: "VCDLC-04M-MR-DM-EP-PN",
  FTV0044: "VCDLC-04F-MR-DM-EP-PN",
  FTV0115: "VCDLC-04M-MG-DM-EP-PN",
  FTV0051: "VCDHC-04F-DM-EP-S002-PN",
  FTV0080: "VCDLC-04F-MG-DM-EP-PN",
  FTV0678: "VCCBC-04M-DM-EP-K",
  FTV0205: "VCDHHFC-08M-RIR-DM-EP",
  FTV0623: "VCDLC-08M-MR-DM-EP76-PI-PN",
  FTV0108: "VCDLC-04M-MR-DM-EP-PI-PN",
  FTV0213: "VCDLC-04M-MG-DM-EP-PI-PN",
  FTV0088: "VCCBC-04M-DM-BA",
  FTV0649: "VCCBC-04M-DM-EP",
  FTV0665: "VCCBC-04M-K-BA",
  FTV0294: "VCDSC-12M-MIW-DM-EP",
  "FTW0145-2": "SKH Y1 PROJECT Truck scale",
  "FTW0145-3": "SKH Y1 PROJECT Truck scale",
  "FTW0147-1": "AF社 P4 ISO BSGS Project Truck Scale",
  "FTW0147-2": "AF社 P4 ISO BSGS Project Truck Scale",
  "FTW0147-3": "AF社 P4 ISO BSGS Project Truck Scale",
  FTV0007: "VCDHC-04M-PCR-DM-EP-S002",
  FTV0056: "VCDSC-08F-MIR-DM-EP",
  FTV0008: "VCDLC-04F-PCR-DM-EPKZ",
  FTV0656: "VCDSC-08M-MIR-DM-EP76H",
  FTW0031: "GSS151W-A3-1DGA-KR (EQ)",
  FTV0095: "VCDLC-04MR-PCR-DM-EP",
  FTV0099: "VCDLC-04F-PCR-DM-EP",
  FTV0093: "VCD3FLC-3D-04MR-PCR-DM-EP",
  FTV0094: "VCD3FLC-3D-04F-PCR-DM-EP",
  FTV0098: "VCD3FLC-4M-04FFFMR-PCR-DM-EP",
  FTV0097: "VCDLC-04F-MR-DM-EPH",
  FTW0029: "GSS151W-A2-1DXA-KR (EQ)",
  FTW0028: "GSS151W-A2-1DXA-US",
  FTW0027: "GSS151W-A3-1DGA-US",
  FTV0643: "VCDSC-04F-MIG-DM-EPH",
  FTV0105: "VCDBLC-FP304F-PCVR-DM-EP-S002",
  FTV0066: "VCDBHC-FP304F-PCVR-DM-EP-S002",
  FTR0003: "RCTS6C-04MX-122-2",
  "FTW0046-2": "GSS151W-A3-1NGS-KR",
  FTV0015: "VCDLC-04F-MR-DM-EP",
  FTV0019: "VCDHC-04F-PCR-DM-EP-S002",
  FTV0199: "VCDHC-04M-MR-DM-EP-S002",
  FTV0118: "VCDLC-04F-PCR-DM-EPKZ-PI",
  FTV0631: "VCD3FLC-4M-04MR-PCR-DM-EP",
  FTW0031: "GSS151W-A3-1DGA-KR (EQ)",
  FTW0086: "GSS202EW-D2-4QGN-KR",
  FTV0092: "VCDLC-04F-POG-DM-EP",
  FTA0005: "FUADM#-4-1c",
  FTS0044: "S2V-24-04-K",
  "FTW0113-2": "GSS151W-A2-1EGA-KR(EQ)",
  FTA0004: "FUADP#-4-3b",
  FTV0184: "VCDBHC-FP304F-PCVR-DM-EP-2PI",
  FTV0185: "VCDBLC-FP304F-PCVR-DM-EP-2PI",
  FTV0642: "VCDSC-04M-MIR-DM-EPH",
  FTV0145: "VCCBC-04M-K-EP",
  FTR0004: "RCTS6C-04MX-122-2H",
  FTW0008: "GSS151W-A3-1JGS-KR (JGA X)",
  FTW0112: "GSS151W-A2-1OXA-KR",
  FTV0658: "VCDSC-04F-MIW-DM-EPH",
  FTV0283: "VCDSC-04M-MIW-DM-EPH",
  FTV0291: "VCDLC-08M-MR-DM-EP76H",
  "FTB0001-6": "IVS-BR02 (R2.0)",
  FTW0013: "W/S 상반 수리비용 (교체)",
  FTV0645: "VCDLC-04F-MW-3-DM-EP-PN-L76.2",
  "FTB0001-12": "IVS-BR02 (R2.0) 900mm",
  FTW0006: "GSS151W-A2-1JXS-KR",
  FTV0041: "VCDHC-04F-DM-EP-S002",
  FTV0293: "VCDBHC-FP304F-PCBR-DM-EP-S001",
  "FTW0039-3": "GSS151W-A2-1NXA-KR(EQ) (2WIRE_T6)",
  "FTW0046-1": "GSS151W-A3-1NGA-KR(EQ) (3WIRE)",
  FTW0005: "GSS151W-A3-1JGA-KR",
  FTV0621: "VCDLWB-04T-PCG-DM-EP54",
  FTV0167: "VCDLC-04F-PCR-DM-EPKZ-PFA",
  FTV0147: "VCCBC-08M-DM-EP",
  FTV0641: "VCDSC-04M-MIG-DM-EPH-PFA",
  FTV0020: "VCDHC-04M-PCV-DM-EP-S002",
  FTV0010: "VCDBHC-FP304F-PCVR-DM-EP-S001",
  FTW0117: "GSS151W-A3-2KGA-KR",
  FTV0268: "VCDSC-08F-MIR-DM-EPH",
  FTV0032: "VCDSC-04M-MIG-DM-EP",
  FTV0049: "VCDSC-04M-MIW-DM-EP",
  "FTW0005-1": "GSS151W-A3-1JGA-KR(EQ)",
  FTV0252: "VCCBC-04M-DM-EP-P",
  FTV0038: "UCC-C660L10-DM-EP",
  FTV0132: "VCD3FLC-3D-04MRMRF-PCR-DM-EP",
  FTV0133: "VCD3FLC-3E-04FFMR-PCR-DM-EP",
  FTV0134: "VCD3FLC-3F-04FMRF-PCR-DM-EP",
  FTV0135: "VCDLC-04FMR-PCR-DM-EP",
  FTV0130: "VCD3FLC-2A-04F-POR-DM-EP",
  FTV0145: "VCCBC-04M-K-EP",
  FTW0153: "BSGS Wight Scale 설치",
  "FTW0109-2": "GSS151W-A2-1EXA-KR(EQ)",
  "FTW0023-1": "GSS151W-A2-1EGB-KR(EQ)",
  "FTW0024-1": "GSS151W-A2-1EGC-KR(EQ)",
  "FTW0112-1": "GSS151W-A2-1OXA-KR(EQ)",
  "FTS0003-1": "S2V-24-01_IB",
  "FTS0005-1": "S2V-24-06-02_IB",
  "FTS0002-1": "S2V-02_IB",
  FTR0016: "RCTS6C-04F-120-2V",
  FTR0017: "RCTS6C-08M-120-2",
  FTA0004: "FUADP#_4_3b",
  FTA0005: "FUADM#_4_1c",
  FTS0046: "S2V-32-08-K",
  FTS0049: "S2V-32-02-K",
  FTW0113: "GSS151W-A2-1EGA-KR",
  FTV0001: "VCDLC-04F-MG-DM-EP",
  FTS0047: "S2V-36-08-K",
  FTV0073: "VCDHWB-04T-PCG-DM-EP-S001",
  FTV0222: "VCDHWB-04T-PCR-DM-EP-S001",
  FTV0149: "VCDDHC-04F-MIG-DM-EP-S001",
  FTV0069: "VCDSC-04F-MIW-DM-EP",
  FTS0032: "MV290-14-C4-DS-A14",
  "FTS0001-1": "S2V-30-04_IB",
  "FTS0013-1": "S2V-04_IB",
  FTV0036: "VCDLC-08M-MR-DM-EP76",
  FTV0256: "VCDLC-04MR-MG-DM-EP-PFA",
  FTV0258: "VCDLC-04MR-PCR-DM-EP-PFA",
  FTV0255: "VCDLC-04F-POG-DM-EP-PFA",
  FTV0260: "VCD3FLC-3F-04MR-PCR-DM-EP-PFA",
  FTV0217: "VCD3FLC-3E-04F-PCR-DM-EP",
  FTV0617: "VCD3FLC-3F-04MR-PCR-DM-EP",
  FTV0162: "VCDLC-04MR-MG-DM-EP",
  FTW0060: "GSS방수-SCN-16-4P 4.5M+편조 ",
  FTW0008: "GSS151W-A3-1JGS-KR",
  FTV0166: "VCDLC-04F-MR-DM-EP-PN-PFA",
  FTW0003: "GSS500W-A2-2KXN-KR",
  FTW0033: "GSS151W-A2-2OXZ-KR",
  FTR0010: "RCTS6C-04F-240-2",
  FTV0676: "VCCBC-04M-K-EP-K",
  "FTW0039-2": "GSS151W-A2-1NXS-KR",
  FTR0019: "RCTS6C-08M-132-2",
  FTR0015: "RCTS6C-08M-122-2",
  FTR0012: "RCTS6C-04F-230-2",
  FTV0265: "VCDSC-04M-MIG-DM-EPH-PI",
  FTV0274: "VCDSC-04F-MIG-DM-EPH-PI",
  FTV0271: "VCDSC-04F-MIR-DM-EPH-PI",
  FTV0272: "VCDSC-04M-MIR-DM-EPH-PI",
  FTV0273: "VCDSC-08M-MIR-DM-EP76H-PI",
  FTB0002: "IVS-BS13",
  "FTW0112-2": "GSS151W-A2-1OXA-CN(EQ)",
  "FTW0113-3": "GSS151W-A2-1EGA-CN(EQ)",
  "FTB0001-8": "IVS-BR02 (R2.0) (CCC)",
  FTV0275: "VCDDHC-04F-MIR-DM-EPH-S001",
  FTV0276: "VCDDHC-04M-MIR-DM-EPH-S001",
  FTW0141: "GSS151W-A2-1OGA-KR(EQ)",
  FTV0136: "VCD3FLC-3E-04MRFF-PCR-DM-EP-F",
  FTV0138: "VCD3FLC-3D-04MRFMR-PCR-DM-EP-F",
  FTV0139: "VCD3FLC-3D-04MRMRF-PCR-DM-EP-F",
  FTV0140: "VCD3FLC-3E-04FFMR-PCR-DM-EP-F",
  FTV0141: "VCD3FLC-3F-04FMRF-PCR-DM-EP-F",
  FTV0142: "VCDLC-04FMR-PCR-DM-EP-PFA",
  FTV0137: "VCD3FLC-2A-04F-POR-DM-EP-F",
  FTV0307: "VCDCLC-08F-PCR-LV-EPKZ",
  FTV0233: "VCDLHFC-12F-DM-EP",
  FTV0652: "VCD3FLC-3D-04MRFF-PCR-DM-EP",
  FTV0075: "VCDLC-04M-POR-DM-EPKZ",
  "FTW0006-1": "GSS151W-A2-1JXS-KR",
  FTW0079: "GSS151W-A2-1SXA-KR",
  FTW0080: "GSS151W-A2-1TXA-KR",
  FTV0632: "VCDLC-04MR-MG-DM-EPH",
  FTR0020: "RCTS6C-08F-230-2",
  FTR0009: "RCM3C-04F-120-2",
  FTV0259: "VCDLC-04F-PCR-DM-EP-PFA",
  "FTS0006-1": "S2V-12-FCP-6",
  FTV0007: "VCDHC-04M-PCR-DM-EP- S002",
  FTV0286: "VCDSC-08F-MIG-DM-EPH",
  FTV0287: "VCDSC-08M-MIG-DM-EP76H",
  FTR0005: "RCTS6C-04MX-122-2V",
  FTR0006: "RCTS6C-04F-220-2",
  FTV0310: "VCDLHFC-12F08F-DM-EPH",
  FTV0311: "VCDLHFC-12MR-MR-DM-EPH",
  FTV0183: "VCDLHFWB-12T-DM-EP",
  "FTB0001-6": "IVS-BR02 (R2.0)",
  FTR0021: "RCTS6C-04F-230-2V",
  FTV0104: "VCDSC-04F-MIG-DM-EP-PI",
  FTV0070: "VCDDHC-04F-MIR-DM-EP-S001",
  FTV0071: "VCDDHC-04M-MIR-DM-EP-S001",
  FTV0107: "VCDLC-04F-MR-DM-EP-PI-PN",
  FTV0286: "VCDSC-08F-MIG-DM-EPH",
  FTV0656: "VCDSC-08M-MIR-DM-EP76H",
  FTV0309: "VCDLC-12F-PC-SL-EP",
  "FTW0046-3": "GSS151W-A3-1NGS-KR(EQ) (3WIRE)",
  "FTW0039-4": "GSS151W-A2-1NXS-KR(EQ) (2WIRE_T6)",
  FTW0011: "GSS251WH-A3-1DGA-KR",
  FTV0089: "VCDLC-04F-MR-DM-EP-PI",
  FTV0254: "VCDLC-04F-PCG-DM-EPKZ-PFA",
  FTV0110: "VCDLC-04F-PCG-DM-EPKZ-PI",
  FTW0154: "GSS151W-A3-1OGS-KR(EQ)",
  FTV0082: "VCDHC-04M-PCV-DM-EP-S002-PI",
  FTV0189: "VCDLC-04F-PCV-DM-EPKZ-PI",
  FTV0313: "VCDDHC-04F-MIW-DM-EP-S001-PI",
  FTV0280: "VCDLC-04F-MR-DM-EPH-PFA",
  FTV0278: "VCD3FLC-3D-04MR-PCR-DM-EP-F",
  FTV0257: "VCD3FLC-3D-04F-PCR-DM-EP-PFA",
  FTV0277: "VCD3FLC-2C-04F-PCR-DM-EP-F",
  FTV0279: "VCD3FLC-4M-04FFFMR-PCR-DM-EP-F",
  "FTB0001-9": "IVS-BR02-T (R2.0)",
  FTV0179: "VCCBC-04M-K-BA-K",
  "FTB0009-3": "Barcode 수리(3)",
  FTW0155: "전자저울(PBII-150)",
  FTV0013: "UCC-J2214RL10-DM-EP",
  FTV0105: "VCDBLC-FP304F-PCVR-DM-EP-S002",
  FTV0289: "VCDSWB-08T-MIR-DM-EP69H",
  FTA0015: "FUADPC#-4",
  FTC0001: "FCSI-A01",
  FTC0002: "FCSI-B01",
  FTC0004: "FCSI-C02",
  FTA0016: "FUADMC#-4",
  FTV0204: "VDPAC110MC-04-SLEP-B03",
  FTA0019: "FUADMC#_6",
  FTA0018: "FUADPC#_6",
  FTV0059: "VCDLC-04F-PCV-3-DM-EPKZ",
  FTV0195: "VCDLC-04F-MG-DM-EP-PI-PN",
  FTV0042: "VCDHHFC-08M-RIS-DM-EP",
  FTS0051: "MV290-01-C4-A",
  FTR0022: "RCTS6C-04M-132-2",
  FTV0298: "VCDSC-04F-MIW-DM-EPH-PI",
  "FTW0062-3": "GSS151W-A2-1DXA-CN (EQ)",
  FTV0034: "UCC-C330L10-DM-EP(CGA 330)",
  FTV0038: "UCC-C660L10-DM-EP(CGA 660)",
  FTV0318: "UCC-C330L10-DM-EP-E(CGA 330)",
  FTV0319: "UCC-C660L10-DM-EP-E(CGA 660)",
  FTV0320: "UCC-D634-DM-EP(DISS 634)",
  FTV0053: "UCC-J2214LL10-DM-EP",
  FTV0321: "VCDLC-04MRF-PCR-DM-EP",
  FTV0655: "VCD3FLC-3D-04MR-PCR-DM-EP85.6",
  FTC0003: "FCSI-C01",
  FTC0006: "FCSI-R-D04",
  FTC0007: "FCSI-R-D05",
  FTC0005: "FCSI-R-D03",
  FTV0322: "VCDCHC-04F-PCG-LV-EP-S002",
  FTV0323: "VCDCBHC-FP304F-PCVR-LV-EP-S002",
  FTV0324: "VCDCBLC-FP304F-PCVR-LV-EP-S002",
  FTV0325: "VCDCSC-04F-MIR-LV-EPH",
  FTV0326: "VCDCSC-04M-MIR-LV-EPH",
  FTV0616: "VCDLWB-04T-PCR-DM-EP",
};

const K_CONFIG = { id: "k", rows: 3, cols: 5 };
const A_CONFIG = { id: "a", rows: 3, cols: 4 };
const C_CONFIG = { id: "c", rows: 3, cols: 6 };
const D_CONFIG = { id: 'd', rows: 3, cols: 3, hasBottom: false };

let currentCellId = null;
let inventory = JSON.parse(localStorage.getItem("warehouse_v5") || "{}");

function initShelf(config) {
    const target = document.getElementById(`${config.id}-container`);
    if(!target) return;

    // TOP 생성
    for(let c=1; c<=config.cols; c++) target.appendChild(createCell(`T-${c}`, `${config.id}-top-${c}`, 'zone-top'));
    
    // 중간 행 생성
    for(let r=1; r<=config.rows; r++) {
        for(let c=1; c<=config.cols; c++) target.appendChild(createCell(`${r}-${c}`, `${config.id}-${r}-${c}`));
    }
    
    // BOTTOM 생성 (config.hasBottom이 true일 때만 생성)
    if(config.hasBottom) {
        for(let c=1; c<=config.cols; c++) target.appendChild(createCell(`B-${c}`, `${config.id}-bot-${c}`, 'zone-bot'));
    }
}

function createCell(label, posId, extraClass = "") {
  const div = document.createElement("div");
  div.className = `cell ${extraClass}`;
  div.id = `cell-${posId}`;
  div.onclick = () => openModal(posId, label);
  div.innerHTML = `<span class="cell-label">${label}</span>`;

  // UI에는 상위 4개 물품만 요약해서 보여줌 (요청사항)
  for (let i = 1; i <= 4; i++) {
    const summary = document.createElement("div");
    summary.className = "item-summary";
    summary.id = `sum-${posId}-${i}`;
    summary.innerText = inventory[`${posId}-${i}`] || "";
    div.appendChild(summary);
  }
  return div;
}

function openModal(posId, label) {
  currentCellId = posId;
  document.getElementById("modalTitle").innerText = `📍 ${label} 상세입력`;
  const inputs = document.querySelectorAll(".modal-input-item");

  // 모달에 있는 6개의 입력창에 데이터를 채움
  inputs.forEach((input, index) => {
    input.value = inventory[`${posId}-${index + 1}`] || "";
  });
  document.getElementById("modalOverlay").style.display = "flex";
}

function saveModal() {
  const inputs = document.querySelectorAll(".modal-input-item");
  inputs.forEach((input, index) => {
    const itemNumber = index + 1;
    const key = `${currentCellId}-${itemNumber}`;
    const val = input.value.trim();

    if (val) inventory[key] = val;
    else delete inventory[key];

    // 메인 UI 요약본은 1~4번 물품일 때만 업데이트
    if (itemNumber <= 4) {
      const sumEl = document.getElementById(`sum-${key}`);
      if (sumEl) sumEl.innerText = val;
    }
  });
  localStorage.setItem("warehouse_v5", JSON.stringify(inventory));
  closeModal();
}

// --- 이하 검색 및 자동완성 로직 (동일) ---
function onSearchInput() {
  const word = document.getElementById("search").value.trim().toLowerCase();
  const listEl = document.getElementById("suggestionList");
  listEl.innerHTML = "";
  if (!word) {
    listEl.style.display = "none";
    handleSearch("");
    return;
  }

  const uniqueItems = [...new Set(Object.values(inventory))];

  // 동의어 사전에서도 검색어와 일치하는 '원래 이름'들을 후보에 추가
  let extraMatches = [];
  for (let alias in ALIAS_MAP) {
    if (alias.toLowerCase().includes(word)) {
      extraMatches.push(ALIAS_MAP[alias]);
    }
  }

  const allMatches = [...new Set([...uniqueItems, ...extraMatches])]
    .filter(
      (item) =>
        item.toLowerCase().includes(word) || extraMatches.includes(item),
    )
    .slice(0, 5);

  if (allMatches.length > 0) {
    listEl.style.display = "flex";
    allMatches.forEach((match) => {
      const item = document.createElement("div");
      item.className = "suggestion-item";
      item.innerText = match;
      item.onclick = (e) => {
        e.stopPropagation();
        document.getElementById("search").value = match;
        listEl.style.display = "none";
        handleSearch(match);
      };
      listEl.appendChild(item);
    });
  } else {
    listEl.style.display = "none";
  }
  handleSearch(word);
}

function handleSearch(word) {
  let query = word.toLowerCase().trim();
  document
    .querySelectorAll(".cell")
    .forEach((c) => c.classList.remove("found"));
  if (!query) return;

  const originalName = ALIAS_MAP[query] || query;

  Object.keys(inventory).forEach((key) => {
    const itemName = inventory[key].toLowerCase();
    // 실제 저장된 이름에 검색어(또는 변환된 원래이름)가 포함되어 있는지 확인
    if (itemName.includes(query) || itemName.includes(originalName)) {
      const posId = key.split("-").slice(0, -1).join("-");
      const cell = document.getElementById(`cell-${posId}`);
      if (cell) cell.classList.add("found");
    }
  });
}

function onModalInput(inputEl) {
  const word = inputEl.value.trim().toLowerCase();
  const listEl = document.getElementById("modalSuggestionList");
  listEl.innerHTML = "";
  if (!word) {
    listEl.style.display = "none";
    return;
  }
  inputEl.parentNode.appendChild(listEl);
  const uniqueItems = [...new Set(Object.values(inventory))];
  const matches = uniqueItems
    .filter((item) => item.toLowerCase().includes(word))
    .slice(0, 5);
  if (matches.length > 0) {
    listEl.style.display = "flex";
    matches.forEach((match) => {
      const item = document.createElement("div");
      item.className = "suggestion-item";
      item.innerText = match;
      item.onclick = (e) => {
        e.stopPropagation();
        inputEl.value = match;
        listEl.style.display = "none";
      };
      listEl.appendChild(item);
    });
  } else {
    listEl.style.display = "none";
  }
}

function closeModal() {
  document.getElementById("modalSuggestionList").style.display = "none";
  document.getElementById("modalOverlay").style.display = "none";
}

function exportData() {
  const data = localStorage.getItem("warehouse_v5");
  if (!data || data === "{}") {
    alert("백업 데이터 없음");
    return;
  }
  navigator.clipboard.writeText(data).then(() => alert("데이터 복사 완료!"));
}

function importData() {
  const input = prompt("데이터 붙여넣기:");
  if (input) {
    try {
      JSON.parse(input);
      localStorage.setItem("warehouse_v5", input);
      location.reload();
    } catch (e) {
      alert("잘못된 형식");
    }
  }
}

initShelf(K_CONFIG);
initShelf(A_CONFIG);
initShelf(C_CONFIG);
initShelf(D_CONFIG);

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-container"))
    document.getElementById("suggestionList").style.display = "none";
  if (!e.target.closest(".modal-input-group"))
    document.getElementById("modalSuggestionList").style.display = "none";
});
