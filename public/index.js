let cardData;

async function getData() {
  cardData = await Promise.all([
    $.get("/data/type0.json"),
    $.get("/data/type1.json"),
    $.get("/data/type2.json"),
    $.get("/data/type3.json"),
  ]);
}

function mapIdToName(cardType, typeId) {
  const record = cardData[cardType].records.find((record) => record.typeId === typeId);
  return record?.name || null;
}

function map1LayerTypeAndIdToNames(record, keys) {
  const clone = { ...record };
  for (let key of keys) {
    clone[`${key}Name`] = clone[key].map(([cardType, typeId]) => mapIdToName(cardType, typeId));
  }
  return clone;
}

function map2LayerTypeAndIdToNames(record, keys) {
  const clone = { ...record };
  for (let key of keys) {
    clone[`${key}Name`] = clone[key].map((opt) => opt.map(([cardType, typeId]) => mapIdToName(cardType, typeId)));
  }
  return clone;
}

function getDepth(arr) {
  if (!Array.isArray(arr)) return 0;

  let maxDepth = 1;
  for (let i = 0; i < arr.length; i++) {
    const depth = getDepth(arr[i]) + 1;
    if (depth > maxDepth) maxDepth = depth;
  }
  return maxDepth;
}

function innerRows(arr) {
  return arr.map((opt) => `<div>${opt.join(", ")}</div>`).join("");
}

function appendRows(data, rowTemplate, tbody) {
  data.forEach((record) => {
    const renderedRow = rowTemplate.replace(/{{([^{}]*)}}/g, (match, key) => {
      const value = record[key.trim()] ?? "";
      return Array.isArray(value) ? (getDepth(value) === 2 ? innerRows(value) : value.join(", ")) : value;
    });
    tbody.append(renderedRow);
  });
}

function renderResourceTable(cardType) {
  const tableTemplate = $("#resource-table-template").html();
  const newTable = $(tableTemplate.replace("{{tableId}}", `table-${cardType}`));
  $("#main-content").append(newTable);
  const tBody = $(`#table-${cardType} tbody`);
  const rowTemplate = $("#resource-row-template").html();
  let data = cardData[cardType].records
    .map((record) => map2LayerTypeAndIdToNames(record, ["cost"]))
    .map((record) => map1LayerTypeAndIdToNames(record, ["capital"]));
  appendRows(data, rowTemplate, tBody);
}

function renderBuildingTable() {
  const tableTemplate = $("#building-table-template").html();
  const newTable = $(tableTemplate.replace("{{tableId}}", `table-building`));
  $("#main-content").append(newTable);
  const tBody = $(`#table-building tbody`);
  const rowTemplate = $("#building-row-template").html();
  const data = cardData[3].records
    .map((record) => map2LayerTypeAndIdToNames(record, ["cost", "effectCost"]))
    .map((record) => map1LayerTypeAndIdToNames(record, ["effectCapital"]))
    .map((record) => ({
      ...record,
      effectProductName: record.effectProduct?.length
        ? mapIdToName(record.effectProduct[0], record.effectProduct[1])
        : "",
    }));
  appendRows(data, rowTemplate, tBody);
}

$(document).ready(async function () {
  await getData();

  renderResourceTable(0);
  renderResourceTable(1);
  renderResourceTable(2);

  renderBuildingTable();
});
