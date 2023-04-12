let cardData;

async function getData() {
  cardData = await Promise.all([
    $.get("/data/type0.json"),
    $.get("/data/type1.json"),
    $.get("/data/type2.json"),
    $.get("/data/type3.json"),
  ]);
}

function mapIdToName(type, typeId) {
  const record = cardData[type].records.find((record) => record.typeId === typeId);
  return record?.name || null;
}

function mapTypeAndIdToNames(record, keys) {
  const clone = { ...record };
  for (let key of keys) {
    clone[`${key}Name`] = clone[key].map((opt) => opt.map(([type, typeId]) => mapIdToName(type, typeId)));
  }
  return clone;
}

function innerRows(arr) {
  return arr.map((opt) => `<div>${opt.join(", ")}</div>`).join("");
}

function renderResourceTable(type) {
  const tableTemplate = $("#resource-table-template").html();
  const newTable = $(tableTemplate.replace("{{tableId}}", `table-${type}`));
  $("#main-content").append(newTable);
  const tBody = $(`#table-${type} tbody`);
  const rowTemplate = $("#resource-row-template").html();
  const data = cardData[type].records.map((record) => mapTypeAndIdToNames(record, ["cost", "capital"]));
  data.forEach((record) => {
    const renderedRow = rowTemplate.replace(/{{([^{}]*)}}/g, (match, key) => {
      const value = record[key.trim()];
      return Array.isArray(value) ? innerRows(value) : value;
    });
    tBody.append(renderedRow);
  });
}

function renderBuildingTable() {
  const tableTemplate = $("#building-table-template").html();
  const newTable = $(tableTemplate.replace("{{tableId}}", `table-building`));
  $("#main-content").append(newTable);
  const tBody = $(`#table-building tbody`);
  const rowTemplate = $("#building-row-template").html();
  const data = cardData[3].records
    .map((record) => mapTypeAndIdToNames(record, ["cost", "effectCost", "effectCapital"]))
    .map((record) => ({
      ...record,
      effectProductName:
        record.effectProduct && record.effectProduct.length
          ? mapIdToName(record.effectProduct[0], record.effectProduct[1])
          : "",
    }));
  data.forEach((record) => {
    const renderedRow = rowTemplate.replace(/{{([^{}]*)}}/g, (match, key) => {
      const value = record[key.trim()] ?? "";
      return Array.isArray(value) ? innerRows(value) : value;
    });
    tBody.append(renderedRow);
  });
}

$(document).ready(async function () {
  await getData();

  renderResourceTable(0);
  renderResourceTable(1);
  renderResourceTable(2);

  renderBuildingTable();
});
